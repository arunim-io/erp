{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";

    systems.url = "github:nix-systems/default";

    flake-root.url = "github:srid/flake-root";

    parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };

    pyproject-nix = {
      url = "github:pyproject-nix/pyproject.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    uv2nix = {
      url = "github:pyproject-nix/uv2nix";
      inputs = {
        pyproject-nix.follows = "pyproject-nix";
        nixpkgs.follows = "nixpkgs";
      };
    };

    pyproject-build-systems = {
      url = "github:pyproject-nix/build-system-pkgs";
      inputs = {
        pyproject-nix.follows = "pyproject-nix";
        uv2nix.follows = "uv2nix";
        nixpkgs.follows = "nixpkgs";
      };
    };
  };

  outputs =
    inputs@{
      parts,
      systems,
      flake-root,
      uv2nix,
      pyproject-nix,
      pyproject-build-systems,
      ...
    }:
    parts.lib.mkFlake { inherit inputs; } {
      imports = [ flake-root.flakeModule ];

      systems = import systems;

      perSystem =
        { pkgs, ... }:
        let
          workspace = uv2nix.lib.workspace.loadWorkspace { workspaceRoot = ./.; };
          overlay = workspace.mkPyprojectOverlay { sourcePreference = "wheel"; };
          python =
            (pkgs.callPackage pyproject-nix.build.packages { python = pkgs.python313; }).overrideScope
              (
                pkgs.lib.composeManyExtensions [
                  pyproject-build-systems.overlays.default
                  overlay
                ]
              );
          mkVenv = python: deps: python.mkVirtualEnv "erp-venv" deps;
        in
        {
          flake-root.projectRootFile = "flake.nix";

          packages.default = mkVenv python workspace.deps.default;

          devShells.default =
            let
              editableOverlay = workspace.mkEditablePyprojectOverlay { root = "$FLAKE_ROOT"; };
              editablePython = python.overrideScope editableOverlay;
              venv = mkVenv editablePython workspace.deps.all;
            in
            pkgs.mkShell {
              packages = with pkgs; [
                uv
                venv
              ];

              shellHook = ''
                unset PYTHONPATH
                export UV_PYTHON_DOWNLOADS=never
                export UV_NO_SYNC=1
              '';
            };
        };
    };
}

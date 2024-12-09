{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";

    systems.url = "github:nix-systems/default";

    parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
  };

  outputs =
    inputs@{
      parts,
      systems,
      ...
    }:
    parts.lib.mkFlake { inherit inputs; } {
      systems = import systems;

      perSystem =
        { pkgs, config, ... }:
        {
          devShells = {
            default = pkgs.mkShell {
              packages = with pkgs; [ just ];
            };

            api = pkgs.mkShell {
              inputsFrom = [ config.devShells.default ];
              packages = with pkgs; [
                python313
                uv
                ruff
                taplo
                mypy
              ];

              UV_PYTHON_PREFERENCE = "only-system";
            };
          };
        };
    };
}

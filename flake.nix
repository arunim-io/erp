{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/default";
    flake-root.url = "github:srid/flake-root";
    parts = {
      url = "github:hercules-ci/flake-parts";
      inputs.nixpkgs-lib.follows = "nixpkgs";
    };
  };

  outputs =
    inputs@{
      parts,
      systems,
      flake-root,
      ...
    }:
    parts.lib.mkFlake { inherit inputs; } {
      imports = [ flake-root.flakeModule ];

      systems = import systems;

      perSystem =
        { pkgs, ... }:
        {
          flake-root.projectRootFile = "flake.nix";

          devShells.default = pkgs.mkShell { };
        };
    };
}

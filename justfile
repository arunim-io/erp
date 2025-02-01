set windows-shell := ["pwsh", "-c"]

default:
    @just --choose

# clean cache
clean:
  rm -rf ./.venv/ ./**/__pycache__/ ./.*_cache/

# run django commmands
run *args:
  uv run manage.py {{ args }}

# run the dev server
dev:
  #!/usr/bin/env -S parallel --shebang --ungroup --jobs {{ num_cpus() }}
  just run runserver
  bun dev

# install packages
install:
  uv sync
  bun install

# update packages
update:
  uv sync -U
  bun update

# check for errors
check: lint
  -just run check

# format code
fmt:
  uv run ruff format
  uv run taplo format
  bun fmt

# lint code
lint:
  -uv run ruff check
  -uv run taplo lint
  -bun lint

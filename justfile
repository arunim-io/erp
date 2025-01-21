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
  just run runserver

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

# lint code
lint:
  -uv run ruff check
  -uv run taplo lint

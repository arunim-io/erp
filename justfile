exe := 'uv run manage.py'

default:
    @just --choose

# run django commmands
run *args:
    {{ exe }} {{ args }}

# run the dev server
dev:
    {{ exe }} runserver

# install packages
install:
    uv sync

# update packages
update:
    uv sync -U

# check for errors
check: lint
    -{{ exe }} check

# format code
fmt:
    uv run ruff format
    uv run taplo format

# lint code
lint:
    -uv run ruff check
    -uv run taplo lint

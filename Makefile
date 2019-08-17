install:
	pip install -r requirements.txt

install-dev: install
	pip install -e ".[dev]"
	githooks

prettify:
	black -t py36 app tests config

black:
	black -t py36 --check app tests config

lint:
	flake8 app tests config

test:
	pytest -sv tests

coverage:
	coverage run -m pytest tests --junitxml=build/test.xml -v
	coverage report
	coverage xml -i -o build/coverage.xml

run:
	python app/main.py

freeze:
	CUSTOM_COMPILE_COMMAND="make freeze" pip-compile --no-index --output-file requirements.txt setup.py

freeze-upgrade:
	CUSTOM_COMPILE_COMMAND="make freeze" pip-compile --no-index --upgrade --output-file requirements.txt setup.py

.PHONY: install install-dev prettify balck lint test coverage run freeze freeze-upgrade

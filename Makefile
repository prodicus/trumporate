clean-pyc: ## remove Python file artifacts
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -fr {} +

export FLASK_APP:=trumporate/api/v1/app.py
run-test-env: clean-pyc
	flask run --host=0.0.0.0

run-prod-env: clean-pyc
	gunicorn --bind 0.0.0.0:5000 trumporate.wsgi:app

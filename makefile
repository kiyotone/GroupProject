backend:
	cd backend; \
		python -m venv .venv; \
		.venv/bin/pip install -r requirements.txt; \
		.venv/bin/python manage.py makemigrations; \
		.venv/bin/python manage.py makemigrationns posts; \
		.venv/bin/python manage.py migrate;




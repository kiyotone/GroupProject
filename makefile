backend-setup:
	cd backend; \
		python -m venv .venv; \
		.venv/bin/pip install -r requirements.txt; \
		.venv/bin/python manage.py makemigrations; \
		.venv/bin/python manage.py makemigrationns posts; \
		.venv/bin/python manage.py migrate;

backend-setup-linux:
	cd backend; \
		python3 -m venv .venv; \
		.venv/bin/pip install -r requirements.txt; \
		.venv/bin/python manage.py makemigrations; \
		.venv/bin/python manage.py makemigrationns posts; \
		.venv/bin/python manage.py migrate; \

backend:
	make backend-setup
	make backend-run

backend-linux:
	make backend-setup-linux
	make backend-run

backend-createsuperuser:
	cd backend; \
		.venv/bin/python manage.py createsuperuser;

backend-run:
	cd backend; \
		.venv/bin/python manage.py runserver;

frontend-setup:
	cd frontend; \
		npm install;

frontend-run:
	cd frontend; \
		npm run dev;

frontend:
	make frontend-setup
	make frontend-run

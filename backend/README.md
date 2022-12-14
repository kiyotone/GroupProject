# Backend

## Create and activate python virtual environment(Linux)

```bash
python3 -m venv .venv
source .venv/bin/activate
```

To deactivate virtual environment

```bash
deactivate
```

## Install requirements

```bash
pip install -r requirements.txt
```

## Make migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

## Run Development Server

```bash
python manage.py runserver
```

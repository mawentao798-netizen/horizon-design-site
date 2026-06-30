# Deployment Guide

## Local build check

```powershell
cd frontend
npm.cmd install
npm.cmd run build
cd ..
.\.venv\Scripts\python.exe manage.py collectstatic --noinput
.\.venv\Scripts\python.exe manage.py check --deploy
```

## Required production environment variables

Set these before running the site in production:

```text
DJANGO_DEBUG=False
DJANGO_SECRET_KEY=replace-with-a-long-random-secret
DJANGO_ALLOWED_HOSTS=your-domain.com,your-server-ip
DJANGO_CSRF_TRUSTED_ORIGINS=https://your-domain.com
DJANGO_SECURE_SSL=True
DJANGO_SECURE_SSL_REDIRECT=True
DJANGO_HSTS_SECONDS=31536000
```

If you are testing with HTTP or a private LAN IP, keep `DJANGO_SECURE_SSL=False`.

## Linux server example

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cd frontend
npm install
npm run build
cd ..
python manage.py migrate
python manage.py collectstatic --noinput
gunicorn horizon_site.wsgi:application --bind 127.0.0.1:8000
```

Use Nginx as a reverse proxy to `127.0.0.1:8000`, then configure HTTPS.

## Platform deployment

The repo includes:

- `requirements.txt` for Python dependencies
- `Procfile` for platforms that support process files
- `runtime.txt` for Python version selection
- `.env.example` for required environment variables

Most platforms still need a separate frontend build command before Django starts:

```bash
cd frontend && npm install && npm run build && cd ..
```

## Windows test run

```powershell
.\.venv\Scripts\python.exe manage.py migrate
.\.venv\Scripts\python.exe manage.py collectstatic --noinput
$env:DJANGO_DEBUG='False'
$env:DJANGO_ALLOWED_HOSTS='127.0.0.1,localhost'
.\.venv\Scripts\python.exe manage.py runserver 127.0.0.1:8000
```

`runserver` is only for testing. Do not use it as a public production server.

## Known deploy-check warning

`django-simpleui` removes `django.middleware.clickjacking.XFrameOptionsMiddleware`
at runtime for admin UI compatibility. If you need strict frame protection on a
public site, test the admin UI before forcing that middleware back in.

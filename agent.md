# Agent Notes

## Project Overview

This project is a Django + Vue company website scaffold.

- Backend: Django 6.0.6
- Admin UI: django-simpleui 2026.1.13
- Frontend: Vue 3 + Vite
- Database: SQLite, `db.sqlite3`
- Python virtual environment: `.venv`

The Django admin remains available at `/admin/`. The public homepage `/` is served by Django but rendered from the Vue production build in `frontend/dist`.

## Important Paths

- Django project settings: `horizon_site/settings.py`
- Django URL routing: `horizon_site/urls.py`
- Django frontend view: `main/views.py`
- Vue app source: `frontend/src/App.vue`
- Vue navigation component: `frontend/src/components/PillNav.vue`
- Vue background component: `frontend/src/components/LiquidChrome.vue`
- Vue text animation component: `frontend/src/components/ScrollFloat.vue`
- Vue global styles: `frontend/src/style.css`
- Vue project data: `frontend/src/data/projects.js`
- Optimized public case assets: `frontend/public/case-assets`
- Vue build output: `frontend/dist`

## Local Commands

Run Django commands from the project root:

```powershell
.\.venv\Scripts\python.exe manage.py check
.\.venv\Scripts\python.exe manage.py migrate
.\.venv\Scripts\python.exe manage.py runserver 127.0.0.1:8000
```

If activating the virtual environment in PowerShell is blocked by execution policy, use:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
. .\.venv\Scripts\Activate.ps1
```

Run Vue commands from `frontend`:

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run build
```

After changing Vue source files, run `npm.cmd run build` in `frontend` so Django can serve the updated frontend at `/`.

## Routing Model

- `/` renders `frontend/dist/index.html` through `main.views.frontend`.
- `/admin/` uses Django admin with SimpleUI.
- Vue static assets are built under `frontend/dist/assets`.
- Vite is configured with `base: '/static/'`, and Django has `STATICFILES_DIRS = [BASE_DIR / 'frontend' / 'dist']`.

## Admin Account

Development superuser:

- Username: `dipingxian`
- Password: `dipingxian`
- Email: `1871242312@qq.com`
- Nickname: stored in Django default user `first_name` as `dipingxian`

This is a local development credential and should be changed before deployment.

## Language And Timezone

Django is configured for Chinese admin text and China timezone:

```python
LANGUAGE_CODE = 'zh-hans'
TIME_ZONE = 'Asia/Shanghai'
```

## Development Notes

- Keep Django admin and backend routes separate from Vue public frontend routes.
- Do not edit generated Vue files under `frontend/dist` directly. Edit `frontend/src` and rebuild.
- The public website uses Vue hash routes: `#/`, `#/cases`, `#/contact`, and `#/cases/<slug>`.
- Source project images came from `C:\Users\1\Desktop\公司网站所用资料`; optimized WebP copies are stored under `frontend/public/case-assets`.
- Header logo source is `C:\Users\1\Desktop\公司网站所用资料\logo.png`, copied to `frontend/public/case-assets/brand-logo.png` and referenced as `/static/case-assets/brand-logo.png`.
- Case data includes 25 projects, grouped by the original folders `商业`, `洗浴`, and `酒店`.
- Four projects with facade/entrance source folders have generated analysis images named `analysis.webp`.
- The site now uses a black base background with white text and a fixed `LiquidChrome` WebGL background from React Bits ported to Vue. The background layer is rendered below the content and uses `pointer-events: none`.
- The top navigation uses a Vue port of React Bits `PillNav`, with the logo on the left, pill-style links on desktop, and an animated mobile menu.
- The top navigation intentionally shows only `首页` and `设计案例`; `#/contact` and Django admin `/admin/` remain available by URL but are not shown as header pills.
- Case cards and carousel items use an IntersectionObserver-powered entrance animation: covers fade upward first, then text follows with a short delay.
- The Vue frontend depends on `ogl` for the LiquidChrome background component and `gsap` for the ScrollFloat text animation plus PillNav hover/mobile animations.
- React Bits `ScrollFloat` has been ported to Vue and applied to major headings including the homepage brand title, section/archive titles, case detail title, contact title, and not-found title.
- The homepage uses a black-and-white gooood-style structure: top horizontal case image carousel, company portrait plus full Chinese company introduction, then a 3-column case grid.
- The homepage carousel is an automatic looping strip using every project's cover image. The carousel and every case cover link to the matching hash-route detail page.
- Case card subtitles are English translations of the case names, not narrative Chinese descriptions.
- The main project archive also uses a 3-column case grid with category filters.
- Pressing `Esc` outside the homepage returns to the previous browser history entry.
- Hash route changes should not force `window.scrollTo`; browser back from a detail page should preserve the previous scroll position.
- All readable source images from `C:\Users\1\Desktop\公司网站所用资料\项目` are included in case data and optimized to WebP. Current count: 25 projects, 914 images.
- Case detail pages must stay normal vertical image streams in source order. Do not restore staggered/two-column alternating detail layouts or add the old simple text summary block.
- The contact page includes a static inquiry form for design needs, area, location, and contact info.
- Case covers and main case images should remain in color, not grayscale.
- Project copy is stored in `frontend/src/data/projects.js`; avoid reverting to one repeated caption set across every case.
- On this Windows setup, avoid writing fixed Chinese UI strings directly through shell heredocs. Prefer JS constants with Unicode escapes or verify UTF-8 after editing, otherwise text can degrade into `????`.
- Prefer `npm.cmd` on this Windows machine.
- Prefer running Python through `.\.venv\Scripts\python.exe` when automation does not need shell activation.
- Current Django development server is expected at `http://127.0.0.1:8000/`.

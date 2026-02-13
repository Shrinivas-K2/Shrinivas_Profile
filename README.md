# Shrinivas Portfolio

Personal portfolio website built with React.

## Features
- Home, Education, Projects, Certificates, Blog, Contact pages
- Contact inquiry form with backend mail delivery
- Responsive layout

## Tech Stack
- React (Create React App)
- React Router
- Express + Nodemailer (contact API)

## Run Frontend
```bash
npm install
npm start
```

## Run Contact API
From project root (`my-portfolio`), in another terminal:

```bash
set MAIL_USER=your_gmail@gmail.com
set MAIL_PASS=your_gmail_app_password
set MAIL_TO=shrinivaskshreeni@gmail.com
node src/server.js
```

Notes:
- `MAIL_TO` defaults to `shrinivaskshreeni@gmail.com` if not set.
- Do not commit real passwords or app passwords to git.

## Build
```bash
npm run build
```

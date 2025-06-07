# PKU Food Tracker

This is a minimal Node.js/Express web application for demonstrating a phenylalanine tracking tool. It serves a basic UI that fetches a list of sample foods with their phenylalanine content.

## Requirements
- Node.js 20+

## Install
```bash
npm install
```

## Run
```bash
npm start
```
The application runs on [http://localhost:3000](http://localhost:3000).

## Authentication
The app includes a simple login form available at `/login` with hard-coded
credentials (`user`/`pass`) for demonstration purposes.

## Add Foods
Visit `/add` to enter a new food and its phenylalanine amount. Newly added
items appear on the main page.

## File Structure
- `src/server.js` – Express server with a sample API endpoint.
- `src/public/` – Static front‑end files.

This project is intended as a starting point for building a more complete PKU management application.


# Simple CRM Project

This repository contains a minimal example of a CRM application with a backend (Node.js/Express) and a simple frontend (HTML/JS). It allows basic data storage, document uploads and color customization.

## Running the backend

1. Install dependencies (requires Node.js and npm):
   ```bash
   cd backend
   npm install
   npm start
   ```
   The server will run on `http://localhost:3001`.

## Running the frontend

Open `frontend/index.html` in your browser. You can customize the theme color, save a data entry and upload a document. Uploaded files are served from the backend's `uploads` folder.

## Notes

* The signature functionality is a placeholder. Integrate a digital signature library as needed.
* Remember to run `npm install` after cloning the project to fetch dependencies.

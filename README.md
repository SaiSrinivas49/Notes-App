# Student Notes CRUD Micro-App

## MERN Stack Lab Activity

A full-stack Student Notes CRUD application developed using the MERN stack as part of the Full-Stack Cloud Architectures lab activity.

The application allows users to create, vie, and delete notes through a React frontend, Express REST API and MongoDB database.

---

## Student Details

- **Name:** K Sai Srinivas
- **Student ID:** 2026201047
- **Course:** Software Systems Development
- **Lab Activity:** Lab Assignment 4

---

## GitHub Repository

**GitHub:** https://github.com/SaiSrinivas49/Notes-App

---

## Technologies Used

### Frontend
- React
- Vite
- Axios
- JavaScript
- HTML/CSS

### Backend
- Node.js
- Express.js
- Mongoose
- CORS

### Database
- MongoDB

### API Testing
- Postman

---

## Project Structure

```text
notes-app/
│
├── .gitignore
├── README.md
│
├── screenshots/
│   ├── ui-preview.png
│   └── delete-action.png
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Note.js
│   ├── routes/
│   │   └── noteRoutes.js
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
└── client/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    ├── package-lock.json
    └── src/
        ├── App.jsx
        ├── main.jsx
        └── index.css

## Setup Instructions

### Prerequisites

Requirements:

- Node.js
- npm
- MongoDB
- Postman

Verify Node.js and npm:

```bash
node --version
npm --version
```

### Step 1: Clone the Repository

```bash
git clone https://github.com/SaiSrinivas49/Notes-App
cd notes-app
```

### Step 2: Start MongoDB

Make sure the MongoDB service is running. The application uses:

> `mongodb://localhost:27017/notes_db`

On Windows, check the MongoDB service using:

```powershell
Get-Service MongoDB
```

If required, start it using:

```powershell
Start-Service MongoDB
```

### Step 3: Install Backend Dependencies

Open a terminal and navigate to the server directory:

```bash
cd server
npm install
```

### Step 4: Start the Backend Server

```bash
npm start
```

The backend server runs on:
> `http://localhost:5000`

**Expected output:**
```text
MongoDB connected
Server running on port 5000
```
*Keep this terminal running.*

### Step 5: Install Frontend Dependencies

Open a new terminal and navigate to the client directory:

```bash
cd notes-app/client
npm install
```

### Step 6: Start the Frontend

```bash
npm run dev
```

The Vite development server runs on:
> `http://localhost:5173`

### Step 7: Open the Application

Open the following URL in a web browser:
> `http://localhost:5173`

---

## Running the Application

Two terminals are required to run the full stack simultaneously.

### Terminal 1 — Backend
```bash
cd notes-app/server
npm install
npm start
```

### Terminal 2 — Frontend
```bash
cd notes-app/client
npm install
npm run dev
```

The application can then be accessed at:
> `http://localhost:5173`

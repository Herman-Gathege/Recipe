# Recipe Room - Full Stack Web Application

This project is a full-stack web application that allows users to register, log in, and manage their profile with authentication and session management. The backend is built using Flask (Python), while the frontend is developed using React.js.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Project](#running-the-project)
  - [Running Backend](#running-backend)
  - [Running Frontend](#running-frontend)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
- [Testing the API](#testing-the-api)
- [Contributing](#contributing)

## Project Overview

The application consists of two main parts:

1. **Frontend**: Developed using React.js, it provides a user-friendly interface for users to register, log in, and view their profile. The frontend connects to the backend API to perform operations.

2. **Backend**: Built using Flask, this handles the logic for user authentication, registration, login, and session management. The backend also communicates with the database to store user data and session information.

---

## Technologies Used

- **Frontend**: 
  - React.js
  - HTML/CSS
  - Bootstrap

- **Backend**: 
  - Python
  - Flask
  - Flask-Bcrypt (for password hashing)
  - Flask-Session (for session management)
  - SQLAlchemy (for database interaction)
  - Redis (for session storage)

- **Database**: 
  - SQLite (for local storage)
  - Redis (for session management)

---

## Backend Setup

1. **Install Python dependencies**:
   Make sure you have Python 3.8 or higher installed. Then, create a virtual environment and install the required packages:

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # For Linux or macOS
   venv\Scripts\activate     # For Windows
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Create the database: If you haven't already, create the necessary database tables by running the app:

bash
Copy code
python app.py
Start Redis (for session management): Make sure Redis is installed and running locally. If it's not, you can install it by following the Redis installation guide.

To start Redis, run:

bash
Copy code
redis-server
Frontend Setup
Install Node.js: Make sure you have Node.js installed. If not, install it from the official website.

Install React dependencies: Navigate to the client folder (frontend) and install the dependencies:

bash
Copy code
cd client
npm install
Running the Project
Running Backend
Start the Flask backend: In the backend directory, run the following command:

bash
Copy code
python app.py
The server should now be running at http://127.0.0.1:5000/.

Running Frontend
Start the React frontend: In the client directory, run the following command:

bash
Copy code
npm start
This will start the React development server at http://localhost:3000/.

API Endpoints
User Routes
POST /register:

Registers a new user with email, name, and password.
Request body:
json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
POST /login:

Logs in an existing user with email and password.
Request body:
json
Copy code
{
  "email": "john@example.com",
  "password": "password123"
}
POST /logout:

Logs out the user and clears the session.
GET /@me:

Returns the logged-in user's profile data (name and email). Requires authentication (user must be logged in).
Testing the API
You can test the backend using Postman or by sending requests using curl.

For example, to register a new user:

bash
Copy code
curl -X POST http://127.0.0.1:5000/register \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john@example.com", "password": "password123"}'
To log in:

bash
Copy code
curl -X POST http://127.0.0.1:5000/login \
-H "Content-Type: application/json" \
-d '{"email": "john@example.com", "password": "password123"}'
Contributing
We welcome contributions to this project. To contribute:

Fork the repository.
Create a new branch (git checkout -b my-new-branch).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to your branch (git push origin my-new-branch).
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copy code

---

### Breakdown:

- **Project Overview**: Explains what the project is about and the technologies used.
- **Technologies Used**: Lists the tech stack for both frontend and backend.
- **Backend Setup**: Describes how to set up and run the backend.
- **Frontend Setup**: Describes how to set up and run the frontend.
- **Running the Project**: Explains how to run both the backend and frontend.
- **API Endpoints**: Documents the API endpoints available in the backend.
- **Testing the API**: Shows how to test the backend using `curl` or Postman.
- **Contributing**: Provides steps for anyone interested in contributing to the project.

Let me know if you'd like to make any changes or additions!












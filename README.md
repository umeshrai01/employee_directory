# Employee Directory Project

This is a React-based Employee Directory project that uses Django for the backend and ESBuild for bundling the frontend. It features Material UI for styling and Axios for making HTTP requests. The project allows users to view and manage employee information in a user-friendly interface.

## Technologies Used

- **Frontend**:
  - **React**: JavaScript library for building user interfaces.
  - **Material UI**: React components that implement Google's Material Design.
  - **Axios**: Promise-based HTTP client for making requests to the backend API.
  - **ESBuild**: Fast bundler and minifier for JavaScript and TypeScript.
  
- **Backend**:
  - **Django**: Python-based web framework for building APIs and handling server-side logic.
  - **Django REST Framework**: Toolkit for building Web APIs with Django.

## Getting Started

### Prerequisites

To run the project locally, you'll need the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)
- **Python** (v3.6 or higher)
- **Django** (v4.2.17 or higher)

### Installation

#### Frontend Setup (React + Material UI)

1. Navigate to the `frontend` directory and install the necessary Node packages:

   ```bash
   cd frontend
   npm install

2.	To build the frontend using ESBuild:
   ```bash
   npm run build
  ```
This will generate a main.js file in the static directory, which will be served by Django.

### Backend Setup (Django + Django REST Framework)
1.	Set up your Python environment and install the required packages:
   ```bash
  pip install -r requirements.txt
```
2.	Make the necessary database migrations and create a superuser:
   ```bash
  python manage.py migrate
  python manage.py createsuperuser
  ```
3.	Run the Django development server:
   ```bash
  python manage.py runserver
  ```
The backend will be available at http://localhost:8000.

4.	Access the frontend at http://localhost:8000/static/frontend/ (or whichever path you have set in your Django settings).

##Packages Used

### Frontend Dependencies
	-	axios: Used to make HTTP requests to the Django API.
	-	@mui/material: Material UI components for building the user interface.
	-	react: The core React library.
	-	react-dom: DOM-specific methods for React.
	-	esbuild: Bundler and minifier for JavaScript.

### Backend Dependencies
	-	django: Web framework for building the backend.
	- djangorestframework: Toolkit to build REST APIs in Django.

# E-commerce Product Listing Application

## Overview

This project is a simple e-commerce product listing application that includes both a frontend built with Vue.js and a backend built with Node.js and Express. The application supports user authentication, product management (CRUD operations), and a responsive design for compatibility across different devices.

## Features

- **Frontend (Vue.js):**
    - Product listing page displaying product details.
    - Form to add new products (only for authenticated users).
    - Search bar to filter products by name.
    - Login form for user authentication.
    - Registration form to register
    - Responsive design using Tailwind.

- **Backend (Node.js + Express):**
    - API to manage products (Create, Read, Update, Delete).
    - API for user authentication (registration and login).
    - Middleware to protect routes (only authenticated users can add, update, or delete products).
    - Integration with MongoDB to store user and product information.

## Technologies Used

- **Frontend:**
    - Vue.js
    - Vue Router
    - Vuex
    - Axios
    - Tailwind

- **Backend:**
    - Node.js
    - Express
    - JWT (JSON Web Tokens)
    - Mongoose (MongoDB ODM)
    - bcryptjs (Password hashing)
    - body-parser

## Project Structure
```shell
frontend/
├── public/
└── src/
  ├── assets/
  ├── components/
  ├── plugins/
  ├── router/
  ├── store/
  ├── App.vue
  └── main.js

backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config.js
└── server.js
```
markdown
Copy code

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB (or MongoDB Atlas for cloud-based database)

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd frontend
Install dependencies:

sh
Copy code
npm install
Start the development server:

sh
Copy code
npm run serve
Backend Setup
Navigate to the backend directory:

sh
Copy code
cd backend
Install dependencies:

sh
Copy code
npm install
Create a config.js file in the backend directory with the following content:

js
Copy code
module.exports = {
secret: 'your_jwt_secret',
database: 'mongodb://localhost:27017/ecommerce',
};
Start the backend server:

sh
Copy code
node server.js
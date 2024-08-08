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
├── models/
├── routes/
└── server.js
```

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
  ```sh
  npm install
  ```
Start the development server:
  ```sh
  npm run serve
```

### Backend Setup
Navigate to the backend directory:
```shell
  cd backend
```
Install dependencies:
```shell
npm install
```
Update your .env file using the .env.examp
```shell
cp .env.example .env
```

Start the backend server:
```shell
npm run dev

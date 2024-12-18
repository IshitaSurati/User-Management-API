# User Management API

A simple **RESTful API** for user management built with **Node.js**, **Express**, **Mongoose**, and **JWT**.

## Features

- **Signup**: Create a new user account.
- **Login**: Authenticate users and generate JWT tokens.
- **Update User**: Edit user details by ID (protected).
- **Delete User**: Remove a user by ID (protected).

## Endpoints

### 1. **Signup**  
   - **POST /signup**  
   - Request Body: 
     ```json
     {
       "name": "John",
       "email": "john@example.com",
       "password": "123456"
     }
     ```

### 2. **Login**  
   - **POST /login**  
   - Request Body: 
     ```json
     {
       "email": "john@example.com",
       "password": "123456"
     }
     ```  
   - Response: 
     ```json
     {
       "token": "<JWT_TOKEN>"
     }
     ```

### 3. **Update User**  
   - **PATCH /update/:id**  
   - Requires JWT in Header: 
     ```
     Authorization: Bearer <JWT_TOKEN>
     ```
   - Request Body: 
     ```json
     {
       "name": "Jane Doe"
     }
     ```

### 4. **Delete User**  
   - **DELETE /delete/:id**  
   - Requires JWT in Header: 
     ```
     Authorization: Bearer <JWT_TOKEN>
     ```  

## Setup

1. Install dependencies:  
   ```bash
   npm install

2. Set up .env:
    ```bash
    env
    PORT=3000
    MONGO_URI=<your_mongo_connection_string>
    JWT_SECRET=<your_jwt_secret>

3. Start the server:

    ```bash
    npm start

### Tech Stack

- Node.js
- Express
- MongoDB (Mongoose)
- JWT for authentication



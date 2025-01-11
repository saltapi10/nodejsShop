# eShop Project

The **eShop Project** is a Node.js-based e-commerce web application that allows users to browse products, manage a shopping cart, and perform authentication. The application is built using the **Express.js** framework and integrates a **MongoDB** database for persistent data storage. This project provides a foundation for implementing scalable and robust online stores.

## Features

- **Product Management**:
  - Add, edit, and delete products (admin functionality).
  - Display product listings for customers.
- **User Authentication**:
  - User registration and login functionality.
  - Sessions managed using `express-session` and MongoDB.
- **Shopping Cart**:
  - Add products to the cart.
  - View and manage cart items.
- **Error Handling**:
  - Graceful handling of 404 errors.

## Tech Stack

- **Backend**:
  - Node.js: JavaScript runtime for server-side logic.
  - Express.js: Framework for building RESTful APIs and handling routes.
  - MongoDB: NoSQL database for storing user, product, and session data.
  - Mongoose: ODM (Object Data Modeling) library for MongoDB.
- **Frontend**:
  - EJS: Embedded JavaScript templates for rendering dynamic HTML views.
- **Middleware**:
  - Body-parser: Parses incoming request bodies.
  - Express-session: Manages user sessions.
  - Connect-mongodb-session: Stores sessions in MongoDB.
# E-Commerce Site

This is a full-stack E-Commerce site developed using React, Node.js, React Redux Toolkit, and Bootstrap. The project aims to provide a seamless shopping experience with a user-friendly interface and robust backend support.

## Features

- **Product Listing:** Browse a variety of products with detailed information.
- **Search and Filter:** Easily find products using search and filter functionalities.
- **Shopping Cart:** Add, remove, and update items in your cart.
- **User Authentication:** Secure user login and registration.
- **Order Management:** Place orders and view order history.
- **Admin Panel:** Manage products, categories, and orders through an admin dashboard.

## Tech Stack

- **Frontend:**
  - [React](https://reactjs.org/): For building the user interface.
  - [React Redux Toolkit](https://redux-toolkit.js.org/): For state management.
  - [Bootstrap](https://getbootstrap.com/): For responsive and modern UI design.

- **Backend:**
  - [Node.js](https://nodejs.org/): For server-side logic and API endpoints.

- **Database:**
  - [MongoDB](https://www.mongodb.com/): (If used, mention here) For storing user data, products, and orders.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-site.git
Navigate to the project directory:
bash
Copy code
cd ecommerce-site
Install the dependencies for both frontend and backend:
bash
Copy code
cd frontend
npm install
cd ../backend
npm install
Set up environment variables for the backend in a .env file (adjust the keys based on your configuration):
makefile
Copy code
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
Usage
Run the backend server:
bash
Copy code
cd backend
npm start
Run the frontend development server:
bash
Copy code
cd frontend
npm start
The application will be accessible at http://localhost:3000.

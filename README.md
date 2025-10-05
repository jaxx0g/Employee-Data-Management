# Employee-Data-Management
ASE fullstack challenge og verto
# Employee Data Management

A full-stack MERN application for managing employee records.  
Built as part of the ASE Fullstack Challenge for Verto.

## Features

- Add, edit, delete, and view employee details
- Search employees by name
- Responsive UI with React and Tailwind CSS
- RESTful API with Express and MongoDB
- Secure environment variables with `.env`
- Error handling and validation

## Tech Stack

- **Frontend:** React, Tailwind CSS, Redux Toolkit
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Other:** Axios, dotenv

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB Atlas account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaxx0g/Employee-Data-Management.git
   cd Employee-Data-Management
   ```

2. **Install dependencies**
   ```bash
   cd sever
   npm install
   cd ../client/my-project
   npm install
   ```

3. **Configure environment variables**
   - Create a `.env` file in `sever/` and add your MongoDB URI:
     ```
     MONGODB_URL=your_mongodb_connection_string
     ```

4. **Run the backend**
   ```bash
   cd sever
   npm run dev
   ```

5. **Run the frontend**
   ```bash
   cd ../client/my-project
   npm run dev
   ```

## Usage

- Open [http://localhost:3000](http://localhost:3000) for backend API.
- Open [http://localhost:5173](http://localhost:3001) for frontend (if using default React port).
- Use the UI to manage employee records.



## Why Me?

- Demonstrates strong understanding of MERN stack
- Implements clean code, modular structure, and best practices
- Handles CRUD operations, state management, and API integration
- Shows ability to work with authentication, error handling, and responsive design
-Search bar to search employee by Name
## License

This project is for demonstration and interview purposes.

---


# BPIT Placement Website

## Description
BPIT Placement Website is a web application designed for Bhagwan Parshuram Institute of Technology to streamline college placement activities. The platform provides a centralized system for students and companies to connect, replacing the need for third-party platforms. Built using the MERN stack (MongoDB, Express, React, Node.js), the application offers a modern, scalable solution with enhanced performance and user experience compared to traditional systems.

## Features
- Comprehensive user authentication system for students, companies, and administrators
- Interactive dashboards for all user types
- Real-time job posting and application tracking
- Admin panel for managing placements and users
- Responsive design optimized for all devices
- Animated UI elements for enhanced user experience

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- MongoDB Atlas account or local MongoDB instance

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/bpit-placement.git
    ```

2. Navigate to the project folder:

    ```bash
    cd bpit-placement
    ```

3. Install backend dependencies:

    ```bash
    cd backend
    npm install
    ```

4. Install frontend dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

5. Set up environment variables:
   - Create a `.env` file in the backend directory with required credentials
   - Refer to the Environment Variables section below for details

6. Run the development servers:
   - In one terminal (backend):
     ```bash
     cd backend
     npm start
     ```
   - In another terminal (frontend):
     ```bash
     cd frontend
     npm start
     ```

7. Open your browser and navigate to `http://localhost:3000` to access the application.

## Environment Variables
Backend `.env` file should contain:
```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAILJS_USER_ID=your_emailjs_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_SERVICE_ID=your_service_id

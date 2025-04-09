# BPIT Placement Website

## Description
This project is created for BPIT (Bhagwan Parshuram Institute of Technology) college placement students to streamline and manage placement activities. Currently, students rely on third-party platforms like POD for job-related updates and placement information. This platform aims to provide a more personalized and efficient way for students and companies to engage with the placement process.

The project is built using the MERN stack (MongoDB, Express, React, Node.js) to ensure scalability, flexibility, and a seamless user experience.

## Features
- User authentication and authorization
- Student and company profiles
- Placement job listings and application management
- Admin dashboard to manage placements
- Real-time notifications
- Contact form with EmailJS integration
- Attractive UI with smooth animations using Lottie and Framer Motion
- Responsive design for mobile and desktop devices

### Prerequisites
- Node.js and npm (Node Package Manager)
- MongoDB for database management
- React.js for frontend development

## Installation
To run this project locally, follow the steps below:

1. **Clone the repository**
    ```bash
    git clone <repository-url>
    cd bpit-placement
    ```

2. **Install server-side dependencies**
    Navigate to the backend folder and install the dependencies:
    ```bash
    cd backend
    npm install
    ```

3. **Install client-side dependencies**
    Navigate to the frontend folder and install the dependencies:
    ```bash
    cd frontend
    npm install
    ```

4. **Set up environment variables**
    Create a `.env` file in the backend directory with the following variables:
    ```ini
    MONGO_URI=<Your MongoDB URI>
    JWT_SECRET=<Your JWT Secret>
    EMAILJS_USER_ID=<Your EmailJS User ID>
    EMAILJS_TEMPLATE_ID=<Your EmailJS Template ID>
    EMAILJS_SERVICE_ID=<Your EmailJS Service ID>
    ```

5. **Run the application**
    - Start the backend server:
      ```bash
      cd backend
      npm start
      ```
    - Start the frontend application:
      ```bash
      cd frontend
      npm start
      ```
    Your application should now be running on [http://localhost:3000](http://localhost:3000).

## Technologies Used

### Frontend:
- React
- React Router
- Framer Motion (for animations)
- Lottie (for animations)
- Bootstrap (UI components)
- Axios (API requests)
- React Icons
- React Toastify (for notifications)

### Backend:
- Node.js
- Express.js
- MongoDB (for database)
- JWT (JSON Web Token for authentication)
- Bcrypt.js (for password hashing)
- Cookie Parser (for cookie handling)
- Zod (for validation)

## Deployment
The project is deployed on a cloud platform for easy access. You can view the live site once deployed.

## Credits
This project was created to improve the placement process for BPIT students and reduce reliance on third-party platforms. The MERN stack was chosen for its scalability and efficiency in building modern web applications. Special thanks to the open-source community for providing the tools and libraries used in this project.

## License
This project is open-source and available under the MIT License. See the LICENSE file for details.

## Contributing
Feel free to fork this project and submit issues or pull requests if you want to contribute.

why work flow diagram not show what error ?


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

## 🧰 Tech Stack

### 🖥️ Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-%23000000.svg?style=for-the-badge&logo=framer&logoColor=white)
![Lottie](https://img.shields.io/badge/Lottie-%23FF4F4F.svg?style=for-the-badge&logo=lottie&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-%235A29E4.svg?style=for-the-badge&logo=axios&logoColor=white)
![React Toastify](https://img.shields.io/badge/React_Toastify-%23FFCA28.svg?style=for-the-badge&logo=react&logoColor=black)
![React Icons](https://img.shields.io/badge/React_Icons-%23000000.svg?style=for-the-badge&logo=react&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-%23539E43.svg?style=for-the-badge&logo=font-awesome&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-%23000000.svg?style=for-the-badge&logo=lucide&logoColor=white)
![React CountUp](https://img.shields.io/badge/React_CountUp-%234B9E98.svg?style=for-the-badge&logo=react&logoColor=white)
![React Loading Skeleton](https://img.shields.io/badge/React_Loading_Skeleton-%23D3D3D3.svg?style=for-the-badge&logo=react&logoColor=black)
![React Responsive](https://img.shields.io/badge/React_Responsive-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)
![Recharts](https://img.shields.io/badge/Recharts-%230081CB.svg?style=for-the-badge&logo=recharts&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-%23D4A05A.svg?style=for-the-badge&logo=email&logoColor=white)
![TSParticles](https://img.shields.io/badge/TSParticles-%23000000.svg?style=for-the-badge&logo=tsParticles&logoColor=white)

### 🗃️ Backend
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-%23880000.svg?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-%23000000.svg?style=for-the-badge&logo=json-web-tokens&logoColor=white)
![bcrypt](https://img.shields.io/badge/bcrypt-%232E8B57.svg?style=for-the-badge&logo=security&logoColor=white)
![Cookie Parser](https://img.shields.io/badge/Cookie_Parser-%23000000.svg?style=for-the-badge&logo=node.js&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-%23ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black)
![Zod](https://img.shields.io/badge/Zod-%233068B7.svg?style=for-the-badge&logo=zod&logoColor=white)
![CORS](https://img.shields.io/badge/CORS-%23000000.svg?style=for-the-badge&logo=security&logoColor=white)

## Prerequisites
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

## Deployment
The project is deployed on Render and can be accessed at:

[BPIT Placement Live Site](https://bpit-careerhub.onrender.com)


## Credits
This project was created to improve the placement process for BPIT students and reduce reliance on third-party platforms. The MERN stack was chosen for its scalability and efficiency in building modern web applications. Special thanks to the open-source community for providing the tools and libraries used in this project.

## License
This project is open-source and available under the MIT License. See the LICENSE file for details.

## Contributing
Feel free to fork this project and submit issues or pull requests if you want to contribute.

## Project Workflow Diagram
```mermaid
graph TD
    %% Define styles for nodes and subgraphs
    classDef adminStyle fill:#ffeb99,stroke:#333,stroke-width:2px;
    classDef studentStyle fill:#99ccff,stroke:#333,stroke-width:2px;
    classDef nodeStyle fill:#f9f9f9,stroke:#333,stroke-width:2px,border-radius:5px;

    subgraph TNP_Admin
        A[🔒 TNP Admin Signup / Login] --> B[✅ Verify Admin Credentials]
        B -->|Valid| C[📊 Access Admin Page]
        C --> D[📝 Post Job / Internship Details]
        C --> E[🗑️ Delete Job Posts]
    end

    subgraph Students
        F[🔒 Signup / Login] --> G[❓ Ask Doubts on FAQ Page - Chatbot]
        F --> H[🏢 Go to Company Page]
        H --> I[📄 Fill Job Application Form]
    end

    %% Apply styles
    class TNP_Admin adminStyle;
    class Students studentStyle;
    class A,B,C,D,E,F,G,H,I nodeStyle;

# BPIT Placement Website

## Description
This project is created for BPIT (Bhagwan Parshuram Institute of Technology) college placement students to streamline and manage placement activities. Currently, students rely on third-party platforms like POD for job-related updates and placement information. This platform aims to provide a more personalized and efficient way for students and companies to engage with the placement process.

The project is built using the MERN stack (MongoDB, Express, React, Node.js) to ensure scalability, flexibility, and a seamless user experience.

## Project Workflow Diagram
```mermaid
graph TD
    %% Styling for dark mode with bright colors
    classDef adminNode fill:#FF6F61,stroke:#FF3B30,stroke-width:2px,color:#1E1E1E,rounded
    classDef studentNode fill:#4FC3F7,stroke:#0288D1,stroke-width:2px,color:#1E1E1E,rounded
    classDef publicNode fill:#81C784,stroke:#388E3C,stroke-width:2px,color:#1E1E1E,rounded
    classDef decisionNode fill:#FFD54F,stroke:#FFB300,stroke-width:2px,color:#1E1E1E,diamond

    %% Public Access Section
    subgraph Public_Pages
        direction TB
        P1(["🏠 Homepage"])
        P2(["📖 About"])
        P3(["📞 Contact"])
        P4(["📜 Privacy Policy"])
        P5(["📄 Terms & Conditions"])
    end

    %% Admin Section
    subgraph TNP_Admin
        direction TB
        A1(["👤 Admin Signup / Login"]):::adminNode
        B1{"🔐 Verify Admin Credentials"}:::decisionNode
        C1(["🛠️ Access Admin Page"]):::adminNode
        D1(["➕ Post Job / Internship Details"]):::adminNode
        E1(["🗑️ Delete Job Posts"]):::adminNode
    end

    %% Students Section
    subgraph Students
        direction TB
        F1{"🔑 Student Login / Signup?"}:::decisionNode
        G1(["🌐 Access Public Pages"]):::publicNode
        H1(["👥 Access Community & Company Pages"]):::studentNode
        I1(["📝 Fill Job Application Form"]):::studentNode
        J1(["❌ Cannot Access Admin Page"]):::studentNode
        K1(["💬 Ask Doubts on FAQ Page - Chatbot"]):::studentNode
        L1(["📨 Communicate in Community Page"]):::studentNode
    end

    %% Connections Public
    G1 -->|No| G1
    G1 -->|Yes| H1
    H1 --> I1
    H1 --> J1
    H1 --> K1
    H1 --> L1

    %% Admin Connections
    A1 --> B1
    B1 -->|Valid| C1
    C1 --> D1
    C1 --> E1
    C1 --> L1

    %% Public pages visible without login/signup
    P1 --- G1
    P2 --- G1
    P3 --- G1
    P4 --- G1
    P5 --- G1

```

## Features
- 🔒 **User Authentication & Authorization**: Secure login for students, admins, and companies.
- 👤 **Profiles**: Dedicated profiles for students and companies.
- 💼 **Job Listings & Applications**: Browse and apply for placement opportunities.
- 📊 **Admin Dashboard**: Manage job postings and placements with ease.
- 🔔 **Real-Time Notifications**: Stay updated with instant alerts.
- 📧 **Contact Form**: Integrated with EmailJS for seamless communication.
- 🎨 **Attractive UI**: Smooth animations using Lottie and Framer Motion.
- 📱 **Responsive Design**: Optimized for both mobile and desktop devices.

## 🧰 Tech Stack

<div align="center">

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

</div>

<div align="center">

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

</div>

<h2>Project Structure</h2>
<pre><code>
bpit-careerhub/
├── backend/                   # Express.js backend
│   ├── index.js               # Entry point
│   ├── controller/            # Route logic (company, user, message)
│   ├── model/                 # Mongoose schemas
│   ├── routes/                # API endpoints
│   ├── middleware/            # Auth middleware
│   └── jwt/                   # JWT token utils
│
├── client/                    # React frontend
│   ├── public/                # Static assets
│   └── src/
│       ├── Component/         # Reusable components
│       │   ├── Charts/        # Placement stats charts
│       │   ├── Header/        # Header, footer, scroll handling
│       │   ├── MainComponent/ # Pages (Home, Company, Admin, etc.)
│       │   └── ProgressBar/   # Scroll progress UI
│       ├── App.js             # Main app component
│       ├── index.js           # React entry point
│       └── firebase.js        # Firebase config
│
├── README.md
└── .gitignore


</code></pre>


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


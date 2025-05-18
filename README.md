# BPIT Placement Website

## Description
This project is created for BPIT (Bhagwan Parshuram Institute of Technology) college placement students to streamline and manage placement activities. Currently, students rely on third-party platforms like POD for job-related updates and placement information. This platform aims to provide a more personalized and efficient way for students and companies to engage with the placement process.

The project is built using the MERN stack (MongoDB, Express, React, Node.js) to ensure scalability, flexibility, and a seamless user experience.


## 🚀 Project Workflow Diagram
```mermaid
graph TD
    %% Define styles
    classDef adminNode fill:#ff8c00,stroke:#ffb347,stroke-width:3px,color:#1a1a1a,stroke-dasharray:4 2,round
    classDef studentNode fill:#00bfff,stroke:#87cefa,stroke-width:3px,color:#1a1a1a,stroke-dasharray:4 2,round
    classDef publicNode fill:#32cd32,stroke:#7cfc00,stroke-width:3px,color:#1a1a1a,stroke-dasharray:4 2,round
    classDef decisionNode fill:#ff4c4c,stroke:#ff6e6e,stroke-width:3px,color:#1a1a1a

    %% Shared Public Access
    subgraph Public["   🌐 Public Pages"]
        direction TB
        P1([Homepage, About,<br> Contact, Privacy Policy<br> Terms & Conditions,<br>FAQ Chatbot]):::publicNode
    end

    %% TNP Admin Flow
    subgraph TNP_Admin["👨‍💼 TNP Admin Flow"]
        direction TB
        A1([📝 TNP Admin Signup / Login]):::adminNode --> B1{🔐 Verify Admin Credentials}:::decisionNode
        B1 -->|✅ Admin| C1([📂 Access Admin Page]):::adminNode
        B1 -->|❌ Not Admin| A1

        C1 --> D1([📢 Post Job / Internship]):::adminNode
        C1 --> E1([🗑️ Delete Job Posts]):::adminNode

        A1 --> A2([🏢 Access Company & Community Pages]):::studentNode
        A2 --> A3([📝 Fill Job Application Form]):::studentNode
        A2 --> A4([💬 Community Chat]):::studentNode
    end

    %% Students Flow
    subgraph Students["🎓 Students Flow"]
        direction TB
        S1([🔓 Login / Signup]):::studentNode --> S2([🏢 Access Company & Community Pages]):::studentNode
        S2 --> S3([📝 Fill Job Application Form]):::studentNode
        S2 --> S4([💬 Community Chat]):::studentNode
        S2 -.-> S5([🚫 Cannot Access Admin Page]):::studentNode
    end

    %% Connect Public to both flows
    P1 --> A1
    P1 --> S1


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

<br>

<a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" /></a>
<a href="https://reactrouter.com/" target="_blank"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" /></a>
<a href="https://www.framer.com/motion/" target="_blank"><img src="https://img.shields.io/badge/Framer_Motion-%23000000.svg?style=for-the-badge&logo=framer&logoColor=white" /></a>
<a href="https://lottiefiles.com/" target="_blank"><img src="https://img.shields.io/badge/Lottie-%23FF4F4F.svg?style=for-the-badge&logo=lottie&logoColor=white" /></a>
<a href="https://getbootstrap.com/" target="_blank"><img src="https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white" /></a>
<a href="https://styled-components.com/" target="_blank"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" /></a>
<a href="https://axios-http.com/" target="_blank"><img src="https://img.shields.io/badge/Axios-%235A29E4.svg?style=for-the-badge&logo=axios&logoColor=white" /></a>
<a href="https://fkhadra.github.io/react-toastify/" target="_blank"><img src="https://img.shields.io/badge/React_Toastify-%23FFCA28.svg?style=for-the-badge&logo=react&logoColor=black" /></a>
<a href="https://react-icons.github.io/react-icons/" target="_blank"><img src="https://img.shields.io/badge/React_Icons-%23000000.svg?style=for-the-badge&logo=react&logoColor=white" /></a>
<a href="https://fontawesome.com/" target="_blank"><img src="https://img.shields.io/badge/Font_Awesome-%23539E43.svg?style=for-the-badge&logo=font-awesome&logoColor=white" /></a>
<a href="https://lucide.dev/" target="_blank"><img src="https://img.shields.io/badge/Lucide-%23000000.svg?style=for-the-badge&logo=lucide&logoColor=white" /></a>
<a href="https://github.com/dvtng/react-loading-skeleton" target="_blank"><img src="https://img.shields.io/badge/React_Loading_Skeleton-%23D3D3D3.svg?style=for-the-badge&logo=react&logoColor=black" /></a>
<a href="https://github.com/contra/react-responsive" target="_blank"><img src="https://img.shields.io/badge/React_Responsive-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black" /></a>
<a href="https://recharts.org/" target="_blank"><img src="https://img.shields.io/badge/Recharts-%230081CB.svg?style=for-the-badge&logo=recharts&logoColor=white" /></a>
<a href="https://www.emailjs.com/" target="_blank"><img src="https://img.shields.io/badge/EmailJS-%23D4A05A.svg?style=for-the-badge&logo=email&logoColor=white" /></a>
<a href="https://firebase.google.com/" target="_blank"><img src="https://img.shields.io/badge/Firebase-%23FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=black" /></a>
<a href="https://formspree.io/" target="_blank"><img src="https://img.shields.io/badge/FormFree-%23FF0000.svg?style=for-the-badge&logo=formspree&logoColor=white" /></a>
<a href="https://www.chatbase.co/" target="_blank"><img src="https://img.shields.io/badge/Chatbase-%23000000.svg?style=for-the-badge&logo=chatbot&logoColor=white" /></a>

---

### 🗃️ Backend

<br>

<a href="https://nodejs.org/" target="_blank"><img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" /></a>
<a href="https://expressjs.com/" target="_blank"><img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" /></a>
<a href="https://www.mongodb.com/" target="_blank"><img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" /></a>
<a href="https://mongoosejs.com/" target="_blank"><img src="https://img.shields.io/badge/Mongoose-%23880000.svg?style=for-the-badge&logo=mongoose&logoColor=white" /></a>
<a href="https://jwt.io/" target="_blank"><img src="https://img.shields.io/badge/JWT-%23000000.svg?style=for-the-badge&logo=json-web-tokens&logoColor=white" /></a>
<a href="https://www.npmjs.com/package/bcrypt" target="_blank"><img src="https://img.shields.io/badge/bcrypt-%232E8B57.svg?style=for-the-badge&logo=security&logoColor=white" /></a>
<a href="https://www.npmjs.com/package/cookie-parser" target="_blank"><img src="https://img.shields.io/badge/Cookie_Parser-%23000000.svg?style=for-the-badge&logo=node.js&logoColor=white" /></a>
<a href="https://www.npmjs.com/package/dotenv" target="_blank"><img src="https://img.shields.io/badge/dotenv-%23ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black" /></a>
<a href="https://zod.dev/" target="_blank"><img src="https://img.shields.io/badge/Zod-%233068B7.svg?style=for-the-badge&logo=zod&logoColor=white" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank"><img src="https://img.shields.io/badge/CORS-%23000000.svg?style=for-the-badge&logo=security&logoColor=white" /></a>
<a href="https://www.postman.com/" target="_blank"><img src="https://img.shields.io/badge/Postman-%23FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white" /></a>
<a href="https://firebase.google.com/" target="_blank"><img src="https://img.shields.io/badge/Firebase-%23FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=black" /></a>

---

### 🚀 Deployment & Hosting

<br>

<a href="https://git-scm.com/" target="_blank"><img src="https://img.shields.io/badge/Git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" /></a>
<a href="https://github.com/" target="_blank"><img src="https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" /></a>
<a href="https://render.com/" target="_blank"><img src="https://img.shields.io/badge/Render-%2346E3B7.svg?style=for-the-badge&logo=render&logoColor=black" /></a>

---

### 💬 Help & AI Tools

<br>

<a href="https://openai.com/chatgpt" target="_blank"><img src="https://img.shields.io/badge/ChatGPT-%2310A37F.svg?style=for-the-badge&logo=openai&logoColor=white" /></a>
<a href="https://grok.x.ai/" target="_blank"><img src="https://img.shields.io/badge/Grok-%231E3A8A.svg?style=for-the-badge&logo=tensorflow&logoColor=white" /></a>

</div>




<h2 style="font-size: 2rem; margin-bottom: 1rem;">📁 Project Structure</h2>

<pre style="background-color: #0f172a; color: #e2e8f0; padding: 1.5rem; border-radius: 0.5rem; font-family: 'Fira Code', monospace; font-size: 0.95rem; overflow-x: auto;">
bpit-careerhub/
├── 🖥️ backend/                # Express.js backend
│   ├── index.js              # Entry point
│   ├── controller/           # Route logic (company, user, message)
│   ├── model/                # Mongoose schemas
│   ├── routes/               # API endpoints
│   ├── middleware/           # Auth middleware
│   └── jwt/                  # JWT token utils
│
├── 💻 client/                 # React frontend
│   ├── public/               # Static assets
│   └── src/
│       ├── Component/        # Reusable components
│       │   ├── Charts/       # Placement stats charts
│       │   ├── Header/       # Header, footer, scroll handling
│       │   ├── MainComponent/# Pages (Home, Company, Admin, etc.)
│       │   └── ProgressBar/  # Scroll progress UI
│       ├── App.js            # Main app component
│       ├── index.js          # React entry point
│       └── firebase.js       # Firebase config
│
├── 📄 README.md
└── 📁 .gitignore
</pre>



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


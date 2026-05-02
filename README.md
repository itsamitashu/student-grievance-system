# 📌 Student Grievance Management System

A full-stack MERN application that allows students to register, log in, and manage grievances efficiently. The system supports grievance submission, tracking, updating, searching, and deletion with a clean UI and secure authentication.

---

## 🚀 Live Project Links

🔗 **Frontend (Live):**
https://student-grievance-frontend-zala.onrender.com

🔗 **Backend (API):**
https://student-grievance-system-3e3e.onrender.com

🔗 **GitHub Repository:**
https://github.com/yourusername/student-grievance-system

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Axios
* React Router DOM
* CSS (Custom Styling)

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose (ODM)
* JWT Authentication
* bcrypt (Password Hashing)

### Deployment

* Render (Frontend + Backend)
* GitHub (Version Control)

---

## ✨ Features

### 🔐 Authentication

* Student Registration
* Login with JWT
* Secure password hashing using bcrypt

### 📋 Grievance Management

* Add Grievance
* View All Grievances
* Update Status (Pending → Resolved)
* Delete Grievance
* Search by Title

### 🎨 UI Features

* Clean and responsive design
* Dashboard view
* User-friendly forms

---

## 📂 Project Structure

```
student-grievance-system/
│
├── backend/
│   ├── models/
│   │   ├── Student.js
│   │   └── Grievance.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── grievanceRoutes.js
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
```

---

## ⚙️ Installation & Setup (Local)

### 1️⃣ Clone Repository

```
git clone https://github.com/yourusername/student-grievance-system.git
cd student-grievance-system
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 📡 API Endpoints

### 🔐 Authentication

* POST `/api/register`
* POST `/api/login`

### 📋 Grievances

* POST `/api/grievances`
* GET `/api/grievances`
* GET `/api/grievances/:id`
* PUT `/api/grievances/:id`
* DELETE `/api/grievances/:id`
* GET `/api/grievances/search?title=xyz`

---

## 📸 Screenshots

* Login Page
* Register Page
* Dashboard
* Grievance Module
* Search & Update/Delete

---

## 📌 Future Enhancements

* Admin Panel
* Email Notifications
* Role-Based Access
* Analytics Dashboard

---

## 👨‍💻 Author

**Amit Kumar**
CSE AIML

---

## 📄 License

This project is for educational purposes.

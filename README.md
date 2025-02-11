# 🚀 Full Stack Blog & Project Management Platform

A **Next.js-based** full-stack application that allows users to **create, edit, delete, and manage blogs and projects** efficiently. This project follows modern development practices, including **API integration, authentication, dynamic routing, and server-side rendering (SSR).**

---

## 📌 Features

- ✅ **User Authentication** (Session Management with NextAuth.js)
- ✅ **Create, Edit, Delete Blogs & Projects**
- ✅ **Dynamic Routing for Single Blog & Project Pages**
- ✅ **Framer Motion Animations**
- ✅ **Image Upload with ImgBB**
- ✅ **Secure API Endpoints**
- ✅ **Optimized for Vercel Deployment**
- ✅ **Fully Responsive UI (Mobile, Tablet, Desktop)**
- ✅ **SEO-friendly Metadata Generation**

---

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 13+ (App Router)**
- **React.js**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion (Animations)**
- **Lucide React (Icons)**

### **Backend**
- **Node.js & Express.js**
- **MongoDB (Mongoose ORM)**
- **NextAuth.js (Authentication)**
- **RESTful API**

### **Deployment**
- **Vercel (Frontend)**
- **MongoDB Atlas (Database)**
- **Render / Railway (Backend API)**

---

## 🔧 Installation & Setup

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**
Create a `.env.local` file in the root directory and add the following:

```
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000
IMG_UPLOAD_API_KEY=your_imgbb_api_key

# Authentication
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://your_mongodb_connection

# Vercel Production API
NEXT_PUBLIC_VERCEL_API=https://your-vercel-deployed-backend.com
```

### 4️⃣ **Run the Development Server**
```sh
npm run dev
```

The frontend should now be running on **`http://localhost:3000`**.

### 5️⃣ **Run the Backend Server**
Navigate to the backend directory (if separate) and start the server:
```sh
npm run server
```
The API should now be available at **`http://localhost:5000/api`**.

---

## 📖 Usage Guide

### 📝 **Managing Blogs**
- **Create a new blog** using the `/blogs/create` page.
- **Edit/Delete blogs** from the dashboard.
- **View a single blog** by navigating to `/blogs/[id]`.

### 📂 **Managing Projects**
- **Create a new project** using `/projects/create`.
- **Edit/Delete projects** from the dashboard.
- **View a single project** at `/projects/[id]`.

---

## 🚀 Deployment

### **Frontend Deployment (Vercel)**
1. **Push your code to GitHub**
2. **Connect GitHub Repo to Vercel**
3. **Set Environment Variables in Vercel Dashboard**
4. **Deploy and get production URL**

### **Backend Deployment (Render / Railway)**
1. **Deploy MongoDB Database on MongoDB Atlas**
2. **Deploy API to Render or Railway**
3. **Set up environment variables for the backend**

---

## 🤝 Contribution Guidelines

1. **Fork the repository**
2. **Create a new branch** (`feature/your-feature-name`)
3. **Commit changes** and push to your fork
4. **Submit a Pull Request (PR)**

---

## 📄 License
This project is open-source under the **MIT License**.

---

## 📬 Contact
For any questions or issues, feel free to reach out:

📧 Email: **your-email@example.com**
🌐 Portfolio: **[yourwebsite.com](https://yourwebsite.com)**
🐦 Twitter: **[@yourhandle](https://twitter.com/yourhandle)**


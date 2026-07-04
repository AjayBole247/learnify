# 🌍 Learnify

### Learn Languages Through Real Conversations

Learnify is a full-stack language-learning platform designed to connect people who want to learn and practice new languages through meaningful conversations.

Users can create personalized profiles, select their native and learning languages, discover other learners, build connections, and communicate in an interactive social environment.

> **Goal:** Make language learning more practical, social, and engaging through real human interaction.

---

## ✨ Features

* 🔐 **User Authentication** — Secure signup, login, and protected user flows
* 👤 **Personalized Onboarding** — Create a profile with a bio, location, profile picture, and language preferences
* 🌐 **Language Preferences** — Select your native language and the language you want to learn
* 🤝 **Discover Learners** — Find and connect with other language learners
* 💌 **Friend Requests** — Send, receive, and manage connection requests
* 💬 **Real-Time Communication** — Interact with connected language partners
* 🎥 **Video Conversations** — Practice languages through face-to-face conversations
* 🖼️ **Profile Customization** — Personalize user identity with profile details and avatars
* 📱 **Responsive Interface** — Designed for a smooth experience across different screen sizes
* ⚡ **Efficient Server-State Management** — Optimized data fetching, mutations, and cache synchronization

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* TanStack Query
* React Router
* React Hot Toast
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB
* REST APIs
* JWT Authentication

### Development Tools

* Git & GitHub
* Visual Studio Code
* Postman
* npm

---

## 🏗️ Application Architecture

```text
┌─────────────────────────────┐
│       React Frontend        │
│  Components • Pages • Hooks │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│       TanStack Query        │
│ Queries • Mutations • Cache │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│        REST API Layer       │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│   Node.js + Express Server  │
│ Routes • Controllers • Auth │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│          MongoDB            │
│     Users • Connections     │
└─────────────────────────────┘
```

---

## 🔄 User Journey

```text
Sign Up / Login
       ↓
Authentication Check
       ↓
Complete Personalized Onboarding
       ↓
Choose Native & Learning Languages
       ↓
Discover Other Language Learners
       ↓
Send & Manage Friend Requests
       ↓
Build Connections
       ↓
Practice Through Real Conversations
```

---

## 📁 Project Structure

```text
learnify/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── constants/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── lib/
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AjayBole247/learnify.git
cd learnify
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

### 4. Configure environment variables

Create the required `.env` files and add your own environment variables.

> Never commit API keys, database credentials, or other secrets to GitHub.

### 5. Start the backend

```bash
npm run dev
```

### 6. Start the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

---

## 🎯 Problem Learnify Solves

Traditional language learning often focuses heavily on theory but provides limited opportunities for real conversation.

Learnify bridges this gap by helping learners:

* discover people with similar language-learning goals
* build meaningful connections
* practice communication in a social environment
* improve confidence through real conversations

---

## 💡 Key Technical Highlights

* Built a complete authentication and personalized onboarding workflow
* Implemented reusable API and custom-hook patterns for cleaner frontend architecture
* Used TanStack Query for asynchronous server-state management and cache synchronization
* Designed persistent user profiles with native and learning language preferences
* Developed social discovery and connection workflows
* Structured the application using separate frontend and backend layers
* Created responsive and reusable UI components

---

## 🗺️ Roadmap

Learnify is actively being improved. Planned enhancements include:

* [ ] Smarter language-partner recommendations
* [ ] Enhanced real-time messaging experience
* [ ] Improved video conversation controls
* [ ] Better notification management
* [ ] Advanced profile customization
* [ ] Improved mobile responsiveness
* [ ] Additional accessibility improvements

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit your improvements
5. Open a pull request

---

## 👨‍💻 Author

**Ajay Bole**

B.Tech Information Technology student and full-stack developer passionate about building practical, user-focused web applications.

---

## ⭐ Support

If you find Learnify interesting, consider giving the repository a ⭐.

Your support motivates further development and improvements.

---

<p align="center">
  Built with ❤️ to make language learning more social, practical, and engaging.
</p>

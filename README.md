# **Noctuae_AMUHACKS4.0**

**A Smart Gas Monitoring System for household and industrial safety**, built using modern web technologies to provide real-time alerts and analytics on gas usage and potential hazards.

---

## 🚨 **Gazo Smart System**

A responsive web application designed to monitor and manage gas levels efficiently. It alerts users of potential gas leaks and allows remote valve control for enhanced safety. It’s ideal for **households, restaurants, and industries** where gas is frequently used.

---

## 🔧 **Features**

- **Real-time gas leak detection**
- **Smart emergency shutdown via valve control**
- **Data visualization and usage analytics**
- **User authentication** (Sign up, Login, Forgot Password)
- **Responsive UI with Tailwind CSS**
- **Secure access with route protection**

---

## 🧰 **Tech Stack**

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Routing:** React Router
- **Testing:** Jest and React Testing Library

---

## 🚀 **Installation**

To run this project locally, follow these steps:

### 1. **Clone the repository**
```bash
git clone https://github.com/sahaniaman/Noctuae_AMUHACKS4.0.git
cd Noctuae_AMUHACKS4.0
```

### 2. **Install dependencies**
```bash
npm install
```

### 3. **Start the development server**
```bash
npm start
```

---

## 🗂️ **Project Structure**

```
gazo-smart-system-main/
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── assets/
│       └── images/
│           ├── gazo-logo.png
│           ├── gazo-logo copy.png
│           └── icons/
│               ├── flame.png
│               └── valve.png
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── routes.js
│   ├── setupTests.js
│   ├── components/
│   │   ├── auth/
│   │   │   ├── ForgotPassword.js
│   │   │   ├── Login.js
│   │   │   └── SignUp.js
│   │   ├── common/
│   │   │   ├── Header.js
│   │   │   ├── LoadingSpinner.js
│   │   │   └── Navigation.js
│   │   ├── dashboard/
│   │   │   ├── AlertSystem.js
│   │   │   ├── BurnerControl.js
│   │   │   ├── GasMonitor.js
│   │   │   └── ValveControl.js
│   │   └── stats/
│   │       ├── ActivityLog.js
│   │       ├── TimeSelector.js
│   │       └── UsageChart.js
│   ├── contexts/
│   │   ├── AuthContext.js
│   │   └── GasSystemContext.js
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useGasSystem.js
│   ├── pages/
│   │   ├── DashboardPage.js
│   │   ├── LoginPage.js
│   │   ├── SignUpPage.js
│   │   └── StatsPage.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── firebase.js
│   │   └── gasMonitoringService.js
│   ├── styles/
│   │   ├── custom.css
│   │   └── tailwind.css
│   └── utils/
│       ├── alertUtils.js
│       └── timeUtils.js
```

---

## 👨‍💻 **Team Noctuae**

- **Kesar** – Frontend Developer
- **Aman** – Backend Developer
- **Rudraksh** – UI/UX Designer

---

## 🌟 **Future Enhancements**

- Integration with IoT sensors
- SMS and email alert system
- Admin dashboard for multi-user management

---

## 🏷️ **Hackathon Tags**

`#AMUHACKS4.0` `#CSSAMU` `#AMU`
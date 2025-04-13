# Gazo Smart System

Gazo Smart System is a web application designed to enhance kitchen safety by monitoring gas usage, detecting leaks, and providing real-time alerts. The system includes features like valve and burner control, gas leak simulation, and user authentication.

---

## Features

- **User Authentication**: Login and sign-up functionality with secure user management.
- **Dashboard**: Real-time monitoring of gas usage, valve and burner status, and gas leak detection.
- **Valve and Burner Control**: Toggle valve and burner states with timers to track usage duration.
- **Gas Leak Simulation**: Simulate gas leaks to test the system's alert mechanism.
- **Stats Page**: View detailed statistics about gas usage and safety events.

---

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Routing**: React Router
- **State Management**: Context API with custom hooks (`useAuth`)
- **Icons**: React Icons
- **Backend**: Firebase (optional for authentication)

---

## Folder Structure

The project is organized as follows:

```
gazo-smart-system/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # Context API for state management
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Application pages (Dashboard, Stats, etc.)
│   ├── services/       # API and Firebase service integrations
│   ├── styles/         # Global and component-specific styles
│   ├── App.js          # Main application component
│   ├── index.js        # Entry point
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation
```

---

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/gazo-smart-system.git
    cd gazo-smart-system
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

4. **Build for production**:
    ```bash
    npm run build
    ```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

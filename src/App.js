import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import StatsPage from './pages/StatsPage';
import SignUpPage from './pages/SignUpPage';
import './styles/tailwind.css';
import './styles/custom.css';

const App = () => {
  const [valveOn, setValveOn] = useState(false); // State for valve
  const [burnerOn, setBurnerOn] = useState(false); // State for burner
  const [valveTimer, setValveTimer] = useState('0 minutes'); // Timer for valve
  const [burnerTimer, setBurnerTimer] = useState('0 minutes'); // Timer for burner
  const [gasLeakDetected, setGasLeakDetected] = useState(false); // Gas leak state

  // Toggle the valve state and reset the timer if turned off
  const toggleValve = () => {
    setValveOn((prev) => {
      if (!prev) {
        console.log('Valve turned ON');
      } else {
        console.log('Valve turned OFF');
        setValveTimer('0 minutes'); // Reset timer when turned off
      }
      return !prev;
    });
  };

  // Toggle the burner state and reset the timer if turned off
  const toggleBurner = () => {
    setBurnerOn((prev) => {
      if (!prev) {
        console.log('Burner turned ON');
      } else {
        console.log('Burner turned OFF');
        setBurnerTimer('0 minutes'); // Reset timer when turned off
      }
      return !prev;
    });
  };

  // Simulate a gas leak
  const simulateGasLeak = () => {
    setGasLeakDetected(true);
    setTimeout(() => setGasLeakDetected(false), 5000); // Reset after 5 seconds
  };

  // Timer logic for the valve
  useEffect(() => {
    let interval;
    if (valveOn) {
      interval = setInterval(() => {
        setValveTimer((prev) => {
          const [minutes] = prev.split(' ');
          return `${parseInt(minutes) + 1} minutes`;
        });
      }, 60000); // Increment every minute
    } else {
      setValveTimer('0 minutes');
    }

    return () => clearInterval(interval);
  }, [valveOn]);

  // Timer logic for the burner
  useEffect(() => {
    let interval;
    if (burnerOn) {
      interval = setInterval(() => {
        setBurnerTimer((prev) => {
          const [minutes] = prev.split(' ');
          return `${parseInt(minutes) + 1} minutes`;
        });
      }, 60000); // Increment every minute
    } else {
      setBurnerTimer('0 minutes');
    }

    return () => clearInterval(interval);
  }, [burnerOn]);

  // Simple auth check - in a real app, you'd use a more robust solution
  const isAuthenticated = () => {
    return localStorage.getItem('user') !== null;
  };

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage
                gasUsed="10 minutes"
                valveOn={valveOn}
                burnerOn={burnerOn}
                valveTimer={valveTimer}
                burnerTimer={burnerTimer}
                gasLeakDetected={gasLeakDetected}
                toggleValve={toggleValve}
                toggleBurner={toggleBurner}
                simulateGasLeak={simulateGasLeak}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stats"
          element={
            <ProtectedRoute>
              <StatsPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
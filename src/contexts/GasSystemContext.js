import React, { createContext, useState, useEffect } from 'react';
import { ref, onValue, set, push } from 'firebase/database';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

// Create context
export const GasSystemContext = createContext();

// Provider component
export const GasSystemProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [gasValveOn, setGasValveOn] = useState(false);
  const [burnerOn, setBurnerOn] = useState(false);
  const [gasLeakDetected, setGasLeakDetected] = useState(false);
  const [gasUsedTime, setGasUsedTime] = useState(0);
  const [valveOnTime, setValveOnTime] = useState(0);
  const [burnerOnTime, setBurnerOnTime] = useState(0);
  const [usageLogs, setUsageLogs] = useState([]);
  const [gasUsageData, setGasUsageData] = useState([]);

  // Update Firebase with valve status
  const toggleGasValve = async () => {
    if (!currentUser) return;
    
    const newStatus = !gasValveOn;
    
    // Update local state
    setGasValveOn(newStatus);
    
    // If turning off valve, also turn off burner
    if (!newStatus) {
      setBurnerOn(false);
      
      // Update burner in Firebase
      await set(ref(database, `users/${currentUser.uid}/burnerOn`), false);
    }
    
    // Update valve status in Firebase
    await set(ref(database, `users/${currentUser.uid}/gasValveOn`), newStatus);
    
    // Log the event
    const logRef = ref(database, `users/${currentUser.uid}/logs`);
    await push(logRef, {
      type: 'valve',
      action: newStatus ? 'on' : 'off',
      time: new Date().toISOString()
    });
  };

  // Update Firebase with burner status
  const toggleBurner = async () => {
    if (!currentUser || !gasValveOn) return;
    
    const newStatus = !burnerOn;
    
    // Update local state
    setBurnerOn(newStatus);
    
    // Update burner status in Firebase
    await set(ref(database, `users/${currentUser.uid}/burnerOn`), newStatus);
    
    // Log the event
    const logRef = ref(database, `users/${currentUser.uid}/logs`);
    await push(logRef, {
      type: 'burner',
      action: newStatus ? 'on' : 'off',
      time: new Date().toISOString()
    });
  };

  // Simulate a gas leak detection
  const simulateGasLeak = async () => {
    if (!currentUser) return;
    
    const newStatus = !gasLeakDetected;
    
    // Update local state
    setGasLeakDetected(newStatus);
    
    // Update leak status in Firebase
    await set(ref(database, `users/${currentUser.uid}/gasLeakDetected`), newStatus);
    
    // Log the event if leak is detected
    if (newStatus) {
      const logRef = ref(database, `users/${currentUser.uid}/logs`);
      await push(logRef, {
        type: 'leak',
        action: 'detected',
        time: new Date().toISOString()
      });
    }
  };

  // Format time from seconds to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  // Effect to handle timers
  useEffect(() => {
    let interval;
    
    if (gasValveOn || burnerOn) {
      interval = setInterval(() => {
        if (gasValveOn) {
          setGasUsedTime(prev => prev + 1);
          setValveOnTime(prev => prev + 1);
        }
        if (burnerOn) {
          setBurnerOnTime(prev => prev + 1);
        }
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [gasValveOn, burnerOn]);

  // Effect to sync with Firebase on user change
  useEffect(() => {
    if (!currentUser) return;
    
    // Reference to user data
    const userRef = ref(database, `users/${currentUser.uid}`);
    
    // Listen for user data changes
    const unsubscribe = onValue(userRef, (snapshot) => {
      const data = snapshot.val() || {};
      
      // Update local state with Firebase data
      if (data.gasValveOn !== undefined) setGasValveOn(data.gasValveOn);
      if (data.burnerOn !== undefined) setBurnerOn(data.burnerOn);
      if (data.gasLeakDetected !== undefined) setGasLeakDetected(data.gasLeakDetected);
      if (data.gasUsedTime !== undefined) setGasUsedTime(data.gasUsedTime);
      if (data.valveOnTime !== undefined) setValveOnTime(data.valveOnTime);
      if (data.burnerOnTime !== undefined) setBurnerOnTime(data.burnerOnTime);
      
      // Process logs
      if (data.logs) {
        const logsArray = Object.entries(data.logs).map(([key, value]) => ({
          id: key,
          ...value,
          // Format time for display
          displayTime: new Date(value.time).toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })
        }));
        
        // Sort logs by time (newest first)
        logsArray.sort((a, b) => new Date(b.time) - new Date(a.time));
        
        setUsageLogs(logsArray);
      }
      
      // Process usage data
      if (data.usageData) {
        const usageArray = Object.values(data.usageData);
        setGasUsageData(usageArray);
      }
    });
    
    // Create initial user data if not exists
    set(userRef, {
      gasValveOn: false,
      burnerOn: false,
      gasLeakDetected: false,
      gasUsedTime: 0,
      valveOnTime: 0,
      burnerOnTime: 0,
      ...snapshot.val()
    });
    
    return unsubscribe;
  }, [currentUser]);

  // Periodically update time counters in Firebase
  useEffect(() => {
    if (!currentUser) return;
    
    const interval = setInterval(() => {
      set(ref(database, `users/${currentUser.uid}/gasUsedTime`), gasUsedTime);
      set(ref(database, `users/${currentUser.uid}/valveOnTime`), valveOnTime);
      set(ref(database, `users/${currentUser.uid}/burnerOnTime`), burnerOnTime);
    }, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, [currentUser, gasUsedTime, valveOnTime, burnerOnTime]);

  // Context value
  const value = {
    gasValveOn,
    burnerOn,
    gasLeakDetected,
    gasUsedTime,
    valveOnTime,
    burnerOnTime,
    usageLogs,
    gasUsageData,
    toggleGasValve,
    toggleBurner,
    simulateGasLeak,
    formatTime
  };

  return (
    <GasSystemContext.Provider value={value}>
      {children}
    </GasSystemContext.Provider>
  );
};
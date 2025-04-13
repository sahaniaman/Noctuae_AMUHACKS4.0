import { ref, onValue, set, push, get } from 'firebase/database';
import { database } from './firebase';

// Fetch current status of the gas system
export const fetchGasStatus = async (userId) => {
  try {
    const statusRef = ref(database, `users/${userId}/status`);
    const snapshot = await get(statusRef);
    
    if (snapshot.exists()) {
      return snapshot.val();
    }
    
    return {
      gasLeakDetected: false,
      valveOn: false,
      burnerOn: false,
      gasUsedTime: '00:00',
      valveOnTime: '00:00',
      burnerOnTime: '00:00'
    };
  } catch (error) {
    console.error('Error fetching gas status:', error);
    throw error;
  }
};

// Set up real-time listener for gas status
export const subscribeToGasStatus = (userId, callback) => {
  const statusRef = ref(database, `users/${userId}/status`);
  
  const unsubscribe = onValue(statusRef, (snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    }
  });
  
  return unsubscribe;
};

// Toggle valve status
export const toggleValve = async (userId, isOn) => {
  try {
    const valveRef = ref(database, `users/${userId}/status/valveOn`);
    await set(valveRef, isOn);
    
    // Add to activity log
    const now = new Date();
    const logRef = ref(database, `users/${userId}/logs`);
    await push(logRef, {
      type: isOn ? 'Gas Valve Turned ON' : 'Gas Valve Turned OFF',
      timestamp: now.toISOString(),
      formattedTime: now.toLocaleString()
    });
    
    return true;
  } catch (error) {
    console.error('Error toggling valve:', error);
    throw error;
  }
};

// Toggle burner status
export const toggleBurner = async (userId, isOn) => {
  try {
    const burnerRef = ref(database, `users/${userId}/status/burnerOn`);
    await set(burnerRef, isOn);
    
    // Add to activity log
    const now = new Date();
    const logRef = ref(database, `users/${userId}/logs`);
    await push(logRef, {
      type: isOn ? 'Burner Turned ON' : 'Burner Turned OFF',
      timestamp: now.toISOString(),
      formattedTime: now.toLocaleString()
    });
    
    return true;
  } catch (error) {
    console.error('Error toggling burner:', error);
    throw error;
  }
};

// Fetch usage data based on time period
export const fetchUsageData = async (userId, timeView) => {
  try {
    const usageRef = ref(database, `users/${userId}/usage/${timeView}`);
    const snapshot = await get(usageRef);
    
    if (snapshot.exists()) {
      return snapshot.val();
    }
    
    // Return dummy data if no real data exists
    return generateDummyUsageData(timeView);
  } catch (error) {
    console.error('Error fetching usage data:', error);
    throw error;
  }
};

// Fetch activity logs
export const fetchActivityLogs = async (userId) => {
  try {
    const logsRef = ref(database, `users/${userId}/logs`);
    const snapshot = await get(logsRef);
    
    if (snapshot.exists()) {
      const logs = snapshot.val();
      return Object.keys(logs).map(key => ({
        id: key,
        ...logs[key]
      })).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching activity logs:', error);
    throw error;
  }
};

// Helper function to generate dummy usage data
const generateDummyUsageData = (timeView) => {
  const data = [];
  
  switch (timeView) {
    case 'hourly':
      for (let i = 0; i < 24; i++) {
        data.push({
          time: `${i}:00`,
          usage: Math.floor(Math.random() * 100)
        });
      }
      break;
      
    case 'weekly':
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      days.forEach(day => {
        data.push({
          day,
          usage: Math.floor(Math.random() * 100)
        });
      });
      break;
      
    case 'monthly':
      for (let i = 1; i <= 30; i++) {
        data.push({
          day: i,
          usage: Math.floor(Math.random() * 100)
        });
      }
      break;
      
    default:
      break;
  }
  
  return data;
};
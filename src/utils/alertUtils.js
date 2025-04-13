/**
 * Map alert type to color scheme
 * @param {string} alertType - Type of alert
 * @returns {object} - Object containing color classes
 */
export const getAlertColorScheme = (alertType) => {
    switch (alertType) {
      case 'danger':
        return {
          bg: 'bg-red-500',
          text: 'text-white',
          border: 'border-red-700',
          hover: 'hover:bg-red-600'
        };
      case 'warning':
        return {
          bg: 'bg-yellow-500',
          text: 'text-white',
          border: 'border-yellow-700',
          hover: 'hover:bg-yellow-600'
        };
      case 'success':
        return {
          bg: 'bg-green-500',
          text: 'text-white',
          border: 'border-green-700',
          hover: 'hover:bg-green-600'
        };
      case 'info':
      default:
        return {
          bg: 'bg-blue-500',
          text: 'text-white',
          border: 'border-blue-700',
          hover: 'hover:bg-blue-600'
        };
    }
  };
  
  /**
   * Get alert icon based on alert type
   * @param {string} alertType - Type of alert
   * @returns {JSX.Element} - Icon component
   */
  export const getAlertIcon = (alertType) => {
    switch (alertType) {
      case 'danger':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'success':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'info':
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };
  
  /**
   * Check if gas system state requires an alert
   * @param {object} gasSystemState - Current gas system state
   * @returns {object|null} - Alert data if needed, null otherwise
   */
  export const checkForAlerts = (gasSystemState) => {
    if (gasSystemState.gasLeakDetected) {
      return {
        type: 'danger',
        title: 'Gas Leak Detected',
        message: 'Please ventilate the area immediately and check your gas connections. Do not use any electrical appliances or flames.'
      };
    }
    
    if (gasSystemState.valveOn && !gasSystemState.burnerOn) {
      return {
        type: 'warning',
        title: 'Gas Valve Open',
        message: 'The gas valve is ON but the burner is OFF. Please turn off the gas valve if you are not using it.'
      };
    }
    
    if (gasSystemState.burnerOn && parseInt(gasSystemState.burnerOnTime.split(':')[0]) >= 1) {
      return {
        type: 'info',
        title: 'Burner Running for Extended Period',
        message: 'Your burner has been running for over an hour. Make sure this is intentional.'
      };
    }
    
    return null;
  };
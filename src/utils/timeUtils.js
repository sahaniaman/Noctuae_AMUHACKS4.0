/**
 * Format seconds to MM:SS format
 * @param {number} seconds - Seconds to format
 * @returns {string} - Formatted time string (MM:SS)
 */
export const formatSecondsToMMSS = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  
  /**
   * Format seconds to HH:MM:SS format
   * @param {number} seconds - Seconds to format
   * @returns {string} - Formatted time string (HH:MM:SS)
   */
  export const formatSecondsToHHMMSS = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };
  
  /**
   * Format date to YYYY-MM-DD format
   * @param {Date} date - Date to format
   * @returns {string} - Formatted date string (YYYY-MM-DD)
   */
  export const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };
  
  /**
   * Get time period label based on timeView
   * @param {string} timeView - Time view ('hourly', 'weekly', 'monthly')
   * @returns {string} - Time period label
   */
  export const getTimePeriodLabel = (timeView) => {
    const now = new Date();
    
    switch (timeView) {
      case 'hourly':
        return `Today, ${now.toLocaleDateString()}`;
      case 'weekly':
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        return `${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()}`;
      case 'monthly':
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        return `${monthStart.toLocaleDateString()} - ${monthEnd.toLocaleDateString()}`;
      default:
        return '';
    }
  };
const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.getDate() + ' ' + date.toLocaleString('en-US', { month: 'long' });
  }

  export {
    formatDate
  }
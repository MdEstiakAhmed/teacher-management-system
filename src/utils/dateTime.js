let options = { 
    // weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    timeZone: 'Asia/Dhaka' 
};

export const formattedDate = (date) => {
    return new Intl.DateTimeFormat('en-GB', options).format(new Date(date))
} 
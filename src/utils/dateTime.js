let options = { 
    // weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    timeZone: 'Asia/Dhaka' 
};

export const formattedDate = (date) => {
    try {
        // console.log(date);
        return new Intl.DateTimeFormat('en-GB', options).format(new Date(date))
    } catch (error) {
        return "invalid date"
    }
} 
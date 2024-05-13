function dayNumber(numOfDays) { 
    if (numOfDays === 0) {
        return "Sunday";
    } else if (numOfDays === 1) {
        return "Monday";
    } else if (numOfDays === 2) {
        return "Tuesday";
    } else if (numOfDays === 3) {
        return "Wednesday";
    } else if (numOfDays === 4) {
        return "Thursday";
    } else if (numOfDays === 5) {
        return "Friday";
    } else if (numOfDays === 6) {
        return "Saturday";
    } else {
        return "Invalid day number";
    }
};

// Test the function outside of its body
console.log(dayNumber(5));  // Should print "Friday"
console.log(dayNumber(10)); // Should print "Invalid day number"
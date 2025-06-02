const words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];
const regex = /^[^Aa]{6,}$/;

const without_Aa = words.filter(word => regex.test(word));
console.log(without_Aa);
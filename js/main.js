
// Setting time
window.onload = function init() {
    setInterval(myTimer, 1000);
    function myTimer() {
      const d = new Date();
      document.getElementById("time").innerHTML = d.toLocaleTimeString();
    }
  };
  



const myHeading=document.querySelector(".visitor")
myHeading.textContent="Visitor";

/* 
const currentDate = new Date();


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const dayOfWeek = daysOfWeek[currentDate.getDay()];
const month = monthsOfYear[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const myTime=document.querySelector(".time")
myTime.textContent=`Today is ${dayOfWeek},  ${day}/${month}/${year}`
 */
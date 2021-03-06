/*
 * https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
 * Displays the current time, day of the week, and date.
 * Offers the option to print the page.
 * 
 */

const today = new Date();
    const year = today.getFullYear(); // returns four digit year
    const month = today.getMonth(); // returns 1 - 12
    const day = today.getDate(); // returns 1 - 31
    const day_of_week = today.getDay(); // returns 0 to 6 where Sunday is 0
    const daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let hour = today.getHours(); // uses military time, returns 0 - 23
    const minute = today.getMinutes(); // returns 0 - 59

  document.write(`It is ${hour}:${minute} on ${daylist[day_of_week]} ${month}-${day}-${year}.`)

function print_current_page() {
  window.print();
}

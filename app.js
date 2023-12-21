const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const content = document.querySelector(".container h2");

const futureDate = new Date(2024, 11, 26, 9, 23);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
function period() {
  let time = "";
  if (hour < 12) {
    time = "AM";
  } else if (hour == 12 && minute == 0) {
    time = "sharp";
  } else {
    time = "PM";
  }
  //   console.log(time);
  return time;
}
period();
content.textContent = `give away ends on ${day}, ${date} of ${month} of  ${year} ${hour}:${minute} ${period()} `;

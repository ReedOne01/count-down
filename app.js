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
const items = document.querySelectorAll(".countdown h3");
const deadline = document.querySelector(".countdown");

// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDay();

// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 12, 3, 0);
const futureDate = new Date(2029, 11, 20, 8, 30);
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
function remaining() {
  const futureDate1 = futureDate.getTime();
  const nowDate = new Date().getTime();
  const t = futureDate1 - nowDate;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  // function to make the value have two digits
  function format(item) {
    if (item < 10) {
      return "0" + item;
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  // to stop the countdown after elapsed time
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4> sorry, this giveaway has expired</h4>`;
  }
}
// countdown

let countdown = setInterval(remaining, 1000);

remaining();

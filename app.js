const btn = document.querySelector(".btn");

function duration() {
  const hotelName = document.getElementById("hotel-name");
  const roomType = document.getElementById("room-type");
  const fromDate = document.getElementById("from").value;
  const toDate = document.getElementById("to").value;
  const status = document.querySelector("#status");
  //from date
  let from = new Date(fromDate);
  let day = from.getDate();
  let month = from.getMonth();
  let year = from.getFullYear();
  //to  date
  let to = new Date(toDate);
  let dayDiff = to.getDate() - day;
  let monthDiff = to.getMonth() - month;
  let yearDiff = to.getFullYear() - year;
  
  if (yearDiff < 0) {
  } else if (monthDiff > 0) {
  } else if (monthDiff === 0 && dayDiff >= 0) {
  } else {
    yearDiff = yearDiff - 1;
    if (monthDiff <= 0)
      if (dayDiff > 0) {
        monthDiff = 12 + monthDiff;
      } else {
        monthDiff = 11 - monthDiff;
      }
  }

  if (dayDiff < 0) {
    dayDiff = 30 + dayDiff;
    monthDiff -= 1;
  }

  if (yearDiff < 0) {
    status.innerHTML = "Invalid Date";
  } else {
    status.innerHTML = "Booking Confirm";
    alert(
      "Your Reservation in " +
        hotelName.options[hotelName.selectedIndex].text +
        " for " +
        roomType.options[roomType.selectedIndex].text +
        " from " +
        from.toLocaleDateString() +
        " to " +
        to.toLocaleDateString() +
        " is confirmed"
    );
  }
}

btn.onclick = (event) => {
  event.preventDefault();
  duration();
};

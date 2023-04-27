const formatDate = (express) => {
  const someDate = new Date();
  let numberOfDaysToAdd;

  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  if (someDate.getHours() < 17) {
    if (express === "Express (24hrs)") {
      if (
        weekday[someDate.getDay()] === "Friday" ||
        weekday[someDate.getDay()] === "Saturday"
      ) {
        numberOfDaysToAdd = 3;
      } else if (weekday[someDate.getDay()] === "Sunday") {
        numberOfDaysToAdd = 2;
      } else {
        numberOfDaysToAdd = 1;
      }
    } else if (express === "Express (48hrs)") {
      if (
        weekday[someDate.getDay()] === "Thursday" ||
        weekday[someDate.getDay()] === "Friday" ||
        weekday[someDate.getDay()] === "Saturday"
      ) {
        numberOfDaysToAdd = 4;
      } else if (weekday[someDate.getDay()] === "Sunday") {
        numberOfDaysToAdd = 3;
      } else {
        numberOfDaysToAdd = 2;
      }
    } else {
      if (
        weekday[someDate.getDay()] === "Wednesday" ||
        weekday[someDate.getDay()] === "Thursday" ||
        weekday[someDate.getDay()] === "Friday" ||
        weekday[someDate.getDay()] === "Saturday"
      ) {
        numberOfDaysToAdd = 5;
      } else if (weekday[someDate.getDay()] === "Sunday") {
        numberOfDaysToAdd = 4;
      } else {
        numberOfDaysToAdd = 3;
      }
    }
  } else {
    if (express === "Express (24hrs)") {
      if (
        weekday[someDate.getDay()] === "Thursday" ||
        weekday[someDate.getDay()] === "Friday"
      ) {
        numberOfDaysToAdd = 4;
      } else if (weekday[someDate.getDay()] === "Saturday") {
        numberOfDaysToAdd = 3;
      } else {
        numberOfDaysToAdd = 2;
      }
    } else if (express === "Express (48hrs)") {
      if (
        weekday[someDate.getDay()] === "Wednesday" ||
        weekday[someDate.getDay()] === "Thursday" ||
        weekday[someDate.getDay()] === "Friday"
      ) {
        numberOfDaysToAdd = 5;
      } else if (weekday[someDate.getDay()] === "Saturday") {
        numberOfDaysToAdd = 4;
      } else {
        numberOfDaysToAdd = 3;
      }
    } else {
      if (
        weekday[someDate.getDay()] === "Tuesday" ||
        weekday[someDate.getDay()] === "Wednesday" ||
        weekday[someDate.getDay()] === "Thursday" ||
        weekday[someDate.getDay()] === "Friday"
      ) {
        numberOfDaysToAdd = 6;
      } else if (weekday[someDate.getDay()] === "Saturday") {
        numberOfDaysToAdd = 5;
      } else {
        numberOfDaysToAdd = 4;
      }
    }
  }

  someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

  const d = weekday[someDate.getDay()];
  const dd = someDate.getDate();
  const mm = someDate.getMonth() + 1;
  const y = someDate.getFullYear();

  return d + " " + dd + "/" + mm + "/" + y;
};

export { formatDate };

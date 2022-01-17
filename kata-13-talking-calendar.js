const talkingCalendar = function(date) {
  // Your code here
  // console.log(date);
  let year = [];
  let month = [];
  let day = [];
  for (let i = 0; i < date.length; i++) {
    // console.log(date[i]);
    if (i < 4) {
      year.push(date[i])
    } else if (4 < i && i < 7)  {
      month.push(date[i])
    } else if (7 < i)  {
      day.push(date[i])
    }
  }
  year = year.join('');
  month = month.join('');
  if (month === '01') {
    month = 'January'
  } else if (month === '02') {
    month = 'February'
  } else if (month === '03') {
    month = 'March'
  } else if (month === '04') {
    month = 'April'
  } else if (month === '05') {
    month = 'May'
  } else if (month === '06') {
    month = 'June'
  } else if (month === '07') {
    month = 'July'
  } else if (month === '08') {
    month = 'August'
  } else if (month === '09') {
    month = 'September'
  } else if (month === '10') {
    month = 'October'
  } else if (month === '11') {
    month = 'November'
  } else if (month === '12') {
    month = 'December'
  }
  day = day.join('');
  if (day === '01') {
    day = '1st'
  } else if (day === '02') {
    day = '2nd'
  } else if (day === '03') {
    day = '3rd'
  } else if (day === '04') {
    day = '4th'
  } else if (day === '05') {
    day = '5th'
  } else if (day === '06') {
    day = '6th'
  } else if (day === '07') {
    day = '7th'
  } else if (day === '08') {
    day = '8th'
  } else if (day === '09') {
    day = '9th'
  } else {
    day = day + 'th'
  }
  // console.log(year);
  // console.log(month);
  // console.log(day);
  return month + ' ' + day + ', ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

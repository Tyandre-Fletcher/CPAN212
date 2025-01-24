const { differenceInDays } = require("date-fns");
const _ = require('lodash');
let today = new Date()

const holidays = [
  {Name: 'Christmas', Date: '12-25-2025'},
  {Name: 'Thanksgiving', Date: '10-13-2025'},
  {Name: 'New Years', Date: '1-1-2026'}
]

holidays.forEach((e) => {
    console.log(differenceInDays(e.Date, today))
})

let randomHoliday = _.sample(holidays)
console.log(randomHoliday.Name, randomHoliday.Date)

let christmasIndex = _.findIndex(holidays, {Name: 'Thanksgiving'})
let thanksgivingIndex = _.findIndex(holidays, {Name: 'Christmas'})

console.log(christmasIndex)
console.log(thanksgivingIndex)
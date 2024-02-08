// Your code here
function createEmployeeRecord ([firstName, familyName, title, payPerHour]){
    let timeInEvents =[];
    let timeOutEvents = [];
    return {
        firstName, 
        familyName,
        title,
        payPerHour,
        timeInEvents,
        timeOutEvents,
    }
}
function createEmployeeRecords(arrays){
    let newArray = arrays.map(createEmployeeRecord)
    return newArray;
}
function createTimeInEvent(record, dateStamp){
 let [date, hour] = dateStamp.split(" ")
 record.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date,
 })
 return record
}
function createTimeOutEvent(record, dateStamp){
    let [date, hour] = dateStamp.split(" ")
    record.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date,
    })
    return record
}
function hoursWorkedOnDate(record, dateForm){
    let timeIn = record.timeInEvents.find(event => event.date === dateForm)
    let timeOut = record.timeOutEvents.find(event => event.date === dateForm)
    return (timeOut.hour - timeIn.hour)/100

}
function wagesEarnedOnDate(record, dateForm){
    const workHours = hoursWorkedOnDate(record, dateForm)
    return workHours * record.payPerHour;
}
function allWagesFor(record){
    const totalDayWorked = record.timeInEvents.map(event => event.date);
    return totalDayWorked.reduce((acc,date) => acc + wagesEarnedOnDate(record, date),0)
}
function calculatePayroll(arr){
    return arr.reduce((acc, record) => acc + allWagesFor(record),0 )
}
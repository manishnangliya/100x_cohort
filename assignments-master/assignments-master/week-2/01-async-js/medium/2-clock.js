// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


let nowData = new Date();
let hours = nowData.getHours();
let minutes = nowData.getMinutes();
let seconds = nowData.getSeconds();
// console.log(hours);
// console.log(minutes);
// console.log(seconds);
setInterval(() => {
    seconds++;
    if(seconds==60){
        minutes++;
        seconds=0;
    }
    if(minutes==60){
        hours++;
        minutes=0;
    }
    if(hours==24){
        hours=0;
    }
    newHour = hours%12;
    let PM = false;
    if(hours>=12){
        PM = true;
    }
    else
        PM = false;
    console.log(`${hours}:${minutes}:${seconds}`);
    console.log(`${newHour}:${minutes}:${seconds}:${PM?"PM":"AM"}`);
}, 1000);


//method 1
// let count=1;
// while(count<10){
//     let sum=0;
//     for(let i=0;i<1000000000;i++){
//         sum++;
//     }
//     console.log(count);
//     count++;
// }

//method 2
let count=1;
function timer(){
    setTimeout(() => {
        console.log(count);
        count++;
        timer();
    }, (1000));
}
timer();
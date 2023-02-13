/**
 * napišite javascript kod koji će u html element s id "date" upisati trenutni datum i vrijeme
 */
 const dateElement = document.querySelector('#date');
 const timeElement = document.querySelector('#time');

 function displayTime(){
    const currentTime = new Date();
    timeElement.innerHTML = `${currentTime.getHours()}h ${currentTime.getMinutes()}m ${currentTime.getSeconds()}s`;
}

function displayDate(){
    const currentTime = new Date();
    dateElement.innerHTML = `${currentTime}`;
}

displayTime();
displayDate();

console.log('Hello world!');
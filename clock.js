let name = document.querySelector('#myName')
name.innerHTML = prompt("Lütfen isminizi giriniz!")

setInterval(function showTime() {
    
    let date = new Date()
    let hour = date.getHours()
    if (hour < 10) {
        hour = `0${minute}`
    }

    let minute = date.getMinutes()
    if (minute < 10) {
        minute = `0${minute}`
    }

    let second = date.getSeconds()
    if (second < 10) {
        second = `0${second}`
    }

    let day = date.getDay()
    let dayDOM;

    switch (day) {
        case 1:
            dayDOM = "Pazartesi"
            break;

        case 2:
            dayDOM = "Salı"
            break;

        case 3:
            dayDOM = "Çarşamba"
            break;

        case 4:
            dayDOM = "Perşembe"
            break;

        case 5:
            dayDOM = "Cuma"
            break;

        case 6:
            dayDOM = "Cumartesi"
            break;

        case 7:
            dayDOM = "Pazar"
            break;
    }

    let timeArea = document.querySelector('#myClock')
    timeArea.innerHTML = `${hour}:${minute}:${second} ${dayDOM}`
}, 1000);  //codes will run every second.
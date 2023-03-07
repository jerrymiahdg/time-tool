const toolOption = document.querySelector('#tool-option')
const hour = document.querySelector('#hour')
let hourValue = {x: 0}
const minute = document.querySelector('#minute')
let minuteValue = {x: 0}
const second = document.querySelector('#second')
let secondValue = {x: 0}
let timer = true
const start = document.querySelector('#start')
const box = document.querySelector('.box')
const toolText = document.querySelector('.tool-text')
const time = document.querySelector('#time')
toolText.style.display = 'none'
toolOption.addEventListener('click', function() {
    box.classList.toggle('timer')
    toolOption.classList.toggle('timer-text')
    box.classList.toggle('stopwatch')
    toolOption.classList.toggle('stopwatch-text')
    if(toolOption.textContent == 'timer') {
        toolOption.textContent = 'stopwatch'
    } else {
        toolOption.textContent = 'timer'
    }
    if(timer) {
        timer = false
    } else {
        timer = true
    }
})

function adjustTime(element, value, maxTime) {
    value.x = value.x >= maxTime ? 0 : value.x + 1
    if(value.x < 10) {
        element.textContent = '0' + value.x
    } else {
        element.textContent = value.x
    }
}

hour.addEventListener('click', function() {
    adjustTime(hour, hourValue, 12)
})

minute.addEventListener('click', function() {
    adjustTime(minute, minuteValue, 59)
})

second.addEventListener('click', function() {
    adjustTime(second, secondValue, 59)
})

start.addEventListener('click', function() {
    if(timer) {
        toolText.style.display = 'block'
        let totalTime = hourValue * 3600 + minuteValue * 60 + secondValue
        let timerHourValue = hourValue
        let timerHourText = hour.textContent
        let timerMinuteValue = minuteValue
        let timerMinuteText = minute.textContent
        let timerSecondValue = secondValue
        let timerSecondText = second.textContent
        time.textContent = `${hour.textContent}:${minute.textContent}:${second.textContent}`
        while(totalTime) {
            for(let i = 0; i < timerSecondValue; i++) {
                setTimeout(function() {

                }, 1000)
                totalTime--
                if(timerSecondValue < 10) {
                    timerSecondText = '0' + timerSecondValue
                } else {
                    timerSecondText = timerSecondValue
                }
                time.textContent = `${timerHourText}:${timerMinuteText}:${timerSecondText}`
            }
        }
    }
})
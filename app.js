const h1 = document.querySelector('h1')

updateTime = () => {

    const timeNow = new Date()

    const hour = timeNow.getHours()
    const min = timeNow.getMinutes()
    const sec = timeNow.getSeconds()

    const time = `${hour} : ${min} : ${sec}`

    h1.innerText = time;

}

setInterval(updateTime, 1000)
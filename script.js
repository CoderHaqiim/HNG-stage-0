const time = document.querySelector('#time')

const date = new Date()

function buildTime (){
    let hour = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds().toString()

    const parseTime = (item) => {
       return item.toString().padStart(2,"0")
    }

    hour = parseTime(hour)
    minutes = parseTime(minutes)
    seconds = parseTime(seconds)

    return `${hour}:${minutes}:${seconds}`
}

time.textContent = buildTime()
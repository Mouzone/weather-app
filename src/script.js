import './style.css'

function getDate() {
    const date_element = document.getElementById("date")
    if (!date_element.value) {
        const today = new Date();
        const year = today.getFullYear()
        const month = String(today.getMonth() + 1).padStart(2, '0')
        const day = String(today.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    } else {
        return date_element.value
    }
}

function getLocation() {
    const city = document.getElementById("city").value
    const country = document.getElementById("country").value

    return `${city} ${country}`
}

async function queryAPI(location, date){
    const API_KEY = "F9FDDA2SDYSNXK4DPT8RRZYXM"
    const link = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=${API_KEY}`

    try {
        const response = await fetch(link)
        return response.json()
    } catch(error) {
        console.error(error)
    }
}

const form = document.querySelector("form")
form.addEventListener("submit", async event => {
    event.preventDefault()
    const date = getDate()
    const location = getLocation()

    const content = document.getElementById("content")
    const result = await queryAPI(location, date)
    console.log(result)
})

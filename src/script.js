import './style.css'
const icons = require.context('./icons', false, /\.svg$/);

function getDate() {
    const date_element = document.getElementById("date")
    return date_element.value
}

function getLocation() {
    const city = document.getElementById("city").value
    const country = document.getElementById("country").value

    return `${city} ${country}`
}

async function queryAPI(location, date){
    const API_KEY = "F9FDDA2SDYSNXK4DPT8RRZYXM"
    const link = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?unitGroup=us&key=${API_KEY}`

    try {
        const response = await fetch(link)
        return response.json()
    } catch(error) {
        console.error(error)
    }
}

function updateContent(data) {
    const location = document.getElementById("location")
    location.textContent = data['resolvedAddress']

    const local_time = document.getElementById("local-time")
    local_time.textContent = `Local Time: ${data['currentConditions']['datetime']}`

    const condition = document.getElementById("condition")
    condition.textContent = data['currentConditions']['conditions']

    const icon = document.getElementById("icon")
    icon.src = icons(`./${data['currentConditions']['icon']}.svg`)

    const humidity = document.getElementById("humidity")
    humidity.textContent = `Humidity: ${data['currentConditions']['humidity']}%`

    const uv_index = document.getElementById("uv-index")
    uv_index.textContent = `UV Index: ${data['currentConditions']['uvindex']}`

    const precip_prob = document.getElementById("precip-prob")
    precip_prob.textContent = `Precip %: ${data['currentConditions']['precipprob']}%`

    const precip_amt = document.getElementById("precip-amt")
    console.log(data['currentConditions']['precip'])
    precip_amt.textContent = `Precip Amt: ${data['currentConditions']['precip']}in`
}

const form = document.querySelector("form")
form.addEventListener("submit", async event => {
    event.preventDefault()
    const date = getDate()
    const location = getLocation()

    const data = await queryAPI(location, date)
    updateContent(data)
    form.reset()
    setDefaultDate()
})

function setDefaultDate() {
    document.getElementById('date').value = new Date().toISOString().split('T')[0]
}

// todo: on load set it to local location
setDefaultDate()

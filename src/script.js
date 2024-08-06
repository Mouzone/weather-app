import './style.css'

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
    const link = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date}?key=${API_KEY}`

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
    local_time.textContent = data['currentConditions']['datetime']

    const condition = document.getElementById("condition")
    condition.textContent = data['currentConditions']['conditions']

    //todo: retrieve proper icons and set icon element to it
    const icon = document.getElementById("icon")
    icon.src = `$./src/icons/${data['currentConditions']['icon']}.svg`

    const humidity = document.getElementById("humidity")
    humidity.textContent = data['currentConditions']['humidity']

    const uv_index = document.getElementById("uv-index")
    uv_index.textContent = data['currentConditions']['uvindex']

    const precip_prob = document.getElementById("precip-prob")
    precip_prob.textContent = data['currentConditions']['precipprob']

    const precip_amt = document.getElementById("precip-amt")
    precip_amt.textContent = data['currentConditions']['precip']
}

const form = document.querySelector("form")
form.addEventListener("submit", async event => {
    event.preventDefault()
    const date = getDate()
    const location = getLocation()

    const data = await queryAPI(location, date)
    updateContent(data)
    form.reset()
    // todo: reset form upon submission
})

function setDefaultDate() {
    document.getElementById('date').value = new Date().toISOString().split('T')[0]
}

setDefaultDate()

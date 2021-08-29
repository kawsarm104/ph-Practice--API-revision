// https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=80f22fbf4f67ee19e1724de77de3f58b
console.log("Iam connected dude")

const input = document.getElementById('input-value')
const loadData = async () => {
    const inputValue =  input.value
    console.log(inputValue)
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=80f22fbf4f67ee19e1724de77de3f58b`)
    const data = await res.json()
    displayWeather(data);
}

const displayWeather = (allWeather) => {
    allWeather.forEach(weather => {
        console.log(weather.name)
    });
}
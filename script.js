const button = document.getElementById('search-button');
button.style.backgroundColor = 'red';
button.style.color = 'white';
const input = document.getElementById('city-input');

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(cityName) {
    const promise = await fetch (
        `http://api.weatherapi.com/v1/current.json?key=e57a433d85ef460a990142448252601&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityName.innerText = `${result.location.name} , ${result.location.region} , ${result.location.country}`
})


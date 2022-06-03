
let weather = {

    appKey: "7058879baba695e86f9cd6b7974fce4e",

    getWeather: function (city) {

        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=7058879baba695e86f9cd6b7974fce4e&units=metric")
            .then((response) => response.json()).then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {

        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        const { humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?" + name + "' )";
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".desc").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind-speed").innerText = "Wind-speed: " + speed + "km/h";
    },

    search: function () {
        this.getWeather(document.querySelector(".search-bar").value);
    }

};

document.querySelector(".search-icon").addEventListener("click", () => {

    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", (event) => {

    if (event.key == "Enter") {
        weather.search();
    }
})

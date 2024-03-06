document.addEventListener("DOMContentLoaded", function () {
    const goToTop = document.querySelector(".go_to_top");
    window.addEventListener("scroll", checkHeight);

    function checkHeight() {
        if(window.screenY < 100) {
            goToTop.style.display = "flex";
        } 
        else {
            goToTop.style.display = "none";
        }
    }

    goToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    const form = document.getElementById("c-form");
    const name = document.getElementById("f-name");
    const email = document.getElementById("email");
    // const message = document.getElementById("message"); 

    function sendEmail() {
        const promptMessage = `Thank you, ${name.value}, for your email. I will reply to ${email.value} as soon as I can.`;
        const customPopup = document.getElementById("custom-popup");
        
        customPopup.innerHTML = promptMessage;
        customPopup.style.display = "block";

        setTimeout(() => {
            customPopup.style.display = "none";
        }, 5000);
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();    
        sendEmail();
    });

    function currentTime() {
        const date = new Date();
        let d = date.toJSON().slice(0, 11);
        const timeZone = "America/New_York";
        let formattedDate = date.toLocaleString("en-US", { timeZone });
        let hour = new Date(formattedDate).getHours();
        let currentDate = d + hour + ":00";
        
        return currentDate;
    }

    const temperatureContainer = document.querySelector(".temperature");
    const weatherButton = document.getElementById("weather-button");
    const cityName = "Glassboro";
    currentDateAndTime = currentTime();

    weatherButton.addEventListener("click", function() {
        try {
            fetch("https://api.open-meteo.com/v1/forecast?latitude=39.7029&longitude=-75.1118&hourly=temperature_2m")
            .then(response => response.json())
            .then(data => {
                currentHour = data["hourly"]["time"];
                let index = currentHour.indexOf(currentDateAndTime);
                temperatureValue = data["hourly"]["temperature_2m"][index];
                tempUnits = data["hourly_units"]["temperature_2m"];
                temperatureContainer.innerHTML = `Temperature for ${cityName} at ${currentTime()} is ${temperatureValue}${tempUnits}.`;
            });
        }
        catch(error) {
            console.error("Error:", error.message);
        }
    });

    const numContainer = document.querySelector(".num");
    const numButton = document.querySelector(".num-button");

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    async function fetchWeather() {
        num = getRandomInt(101);
        const url = `http://numbersapi.com/${num}/math?callback=showNumber`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Number fact was not found');
            }
            const data = await response.text();
            numContainer.innerHTML = `${data}`;
        } 
        catch (error) {
            console.error("Error:", error.message);
        }
    }
    
    numButton.addEventListener("click", fetchWeather);
});


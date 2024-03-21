import React, { useEffect, useState } from "react";
import "../Styles/WeatherData.css";

const WeatherData = () => {
    const [temperature, setTemperature] = useState("");

    useEffect(() => {
        const currentTime = () => {
            const date = new Date();
            let d = date.toJSON().slice(0, 11);
            const timeZone = "America/New_York";
            let formattedDate = date.toLocaleString("en-US", { timeZone });
            let hour = new Date(formattedDate).getHours();
            let currentDate = d + hour + ":00";
            return currentDate;
        };

        const temperatureContainer = document.querySelector(".temperature");
        const weatherButton = document.getElementById("weather-button");
        const cityName = "Glassboro";
        const currentDateAndTime = currentTime();

        weatherButton.addEventListener("click", function () {
            try {
                fetch("https://api.open-meteo.com/v1/forecast?latitude=39.7029&longitude=-75.1118&hourly=temperature_2m")
                    .then((response) => response.json())
                    .then((data) => {
                        const currentHour = data["hourly"]["time"];
                        const index = currentHour.indexOf(currentDateAndTime);
                        const temperatureValue = data["hourly"]["temperature_2m"][index];
                        const tempUnits = data["hourly_units"]["temperature_2m"];
                        setTemperature(`Temperature for ${cityName} at ${currentTime()} is ${temperatureValue}${tempUnits}.`);
                    });
            } catch (error) {
                console.error("Error:", error.message);
            }
        });

        return () => {
            weatherButton.removeEventListener("click", () => {});
        };
    }, []);

    return (
        <div id="weather-container">
            <button id="weather-button" type="submit" className="submit">
                Get weather
            </button>
            <p className="temperature">{temperature}</p>
        </div>
    );
};

export default WeatherData;

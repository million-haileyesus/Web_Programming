import React from "react";
import "../Styles/NumberFact.css";

const NumberFacts = () => {
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    const fetchNumberFact = async () => {
        const num = getRandomInt(101);
        const url = `http://numbersapi.com/${num}/math?callback=showNumber`;
        const numContainer = document.querySelector(".num");
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Number fact was not found');
            }
            const data = await response.text();
            numContainer.innerHTML = `${data}`;
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return (
        <div id="num-container">
            <button className="num-button" role="button" onClick={fetchNumberFact}>
                Get number facts
            </button>
            <p className="num"></p>
        </div>
    );
};

export default NumberFacts;

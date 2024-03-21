import React from "react";
import "../Styles/PersonalInfo.css";

const PersonalInformation = ({}) => {
    return (
        <div class="content-container">
            <div id="personal_info">
                <h2>Personal Information:</h2>
                <p id="personal_information">I was born in Feburary 12, 2001 in Mekelle, Ethiopia. I have lived at my birthplace for 12 years 
                            before moving to the captial and came to the United States two and a half years ago.
                </p>
        
                <h3 id="h&i">My Hobbies and Interests:</h3>
                <ul id="hobbies">
                    <li>Programming in neovim</li>
                    <li>Playing soccer</li>
                    <li>Watching movies</li>
                </ul>
            </div>
            <hr/>
        </div>
    );
};

export default PersonalInformation;
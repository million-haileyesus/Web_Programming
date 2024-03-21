import React from "react";
import "../Styles/HeroSection.css";

const HeroSection = ({}) => {
    return (
        <div id="parent">
            <div class="flex-container">
                <span id="personal_profile">PERSONAL PROFILE</span>
                <a href="#intro">INTRODUCTION</a>
                <a href="#personal_info">ABOUT ME</a>
                <a href="#h&i">HOBBIES</a>
                <a href="#edu_background">BACKGROUND</a>
                <a href="#skills&exper">EXPERTISE</a>
                <a href="#contact_info">CONTACT</a>
            </div>
        </div>
    );
};

export default HeroSection;
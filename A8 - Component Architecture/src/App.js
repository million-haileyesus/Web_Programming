/**
    Every file submitted in this course needs to be documented,
    points will be designated towards documentation, don't loss
    points for not documenting your work.  Provide general 
    documentation about you, the course and assignment
    
    Autor: Million Haileyesus
    School: Rowan University
    Course: Web Programming CS04305
    Assignment: A8 - Component Architecture
    Due Date: 03/20/2024
    Instructor: Professor Marquise Pullen

    Description: Refactor your A7 to a React Application.    

    Honor Pledge: I pledge that this work is entirely my own

    My source are from our lecture slide and a youtube tutorial 
    for the go to top button and other google source for getting
    the date and random numbers.
*/

import React from 'react';
import './App.css';
import ContactSection from "./Components/contact section";
import Education from "./Components/education";
import Copyright from "./Components/copyright";
import GoToTop from "./Components/go to top";
import HeroSection from "./Components/hero section";
import Introduction from "./Components/intro";
import NumberFact from "./Components/number fact";
import PersonalInfo from "./Components/personal information";
import SkillsAndWorkExperience from "./Components/skills and work experience";
import WeatherData from "./Components/weather data";

function App() {
  return (
    <div>
      <HeroSection />
      <Introduction />
      <WeatherData />
      <NumberFact />
      <PersonalInfo />
      <Education />
      <SkillsAndWorkExperience />
      <ContactSection />
      <GoToTop />
      <Copyright />
    </div>
  );
}

export default App;

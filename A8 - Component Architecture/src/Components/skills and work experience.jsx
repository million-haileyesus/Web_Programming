import React from "react";
import "../Styles/SkillsAndWorkExperience.css";

const SkillsNWorkExperience = ({}) => {
    return (
        <div class="content-container">
            <hr/>
            <div id="skills&exper">
                <h2>Skills and Experience:</h2>
                <table>
                    <caption>Skills</caption>
                    <thead>
                        <th>Programming Language</th>
                        <th>Level of Proficiency (out of 5)</th>
                        <th>Years of Experience</th>
                    </thead>
                    <tbody id="skills">
                        <tr>
                            <td>Java</td>
                            <td>4<div class="horizontal_bar" style={{ width: "80%" }}></div></td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Python</td>
                            <td>4<div class="horizontal_bar" style={{ width: "80%" }}></div></td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>C</td>
                            <td>3<div class="horizontal_bar" style={{ width: "60%" }}></div></td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>SQL</td>
                            <td>3<div class="horizontal_bar" style={{ width: "60%" }}></div></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>2<div class="horizontal_bar" style={{ width: "40%" }}></div></td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>C++</td>
                            <td>2<div class="horizontal_bar" style={{ width: "40%" }}></div></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>MongoDB</td>
                            <td>2<div class="horizontal_bar" style={{ width: "40%" }}></div></td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <caption>Experience</caption>
                    <thead>
                        <th>Company/Organization</th>
                        <th>Programming Languages Used</th>
                        <th>Tenure (months)</th>
                        <th>Job Title</th>
                    </thead>
                    <tbody id="experience">
                        <tr>
                            <td>Bristol Myers Squibb</td>
                            <td>Python</td>
                            <td>15</td>
                            <td>Software Developer</td>
                        </tr>
                        <tr>
                            <td>Rowan University</td>
                            <td>Python</td>
                            <td>6</td>
                            <td>Search Algorithms Developer</td>
                        </tr>
                        <tr>
                            <td>Software Engineering Course</td>
                            <td>Python/JavaScript/HTML/CSS</td>
                            <td>6</td>
                            <td>Backend developer</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SkillsNWorkExperience;
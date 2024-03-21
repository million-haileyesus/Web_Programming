import React from "react";
import "../Styles/Education.css";

const Education = ({}) => {
    return (
        <div class="content-container">
            <div id="edu_background">
                <h2>Educational Background:</h2>
                <table id="education">
                    <caption>Education</caption>
                    <thead>
                        <th>School Level</th>
                        <th>School name</th>
                        <th>Attended Year</th>
                        <th id="academic_achievements">Academic Achievements</th>
                        <th>Degree Obtained</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>High School</td>
                            <td>Future Talent Academy</td>
                            <td>2015 - 2019</td>
                            <td id="academic_achievements">Survived</td>
                            <td>High School Diploma</td>
                        </tr>
                        <tr>
                            <td>Undergraduate</td>
                            <td>Rowan University</td>
                            <td>2020 - 2024</td>
                            <td id="academic_achievements">Published a poster at a conference</td>
                            <td>Hopefully will get my $100,000 degree paper</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Education;
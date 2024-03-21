import React from "react";

const PersonalInformation = ({}) => {
    return (
        <div id="form">
            <h2>Contact Form</h2>
            <form id="c-form">
                <fieldset id="contact_form">
                    <legend>Contact Information</legend>
                    <div>
                        <label>Name: 
                            <input id="f-name" type="text" pattern="[^0-9]+" placeholder="Name" required></label></div>
                    <div><label>Email: <input id="email" type="email" placeholder="Email" required></label></div>
                    <div>
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                    </div>   
                    <div id="send">                                    
                        <button type="submit" class="submit">Send</button>
                    </div>
                </fieldset>
            </form>
            <div id="custom-popup"></div>
        </div>         
    );
};

export default PersonalInformation;
import React from "react";
import "../Styles/ContactSection.css";

const ContactSection = () => {
    const sendEmail = (event) => {
        event.preventDefault();
        
        const name = event.target.querySelector("#f-name").value;
        const email = event.target.querySelector("#email").value;
        const customPopup = document.getElementById("custom-popup");
        
        const promptMessage = `Thank you, ${name}, for your email. I will reply to ${email} as soon as I can.`;
        
        customPopup.innerHTML = promptMessage;
        customPopup.style.display = "block";

        setTimeout(() => {
            customPopup.style.display = "none";
        }, 5000);
    }

    return (
        <section class="contact-container">
            <div id="contact_info">
                <h2>Contact Information</h2>
                <p>Name: Million Haileyesus</p>
                <p>Email: hailey74@students.rowan.edu</p>
                <p>Location: Rowan University</p>
                <p>Social: <div><a id="github" href="https://github.com/million-haileyesus" target="_blank">Github</a></div>
                        <div><a id="linkedin" href="https://www.linkedin.com/in/million-haileyesus" target="_blank">LinkedIn</a></div>
                </p>
            </div>
            
            <div id="form">
                <h2>Contact Form</h2>
                <form id="c-form" onSubmit={sendEmail}>
                    <fieldset id="contact_form">
                        <legend>Contact Information</legend>
                        <div>
                            <label>Name: 
                                <input id="f-name" type="text" pattern="[^0-9]+" placeholder="Name" required />
                            </label>
                        </div>
                        <div>
                            <label>Email: 
                                <input id="email" type="email" placeholder="Email" required />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Your Message" required />
                        </div>   
                        <div id="send">                                    
                            <button type="submit" className="submit">Send</button>
                        </div>
                    </fieldset>
                </form>
                <div id="custom-popup"></div>
            </div>   
        </section>      
    );
};

export default ContactSection;

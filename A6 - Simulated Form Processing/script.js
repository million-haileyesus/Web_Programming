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
    const message = document.getElementById("message"); 

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
});





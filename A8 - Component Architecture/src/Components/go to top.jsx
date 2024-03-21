import React, { useEffect } from "react";
import "../Styles/GoToTop.css";

const GoToTop = () => {
    useEffect(() => {
        const goToTopButton = document.querySelector(".go_to_top");
        
        const checkHeight = () => {
            if (window.scrollY > 100) {
                goToTopButton.style.display = "flex";
            } else {
                goToTopButton.style.display = "none";
            }
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };

        window.addEventListener("scroll", checkHeight);
        goToTopButton.addEventListener("click", scrollToTop);

        return () => {
            window.removeEventListener("scroll", checkHeight);
            goToTopButton.removeEventListener("click", scrollToTop);
        };
    }, []);

    return (
        <button className="go_to_top">
            <img src="https://img.icons8.com/ios/100/circled-up-2.png" alt="circled-up-2" />
        </button>
    );
};

export default GoToTop;
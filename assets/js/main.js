import languages from './translate.js';


// ********** Sidebar Toggler **********
const sidebarToggler = () => {
    const sidebar = document.querySelector("nav .sidebar");
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("toggler")) {
            sidebar.classList.toggle("-translate-x-[100%]");
        } else {
            sidebar.classList.add("-translate-x-[100%]");
        }
    });
};
sidebarToggler();
// ***************************************************


const changeLanguage = () => {
    const changeBtn = document.querySelector(".language"),
        elements = document.querySelectorAll("[data-text]");    
    // --------------
    // Change BTN Content and set in localStorage
    changeBtn.addEventListener("click", () => {
        changeBtn.dataset.lang === "AR" ? changeBtn.dataset.lang = "EN": changeBtn.dataset.lang = "AR";
        setLanguage(changeBtn.dataset.lang);
        localStorage.setItem("language", changeBtn.dataset.lang.toUpperCase());
        changeBtn.innerHTML = changeBtn.dataset.lang.toUpperCase();
    });
    
    
    document.addEventListener("DOMContentLoaded", () => {
        const language = localStorage.getItem("language") || "EN";
        setLanguage(language);
        changeBtn.innerHTML = localStorage.getItem("language") || changeBtn.dataset.lang.toUpperCase();
    });

    // Set Language
    const setLanguage = (language) => {
        elements.forEach((ele) => {
            const languagesKey = ele.getAttribute("data-text");
            // -----------

            ele.textContent = languages[language.toLowerCase()][languagesKey];
            // --------

        });

        // // Change ele Style
        // let infoLand = document.querySelectorAll("*");

        // infoLand.forEach((ch) => {
        //     if (language === "EN") {
        //         ch.classList.contains("chan") ? ch.classList.replace("chan", "chan_ar") : null;
        //     } else {
        //         ch.classList.contains("chan_ar") ? ch.classList.replace("chan_ar", "chan") : null;
        //     }
        // })

        document.dir = language === "EN" ? "rtl" : "ltr";
    };

};
changeLanguage();

document.addEventListener("DOMContentLoaded", () => {
    const darkMode = localStorage.getItem("dark-mode");
    const botaoLuaLight = document.getElementById("icon-lua-claro");
    const botaoLuaDark = document.getElementById("icon-lua-escuro");
    const botaoSol = document.getElementById("icon-sol");
    const logoDark = document.getElementById("logo-dark");
    const logoLight = document.getElementById("logo-light");
    const links = document.querySelectorAll("nav a");

    const enableDarkMode = () => {
        document.body.classList.add('dark-mode')
        localStorage.setItem('dark-mode', 'active')
        logoDark.style.display = 'block'; 
        logoLight.style.display = 'none';
    };

    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('dark-mode', null)
        logoDark.style.display = 'none';
        logoLight.style.display = 'block';
    };

    if(darkMode === "active") enableDarkMode();

    botaoLuaLight.addEventListener("click", () => {
        const darkMode = localStorage.getItem("dark-mode");
        if (darkMode !== "active") {
        enableDarkMode();
        logoDark.style.display = 'block'; 
        logoLight.style.display = 'none';
        } else {
        disableDarkMode()
        logoDark.style.display = 'none'; 
        logoLight.style.display = 'block';
        }
    });

    botaoLuaDark.addEventListener("click", () => {
        const darkMode = localStorage.getItem("dark-mode");
        if (darkMode !== "active") {
        enableDarkMode();
        logoDark.style.display = 'block'; 
        logoLight.style.display = 'none';
        } else {
        disableDarkMode()
        logoDark.style.display = 'none'; 
        logoLight.style.display = 'block';
        }
    });

    botaoSol.addEventListener("click", () => {
        const darkMode = localStorage.getItem("dark-mode");
        if (darkMode !== "active") {
        enableDarkMode();
        logoDark.style.display = 'block'; 
        logoLight.style.display = 'none';
        } else {
        disableDarkMode()
        logoDark.style.display = 'none'; 
        logoLight.style.display = 'block';
        }
    });

    links.forEach(link => {
        links.addEventListener("click", (Event) => {
            links.forEach(links => links.classList.remove("active"));
            Event.target.classList.add("active");
        });
    });

});











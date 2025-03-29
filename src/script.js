document.addEventListener("DOMContentLoaded", () => {
    const darkMode = localStorage.getItem("dark-mode");
    const botaoLuaLight = document.getElementById("icon-lua-claro");
    const botaoLuaDark = document.getElementById("icon-lua-escuro");

    const enableDarkMode = () => {
        document.body.classList.add('dark-mode')
        localStorage.setItem('dark-mode', 'active')
    };

    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode')
        localStorage.setItem('dark-mode', null)
    };

    if(darkMode === "active") enableDarkMode();

    botaoLuaLight.addEventListener("click", () => {
        const darkMode = localStorage.getItem("dark-mode");
        if (darkMode !== "active") {
        enableDarkMode();
        } else {
        disableDarkMode()
        }
    });

    botaoLuaDark.addEventListener("click", () => {
        const darkMode = localStorage.getItem("dark-mode");
        if (darkMode !== "active") {
        enableDarkMode();
        } else {
        disableDarkMode()
        }
    });

});


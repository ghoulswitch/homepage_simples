document.addEventListener("DOMContentLoaded", () => {
    const botaoLuaLight = document.getElementById("icon-lua-claro");
    const botaoLuaDark = document.getElementById("icon-lua-escuro");
    const botaoSol = document.getElementById("icon-sol");
    const botoes = document.querySelectorAll("#icon-lua-claro, #icon-sol");
    const body = document.body;

    botaoLuaDark.style.display = 'none';

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (botaoLuaLight.style.display == 'show') {
                botaoLuaLight.style.display = 'none';
                botaoLuaDark.style.display = 'show'
            } else {
                botaoLuaLight.style.display = 'show'
                botaoLuaDark.style.display = 'none'
            }
            
        })
    })
});


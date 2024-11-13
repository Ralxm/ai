let tema = JSON.parse(localStorage.getItem('theme'));
if(!tema){
    tema = [];
}

function changeTheme(){ //ACONTECE QUANDO O SLIDE NO CANTO SUPERIOR ESQUERDO DA PÁGINA É CLICADO
    document.documentElement.classList.toggle("darkmode"); //COLOCA/TIRA A CLASSE DARKMODE NAS RESPETIVAS TAGS A QUE FUI ATRIBUIDO NA TAG <STYLE> NO INDEX.HTML
    if(document.documentElement.classList.value.includes("darkmode") && tema != 'dark'){ //GUARDA "dark" NO LOCAL STORAGE
        tema.push('dark');
        localStorage.setItem('theme', JSON.stringify(tema));
    }
    else if(!document.documentElement.classList.value.includes("darkmode")){ //APAGA "dark" DO LOCAL STORAGE
        tema = [];
        localStorage.removeItem('theme');
    }
}

addEventListener("DOMContentLoaded", (event) => { //EVENT LISTENER PARA QUANDO A PÁGINA CARREGAR
    let theme = JSON.parse(localStorage.getItem('theme'));
    console.log(theme);
    if(theme == 'dark'){ //SE EXISTIR "dark" NO LOCAL STORAGE (SE A PÁGINA TIVER SIDO DEIXADA EM TEMA ESCURO ANTES DE SER FECHADA OU ANTES DE UM REFRESH)
        changeTheme();   //AUTOMÁTICAMENTE COLOCA A PÁGINA EM TEMA ESCURO
        document.getElementById('theme').checked = 'true'; //CLICA AUTOMÁTICAMENTE NO BOTÃO PARA MUDAR TEMA, GARANTIR COESÃO DO ESTADO DA PÁGINA COM O BOTÃO.
    }

    document.documentElement.classList.toggle("loading"); //FAZ COM QUE OS BOTÕES DAS IMAGENS FIQUEM MAIS VISÍVEIS
    setTimeout(()=>{
        document.documentElement.classList.toggle("loading"); //PASSADO DOIS SEGUNDOS TIRA OS EFEITOS
    }, 2000);
});



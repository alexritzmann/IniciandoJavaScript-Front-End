function trocaIdioma()
{
    let lang = document.getElementById("lang").value;
    let saudacao = document.getElementById("saudacao");
    switch(lang)
    {
        case "pt":
            saudacao.innerHTML = "Bom dia";
            break;
        case "en":
            saudacao.innerHTML = "Good Morning";
            break;
        case "es":
            saudacao.innerHTML = "Buenos dias";
            break;
        case "fr":
            saudacao.innerHTML = "Bonjour";
            break;
    }
}
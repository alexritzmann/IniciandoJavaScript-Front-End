// procirar na internet como funcao para recuperar cookie

/*Função para definir um cookie*/
function setCookie() 
{
    const name = document.getElementById("name").value; // Obtém o valor do campo de entrada
    const days = 7; // Define a validade do cookie para 7 dias
    const date = new Date(); // Cria uma nova data (data atual - HOJE)
    
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Define a data de expiração do cookie   
    const expires = "expires=" + date.toUTCString(); // Cria uma string de expiração do cookie

    document.cookie = "username=" + name + ";" + expires + ";path=/"; // Define o cookie com o nome e a data de expiração
    displayWelcomeMessage(); // Chama a função para exibir a mensagem de boas vindas
}

/*Funçaõ para obter um cookie*/
function getCookie(name) 
{
    const nameEQ = name + "="; //Adiciona o sinal de igual ao nome do cookie
    const decodedCookie = decodeURIComponent(document.cookie); // Decodifica o cookie
    const cookieArray = decodedCookie.split(';'); // Divide o cookie em partes separados por ponto e vírgula (';')
    for(let i = 0; i < cookieArray.length; i++) 
    {// Itera sobre as partes do cookie
        let cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') 
        {// Removeos espaços em branco no inicio do cookie
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nameEQ) == 0) 
        {// Verifica se o cookie atual é o desejado
            return cookie.substring(nameEQ.length, cookie.length);// Retorna o valor do cookie
        }
    }
    return ""; // Retorna uma string vazia se o cookie nao for encontrado
}

function displayWelcomeMessage()
{
    const user = getCookie("username"); // Obtem o valor do cookie "username"
    const welcomeMessage = document.getElementById("welcomeMessage"); // Obtem o elemento HTML (DIV neste caso) com o id "welcomeMessage" da mensagem de boas vindas
    if (user != '')
    {// verifica se o cookie não está vazio
        welcomeMessage.innerHTML = "Bem-vindo(a) de volta, " + user + "!"; // Define o texto da mensagem de boas vindas com o username
    }else
    {
        welcomeMessage.innerHTML = ''; // Limpa o texto da mensagem de boas vindas
    }
}


function deleteCookie()
{
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; // Define o cookie com o nome e a data de expiração
    displayWelcomeMessage();// Atualiza a mensagem de boas vindas
}


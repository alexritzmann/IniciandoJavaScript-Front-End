/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}



function validateForm() {

    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha").value;
    
    if (!telefone || !email || !senha || telefone.trim() === "" || email.trim() === "" || senha.trim() === "")
    {
        alert("Todos os campos são obrigatórios");
        return false;
    }

    if (email.length < 5 || email.length > 100) {
        alert("O email deve ter entre 5 e 100 caracteres");
        return false;
    }

    if (telefone.length < 5 || telefone.length > 100) {
        alert("O telefone deve ter o DDD seguido do número exemplo: (47) 99999-9999");
        return false;
    }

    if (senha.length < 8 || senha.length > 100)
    {
        alert("A senha deve ter entre 8 e 100 caracteres! A senha deve conter Letras, Números e pelo menos um caractere especial.");
        return false;
    }

    /*expressão regular para validar e-mail*/
    const emailPadrao = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    /*expressão regular para validar Telefone*/
    const telefonePadrao = /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;
    /*expressão regular para validar Senhas*/
    const senhaPadrao = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z])(?!\1)|[!@#$%;*(){}_+^&]){6,}$/;

    
    if (!emailPadrao.test(email)) {
        alert("Inserir um e-mail válido");
        return false;
    }

    if (!telefonePadrao.test(telefone)) {
        alert("Inserir um telefone válido. O telefone deve ter o DDD seguido do número exemplo: (47) 99999-9999");
        return false;
    }

    if (!senhaPadrao.test(senha)) {
        alert("Inserir uma senha válida. A senha deve ter entre 8 e 100 caracteres! A senha deve conter Letras, Números e pelo menos um caractere especial.");
        return false;
    }

    return true;
}

document.getElementById("contactForm").addEventListener("submit", function(event)
{
    event.preventDefault();
    if (validateForm())
    {
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const senha = document.getElementById("senha").value;
        const storageOption = document.querySelector('input[name="storage"]:checked').value;
        if(storageOption === "local")
        {
            localStorage.setItem('email',email);
            localStorage.setItem('telefone',telefone);
            localStorage.setItem('senha',senha);
            alert("Formulário enviado e dados armazenados com sucesso para LOCAL STORAGE");
        }else if(storageOption === "session")
        {
            sessionStorage.setItem('email',email);
            sessionStorage.setItem('telefone',telefone);
            sessionStorage.setItem('senha',senha);
            alert("Formulário enviado e dados armazenados com sucesso para SESSION STORAGE");
        }
    }
});


document.getElementById("showLocalStorage").addEventListener('click', function()
{
    const email = localStorage.getItem('email');
    const telefone = localStorage.getItem('telefone');
    const senha = localStorage.getItem('senha');

    if(email || telefone || senha)
    {
        document.getElementById("localStorageData").innerHTML = `<h2>Local Storage:</h2><p><strong>E-mail: ${email} </strong></p><p><strong>Telefone: ${telefone} </strong></p><p><strong>Senha: ${senha} </strong></p><button id="clearLocalStorage">Limpar Local Storage</button>`;
        document.getElementById("localStorageData").style.display = "block";
        document.getElementById("clearLocalStorage").addEventListener('click',function()
        {
            localStorage.clear();
            alert("Dados do LOCAL STORAGE removidos com sucesso");
            document.getElementById("localStorageData").style.display = 'none';
        })
    }

});


document.getElementById("showSessionStorage").addEventListener('click', function()
{
    const email = sessionStorage.getItem('email');
    const telefone = sessionStorage.getItem('telefone');
    const senha = sessionStorage.getItem('senha');

    if(email || telefone || senha)
    {
        document.getElementById("sessionStorageData").innerHTML = `<h2>Session Storage:</h2><p><strong>E-mail: ${email} </strong></strong></p><p><strong>Telefone: ${telefone} </strong></strong></p><p><strong>Senha: ${senha} </strong></strong></p><button id="clearSessionStorage">Limpar Local Storage</button>`;
        document.getElementById("sessionStorageData").style.display = "block";
        document.getElementById("clearSessionStorage").addEventListener('click',function()
        {
            sessionStorage.clear();
            alert("Dados do SESSION STORAGE removidos com sucesso");
            document.getElementById("sessionStorageData").style.display = 'none';
        })
    }

});

document.getElementById('clearSession').addEventListener('click',function()
{
    sessionStorage.clear();
    localStorage.clear();

    alert('Dados do SESSION STORAGE e LOCAL STORAGE removidos com sucesso');
    document.getElementById("sessionStorageData").style.display = "none";
    document.getElementById("localStorageData").style.display = "none";
});



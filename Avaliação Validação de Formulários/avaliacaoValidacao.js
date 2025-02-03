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
        alert("Formulário validado");
    }
});
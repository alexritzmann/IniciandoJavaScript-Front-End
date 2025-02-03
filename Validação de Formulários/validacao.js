function validateForm() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    
    if (!name || !email || !mensagem || name.trim() === "" || email.trim() === "" || mensagem.trim() === "")
    {
        alert("Todos os campos são obrigatórios");
        return false;
    }

    if (name.length < 3 || name.length > 50) {
        alert("O nome deve ter entre 3 e 50 caracteres");
        return false;
    }

    if (email.length < 5 || email.length > 100) {
        alert("O email deve ter entre 5 e 100 caracteres");
        return false;
    }

    /*expressão regular para validar e-mail*/
    const emailPadrao = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPadrao.test(email)) {
        alert("Inserir um e-mail válido");
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
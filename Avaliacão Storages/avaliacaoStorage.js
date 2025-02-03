// Função para obter um cookie
function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Função para deletar um cookie
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Função para validar o formulário
function validateForm() {
    const tema = document.getElementById("tema").value;
    const name = document.getElementById("name").value.trim();
    const tarefa = document.getElementById("tarefa").value.trim();

    if (!tema || !name || !tarefa) {
        alert("Todos os campos são obrigatórios");
        return false;
    }

    if (name.length < 3 || name.length > 50) {
        alert("O nome de usuário deve ter entre 3 e 50 caracteres");
        return false;
    }

    if (tarefa.length < 4 || tarefa.length > 100) {
        alert("A tarefa deve ter entre 4 e 100 caracteres.");
        return false;
    }

    return true;
}

// Evento de envio do formulário
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateForm()) {
        const tema = document.getElementById("tema").value;
        const name = document.getElementById("name").value;
        const tarefa = document.getElementById("tarefa").value;
        const storageOption = document.querySelector('input[name="storage"]:checked').value;

        if (storageOption === "local") {
            localStorage.setItem('tema', tema);
            localStorage.setItem('name', name);
            localStorage.setItem('tarefa', tarefa);
            alert("Formulário enviado e dados armazenados com sucesso para LOCAL STORAGE");
        } else if (storageOption === "session") {
            sessionStorage.setItem('tema', tema);
            sessionStorage.setItem('name', name);
            sessionStorage.setItem('tarefa', tarefa);
            alert("Formulário enviado e dados armazenados com sucesso para SESSION STORAGE");
        } else if (storageOption === "cookie") {
            const days = 7; // Define a validade do cookie para 7 dias
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();

            document.cookie = "tema=" + tema + ";" + expires + ";path=/";
            document.cookie = "name=" + name + ";" + expires + ";path=/";
            document.cookie = "tarefa=" + tarefa + ";" + expires + ";path=/";
            alert("Formulário enviado e dados armazenados com sucesso para COOKIE STORAGE");
        }
    }
});

// Função para alterar o tema
function alterarTema() {
    const body = document.body;
    const temaSelect = document.getElementById("tema");

    if (body.classList.contains('tema-escuro')) {
        body.classList.remove('tema-escuro');
        body.classList.add('tema-claro');
        temaSelect.value = "temaClaro";
    } else {
        body.classList.remove('tema-claro');
        body.classList.add('tema-escuro');
        temaSelect.value = "temaEscuro";
    }
}

// Sincronizar o tema ao carregar a página
window.addEventListener("load", function () {
    const tema = localStorage.getItem('tema') || sessionStorage.getItem('tema') || getCookie('tema');
    const body = document.body;

    if (tema === "temaEscuro") {
        body.classList.remove('tema-claro');
        body.classList.add('tema-escuro');
        document.getElementById("tema").value = "temaEscuro";
    } else {
        body.classList.remove('tema-escuro');
        body.classList.add('tema-claro');
        document.getElementById("tema").value = "temaClaro";
    }
});
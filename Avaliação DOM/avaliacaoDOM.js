

function addTarefa() {
    const inputTarefa = document.getElementById("tarefa");
    const lista = document.getElementById("lista");
    
    if (inputTarefa.value.trim() === "") {
        alert("Por favor, digite uma tarefa válida.");
        return;
    }

    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = inputTarefa.value;
    lista.appendChild(novaTarefa);
    inputTarefa.value = "";
}
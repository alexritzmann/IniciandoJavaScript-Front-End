function pizza()
{
    const numerodoPedido = document.getElementById("numPedido").value;
    const mensagem = document.getElementById("mensagem");
    mensagem = numPedido(numerodoPedido, mensagem);
}

function numPedido(numerodoPedido, mensagem)
{
    switch(numerodoPedido)
    {
        case "1":
            console.log("CALABRESA");
            mensagem.innerHTML = "Pizza de calabresa";
            break;
        case "2":
            mensagem.innerHTML = "Pizza de quatro queijos";
            console.log("QUEIJO");
            break;
        case "3":
            mensagem.innerHTML = "Pizza de frango com catupiry";
            console.log("CATUPIRY");
            break;
        case "4":
            mensagem.innerHTML = "Pizza de brigadeiro";
            console.log("DOCE");
            break;
        default:
            mensagem.innerHTML = "Número do pedido inválido";
            console.log("INVALIDO");
            break;
    }
}

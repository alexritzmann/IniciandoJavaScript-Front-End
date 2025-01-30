function verificaAprovacao ()
{
    let nota = document.getElementById("nota").value;
    console.log("Nota inserida: ", nota);
    if(nota >= 7)
    {
        document.getElementById("resultado").innerHTML = "Aluno aprovado";
        alert("Aluno aprovado");
    }else
    {
        document.getElementById("resultado").innerHTML = "Aluno reprovado";
        alert("Aluno reprovado");
    }
    
}

function verificaNumero()
{
    let preco = document.getElementById("precoOriginal").value;
    let desconto = document.getElementById("percentualDesconto").value;
    if (preco<0 || desconto<0)
    {
        return alert("Preço e desconto não podem ser menores que 0");
    }
    else
    {
        calculardesconto();
    }
}

function calculardesconto ()
{
    let preco = document.getElementById("precoOriginal").value;
    console.log("preco original: ",preco);
    let desconto = document.getElementById("percentualDesconto").value;
    console.log("percentual desconto: ",desconto);
    document.getElementById("textoPrecoOriginal").innerHTML = preco;
    let valor = (preco)*(desconto/100);
    console.log("valor desconto: ",valor);
    document.getElementById("textoValorDesconto").innerHTML = valor;
    let final = preco-valor;
    console.log("valor final: ",final);
    document.getElementById("textoPrecoFinal").innerHTML = final;
    alert("Preço original: " + preco + "\nValor desconto: " + valor + "\nValor final do produto: " + final)
}
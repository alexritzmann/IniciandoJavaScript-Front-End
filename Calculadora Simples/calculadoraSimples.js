function calcular() 
{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultado = 0;

    switch (operador)
    {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 == 0) 
            {
                resultado = "Divisão por zero";
                alert("Divisão por zero");
            }else
            {
                resultado = num1 / num2;
            }
            break;
        default:
            resultado = "Operador inválido";
            alert("Operador inválido");

    }
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}




const turma1 =["Alex", "Andre", "Antonio", "Avelino"];
const turma2 =["Bianca", "Beatriz", "Bruna"];

console.log("Alunas turma 1:", turma1);
console.log("Alunas turma 2:", turma2);

console.log("Alunas da turma 1 e 2:", turma1.concat(turma2));

console.log(turma1[0]);

console.log("Quantidade de alunos na turma 1:", turma1.length);

console.log("Quantidade de alunos na turma 2:", turma2.length);

turma1.push("Camila");
turma1[turma1.length] = "Carla";
console.log("Alunas turma 1:", turma1);

const numerosSorteados = [5, 39, 15, 12, 1, 60];

console.log(numerosSorteados.sort());


const frutas = ["banana", "manga", "abacaxi", "laranja", "uva"];
console.log(frutas);
console.log(frutas[2]);
frutas[1] = "abacate";
console.log(frutas);
frutas.push("melancia", "kiwi");
console.log(frutas);

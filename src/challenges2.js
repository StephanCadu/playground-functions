// Desafio 11
function verificaTamanho(array) {
  let resultado = '';
  if (array.length !== 11) {
    resultado = 'Array com tamanho incorreto.';
  }
  return resultado;
}

function repetidos(array) {
  let resultado = '';
  let repetido = 0;
  for (let num of array) {
    let analisado = num;
    for (let num2 of array) {
      if (analisado === num2) {
        repetido += 1;
      }
    }
    if (repetido > 2 || num < 0 || num > 9) {
      resultado = 'não é possível gerar um número de telefone com esses valores';
    }
    repetido = 0;
  }
  return resultado;
}

function criaNumero(array) {
  let resultado = '';
  let junto = array.join('');
  let ddd = junto.slice(0, 2);
  let part1 = junto.slice(2, 7);
  let part2 = junto.slice(7, 11);
  resultado = `(${ddd}) ${part1}-${part2}`;
  return resultado;
}

function generatePhoneNumber(array) {
  let resultado = '';
  if (verificaTamanho(array) === 'Array com tamanho incorreto.') {
    resultado = verificaTamanho(array);
  } else if (repetidos(array) === 'não é possível gerar um número de telefone com esses valores') {
    resultado = repetidos(array);
  } else {
    resultado = criaNumero(array);
  }
  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let check = true;
  let a = lineA;
  let b = lineB;
  let c = lineC;

  if (a > b + c || b > a + c || c > a + b) {
    check = false;
  } else if (a < Math.abs(b - c) || b < Math.abs(a - c) || c < Math.abs(a - b)){
    check = false;
  }
  return check;
}

// Desafio 13
function separaNumeros(string) {
  let numsSeparados = string.replace(/\D/g, '');
  return numsSeparados;
}

function criaArray(string) {
  let numsArray = string.split('');
  return numsArray;
}

function criaInteiros(array) {
  let inteiros = [];
  for (let key of array) {
    let num = parseInt(key, 10);
    inteiros.push(num);
  }
  return inteiros;
}

function somaInteiros(array) {
  let sum = 0;
  for (let ind of array) {
    sum += ind;
  }
  return sum;
}

function hydrate(string) {
  let separados = separaNumeros(string);
  let arrayString = criaArray(separados);
  let arrayInteiros = criaInteiros(arrayString);
  let inteirosSomados = somaInteiros(arrayInteiros);
  let resultado = '';
  if (inteirosSomados === 1) {
    resultado = `${inteirosSomados} copo de água`;
  } else {
    resultado = `${inteirosSomados} copos de água`;
  }
  return resultado;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

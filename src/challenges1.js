// Desafio 1
function compareTrue(a, b) {
  let result = false;
  if (a === true && b === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splited = string.split(' ');
  return splited;
}

// Desafio 4
function concatName(array) {
  let space = ', ';
  let lastFirst = array[array.length - 1] + space + array[0];
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties);
  return points;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max(...array);
  let repetitions = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      repetitions += 1;
    }
  }
  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let result = '';
  if (distCat1 < distCat2) {
    result = 'cat1';
  } else if (distCat1 === distCat2) {
    result = 'os gatos trombam e o rato foge';
  } else {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function testaCondit(array2) {
  let resultado = '';
  if (array2 % 3 === 0 && array2 % 5 === 0) {
    resultado += 'fizzBuzz';
  } else if (array2 % 3 === 0) {
    resultado += 'fizz';
  } else if (array2 % 5 === 0) {
    resultado += 'buzz';
  } else {
    resultado += 'bug!';
  }
  return resultado;
}

function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    result.push(testaCondit(array[index]));
  }
  return result;
}

// Desafio 9
function encode(string) {
  string = string.replaceAll('a', 1);
  string = string.replaceAll('e', 2);
  string = string.replaceAll('i', 3);
  string = string.replaceAll('o', 4);
  string = string.replaceAll('u', 5);
  return string;
}
function decode(string) {
  string = string.replaceAll(1, 'a');
  string = string.replaceAll(2, 'e');
  string = string.replaceAll(3, 'i');
  string = string.replaceAll(4, 'o');
  string = string.replaceAll(5, 'u');
  return string;
}

// Desafio 10
function techList(array, nome) {
  let auxiliar = [];
  let result;
  let sorted = array.sort();

  for (let index = 0; index < sorted.length; index += 1) {
    auxiliar.push({ tech: sorted[index], name: nome });
  }
  if (array.length > 0) {
    result = auxiliar;
  } else {
    result = 'Vazio!';
  }
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

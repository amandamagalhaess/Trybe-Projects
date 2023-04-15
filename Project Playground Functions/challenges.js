// Desafio 1 - Crie a função compareTrue

const compareTrue = (val1, val2) => (!!(val1 && val2 === true));

// Desafio 2 - Crie a função splitSentence

function splitSentence(string) {
  return string.split(' ');
}

// Desafio 3 - Crie a função concatName

function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 5 - Crie a função highestCount

function highestNumber(array) {
  let biggestNumber = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > biggestNumber) {
      biggestNumber = array[index];
    }
  }
  return biggestNumber;
}

function highestCount(array) {
  let count = 0;

  for (let index in array) {
    if (array[index] === highestNumber(array)) {
      count += 1;
    }
  }
  return count;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

function calcRectangleArea(base, height) {
  let rectangleArea = base * height;
  return rectangleArea;
}

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }

  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = mouse - cat1;
  let cat2Distance = mouse - cat2;

  if (Math.abs(cat1Distance) > Math.abs(cat2Distance)) {
    return 'cat2';
  }
  if (Math.abs(cat2Distance) > Math.abs(cat1Distance)) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(array) {
  let newArray = [];

  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9 - Crie a função encode e a função decode

function encode(string) {
  let newString = '';

  for (let letter in string) {
    if (string[letter] === 'a') {
      newString += 1;
    } else if (string[letter] === 'e') {
      newString += 2;
    } else if (string[letter] === 'i') {
      newString += 3;
    } else if (string[letter] === 'o') {
      newString += 4;
    } else if (string[letter] === 'u') {
      newString += 5;
    } else {
      newString += string[letter];
    }
  }
  return newString;
}

function decode(string) {
  let newString = '';

  for (let letter in string) {
    if (string[letter] === '1') {
      newString += 'a';
    } else if (string[letter] === '2') {
      newString += 'e';
    } else if (string[letter] === '3') {
      newString += 'i';
    } else if (string[letter] === '4') {
      newString += 'o';
    } else if (string[letter] === '5') {
      newString += 'u';
    } else {
      newString += string[letter];
    }
  }
  return newString;
}

// Desafio 10 - Crie a função techList

function techList(array, string) {
  array.sort();
  let objects = [];

  for (let index in array) {
    objects.push({
      tech: array[index],
      name: string,
    });
  }
  return objects;
}

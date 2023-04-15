// Desafio 11 - Crie a função generatePhoneNumber

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let cont = 0;
  for (let index in array) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index2 in array) {
      if (array[index] === array[index2]) {
        cont += 1;
      }
    }
    if (cont >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    cont = 0;
  }

  let phoneNumber = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;

  return phoneNumber;
}

// Desafio 12 -  Crie a função triangleCheck

function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13 - Crie a função hydrate

function hydrate(string) {
  let numbers = string.match(/\d+/g);
  let quantity = 0;

  for (let index in numbers) {
    quantity += parseInt(numbers[index]);
  }
  if (quantity === 1) {
    return `${quantity} copo de água`;
  }
  return `${quantity} copos de água`;
}

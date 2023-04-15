const button = document.getElementById('button-random-color');
const colors = document.getElementsByClassName('color');
const board = document.getElementById('pixel-board');
const selectedColor = document.getElementsByClassName('selected');
const pixels = document.getElementsByClassName('pixel');
const clearBoard = document.getElementById('clear-board');
const input = document.getElementById('board-size');
const newSizeButton = document.getElementById('generate-board');
const boardSize = JSON.parse(localStorage.getItem('boardSize'));

const paletteColors = ['rgb(0, 0, 255)', 'rgb(255, 192, 203)', 'rgb(0, 128, 0)'];

if (localStorage.getItem('colorPalette') === null) {
  localStorage.setItem('colorPalette', JSON.stringify(paletteColors));
}

const generateColors = () => {
  const r = Number(Math.random() * 255);
  const g = Number(Math.random() * 255);
  const b = Number(Math.random() * 255);

  if (r === 255 && g === 255 && b === 255) {
    generateColors();
  }
  return `rgb(${r}, ${g}, ${b})`;
};

const addColorsToLocalStorage = (palette) => {
  localStorage.setItem('colorPalette', JSON.stringify(palette));
};

const randomColors = () => {
  let color = generateColors();
  const palette = [];
  for (let index = 1; index < colors.length; index += 1) {
    palette.push(color);
    colors[index].style.backgroundColor = color;
    color = generateColors();
  }
  addColorsToLocalStorage(palette);
};

const colorPalette = JSON.parse(localStorage.getItem('colorPalette'));

for (let index = 0; index < colorPalette.length; index += 1) {
  colors[index + 1].style.backgroundColor = colorPalette[index];
}

button.addEventListener('click', randomColors);

const createBoard = (size) => {
  const width = 42 * size;
  board.style.width = `${width}px`;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let index = 1; index <= size * size; index += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    board.appendChild(pixel);
  }
};

if (boardSize === null) {
  createBoard(5);
} else {
  createBoard(boardSize);
}

colors[0].classList.add('selected');

const selectElement = (event) => {
  const colorSelect = document.querySelector('.selected');
  if (colorSelect) {
    colorSelect.classList.remove('selected');
  }
  event.target.classList.add('selected');
};

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectElement);
}

const addDrawToLocalStorage = () => {
  const backColor = [];
  const indexElement = [];
  for (let index = 0; index < pixels.length; index += 1) {
    if (pixels[index].style.backgroundColor !== '') {
      backColor.push(pixels[index].style.backgroundColor);
      indexElement.push([index]);
    }
  }
  localStorage.setItem('pixelBoard', JSON.stringify(backColor));
  localStorage.setItem('position', JSON.stringify(indexElement));
};

const paintPixel = (event) => {
  const pixelSelected = event.target;

  for (let index = 1; index < colors.length; index += 1) {
    if (selectedColor[0] === colors[0]) {
      selectedColor[0].style.backgroundColor = 'black';
      pixelSelected.style.backgroundColor = selectedColor[0].style.backgroundColor;
    } else if (selectedColor[0] === colors[index]) {
      pixelSelected.style.backgroundColor = colors[index].style.backgroundColor;
    }
  }
  addDrawToLocalStorage();
};

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', paintPixel);
}

const clear = () => {
  for (let index = 0; index < pixels.length; index += 1) {
    if (pixels[index].style.backgroundColor !== 'white') {
      pixels[index].style.backgroundColor = 'white';
    }
  }
  const array = [];
  localStorage.pixelBoard = (array);
  localStorage.setItem('position', array);
};

clearBoard.addEventListener('click', clear);

let elementColors = [];
let elementPosition = [];
if (localStorage.getItem('pixelBoard')) {
  elementColors = JSON.parse(localStorage.getItem('pixelBoard'));
}

if (localStorage.getItem('position')) {
  elementPosition = JSON.parse(localStorage.getItem('position'));
}

for (let index = 0; index < elementColors.length; index += 1) {
  pixels[elementPosition[index]].style.backgroundColor = elementColors[index];
}

const removePixels = () => {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
};

const getNewPixels = () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', paintPixel);
  }
};

const newSizeBoard = () => {
  let size = input.value;
  if (size !== '') {
    if (size < 5) {
      size = 5;
    } else if (size > 50) {
      size = 50;
    }
    removePixels();
    createBoard(size);
    localStorage.setItem('boardSize', JSON.stringify(size));
  } else {
    alert('Board inválido!');
  }
  const array = [];
  localStorage.pixelBoard = (array);
  localStorage.position = (array);

  getNewPixels();
};

newSizeButton.addEventListener('click', newSizeBoard);

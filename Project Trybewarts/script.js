const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-button');
const submitButton = document.getElementById('submit-btn');
const agreementBox = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const form = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');

const validateForm = () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

loginBtn.addEventListener('click', validateForm);

const enableButton = () => {
  if (submitButton.getAttribute('disabled') === null) {
    submitButton.setAttribute('disabled', '');
  } else {
    submitButton.removeAttribute('disabled');
  }
};

agreementBox.addEventListener('change', enableButton);

const countText = () => {
  const text = textArea.value;
  counter.innerText = 500 - text.length;
};

textArea.addEventListener('input', countText);

const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const { family } = form;
const { rate } = form;

const nameData = document.getElementById('name-data');
const emailData = document.getElementById('email-data');
const houseData = document.getElementById('house-data');
const familyData = document.getElementById('family-data');
const subjectData = document.getElementById('subject-data');
const rateData = document.getElementById('rate-data');
const textData = document.getElementById('text-data');

const showData = () => {
  form.style.display = 'none';
  formData.style.display = 'flex';
};

const addData = (event) => {
  const subject = document.querySelectorAll('[name=subject]:checked');
  event.preventDefault();
  nameData.innerHTML += `${inputName.value} ${inputLastName.value}`;
  emailData.innerHTML += inputEmail.value;
  houseData.innerHTML += house.value;
  familyData.innerHTML += family.value;
  for (let index = 0; index < subject.length; index += 1) {
    subjectData.innerHTML += subject[index].value;
    if (index === subject.length - 1) {
      subjectData.innerHTML += '.';
    } else if (subject.length > 1) {
      subjectData.innerHTML += ', ';
    }
  }
  rateData.innerHTML += rate.value;
  textData.innerHTML += textArea.value;

  showData();
};

submitButton.addEventListener('click', addData);

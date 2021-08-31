// Variables
const newPasswordElement = document.getElementById('new-password');
const radioButtons = document.querySelectorAll('input[type=radio]');
const generatedPasswordElement = document.getElementById('generated-password');
const customSymbolsInput = document.getElementById('customSymbols');
const characters =
  '0123456789@#$%!-&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// Functions

const generateNewPassword = (e) => {
  e.preventDefault();
  let newPassword = '';
  const passwordLength = getPasswordLength();
  const symbolsArray = characters.split('');
  for (let i = 1; i <= passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * (symbolsArray.length - 1));
    newPassword += symbolsArray[randomNumber];
  }
  generatedPasswordElement.innerHTML = newPassword;
  newPasswordElement.reset();
};

const getPasswordLength = () => {
  const customSymbolsValue = customSymbolsInput.value;
  if (customSymbolsValue > 0) {
    radioButtons[radioButtons.length - 1].value = customSymbolsValue;
  }
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return +radioButtons[i].value;
    }
  }
};

const selectLastRadioInput = () => {
  radioButtons[radioButtons.length - 1].checked = true;
};

// Events
newPasswordElement.addEventListener('submit', generateNewPassword);
customSymbolsInput.addEventListener('focus', selectLastRadioInput);

const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let passwordField1 = document.getElementById('password-field-1');
let passwordField2 = document.getElementById('password-field-2');
let generatePasswordsBtn = document.querySelector('.passwords-btn');

function generatePasswords() {
  let limit = 15;
  let passwords = {
    password1: '',
    password2: '',
  };

  for (let i = 0; i < limit; i++) {
    let randomIndex1 = Math.floor(Math.random() * characters.length);
    let randomIndex2 = Math.floor(Math.random() * characters.length);
    passwords.password1 += characters[randomIndex1];
    passwords.password2 += characters[randomIndex2];
  }
  passwordField1.textContent = passwords.password1;
  passwordField2.textContent = passwords.password2;

  return passwords;
}

generatePasswordsBtn.addEventListener('click', generatePasswords);

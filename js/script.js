const range = document.querySelector('input[type=range]');
const generate = document.querySelector('.generate');
let pwd = document.querySelector('.pwd_text')
let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZacdefghijklnopqrstuvwxyz0123456789';

generate.addEventListener('click', () => {
  let password = ''; // null ?
  let checked = document.querySelector('.checkbox').checked;
  let final_string = string;

  if (checked) {
    final_string += "@#$%^&*/=+?"
  }

  for (let index = 0; index < range.value; index++) {
    let pwd = final_string[Math.floor(Math.random() * final_string.length)];
    password += pwd;
  }
  pwd.innerHTML = password;
  final_string = string
})

const copy_text = document.querySelector('.copy_text');
const copy = document.querySelector('.copy').addEventListener('click', () => {
  navigator.clipboard.writeText(pwd.innerHTML);
  copy_text.textContent = "Password was Copied!";
  copy_text.style.display = 'block';
  setTimeout(() => {
    copy_text.style.display = 'none';
  }, 2000);
})
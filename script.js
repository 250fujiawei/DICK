const button = document.querySelector('div.btn');
console.log(button);

button.addEventListener('click', btnClick);

let flag = true;

function btnClick() {
  console.log('Button clicked!');
  if (flag) {
    button.style.padding = '50px';
    button.style.borderRadius = '50%';
    flag = false;
  } else {
    button.style.padding = '20px 50px';
    button.style.borderRadius = '10px';
    flag = true;
  }
}
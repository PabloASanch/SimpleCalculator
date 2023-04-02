const buttons = document.querySelectorAll('.btn');
const clearButton = document.querySelector('.clear');
const output = document.querySelector('#output');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('equal')) {
        output.textContent = eval(output.textContent);
    } else {   
      output.textContent += button.textContent;
    }
  });
});

clearButton.addEventListener('click', () => {
  output.textContent = '';
});

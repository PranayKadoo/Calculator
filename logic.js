let screenText = document.getElementById('screen');
let screenValue = '';

buttons = document.querySelectorAll('button');

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        if (buttonText == 'BS') {
            screenText.value=screenText.value.substring(0, screenText.value.length-1);
            screenValue = screenText.value;
        }
        else if (buttonText == 'AC') {
            screenValue = '';
            screenText.value = screenValue;
        }
        else if (buttonText == '=') {
            screenText.value = eval(screenValue);
        }
        
        else {
            screenValue += buttonText;
            screenText.value = screenValue;
        }

    })
}


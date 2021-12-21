const remainingCharsElement = document.getElementById('remaining-chars');
const productNameInputElement = document.getElementById('product-name');

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters (event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLength;
 
    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters <=10) {
        remainingCharsElement.classList.add('warning');
        productNameInputElement.classList.add('warning');
    }
}

productNameInputElement.addEventListener('input', updateRemainingCharacters);

const spanElement = document.getElementById('remaining-chars');
/*spanElement.style.color = 'red'; */

/* spanElement.classList.add('warning'); */


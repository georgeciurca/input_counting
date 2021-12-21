const remainingCharsElement = document.getElementById("remaining-chars");
const productNameInputElement = document.getElementById("product-name");

const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maxAllowedChars - enteredTextLength;

  remainingCharsElement.textContent = remainingCharacters;

  if (remainingCharacters === 0) {
    remainingCharsElement.classList.add("error");
    productNameInputElement.classList.add("error");
  } else if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
  } else {
    remainingCharsElement.classList.remove("warning");
    productNameInputElement.classList.remove("warning");
    remainingCharsElement.classList.remove("error");
    productNameInputElement.classList.remove("error");
  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);

const spanElement = document.getElementById("remaining-chars");
/*spanElement.style.color = 'red'; */

/* spanElement.classList.add('warning'); */

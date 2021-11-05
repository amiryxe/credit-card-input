document.querySelectorAll('.credit-card-inputs input').forEach(input => {
    input.addEventListener('input', () => {
        const creditCardInput = document.getElementById("credit_card_result");

        if (creditCardInput.value.length === 16) {
            document.querySelector(".copy-to-clipboard").classList.add("isComplete");
        } else {
            document.querySelector(".copy-to-clipboard").classList.remove("isComplete");
        }
    })
})

// copy credit card to clipboard
function copyCreditCardToClipboard(element) {
    const copyText = document.getElementById("credit_card_result");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    element.getElementsByTagName('span')[0].textContent = "Copied!";
    setTimeout(function () {
        element.getElementsByTagName('span')[0].textContent = "";
    }, 1500);
}
const result = [];

$(".credit-card-inputs input").on("input", (e) => {
  const pos = $(e.target).data("pos");
  const currentVal = $(e.target).val();

  if (currentVal.length > 4) {
    $(e.target).val(result[pos - 1]);
    $(e.target).next().focus();
    e.preventDefault();
    return false;
  }

  result[pos - 1] = currentVal;

  if (currentVal.length === 4) {
    $(e.target).next().focus();
  }

  $("#credit_card_result").val(result.join(""));
  toggleHideShowCopyButton();
});

$(".credit-card-inputs input").on("keydown", (e) => {
  const pos = $(e.target).data("pos");

  if (e.keyCode === 8) {
    if ($(e.target).val().length === 0 && pos > 1) {
      e.preventDefault();

      let value = result[pos - 2] ? result[pos - 2].slice(0, -1) : "";
      result[pos - 2] = value;
      $(e.target).prev().focus().val(value);
      $("#credit_card_result").val(result.join(""));
      toggleHideShowCopyButton();
    }
  }

  // prevent enter alphabetic keys
  if (
    $.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
    (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
    (e.keyCode >= 35 && e.keyCode <= 40)
  ) {
    return;
  }
  if (
    (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
    (e.keyCode < 96 || e.keyCode > 105)
  ) {
    e.preventDefault();
  }
});

// reset button handler
$(".credit-card-inputs__reset").on("click", function () {
  $(".credit-card-inputs input").val("");
  $("#credit_card_result").val("");
  result.length = 0;
});


function toggleHideShowCopyButton(){
  let creditCardInput = document.getElementById("credit_card_result");
  if (creditCardInput.value.length === 16) {
    document.querySelector(".copy-to-clipboard").classList.add("isComplete");
  } else {
    document.querySelector(".copy-to-clipboard").classList.remove("isComplete");
  }
}

// copy credit card to clipboard
function copyCreditCardToClipboard(element) {
  console.log(element.getElementsByTagName('span'));
  let copyText = document.getElementById("credit_card_result");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  element.getElementsByTagName('span')[0].textContent = "copied!";
  setTimeout(function(){
    element.getElementsByTagName('span')[0].textContent = "copy to clipboard!";
  } , 1500);
  // alert("Copied the text: " + copyText.value);
}
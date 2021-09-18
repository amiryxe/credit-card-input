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

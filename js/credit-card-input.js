const result = []

document.querySelectorAll(".credit-card-inputs input")
  .forEach(item => {
    item.addEventListener("input", (e) => {
      const pos = e.target.getAttribute('data-pos')
      const currentVal = e.target.value

      if (currentVal.length > 4) {
        e.target.value = result[pos - 1]
        // e.target.nextElementSibling.focus()

        e.preventDefault()
        return false
      }

      result[pos - 1] = currentVal;

      if (currentVal.length === 4) {
        e.target.nextElementSibling.focus()
      }

      document.querySelector("#credit_card_result").value = result.join("")
    })
  })

document.querySelectorAll(".credit-card-inputs input")
  .forEach(item => {
    item.addEventListener("keydown", (e) => {
      const pos = e.target.getAttribute('data-pos')

      if (e.keyCode === 8) {
        if (e.target.value.length === 0 && pos > 1) {
          e.preventDefault()

          const val = result[pos - 2] ? result[pos - 2].slice(0, -1) : ""
          result[pos - 2] = val

          e.target.previousElementSibling.focus().value

          document.querySelector("#credit_card_result").value = result.join("")
        }
      }

      // prevent enter alphabetic keys
      if (
        [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
        (e.keyCode >= 35 && e.keyCode <= 40)
      ) {
        return
      }

      if (
        (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
        (e.keyCode < 96 || e.keyCode > 105)
      ) {
        e.preventDefault()
      }
    })
  })

// reset button handler
document.querySelector(".credit-card-inputs__reset")
  .addEventListener("click", function () {
    document.querySelectorAll(".credit-card-inputs input").forEach(item => item.value = "")

    document.querySelector("#credit_card_result").value = ""

    result.length = 0
  });
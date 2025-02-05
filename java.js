$("#submit_form").on("click", function () {
    let eletkor = $("#age").val();
    let ar = 0
    if(eletkor < 18) {
      ar += 1500 * $("#tickets").val();
    } else {
      ar += 3000 * $("#tickets").val();
    }
    alert("Sikeres vásárlás!\nA jegy(ek) ára: " + ar + "Ft")
  })
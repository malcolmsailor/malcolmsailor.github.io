function myFunction(div_id) {
  var target_div = document.getElementById(div_id.concat("-div"));
  var closed_arrow = document.getElementById(div_id.concat("-closed-arrow"));
  var open_arrow = document.getElementById(div_id.concat("-open-arrow"))
  if (target_div.style.display === "none") {
    target_div.style.display = "inline-block";
    closed_arrow.style.display = "none";
    open_arrow.style.display = "inline";
  } else {
    target_div.style.display = "none";
    closed_arrow.style.display = "inline";
    open_arrow.style.display = "none";
  }
}

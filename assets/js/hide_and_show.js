function toggle_view(div_id) {
  function _toggle(div_id) {
    var target_div = document.getElementById(div_id.concat("-content"));
    var closed_arrow = document.getElementById(div_id.concat("-closed-arrow"));
    var open_arrow = document.getElementById(div_id.concat("-open-arrow"));
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
  _toggle(div_id);
  // The following code closes any divs that the user has not clicked on,
  // but the effect seems obnoxious!
  // var hide_and_show_divs = document.getElementsByClassName("hide-and-show");
  // for (var i = 0; i < hide_and_show_divs.length; i++) {
  //   if (hide_and_show_divs[i].id != div_id.concat("-content")) {
  //     console.log(hide_and_show_divs[i].id);
  //     if (hide_and_show_divs[i].style.display != "none") {
  //       _toggle(hide_and_show_divs[i].id.slice(0, -8));
  //     }
  //   }
  // }
}

document.addEventListener('DOMContentLoaded', function() {
  function _show_item(show_item_id, link_item) {
    toggle_view(show_item_id);
    link_item.scrollIntoView();
  }
  if(window.location.hash) {
    var item_id = window.location.hash.slice(1);
    var linked_item = document.getElementById(item_id);
    if (linked_item.closest(".hide-and-show-title") != null) {
      _show_item(linked_item.id, linked_item);
    } else {
      var item_parent = linked_item.closest(".hide-and-show");
      _show_item(item_parent.id.slice(0, -8), linked_item);
    }
  }
}, false);

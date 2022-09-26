const $save = $("#save");
const listGroup = $(".list-group");
let $name = $("#name-input");
const $li = $(".list-group-item");

$save.on("click", function () {
  if ($name.val() === "") {
    return;
  } else {
    let $li = $("<li>");
    let name = $name.val();
    $li.text(name);
    $li.attr("class", "list-group-item");
    $li.attr("id", name);
    listGroup.append($li);
    $name.val("");
  }
});

$li.on("click", function () {
  console.log("clicked");
});

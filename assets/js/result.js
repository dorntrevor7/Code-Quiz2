const $save = $("#save");
const listGroup = $(".list-group");
let $name = $("#name-input");

$save.on("click", function () {
  let $li = $("<li>");
  let name = $name.val();
  $li.text(name);
  $li.attr("class", "list-group-item");
  $li.attr("value", name);
  listGroup.append($li);
  $name.val("");
});

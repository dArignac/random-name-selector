const params = new URLSearchParams(document.location.search).get("names");
let names = ["Dieter", "Harald", "Gustav", "Ronny", "Tina", "Sindy", "Ursula"];
if (params != null) {
  names = params.split(",");
}
document.getElementById("names").innerHTML =
  "<ul><li>" + names.join("</li><li>") + "</li></ul>";

document.getElementById("action").onclick = function () {
  document.getElementById("result").innerHTML =
    "<div>And the winner is:</div><div>" +
    names[Math.floor(Math.random() * names.length)] +
    "</div>";
};

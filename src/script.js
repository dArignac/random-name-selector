const params = new URLSearchParams(document.location.search).get("names");
let names = ["Dieter", "Harald", "Gustav", "Ronny", "Tina", "Sindy", "Ursula"];

if (params != null) {
  names = params.split(",");
}

names.sort();

function generateParticipantList() {
  let out = "<ul>";
  for (let i = 0; i < names.length; i++) {
    let reducedNames = Array.from(names);
    reducedNames.splice(names.indexOf(names[i]), 1);
    out +=
      "<li><a href=" +
      window.location.origin +
      "?names=" +
      reducedNames.join(",") +
      "><i class='icon-remove'></i></a>" +
      names[i] +
      "</li>";
  }
  return out + "</ul>";
}

document.getElementById("names").innerHTML = generateParticipantList();

document.getElementById("action").onclick = function () {
  document.getElementById("result").innerHTML =
    "<div>And the winner is:</div><div>" +
    names[Math.floor(Math.random() * names.length)] +
    "</div>";
};

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
    out += `<li><div><a href="${
      window.location.origin
    }?names=${reducedNames.join(
      ","
    )}"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIiA/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwODAiIGhlaWdodD0iMTA4MCIgdmlld0JveD0iMCAwIDEwODAgMTA4MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxkZXNjPkNyZWF0ZWQgd2l0aCBGYWJyaWMuanMgNS4yLjQ8L2Rlc2M+CjxkZWZzPgo8L2RlZnM+CjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InRyYW5zcGFyZW50Ij48L3JlY3Q+CjxnIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgNTQwIDU0MCkiIGlkPSIxNjdmYTRmNy0xMTcyLTQ5N2ItOTgwNC0xOGFkNTZmMGViNTYiICA+CjxyZWN0IHN0eWxlPSJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1kYXNob2Zmc2V0OiAwOyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogNDsgZmlsbDogcmdiKDI1NSwyNTUsMjU1KTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxOyB2aXNpYmlsaXR5OiBoaWRkZW47IiB2ZWN0b3ItZWZmZWN0PSJub24tc2NhbGluZy1zdHJva2UiICB4PSItNTQwIiB5PSItNTQwIiByeD0iMCIgcnk9IjAiIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjEwODAiIC8+CjwvZz4KPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA1NDAgNTQwKSIgaWQ9Ijk4OGVlOTBmLWY4MDEtNDJjYy05NDBjLWE5YjY1NmE2MjY3MyIgID4KPC9nPgo8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxNC45NyAwIDAgMTQuOTcgNTQxLjA0IDUzOS42MSkiIGlkPSIwNDdlNDU0NC02NDYyLTQzMzMtYjdhYi1iMTA0ODMzOTU5ZTgiICA+CjxwYXRoIHN0eWxlPSJzdHJva2U6IHJnYigwLDAsMCk7IHN0cm9rZS13aWR0aDogMDsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1kYXNob2Zmc2V0OiAwOyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogNDsgZmlsbDogcmdiKDI1NSwyNTUsMjU1KTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxOyIgdmVjdG9yLWVmZmVjdD0ibm9uLXNjYWxpbmctc3Ryb2tlIiAgdHJhbnNmb3JtPSIgdHJhbnNsYXRlKC01MCwgLTUwKSIgZD0iTSAxNi4yOCAxOS45NDUgTCAxOS45NTcgMTYuMzIgQyAyMi4wNjAwMDAwMDAwMDAwMDIgMTQuMTY2IDI1LjU3ODAwMDAwMDAwMDAwMyAxNC4xNjYgMjcuNjgxIDE2LjMyIEwgNTAuMDA3MDAwMDAwMDAwMDA1IDM4LjU5NSBMIDcyLjMzMyAxNi4zMiBDIDc0LjQzNTk5OTk5OTk5OTk5IDE0LjE2NiA3Ny45NTQgMTQuMTY2IDgwLjA1NCAxNi4zMiBMIDgzLjY4IDE5Ljk0NSBDIDg1LjgzNCAyMi4wNDYgODUuODM0IDI1LjU2NjAwMDAwMDAwMDAwMyA4My42OCAyNy42NjggTCA2MS40MDUgNDkuOTkzIEwgODMuNjggNzIuMzIgQyA4NS44MzQgNzQuNDIyIDg1LjgzNCA3Ny45MzkgODMuNjggODAuMDQyOTk5OTk5OTk5OTkgTCA4MC4wNTQgODMuNzIwOTk5OTk5OTk5OTkgQyA3Ny45NTQwMDAwMDAwMDAwMSA4NS44MiA3NC40MzYgODUuODIgNzIuMzMzIDgzLjcyMDk5OTk5OTk5OTk5IEwgNTAuMDA3IDYxLjM5MyBMIDI3LjY4MSA4My43MjEgQyAyNS41NzggODUuODIwMDAwMDAwMDAwMDEgMjIuMDYwMDAwMDAwMDAwMDAyIDg1LjgyMDAwMDAwMDAwMDAxIDE5Ljk1NyA4My43MjEgTCAxNi4yOCA4MC4wNDMgQyAxNC4xODAwMDAwMDAwMDAwMDEgNzcuOTM5MDAwMDAwMDAwMDEgMTQuMTgwMDAwMDAwMDAwMDAxIDc0LjQyMjAwMDAwMDAwMDAxIDE2LjI4IDcyLjMyMDAwMDAwMDAwMDAxIEwgMzguNjA2IDQ5Ljk5MzAwMDAwMDAwMDAxIEwgMTYuMjggMjcuNjY3IEMgMTQuMTggMjUuNTY2IDE0LjE4IDIyLjA0NiAxNi4yOCAxOS45NDUgeiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiAvPgo8L2c+Cjwvc3ZnPg==" alt="Remove" /></a></div><div>${
      names[i]
    }</div></li>`;
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

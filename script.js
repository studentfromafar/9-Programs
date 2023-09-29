//Typewriting
function setupTypewriter(t) {
  var text = t.innerText;

  t.innerText = "";

  var cursor = document.createElement("span");
  cursor.innerHTML = "|";
  cursor.className = "cursor";
  t.appendChild(cursor);

  var cursorPosition = 0,
    typeSpeed = 100;

  var type = function () {
    if (cursorPosition < text.length) {
      t.insertBefore(document.createTextNode(text[cursorPosition]), cursor);
      cursorPosition++;
      setTimeout(type, typeSpeed);
    } else {
      cursor.innerHTML = ":)";
      cursor.style.animation = "blink 500ms linear infinite alternate";
    }
  };

  return {
    type: type,
  };
}

var typer = document.getElementById("typewriter");

typewriter = setupTypewriter(typer);

typer.querySelector(".cursor").innerHTML = "";

setTimeout(function () {
  typer.querySelector(".cursor").innerHTML = "|";
  typewriter.type();
}, 2000);

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // your code here
  var docBody = document.querySelector("body");

  var index = 0;
  function onKeyDownHandler(e) {
    const key = parseInt(e.which || e.detail);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        window.alert("YOU DID IT!");
        index = 0;
      }
    } else {
      index = 0;
    }
  };

docBody.addEventListener("keydown",onKeyDownHandler,false);
}

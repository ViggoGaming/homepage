// Theme switcher

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

document.onkeyup = function(e) {
  if (e.which == 86) {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.open("https://victorbuch.dk","_self");
  } else if (e.ctrlKey && e.which == 66) {
    alert("Ctrl + B shortcut combination was pressed");
  }
};


      const xOffset = 0;
      const yOffset = 0;

    function calculatePosition() {
      console.log(window.screenLeft)
      document.documentElement.style.backgroundPosition = `${
        -window.screenLeft + xOffset
      }px ${
        -window.screenTop -
        (window.outerHeight - window.innerHeight) +
        yOffset
      }px`;

      window.requestAnimationFrame(calculatePosition);
    }
    console.log("animating")
    window.requestAnimationFrame(calculatePosition);


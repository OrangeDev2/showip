var redValue = 255;
var greenValue = 0;
var blueValue = 0;

$(document).ready(function () {
    function setBackground(){
    redValue = Math.floor(Math.random() * (255 + 1) + 1);
    greenValue = Math.floor(Math.random() * (255 + 1) + 1);
    blueValue = Math.floor(Math.random() * (255 + 1) + 1);

    $("body").css(
      "background-color",
      `rgb(${redValue}, ${greenValue}, ${blueValue})`
    );

    setTimeout(setBackground, 25000);
}
setBackground();
});

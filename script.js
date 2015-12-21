var ball;
var ball2;

window.addEventListener("gamepadconnected", function(e) {

    ball = document.getElementById("ball");
    ball2 = document.getElementById("ball2");
    updateLoop();

});

function updateLoop() {

    var gp = navigator.getGamepads()[0];
    var left = (gp.axes[0] + 1) / 2 * (window.innerWidth - ball.offsetWidth);
    var right = (gp.axes[1] + 1) / 2 * (window.innerHeight - ball.offsetHeight);
    var left2 = (gp.axes[2] + 1) / 2 * (window.innerWidth - ball.offsetWidth);
    var right2 = (gp.axes[3] + 1) / 2 * (window.innerHeight - ball.offsetHeight);

    ball.style.left = left + "px";
    ball.style.top =  right + "px";
	ball2.style.left = left2 + "px";
    ball2.style.top =  right2 + "px";
    
    if (gp.buttons[6].pressed) {
        document.body.style.backgroundColor = "red";
        ball.style.border = "3px solid white";
        ball.style.color = "white";
    } else if (gp.buttons[7].pressed) {
        document.body.style.backgroundColor = "blue";
        ball2.style.border = "3px solid white";
        ball2.style.color = "white";
	} else {
        document.body.style.backgroundColor = "white";
        ball.style.border = "3px solid red";
        ball2.style.border = "3px solid blue";
        ball.style.color = "red";
        ball2.style.color = "blue";
    }

    requestAnimationFrame(updateLoop);

}
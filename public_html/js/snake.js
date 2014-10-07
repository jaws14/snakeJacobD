var snake;

var context;
var screenwidth;
var screenheight;

function gameinitialize() {
    var canvas = document.getelementbyid("games-screen");
    context = canvas.getcontext("2d");
}
screenWidth = window.innerwidth;
screenHeight = window.innerheight;

function gameloop(){
   canvas.width = screenwidth
   canvas.height= screenheight
}

function gamedraw() {
    
}
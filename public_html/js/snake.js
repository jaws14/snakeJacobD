var snake;
var snakeLength;
var snakeSize;

var context;
var screenwidth;
var screenheight;

gameInitialize();
snakeInitialize();
setInterval(gameLoop, 1000/30);  

function gameInitialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");

    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function gameLoop() {
    gameDraw();
    snakeUpdate();
    snakeDraw();
}

function gameDraw() {
    context.fillStyle = "rgb(114, 0, 255)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}

function snakeInitialize() {
    snake = [];
    snakeLength = 20;
    snakeSize = 20;

    for (var index = snakeLength - 1; index >= 0; index--) {
        snake.push({
            x: index,
            y: 0
        });
    }
}
    function snakeDraw() {
        for (var index = 0; index < snake.length; index++) {
            context.fillStyle = "black";
            context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
        }
    }

    function snakeUpdate() {
        var snakeHeadX = [0].x;
        var snakeHeadY = [0].y;
        
        snakeHeadX++;
        
        var snakeTail = snake.pop();
        snakeTail.x = snakeHeadX;
        snakeTail.Y = snakeHeadY;
        snake.unshift(snakeTail);
    }
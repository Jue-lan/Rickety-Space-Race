import Paddle from "../Game/js/paddle.js";

// creating variable for canvas from html file
let canvas = document.getElementById('gameScreen');

// next we are creating the context(ctx) variable
// this will allow me a rendering to actually draw on the canvas
let ctx = canvas.getContext('2d');

const Game_width = 800;
const Game_height = 600;

//to clear screen
ctx.clearRect(0,0,806,606)

// filling and drawing rectangle. background default color is black
// ctx.fillStyle = '#f00';
// ctx.fillRect(20, 20, 100, 100);



let paddle = new Paddle(Game_width,Game_height);

paddle.draw(ctx);

let lastTime=0;

function gameLoop(timeStamp){
    // to calculate how much time passed
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,800,600);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();


//FAILED GAME ATTEMPTS [code grave]:
// ctx.strokeStyle = #00f,
// ctx.lineWidth = ship_size/20

// ctx.beginPath(){}

// ctx.moveTo(){ 
//     return Ship.x + Ship.r * Math.cos(Ship.a);
//     return Ship.x + Ship.r * Math.sin(Ship.a) }

// ctx.lineTo(){
//     return Ship.x - Ship.r * (Math.cos(Ship.a) + Math.sin(Ship.a)) ;
//     return Ship.x + Ship.r * (Math.sin(Ship.a) - Math.cos(Ship.a)) 
// }
// //how I created the ship

// class Ship {
//     constructor(){
//         this.x= canvas.clientWidth/ 2,
//         this.y= canvas.clientHeight/ 2,
//         let ship_size = 30;,
//         this.r= ship_size/2,
//         this.a= 90/180 * Math.PI ,// convert to radians
//         this.ctx.strokeStyle = #00f,
//         this.ctx.lineWidth = ship_size/20
//          }



//     ctx.strokeStyle(){}
// }



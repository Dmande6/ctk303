

let beta = 0;
let gamma = 0;


let xPosition = 0;
let yPosition = 0;


let playerImage, backgroundImage, enemyImage;


let enemies = [];
let playerPos;

function preload() {
  playerImage = loadImage("assets/tf.png");
  backgroundImage = loadImage("assets/cyberton.webp");
  enemyImage = loadImage("assets/decept.png");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-container");

  imageMode(CENTER);
  noStroke();


  for (let i = 0; i < 40; i++) {
    enemies.push(new Enemy());
  }

  playerPos = createVector(width / 2, height - 100);
}

function draw() {
  clear();

  image(backgroundImage, width / 2, height / 2, width, height);

  if (beta !== 0 || gamma !== 0) {
    xPosition = map(gamma, -18, 18, 0, width);
    yPosition = map(beta, 25, 45, 0, height);
  } else {
    xPosition = mouseX;
    yPosition = mouseY;
  }

  xPosition = constrain(xPosition, 0, width);
  yPosition = constrain(yPosition, 0, height);

  
  playerPos.set(xPosition, yPosition);


  push();
  translate(playerPos.x, playerPos.y);
  image(playerImage, 0, 0, 120, 120);
  pop();


  for (let i = enemies.length - 1; i >= 0; i--) {
    enemies[i].move();
    enemies[i].display();

    
    if (enemies[i].pos.dist(playerPos) < 60) {
      background(255, 0, 0, 120); 
      enemies.splice(i, 1);
    }
  }

 
  if (enemies.length < 15) {
    enemies.push(new Enemy());
  }

  

}


function deviceShaken() {
  enemies = [];
  for (let i = 0; i < 40; i++) {
    enemies.push(new Enemy());
  }
}


window.addEventListener("deviceorientation", (e) => {
  beta = e.beta || 0;
  gamma = e.gamma || 0;
});


class Enemy {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D().mult(random(1.5, 4));
  }

  move() {
    this.pos.add(this.vel);

   
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

  display() {
    image(enemyImage, this.pos.x, this.pos.y, 80, 80);
  }
}

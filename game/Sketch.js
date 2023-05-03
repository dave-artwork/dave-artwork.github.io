
let ballx, bally; // Declare ball position variables
let ballSize = 50; // Declare ball size variable
let score = 0; // Initialize score variable
let img; // Declare image variable

function preload() {
  img = loadImage('https://dave-artwork.github.io/bonni.PNG'); // Load image
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(40);
  resetBall(); // Initialize ball position
}

function draw() {
  background(220);
  levelOne(); 
  text("score: " + score, width / 2, 40);
}

function levelOne() {
  text("level 1", width / 2, height - 20);
  let disToBall = dist(ballx, bally, mouseX, mouseY);
  if (disToBall < ballSize / 2) {
    resetBall(); // Move ball to new position
    score++; // Increment score
  }
  if (score > 5) {
    background(200); 
    if (img) {
      image(img, 0, 0, width, height); // Display image if it exists
    }
  }
  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
  // Ensure ball stays within canvas boundaries
  ballx = constrain(ballx, ballSize / 2, width - ballSize / 2);
  bally = constrain(bally, ballSize / 2, height - ballSize / 2);
}

function resetBall() {
  ballx = random(width);
  bally = random(height);
}


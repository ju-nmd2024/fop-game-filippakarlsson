let y = 100;
let velocity = 1;
let gravity = 0.1;
let thrust = -0.2;
let maxY = 460;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  backdrop();
  squirrel(250, y);

  //gravity
  velocity += gravity;

  //move with mouse  key
  if (keyIsDown(32)) {
    velocity += thrust;
  }

  y += velocity;

  //landing
  if (y >= maxY) {
    y = maxY;
    velocity = 0;
  }
}

//backdrop function
function backdrop() {
  background(126, 158, 166);
  // tree
  fill(107, 71, 44);
  rect(70, 18, 60, 500);
  fill(66, 114, 49);
  ellipse(44, 69, 200, 200);
  ellipse(144, 69, 200, 200);
  ellipse(44, 139, 200, 200);
  ellipse(155, 139, 200, 200);

  fill(107, 71, 44);
  rect(400, 18, 60, 500);
  fill(66, 114, 49);
  ellipse(344, 69, 200, 200);
  ellipse(444, 69, 200, 200);
  ellipse(344, 139, 200, 200);
  ellipse(455, 139, 200, 200);

  fill(107, 71, 44);
  rect(29, 353, 30, 150);
  fill(66, 114, 49);
  ellipse(11, 355, 100, 100);
  ellipse(53, 331, 100, 100);
  ellipse(53, 371, 100, 100);

  fill(107, 71, 44);
  rect(464, 380, 30, 150);
  fill(66, 114, 49);
  ellipse(451, 355, 100, 100);
  ellipse(473, 331, 100, 100);
  ellipse(483, 371, 100, 100);

  //ground
  fill(107, 71, 44);
  rect(0, 491, 500, 50);
}

// Squirrel function remains unchanged
function squirrel(x, y) {
  const s = 0.5;

  // Tail
  noStroke();
  fill(172, 127, 84);
  ellipse(x + 70 * s, y + 40 * s, 200 * s, 60 * s);

  // Body & wings
  fill(215, 171, 128);
  stroke(201, 155, 87);
  strokeWeight(2);
  beginShape();
  vertex(x - 122 * s, y - 68 * s);
  vertex(x - 17 * s, y - 78 * s);
  vertex(x + 84 * s, y - 68 * s);
  vertex(x + 63 * s, y + 5 * s);
  vertex(x + 76 * s, y + 80 * s);
  vertex(x, y + 60 * s);
  vertex(x - 50 * s, y + 80 * s);
  vertex(x - 75 * s, y);
  endShape(CLOSE);

  // Middle body
  fill(246, 216, 186);
  push();
  translate(x - 10 * s, y + 1 * s);
  rotate(-0.3);
  ellipse(0, 0, 50 * s, 122 * s);
  pop();

  // Head
  fill(215, 171, 128);
  ellipse(x - 24 * s, y - 90 * s, 115 * s, 100 * s);

  // Feet
  fill(245, 198, 183);
  ellipse(x - 120 * s, y - 70 * s, 18 * s, 18 * s);
  ellipse(x - 50 * s, y + 79 * s, 18 * s, 18 * s);
  ellipse(x + 84 * s, y - 68 * s, 18 * s, 18 * s);
  ellipse(x + 77 * s, y + 80 * s, 18 * s, 18 * s);

  // Ears
  fill(215, 171, 128);
  triangle(
    x - 73 * s,
    y - 114 * s,
    x - 88 * s,
    y - 152 * s,
    x - 60 * s,
    y - 130 * s
  );
  triangle(
    x + 5 * s,
    y - 133 * s,
    x + 28 * s,
    y - 152 * s,
    x + 21 * s,
    y - 117 * s
  );
  fill(246, 216, 186);
  triangle(
    x - 71 * s,
    y - 120 * s,
    x - 76 * s,
    y - 136 * s,
    x - 65 * s,
    y - 130 * s
  );
  triangle(
    x + 11 * s,
    y - 131 * s,
    x + 20 * s,
    y - 139 * s,
    x + 20 * s,
    y - 123 * s
  );

  // Nose
  ellipse(x - 25 * s, y - 62 * s, 10 * s, 10 * s);

  // Mouth
  noStroke();
  fill(101, 23, 23);
  ellipse(x - 25 * s, y - 50 * s, 18 * s, 10 * s);
  fill(255);
  rect(x - 28 * s, y - 55 * s, 6 * s, 5 * s);

  // Eyes
  fill(0);
  noStroke();
  rect(x - 65 * s, y - 110 * s, 30 * s, 40 * s, 30 * s, 30 * s, 3 * s, 30 * s);
  rect(x - 15 * s, y - 110 * s, 30 * s, 40 * s, 30 * s, 30 * s, 30 * s, 3 * s);
  fill(255);
  ellipse(x - 42 * s, y - 78 * s, 10 * s, 10 * s);
  ellipse(x - 7 * s, y - 78 * s, 10 * s);
  ellipse(x - 55 * s, y - 98 * s, 5 * s);
  ellipse(x + 5 * s, y - 98 * s, 5 * s);
}

//startscreen
function start() {}

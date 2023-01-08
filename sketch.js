let p;
let points = []

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  p = new Perceptron()

  for (let i = 0; i < 1000; i++) {
    points[i] = new Point(random(width), random(height))
    points[i].point()
  }
}

function draw() {
  background(20);
  stroke(250)
  line(0, 0, width, height)
  for (let i = 0; i < points.length; i++) {
    let inputs = [points[i].x, points[i].y]
    let target = points[i].side

    let guess = p.feedForward(inputs)
    if (guess === target) {
      fill(0, 255, 0)
    } else {
      fill(255, 0, 0)
    }
    noStroke()
    ellipse(points[i].x, points[i].y, 5, 5)
  }
}

function mousePressed() {
  for (let i = 0; i < points.length; i++) {
    points[i].show()
    let inputs = [points[i].x, points[i].y]
    let target = points[i].side
    p.train(inputs, target)
  }
}

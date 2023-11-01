class particle {
    constructor (x, y, destx, desty) {
        this.x = x
        this.y = y
        this.destx = destx
        this.desty = desty

        let randomNum1 = 2 * Math.PI * (random())
        let randomNum2 = 10 * random()

        this.vx = randomNum2 * Math.cos(randomNum1)
        this.vy = randomNum2 * Math.sin(randomNum1)

        this.ax = 0
        this.ay = 0.001

        this.completed = false
    }

    reInit(x, y, destx, desty) {
        this.x = x
        this.y = y
        this.destx = destx
        this.desty = desty

        let randomNum1 = 2 * Math.PI * (random())
        let randomNum2 = 10 * random()

        this.vx = randomNum2 * Math.cos(randomNum1)
        this.vy = randomNum2 * Math.sin(randomNum1)

        this.ax = 0
        this.ay = 0.001

        this.completed = false
    }

    draw() {
        fill(255,0,0)
        circle(this.x, this.y, 10)

    }

    move() {
        this.ay *= 1.1


        this.vx += this.ax
        this.vy += this.ay

        this.x += this.vx
        this.y += this.vy

        this.time *= 1.1

        if (this.y > this.desty) {
            this.completed = true
        }

    }
}

let particles = [];
let animate = false

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvasModule');

    for (let i = 0; i < 100; i++) {
        particles.push(new particle(windowWidth / 2,windowHeight / 2,windowWidth,windowHeight))
    }

    frameRate(30)
  }
  
  function draw() {
    if (animate) {
    clear()

    particles.forEach(element => {
        if (!element.completed) { 
            element.draw()
            element.move()
        }
    });
}
  }

  function completedAssignment() {
    animate = true

    particles.forEach(element => {
        element.reInit(windowWidth / 2,windowHeight / 2,windowWidth,windowHeight)
    });
  }
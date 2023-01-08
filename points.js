const SIDES = {
    top: 1,
    bottom: -1
}

class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.size = 10
    }

    point() {
        if (this.x > this.y) {
            this.side = SIDES.bottom
        } else {
            this.side = SIDES.top
        }
    }

    show() {
        stroke(0)
        if (this.side === SIDES.top) {
            fill(100)
        } else {
            fill(255)
        }
        ellipse(this.x, this.y, this.size)
    }
}
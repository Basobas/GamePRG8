class Falling implements Behaviour {
    private bird: Bird;

    constructor(b: Bird) {
        this.bird = b;
    }
    draw() {
        if (this.bird.y < 615) {
            this.bird.y += this.bird.speed;
            this.bird.speed = +5;

        }
    }
    onKeyDown(event: KeyboardEvent): void {
        if (event.keyCode == Keys.SPACE) {
            this.bird.behaviour = new Flying(this.bird);
        }
    }
    onKeyUp(event: KeyboardEvent): void {

    }
}


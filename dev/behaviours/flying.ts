class Flying implements Behaviour {
    bird: Bird;

    constructor(b: Bird) {
        this.bird = b;
    }
    draw() {
        if (this.bird.y > -20) {
            this.bird.y += this.bird.speed;
            this.bird.speed = -5;
        }
    }
    onKeyUp(event: KeyboardEvent): void {
        if (event.keyCode == Keys.SPACE) {
            this.bird.behaviour = new Falling(this.bird);
        }
    }
    onKeyDown(event: KeyboardEvent): void {

    }

}
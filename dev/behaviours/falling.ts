class Falling implements Behaviour {
    private bird: Bird;

    constructor(b: Bird) {
        this.bird = b;
    }
    draw() {
        this.bird.y += this.bird.speed;
        this.bird.speed = +3;
        if (this.bird.y > 615) {
            this.bird.behaviour = new Crashing(this.bird);
   
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


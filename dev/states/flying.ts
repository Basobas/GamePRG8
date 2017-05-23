class Flying implements Behaviour {
    bird: Bird;

    constructor(b: Bird) {
        this.bird = b;
    }
    draw() {
        this.bird.y += this.bird.speed;
        this.bird.speed = -2;
          if (this.bird.y <= -100) {
            this.bird.behaviour = new Hit(this.bird);
        }
    }
    onKeyUp(): void {
        this.bird.behaviour = new Falling(this.bird);
    }
    onKeyDown(): void {

    }

}
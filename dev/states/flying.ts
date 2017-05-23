class Flying implements Behaviour {
    bird: Bird;
   
    constructor(b: Bird) {
        this.bird = b;
    }
    draw() {
        this.bird.y += this.bird.speed;
        this.bird.speed = -2;
    }
    onKeyUp(): void {
        this.bird.behaviour = new Falling(this.bird);
    }
    onKeyDown(): void {

    }
    
}
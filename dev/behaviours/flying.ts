class Flying implements Behaviour {
    bird: Bird;

    constructor(b: Bird) {
        this.bird = b;
    }
    draw() {
        
        this.bird.speed = -48;
        this.bird.y += this.bird.speed;
          if (this.bird.y <= -100) {
            this.bird.behaviour = new Hit(this.bird);
            Game.getInstance().endGame();
        }
        this.bird.behaviour = new Falling(this.bird);
    }
    onKeyUp(): void {
        
    }
    onKeyDown(): void {

    }

}
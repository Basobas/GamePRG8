class Hit implements Behaviour {
    private bird: Bird;

    constructor(b: Bird) {
        this.bird = b;
    }
    draw() {
        
        document.getElementById("sky").classList.add("animationpaused");
        this.bird.y += this.bird.speed;
        this.bird.speed = +5;
        if (this.bird.y > 615) {
            console.log("nu");
            this.bird.speed = 0;
            Game.getInstance().endGame();
        }
    }
    onKeyDown(): void {
    }
    onKeyUp(): void {

    }
}
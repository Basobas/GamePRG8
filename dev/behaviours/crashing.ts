class Crashing implements Behaviour {
    private bird: Bird;

    constructor(b: Bird) {
        this.bird = b;

    }
    draw() {
        this.bird.speed = 0;
        document.getElementById("score").innerHTML = "GAMEOVER";
        document.getElementById("sky").classList.add("animationpaused");
        Game.getInstance().endGame();
    }
    onKeyDown(): void {

    }
    onKeyUp(): void {

    }
}
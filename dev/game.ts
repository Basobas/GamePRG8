class Game {
    private bird: Bird;
    public obstacles: Array<Obstacle>;

    constructor() {

        this.bird = new Bird();
        this.obstacles = new Array<Obstacle>();

        requestAnimationFrame(() => this.gameLoop());
        for (let i = 0; i < 5; i++) {
            this.obstacles.push(new Obstacle(i));
        }
    }

    private gameLoop() {
        for (let obstacle of this.obstacles) {
            if (Utils.checkCollision(this.bird, obstacle)) {
                this.bird.hit();
                for (let obstacle of this.obstacles) {
                    obstacle.stop();
                    document.getElementById("score").innerHTML = "Score : " + 0;
                }
            }
            obstacle.draw();
            obstacle.move();
        }

        this.bird.move();
        this.bird.draw();

        requestAnimationFrame(() => this.gameLoop());
    }
}

window.addEventListener("load", function () {
    let g: Game = new Game();
});
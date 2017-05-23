class Game {
    private bird: Bird;
    public obstacles: Array<Obstacle>;
    private static instance: Game;
    constructor() {

        this.bird = new Bird();
        this.obstacles = new Array<Obstacle>();

        requestAnimationFrame(() => this.gameLoop());
        for (let i = 0; i < 20; i++) {
            this.obstacles.push(new Obstacle(i));
        }
    }

    private gameLoop() {
        for (let obstacle of this.obstacles) {
            if (Utils.checkCollision(this.bird, obstacle)) {
                this.bird.hit();
                for (let obstacle of this.obstacles) {
                    obstacle.stop();
                    document.getElementById("score").innerHTML = "GAMEOVER!"
                }
            }
            obstacle.draw();
            obstacle.move();
        }

        this.bird.move();
        this.bird.draw();

        requestAnimationFrame(() => this.gameLoop());
    }
    public endGame(){
         for (let obstacle of this.obstacles) {
                    obstacle.stop();
                    document.getElementById("score").innerHTML = "GAMEOVER!"
                }
    }
     public static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
        }
        return Game.instance;
    }
}

window.addEventListener("load", function () {
    Game.getInstance();
});
class Game {
    private bird : Bird;

    constructor() {
        let container = document.getElementById("container");
        this.bird = new Bird(container);
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        this.bird.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
}

window.addEventListener("load", function () {
    let g:Game = new Game();
});
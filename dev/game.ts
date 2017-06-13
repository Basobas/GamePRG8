/// <reference path="views/start.ts"/>
class Game {
    public static instance: Game;
    private screen: Screens.View;

    constructor() {
    }
    public static getInstance() {
        if (!Game.instance) {
            Game.instance = new Game();
            Game.instance.showStart();
        }
        return Game.instance;
    }

    public showStart(): void {
        this.screen = new Screens.StartScreen();
    }
    public showGame(): void {
        this.screen = new Screens.GameScreen();
    }
    public gameOver(s): void {
        this.screen = new Screens.Score(s);
    }

}
window.addEventListener("load", function () {
    Game.getInstance();
});

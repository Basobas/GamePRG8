/// <reference path="gameobject.ts"/>

class Obstacle extends GameObject {

    private speed: number;

    constructor(x, y) {
        let container: HTMLElement = document.getElementById("container");
        super("obstacle", container, 200, 210, 40, 40);
        this.speed = 3.4;
        // this.x = i * 1000 + (Math.random() * 750);
        // this.y = 350;
        this.x = x;
        this.y = y;


    }
    public stop() {
        this.speed = 0;

    }
    public move(): void {
        this.x -= this.speed;
    }

}
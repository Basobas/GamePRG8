/// <reference path="gameobject.ts" />

class Bird extends GameObject {

    public behaviour: Behaviour;
    public speed: number;
    public div: HTMLElement;
    public x: number;
    public y: number;

    constructor() {
        let container: HTMLElement = document.getElementById("container");
        super("bird", container, 100, 25, 103, 150);
        this.behaviour = new Falling(this);
        this.speed = 0;
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        this.behaviour.draw();
    }

    public move() {
        this.behaviour.draw();
    }
    public hit() {
        this.behaviour = new Hit(this);
    }

    private onKeyUp(event: KeyboardEvent): void {
        console.log(event.keyCode);
        this.behaviour.onKeyUp();
    }
    private onKeyDown(event: KeyboardEvent): void {
        console.log(event.keyCode);
        this.behaviour.onKeyDown();
    }



}
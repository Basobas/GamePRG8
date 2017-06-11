/// <reference path="gameobject.ts" />

class Bird extends GameObject {

    public behaviour: Behaviour;
    public speed: number;
    public div: HTMLElement;



    constructor() {
        let container: HTMLElement = document.getElementById("container");
        super("bird", container, 100, 25, 70, 110);
        this.behaviour = new Falling(this);
        this.speed = 0;
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        this.behaviour.draw();
    }

    public move() {
        this.behaviour.draw();
    }


    private onKeyUp(event: KeyboardEvent): void {
        console.log(event.keyCode);
        this.behaviour.onKeyUp(event);
    }
    private onKeyDown(event: KeyboardEvent): void {
        console.log(event.keyCode);
        this.behaviour.onKeyDown(event);
    }

}
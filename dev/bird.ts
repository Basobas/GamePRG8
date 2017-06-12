/// <reference path="gameobject.ts" />

class Bird extends GameObject implements Observable {

    public behaviour: Behaviour;
    public speed: number;
    public div: HTMLElement;
    public observers: Array<Observer>;


    constructor() {
        let container: HTMLElement = document.getElementById("container");
        super("bird", container, 100, 25, 70, 110);

        this.behaviour = new Falling(this);
        this.speed = 0;
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        this.div.addEventListener("click", (e: MouseEvent) => this.onClick(e));
        this.behaviour.draw();
        this.observers = [];
    }

    public move() {
        this.behaviour.draw();
    }
    public stop() {
        this.div.remove();
    }


    public subscribe(o: Observer): void {
        this.observers.push(o);
    }

    public unsubscribe(): void {

    }

    private onClick(e: MouseEvent): void {
        for (let o of this.observers) {
            o.notify();
        }
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
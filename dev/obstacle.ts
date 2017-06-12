/// <reference path="gameobject.ts"/>

class Obstacle extends GameObject implements Observer {

    private speed: number;
    private bird: Bird;

    constructor(x, y, b: Bird) {
        let container: HTMLElement = document.getElementById("container");
        super("obstacle", container, 200, 210, 40, 40);
        b.subscribe(this);
        this.speed = 3.4;
        // this.x = i * 1000 + (Math.random() * 750);
        // this.y = 350;
        this.x = x;
        this.y = y;


    }
     public notify() {
        console.log('hallo ik ben notify');
        this.changeColor(300); //red
        
    }
    public stop() {
        this.div.remove();

    }
    public move(): void {
        this.x -= this.speed;
    }
    public changeColor(deg : number) : void {
        this.div.style.filter = "hue-rotate("+deg+"deg)";
    }

}
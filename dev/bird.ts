/// <reference path="hat.ts"/>

class Bird {

    public behaviour: Behaviour;
    public speed: number;
    public div: HTMLElement;
    private x: number;
    private y: number;

    constructor(parent: HTMLElement) { 
        this.div = document.createElement("bird");
        parent.appendChild(this.div);
        this.speed = 0;
        this.x = 100;
        this.y = 220;
    }


    public draw(): void {
            this.x += this.speed;
            this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }

}
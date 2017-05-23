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


    public move(){
            this.behaviour.draw();
            

            // if(this.y >= 625){
            //      this.speed = 0;
            //     this.falling = false;
            //     this.flying = false;
            //     document.getElementById("score").innerHTML = "Score : " + 0;
            //     document.getElementById("sky").classList.add("animationpaused");
            // }            

            // this.y += this.speed;
            // this.draw();
        }
           public hit(){
            this.behaviour = new Hit(this);
        }

         private onKeyUp(event: KeyboardEvent): void {
            console.log(event.keyCode);
            this.behaviour.onKeyUp();
            // if (event.keyCode == 32) {
            //     this.speed = 0;
            //     this.falling = true;
            //     this.flying = false;
                
            // }
         }
         private onKeyDown(event: KeyboardEvent): void {
             console.log(event.keyCode);
             this.behaviour.onKeyDown();
            // if (event.keyCode == 32) {
            //     this.speed = 0;
            //     this.flying = true;
            //     this.falling = false;
     
            // }
         }


   
}
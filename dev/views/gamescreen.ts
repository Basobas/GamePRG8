/// <reference path="view.ts"/>

namespace Screens {
    export class GameScreen extends View {

        private bird: Bird;
        public obstacles: Array<Obstacle>;
        private intervalID: number;

        constructor() {
            super('gamescreen');
            this.bird = new Bird();
            this.obstacles = new Array<Obstacle>();

            requestAnimationFrame(() => this.gameLoop());

            this.intervalID = setInterval(() => this.addRowOfPipes(), 3000);

        }


        public addRowOfPipes() {
            // Randomly pick a number between 1 and 9
            // This will be the hole position
            let hole = Math.floor(Math.random() * 9) + 1;
            console.log(hole);
            // Add the 9 pipes 
            // With one big hole at position 'hole' and 'hole + 1' and 'hole + 2' 3 holes
            for (let i = 0; i < 12; i++) {
                if (i != hole && i != hole + 1 && i != hole + 2) {
                    this.obstacles.push(new Obstacle(1600, i * 60 + 10));
                }
            }
        }
        // public timeout() {
        //     // setTimeout(() => {
        //     //     this.addRowOfPipes()
        //     //     this.timeout();
        //     // }, 3000);
        // }



        public gameLoop() {

        let hitCar:boolean = false;
            for (let obstacle of this.obstacles) {
                if (Utils.checkCollision(this.bird, obstacle)) {
                    hitCar = true;
                    // document.getElementById("sky").classList.add("animationpaused");
                    // for (let obstacle of this.obstacles) {
                    //     obstacle.stop();
                    //     this.endGame();
                    // }
                }
                obstacle.draw();
                obstacle.move();
            }


            this.bird.move();
            this.bird.draw();

        if(hitCar){
            this.endGame();
        } else {
            requestAnimationFrame(()=>this.gameLoop());
        }
        }

        public endGame() {
            clearInterval(this.intervalID);
                     document.getElementById("sky").classList.add("animationpaused");
                    for (let obstacle of this.obstacles) {
                        obstacle.stop();
                    }

            Game.getInstance().gameOver();

        }
    }
}
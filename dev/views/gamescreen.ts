/// <reference path="view.ts"/>

namespace Screens {
    export class GameScreen extends View {
        private score: number;
        private bird: Bird;
        public obstacles: Array<Obstacle>;
        private intervalID: number;

        constructor() {
            super('gamescreen');
            this.bird = new Bird();
            this.obstacles = new Array<Obstacle>();

            requestAnimationFrame(() => this.gameLoop());

            this.intervalID = setInterval(() => this.addRowOfPipes(), 3000);
            this.score = 0;
            console.log(window.localStorage.getItem('score'));
        }


        public addRowOfPipes() {
            let hole = Math.floor(Math.random() * 8) + 1;
            this.score += 1;
            let scoreDiv = document.getElementById("score");
            scoreDiv.innerHTML = "Score: " + this.score + " Highscore: " + window.localStorage.getItem('score');
            for (let i = 0; i < 12; i++) {
                if (i != hole && i != hole + 1 && i != hole + 2) {
                    this.obstacles.push(new Obstacle(1600, i * 60 + 10, this.bird));
                }
            }
        }


        public gameLoop() {

            let hitCar: boolean = false;

            for (let obstacle of this.obstacles) {
                if (Utils.checkCollision(this.bird, obstacle)) {
                    hitCar = true;
                }
                if (obstacle.x < -50) {
                    obstacle.stop();
                }
                obstacle.draw();
                obstacle.move();
            }


            this.bird.move();
            this.bird.draw();

            if (hitCar) {
                this.endGame();
            } else {
                requestAnimationFrame(() => this.gameLoop());
            }
        }

        public endGame() {
            clearInterval(this.intervalID);

            for (let obstacle of this.obstacles) {
                obstacle.stop();
            }
            this.bird.stop();
            Game.getInstance().gameOver(this.score);
            let scoreDiv = document.getElementById("score");
          
            scoreDiv.innerHTML = "Score: " + 0 + " Highscore: " + window.localStorage.getItem('score');

            let high = window.localStorage.getItem('score');
            let numb = +high;

            if (this.score > numb) {
                window.localStorage.setItem('score', "" + this.score);
                
            }

            console.log(window.localStorage.getItem('score'));

        }
    }
}
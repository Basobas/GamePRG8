class Crashing implements Behaviour {
    private bird: Bird;

    constructor(b: Bird) {
        this.bird = b;

    }
    draw() {
        this.bird.speed = 0;
        document.getElementById("score").innerHTML = "Score : " + 0;
        document.getElementById("sky").classList.add("animationpaused");
    }
    onKeyDown(): void {

    }
    onKeyUp(): void {

    }
}
class Start {
    

    constructor() {
        let container = document.getElementById("container");
     
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        requestAnimationFrame(() => this.gameLoop());
    }
}

window.addEventListener("load", function () {
    
});
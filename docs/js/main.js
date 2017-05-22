var Hat = (function () {
    function Hat() {
    }
    return Hat;
}());
var Bird = (function () {
    function Bird(parent) {
        this.div = document.createElement("bird");
        parent.appendChild(this.div);
        this.speed = 0;
        this.x = 100;
        this.y = 220;
    }
    Bird.prototype.draw = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return Bird;
}());
var Falling = (function () {
    function Falling() {
    }
    return Falling;
}());
var Flying = (function () {
    function Flying() {
    }
    return Flying;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.bird = new Bird(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.bird.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Obstacle = (function () {
    function Obstacle() {
    }
    return Obstacle;
}());
//# sourceMappingURL=main.js.map
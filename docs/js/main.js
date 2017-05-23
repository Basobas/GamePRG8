var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameObject = (function () {
    function GameObject(str, elm, x, y, height, width) {
        this.div = document.createElement(str);
        elm.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.draw();
    }
    GameObject.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    return GameObject;
}());
var Bird = (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        var _this = this;
        var container = document.getElementById("container");
        _this = _super.call(this, "bird", container, 100, 25, 103, 150) || this;
        _this.behaviour = new Falling(_this);
        _this.speed = 0;
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        _this.behaviour.draw();
        return _this;
    }
    Bird.prototype.move = function () {
        this.behaviour.draw();
    };
    Bird.prototype.hit = function () {
        this.behaviour = new Hit(this);
    };
    Bird.prototype.onKeyUp = function (event) {
        console.log(event.keyCode);
        this.behaviour.onKeyUp();
    };
    Bird.prototype.onKeyDown = function (event) {
        console.log(event.keyCode);
        this.behaviour.onKeyDown();
    };
    return Bird;
}(GameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.bird = new Bird();
        this.obstacles = new Array();
        requestAnimationFrame(function () { return _this.gameLoop(); });
        for (var i = 0; i < 5; i++) {
            this.obstacles.push(new Obstacle(i));
        }
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.obstacles; _i < _a.length; _i++) {
            var obstacle = _a[_i];
            if (Utils.checkCollision(this.bird, obstacle)) {
                this.bird.hit();
                for (var _b = 0, _c = this.obstacles; _b < _c.length; _b++) {
                    var obstacle_1 = _c[_b];
                    obstacle_1.stop();
                    document.getElementById("score").innerHTML = "Score : " + 0;
                }
            }
            obstacle.draw();
            obstacle.move();
        }
        this.bird.move();
        this.bird.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
var Obstacle = (function (_super) {
    __extends(Obstacle, _super);
    function Obstacle(i) {
        var _this = this;
        var container = document.getElementById("container");
        _this = _super.call(this, "obstacle", container, 200, 210, 349, 140) || this;
        _this.speed = 3.4;
        _this.x = i * 1000 + (Math.random() * 750);
        _this.y = 350;
        return _this;
    }
    Obstacle.prototype.stop = function () {
        this.speed = 0;
    };
    Obstacle.prototype.move = function () {
        this.x -= this.speed;
        this.draw();
    };
    return Obstacle;
}(GameObject));
var Utils = (function () {
    function Utils() {
    }
    Utils.checkCollision = function (instance1, instance2) {
        if (instance1.x < instance2.x + instance2.width &&
            instance1.x + instance1.width > instance2.x &&
            instance1.y < instance2.y + instance2.height &&
            instance1.height + instance1.y > instance2.y) {
            return true;
        }
        else {
            return false;
        }
    };
    return Utils;
}());
var Crashing = (function () {
    function Crashing(b) {
        this.bird = b;
    }
    Crashing.prototype.draw = function () {
        this.bird.speed = 0;
        document.getElementById("score").innerHTML = "Score : " + 0;
        document.getElementById("sky").classList.add("animationpaused");
    };
    Crashing.prototype.onKeyDown = function () {
    };
    Crashing.prototype.onKeyUp = function () {
    };
    return Crashing;
}());
var Falling = (function () {
    function Falling(b) {
        this.bird = b;
    }
    Falling.prototype.draw = function () {
        this.bird.y += this.bird.speed;
        this.bird.speed = +2;
        if (this.bird.y > 615) {
            this.bird.behaviour = new Crashing(this.bird);
        }
    };
    Falling.prototype.onKeyDown = function () {
        this.bird.behaviour = new Flying(this.bird);
    };
    Falling.prototype.onKeyUp = function () {
    };
    return Falling;
}());
var Flying = (function () {
    function Flying(b) {
        this.bird = b;
    }
    Flying.prototype.draw = function () {
        this.bird.y += this.bird.speed;
        this.bird.speed = -2;
        if (this.bird.y <= -100) {
            this.bird.behaviour = new Hit(this.bird);
        }
    };
    Flying.prototype.onKeyUp = function () {
        this.bird.behaviour = new Falling(this.bird);
    };
    Flying.prototype.onKeyDown = function () {
    };
    return Flying;
}());
var Hit = (function () {
    function Hit(b) {
        this.bird = b;
    }
    Hit.prototype.draw = function () {
        document.getElementById("sky").classList.add("animationpaused");
        this.bird.y += this.bird.speed;
        this.bird.speed = +5;
        if (this.bird.y > 615) {
            this.bird.speed = 0;
        }
    };
    Hit.prototype.onKeyDown = function () {
    };
    Hit.prototype.onKeyUp = function () {
    };
    return Hit;
}());
//# sourceMappingURL=main.js.map
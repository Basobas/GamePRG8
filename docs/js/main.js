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
        _this = _super.call(this, "bird", container, 100, 25, 70, 110) || this;
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
    Bird.prototype.onKeyUp = function (event) {
        console.log(event.keyCode);
        this.behaviour.onKeyUp(event);
    };
    Bird.prototype.onKeyDown = function (event) {
        console.log(event.keyCode);
        this.behaviour.onKeyDown(event);
    };
    return Bird;
}(GameObject));
var Keys;
(function (Keys) {
    Keys[Keys["SPACE"] = 32] = "SPACE";
    Keys[Keys["LEFT"] = 37] = "LEFT";
    Keys[Keys["RIGHT"] = 39] = "RIGHT";
})(Keys || (Keys = {}));
var Screens;
(function (Screens) {
    var View = (function () {
        function View(name) {
            this.div = document.createElement(name);
            this.container = document.getElementById('container');
            this.container.appendChild(this.div);
        }
        return View;
    }());
    Screens.View = View;
})(Screens || (Screens = {}));
var Screens;
(function (Screens) {
    var StartScreen = (function (_super) {
        __extends(StartScreen, _super);
        function StartScreen() {
            var _this = _super.call(this, 'start') || this;
            var btn = document.createElement("startbutton");
            _this.div.appendChild(btn);
            TweenLite.set(btn, { x: 650, y: -300 });
            var title = document.createElement("title");
            _this.div.appendChild(title);
            title.innerHTML = "Bird Fly";
            TweenLite.set(title, { x: 590, y: -300 });
            TweenLite.to(title, 2, { y: 50, ease: Back.easeOut });
            TweenLite.to(btn, 2, { delay: 1, y: 320, ease: Back.easeOut });
            btn.addEventListener("click", _this.onStartClick.bind(_this));
            return _this;
        }
        StartScreen.prototype.onStartClick = function () {
            this.div.remove();
            Game.getInstance().showGame();
        };
        return StartScreen;
    }(Screens.View));
    Screens.StartScreen = StartScreen;
})(Screens || (Screens = {}));
var Game = (function () {
    function Game() {
    }
    Game.getInstance = function () {
        if (!Game.instance) {
            Game.instance = new Game();
            Game.instance.showStart();
        }
        return Game.instance;
    };
    Game.prototype.showStart = function () {
        this.screen = new Screens.StartScreen();
    };
    Game.prototype.showGame = function () {
        this.screen = new Screens.GameScreen();
    };
    Game.prototype.gameOver = function () {
        this.screen = new Screens.Score();
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
var Obstacle = (function (_super) {
    __extends(Obstacle, _super);
    function Obstacle(x, y) {
        var _this = this;
        var container = document.getElementById("container");
        _this = _super.call(this, "obstacle", container, 200, 210, 40, 40) || this;
        _this.speed = 3.4;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    Obstacle.prototype.stop = function () {
        this.speed = 0;
    };
    Obstacle.prototype.move = function () {
        this.x -= this.speed;
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
        document.getElementById("score").innerHTML = "GAMEOVER";
        document.getElementById("sky").classList.add("animationpaused");
    };
    Crashing.prototype.onKeyDown = function (event) {
    };
    Crashing.prototype.onKeyUp = function (event) {
    };
    return Crashing;
}());
var Falling = (function () {
    function Falling(b) {
        this.bird = b;
    }
    Falling.prototype.draw = function () {
        this.bird.y += this.bird.speed;
        this.bird.speed = +3;
        if (this.bird.y > 615) {
            this.bird.behaviour = new Crashing(this.bird);
        }
    };
    Falling.prototype.onKeyDown = function (event) {
        if (event.keyCode == Keys.SPACE) {
            this.bird.behaviour = new Flying(this.bird);
        }
    };
    Falling.prototype.onKeyUp = function (event) {
    };
    return Falling;
}());
var Flying = (function () {
    function Flying(b) {
        this.bird = b;
    }
    Flying.prototype.draw = function () {
        this.bird.y += this.bird.speed;
        this.bird.speed = -3;
        if (this.bird.y <= -100) {
            this.bird.behaviour = new Hit(this.bird);
        }
    };
    Flying.prototype.onKeyUp = function (event) {
        if (event.keyCode == Keys.SPACE) {
            this.bird.behaviour = new Falling(this.bird);
        }
    };
    Flying.prototype.onKeyDown = function (event) {
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
    Hit.prototype.onKeyDown = function (event) {
    };
    Hit.prototype.onKeyUp = function (event) {
    };
    return Hit;
}());
var Screens;
(function (Screens) {
    var GameScreen = (function (_super) {
        __extends(GameScreen, _super);
        function GameScreen() {
            var _this = _super.call(this, 'gamescreen') || this;
            _this.bird = new Bird();
            _this.obstacles = new Array();
            requestAnimationFrame(function () { return _this.gameLoop(); });
            _this.intervalID = setInterval(function () { return _this.addRowOfPipes(); }, 3000);
            return _this;
        }
        GameScreen.prototype.addRowOfPipes = function () {
            var hole = Math.floor(Math.random() * 9) + 1;
            console.log(hole);
            for (var i = 0; i < 12; i++) {
                if (i != hole && i != hole + 1 && i != hole + 2) {
                    this.obstacles.push(new Obstacle(1600, i * 60 + 10));
                }
            }
        };
        GameScreen.prototype.gameLoop = function () {
            var _this = this;
            var hitCar = false;
            for (var _i = 0, _a = this.obstacles; _i < _a.length; _i++) {
                var obstacle = _a[_i];
                if (Utils.checkCollision(this.bird, obstacle)) {
                    hitCar = true;
                }
                obstacle.draw();
                obstacle.move();
            }
            this.bird.move();
            this.bird.draw();
            if (hitCar) {
                this.endGame();
            }
            else {
                requestAnimationFrame(function () { return _this.gameLoop(); });
            }
        };
        GameScreen.prototype.endGame = function () {
            clearInterval(this.intervalID);
            document.getElementById("sky").classList.add("animationpaused");
            for (var _i = 0, _a = this.obstacles; _i < _a.length; _i++) {
                var obstacle = _a[_i];
                obstacle.stop();
            }
            Game.getInstance().gameOver();
        };
        return GameScreen;
    }(Screens.View));
    Screens.GameScreen = GameScreen;
})(Screens || (Screens = {}));
var Screens;
(function (Screens) {
    var Score = (function (_super) {
        __extends(Score, _super);
        function Score() {
            var _this = _super.call(this, 'gameover') || this;
            var btn = document.createElement("restart");
            _this.div.appendChild(btn);
            TweenLite.set(btn, { x: 650, y: -300 });
            var title = document.createElement("title");
            _this.div.appendChild(title);
            title.innerHTML = "Bird Fly";
            TweenLite.set(title, { x: 590, y: -300 });
            TweenLite.to(title, 2, { y: 50, ease: Back.easeOut });
            TweenLite.to(btn, 2, { delay: 1, y: 320, ease: Back.easeOut });
            return _this;
        }
        return Score;
    }(Screens.View));
    Screens.Score = Score;
})(Screens || (Screens = {}));
//# sourceMappingURL=main.js.map
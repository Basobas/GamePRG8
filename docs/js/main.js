var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _super.call(this, "bird", container, 100, 25, 70, 110);
        this.behaviour = new Falling(this);
        this.speed = 0;
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        this.div.addEventListener("click", function (e) { return _this.onClick(e); });
        this.behaviour.draw();
        this.observers = [];
    }
    Bird.prototype.move = function () {
        this.behaviour.draw();
    };
    Bird.prototype.stop = function () {
        this.div.remove();
    };
    Bird.prototype.subscribe = function (o) {
        this.observers.push(o);
    };
    Bird.prototype.unsubscribe = function () {
    };
    Bird.prototype.onClick = function (e) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var o = _a[_i];
            o.notify();
        }
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
            var _this = this;
            _super.call(this, 'start');
            var btn = document.createElement("startbutton");
            this.div.appendChild(btn);
            TweenLite.set(btn, { x: 650, y: -300 });
            var title = document.createElement("title");
            this.div.appendChild(title);
            title.innerHTML = "Bird Fly";
            TweenLite.set(title, { x: 590, y: -300 });
            TweenLite.to(title, 2, { y: 50, ease: Back.easeOut });
            TweenLite.to(btn, 2, { delay: 1, y: 320, ease: Back.easeOut });
            btn.addEventListener("click", function (e) { return _this.onClick(e); });
        }
        StartScreen.prototype.onClick = function (e) {
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
    Game.prototype.gameOver = function (s) {
        this.screen = new Screens.Score(s);
    };
    return Game;
}());
window.addEventListener("load", function () {
    Game.getInstance();
});
var Obstacle = (function (_super) {
    __extends(Obstacle, _super);
    function Obstacle(x, y, b) {
        var container = document.getElementById("container");
        _super.call(this, "obstacle", container, 200, 210, 40, 40);
        b.subscribe(this);
        this.speed = 3.4;
        this.x = x;
        this.y = y;
    }
    Obstacle.prototype.notify = function () {
        console.log('hallo ik ben notify');
        this.changeColor(300);
    };
    Obstacle.prototype.stop = function () {
        this.div.remove();
    };
    Obstacle.prototype.move = function () {
        this.x -= this.speed;
    };
    Obstacle.prototype.changeColor = function (deg) {
        this.div.style.filter = "hue-rotate(" + deg + "deg)";
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
    Utils.checkBorderCollision = function (instance1) {
        if (instance1.y < -50) {
            return true;
        }
        else if (instance1.y > 620) {
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
        if (this.bird.y < 615) {
            this.bird.y += this.bird.speed;
            this.bird.speed = +5;
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
        if (this.bird.y > -20) {
            this.bird.y += this.bird.speed;
            this.bird.speed = -5;
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
var Screens;
(function (Screens) {
    var GameScreen = (function (_super) {
        __extends(GameScreen, _super);
        function GameScreen() {
            var _this = this;
            _super.call(this, 'gamescreen');
            this.bird = new Bird();
            this.obstacles = new Array();
            requestAnimationFrame(function () { return _this.gameLoop(); });
            this.intervalID = setInterval(function () { return _this.addRowOfPipes(); }, 3000);
            this.score = 0;
            console.log(window.localStorage.getItem('score'));
        }
        GameScreen.prototype.addRowOfPipes = function () {
            var hole = Math.floor(Math.random() * 8) + 1;
            this.score += 1;
            var scoreDiv = document.getElementById("score");
            scoreDiv.innerHTML = "Score: " + this.score + " Highscore: " + window.localStorage.getItem('score');
            for (var i = 0; i < 12; i++) {
                if (i != hole && i != hole + 1 && i != hole + 2) {
                    this.obstacles.push(new Obstacle(1600, i * 60 + 10, this.bird));
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
            }
            else {
                requestAnimationFrame(function () { return _this.gameLoop(); });
            }
        };
        GameScreen.prototype.endGame = function () {
            clearInterval(this.intervalID);
            for (var _i = 0, _a = this.obstacles; _i < _a.length; _i++) {
                var obstacle = _a[_i];
                obstacle.stop();
            }
            this.bird.stop();
            Game.getInstance().gameOver(this.score);
            var scoreDiv = document.getElementById("score");
            scoreDiv.innerHTML = "Score: " + 0 + " Highscore: " + window.localStorage.getItem('score');
            var high = window.localStorage.getItem('score');
            var numb = +high;
            if (this.score > numb) {
                window.localStorage.setItem('score', "" + this.score);
            }
            console.log(window.localStorage.getItem('score'));
        };
        return GameScreen;
    }(Screens.View));
    Screens.GameScreen = GameScreen;
})(Screens || (Screens = {}));
var Screens;
(function (Screens) {
    var Score = (function (_super) {
        __extends(Score, _super);
        function Score(s) {
            var _this = this;
            _super.call(this, 'gameover');
            var btn = document.createElement("restart");
            this.div.appendChild(btn);
            TweenLite.set(btn, { x: 650, y: -300 });
            var title = document.createElement("title");
            this.div.appendChild(title);
            title.innerHTML = "Game Over";
            TweenLite.set(title, { x: 490, y: -300 });
            var gameoverscore = document.createElement("gameoverscore");
            this.div.appendChild(gameoverscore);
            gameoverscore.innerHTML = "Score: " + s;
            TweenLite.set(gameoverscore, { x: 490, y: -300 });
            var highscore = document.createElement("highscore");
            this.div.appendChild(highscore);
            var h = window.localStorage.getItem('score');
            highscore.innerHTML = "Highscore: " + h;
            TweenLite.set(highscore, { x: 490, y: -300 });
            TweenLite.set(gameoverscore, { x: 490, y: -300 });
            TweenLite.to(title, 2, { y: 50, ease: Back.easeOut });
            TweenLite.to(gameoverscore, 2, { y: 200, ease: Back.easeOut });
            TweenLite.to(highscore, 2, { y: 300, ease: Back.easeOut });
            TweenLite.to(btn, 2, { delay: 1, y: 420, ease: Back.easeOut });
            btn.addEventListener("click", function (e) { return _this.onClick(e); });
        }
        Score.prototype.onClick = function (e) {
            this.div.remove();
            Game.getInstance().showGame();
        };
        return Score;
    }(Screens.View));
    Screens.Score = Score;
})(Screens || (Screens = {}));
//# sourceMappingURL=main.js.map
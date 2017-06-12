/// <reference path="view.ts"/>

namespace Screens {
    export class Score extends View {
        constructor() {
            super('gameover');
            let btn = document.createElement("restart");
            this.div.appendChild(btn);
            TweenLite.set(btn, {x:650, y:-300});

            let title = document.createElement("title");
            this.div.appendChild(title);
            title.innerHTML = "Game Over"
            TweenLite.set(title, {x:490, y:-300});


            let gameoverscore = document.createElement("gameoverscore");
            this.div.appendChild(gameoverscore);
            gameoverscore.innerHTML = "Score:"
            TweenLite.set(gameoverscore, {x:490, y:-300});

            TweenLite.to(title, 2, {y: 50, ease: Back.easeOut});
            TweenLite.to(gameoverscore, 2, {y: 200, ease: Back.easeOut});
            TweenLite.to(btn, 2, {delay:1, y:320, ease: Back.easeOut});

 
        }



        }
    }
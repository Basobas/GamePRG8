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
            title.innerHTML = "Bird Fly"
            TweenLite.set(title, {x:590, y:-300});

            TweenLite.to(title, 2, {y: 50, ease: Back.easeOut});
            TweenLite.to(btn, 2, {delay:1, y:320, ease: Back.easeOut});

 
        }



        }
    }
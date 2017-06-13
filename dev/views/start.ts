/// <reference path="view.ts"/>

namespace Screens {
    export class StartScreen extends View {
        constructor() {
            super('start');


            let btn = document.createElement("startbutton");
            this.div.appendChild(btn);
            TweenLite.set(btn, { x: 650, y: -300 });

            let title = document.createElement("title");
            this.div.appendChild(title);
            title.innerHTML = "Bird Fly"
            TweenLite.set(title, { x: 590, y: -300 });

            TweenLite.to(title, 2, { y: 50, ease: Back.easeOut });
            TweenLite.to(btn, 2, { delay: 1, y: 320, ease: Back.easeOut });

            btn.addEventListener("click", (e: MouseEvent) => this.onClick(e));

        }
    public onClick(e: MouseEvent): void {
        this.div.remove();
            Game.getInstance().showGame();
       
    }
    }
}
abstract class GameObject {
    protected div: HTMLElement;
    public x: number;
    public y: number;
    public height: number;
    public width: number;


    constructor(str: string, elm: HTMLElement, x: number, y: number, height: number, width: number) {
        this.div = document.createElement(str);
        elm.appendChild(this.div);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.draw();

    }
    public draw(): void {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";

    }

} 

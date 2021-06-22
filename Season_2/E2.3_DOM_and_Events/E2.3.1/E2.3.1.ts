namespace E2_3_1 {
    function cRect(): void {
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("rect");

        div.style.top = getRandom(0, 500) + "px";
        div.style.left = getRandom(0, 500) + "px";
        div.style.width = getRandom(20, 200) + "px";
        div.style.height = getRandom(20, 200) + "px";

        div.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

        document.body.appendChild(div);
    }

    document.getElementById("new").addEventListener("click", cRect);
    document.getElementById("rset").addEventListener("click", rset);

    function cInitRect(): void {
        for (let i: number = 0; i < 0; i++) {
        cRect();
        }
    }
    cInitRect();

    function getRandom(_min: number, _max: number): number {
        return Math.floor(Math.random() * (_max - _min) + _min);
    }

    function rset(): void {
        let oldRects: NodeListOf<Element> = document.querySelectorAll("div.rect");
        for (let oldRect of oldRects) {
            oldRect.remove();
        }
        cInitRect();
    }
}

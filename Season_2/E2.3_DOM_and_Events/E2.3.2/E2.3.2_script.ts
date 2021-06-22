namespace E2_3_2 {
    function createPartDiv(_part: Lightsaberparts, _index: number): HTMLDivElement {
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("Lightsaberparts");

        let img: HTMLImageElement = document.createElement("img");
        img.src = _part.image;
        div.appendChild(img);
  
        let span: HTMLSpanElement = document.createElement("span");
        span.innerText = _part.origin;
        div.appendChild(span);

        let btn: HTMLButtonElement = document.createElement("button");
        btn.innerText = "Select";
        btn.addEventListener("click", hselect);
        btn.addEventListener("click", hselect2);
        btn.dataset.index = _index.toString();

        div.appendChild(btn);
  
        return div;

        function hselect(_e: Event): void {
        console.log("Function 1", _part);
        }
    }

    function hselect2(_e: Event): void {
        let target: HTMLElement = <HTMLElement> _e.currentTarget;
        let index: number = Number(target.dataset.index);
  
        console.log("Function 2 A", parts.A_Sabers[index]);
        console.log("Function 2 B", parts.B_Tops[index]);
        console.log("Function 2 C", parts.C_Connectors[index]);
        console.log("Function 2 D", parts.D_Bottoms[index]);
    }
  
    function options(_parts: Lightsaberparts[]): void {
        let wrapper: HTMLDivElement = <HTMLDivElement> document.getElementById("selection_box");
        for (let i: number = 0; i < _parts.length; i++) {
            let div: HTMLDivElement = createPartDiv(_parts[i], i);
            wrapper.appendChild(div);
        }
    }
  
    options(parts.A_Sabers);
    options(parts.B_Tops);
    options(parts.C_Connectors);
    options(parts.D_Bottoms);
}
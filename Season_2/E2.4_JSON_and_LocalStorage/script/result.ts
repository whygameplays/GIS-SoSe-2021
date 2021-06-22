namespace E2_4 {
  let selection: Selection = {};
  let storeSelect: string = localStorage.getItem("selection");
  if (storeSelect) {
    selection = JSON.parse(storeSelect);
  }

  let wrap: HTMLDivElement = <HTMLDivElement>document.getElementById("resultDisplay");

  if (selection.saber) { wrap.appendChild(createImage(selection.saber.image)); }
  if (selection.top) { wrap.appendChild(createImage(selection.top.image)); }
  if (selection.connector) { wrap.appendChild(createImage(selection.connector.image)); }
  if (selection.connector) { wrap.appendChild(createImage(selection.bottom.image)); }

  function createImage(_src: string): HTMLImageElement {
    let img: HTMLImageElement = document.createElement("img");
    img.src = _src;
    return img;
  }

  document.getElementById("tryagain").addEventListener("click", restart);

  function restart(): void {
    localStorage.clear();
    window.location.assign("./E2.4.html");
  }
}
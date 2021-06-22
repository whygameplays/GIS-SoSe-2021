namespace E2_4 {
  let parts: AllParts;

  function loadJSON(): void {
    parts = JSON.parse(partsJSON);
  }
  loadJSON();

  let selection: Selection = {};
  let storedSelection: string = localStorage.getItem("selection");
  if (storedSelection) {
    selection = JSON.parse(storedSelection);
  }

  let cParts: SaberPart[] = [];
  let cPart: string = "";

  switch (document.title) {
    case "LSC - Sabers":
      cPart = "saber";
      cParts = parts.sabers;
      break;

    case "LSC - Tops":
      cPart = "top";
      cParts = parts.tops;
      break;

    case "LSC - Connectors":
      cPart = "connector";
      cParts = parts.connectors;
      break;

    case "LSC - Bottoms":
      cPart = "bottom";
      cParts = parts.bottoms;
      break;

    default:
      break;
  }

  showPossibilities(cParts);

  function createPartDiv(_part: SaberPart): HTMLDivElement {
    let div: HTMLDivElement = document.createElement("div");
    div.classList.add("saberpart");
    let img: HTMLImageElement = document.createElement("img");
    img.src = _part.image;
    div.appendChild(img);
    let span: HTMLSpanElement = document.createElement("span");
    span.innerText = _part.origin;
    div.appendChild(span);
    let btn: HTMLButtonElement = document.createElement("button");
    btn.innerText = "Select";
    btn.addEventListener("click", handleSelection);
    div.appendChild(btn);
    return div;


    function handleSelection(_e: Event): void {
      switch (cPart) {
        case "saber":
          selection.saber = _part;
          break;

        case "top":
          selection.top = _part;
          break;

        case "connector":
          selection.connector = _part;
          break;

        case "bottom":
          selection.bottom = _part;
          break;
      }

      localStorage.setItem("selection", JSON.stringify(selection));

      switch (cPart) {
        case "saber":
          window.location.assign("./LSC_tops.html");
          break;

        case "top":
          window.location.assign("./LSC_connectors.html");
          break;

        case "connector":
          window.location.assign("./LSC_bottoms.html");
          break;

        case "bottom":
          window.location.assign("./LSC_result.html");
          break;
      }
    }
  }


  function showPossibilities(_parts: SaberPart[]): void {
    let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("selectionWrapper");
    for (let i: number = 0; i < _parts.length; i++) {
      let div: HTMLDivElement = createPartDiv(_parts[i]);
      wrapper.appendChild(div);
    }
  }

  let selectPrev: HTMLElement = <HTMLElement>document.getElementById("alreadySelected");

  if (selection.saber) { selectPrev.appendChild(createImage(selection.saber.image)); }
  if (selection.top) { selectPrev.appendChild(createImage(selection.top.image)); }
  if (selection.connector) { selectPrev.appendChild(createImage(selection.connector.image)); }
  if (selection.connector) { selectPrev.appendChild(createImage(selection.bottom.image)); }

  function createImage(_src: string): HTMLImageElement {
    let img: HTMLImageElement = document.createElement("img");
    img.src = _src;
    return img;
  }
}
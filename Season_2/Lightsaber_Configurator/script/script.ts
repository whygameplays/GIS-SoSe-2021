namespace E2_5 {
  let parts: AllParts;
  let selection: Selection = {};
  let storedSelection: string = localStorage.getItem("selection");
  let cParts: SaberPart[] = [];
  let cPart: string = "";
  let responseJSON: string = "";


  if (storedSelection) {
    selection = JSON.parse(storedSelection);
  }

  async function getData(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    console.log("Response", response);
    responseJSON = await response.text();
    parts = JSON.parse(responseJSON);
    console.log(parts);
  }
  
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

  getData("https://whygameplays.github.io/GIS-SoSe-2021/Season_2/Lightsaber_Configurator/script/data.json").then ( function (): void {
    parts = JSON.parse(responseJSON);
    console.log(parts);

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
    
    if (localStorage) {
      let selectPrev: HTMLElement = document.getElementById("alreadySelected");
      if (selection.saber) { selectPrev.appendChild(createImage(selection.saber.image)); }
      if (selection.top) { selectPrev.appendChild(createImage(selection.top.image)); }
      if (selection.connector) { selectPrev.appendChild(createImage(selection.connector.image)); }
      if (selection.bottom) { selectPrev.appendChild(createImage(selection.bottom.image)); }
    }
      
  });


  function showPossibilities(_parts: SaberPart[]): void {
    let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("selectionWrapper");
    for (let i: number = 0; i < _parts.length; i++) {
      let div: HTMLDivElement = createPartDiv(_parts[i]);
      wrapper.appendChild(div);
    }
  }


  function createImage(_src: string): HTMLImageElement {
    let img: HTMLImageElement = document.createElement("img");
    img.src = _src;
    return img;
  }
}
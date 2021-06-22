namespace E2_5 {
  let selection: Selection = {};
  let storeSelect: string = localStorage.getItem("selection");
  if (storeSelect) {
    selection = JSON.parse(storeSelect);
  }

  export interface Answer {
    [key: string]: string;
  }
  
  async function sendRequest(_url: RequestInfo): Promise <void> {
    let query: URLSearchParams = new URLSearchParams(localStorage);
    _url = _url + "?" + query.toString();
    let response: Response = await fetch(_url);
    let output: Answer = await response.json();
    let displayResponse: HTMLDivElement = <HTMLParagraphElement>document.getElementById("selectionWrapper");
    if (output.error) {
        displayResponse.classList.add("error");
        displayResponse.innerText = output.error;
    }
    
    else {
        displayResponse.classList.add("message");
        displayResponse.innerText = output.message;
    }
  }
  sendRequest("https://gis-communication.herokuapp.com");

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
    window.location.assign("./E2.5.html");
  }
}
namespace E3_2 {
    let formData: FormData;
    let url: string;

    interface Data {
        name: string;
        email: string;
        date: string;
        time: string;
        message: number;
    }

    // FUNKTION: Legt die URL für den Server fest, an welchen die Daten gesendet und von welchem diese wieder empfangen werden
    function serverURL(): void {
        url = "https://whygis-sose-2021.herokuapp.com/";
    }

    let submitHTML: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submitHTML");
    submitHTML.addEventListener("click", submitHTMLdata);
    let submitJSON: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submitHTLM");
    submitJSON.addEventListener("click", submitJSONdata);

    // FUNKTION: Empfängt URL, wandelt diese in plain HTML um und schickt diese wieder zurück
    async function submitHTMLdata(): Promise<void> {
        formData = new FormData(document.forms[0]);
        serverURL();

        // tslint:disable-next-line
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url += "/html" + "?" + query.toString();

        let response: Response = await fetch(url);
        let answer: string = await response.text();
        let display: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("response");
        display.innerText = answer;
    }

    // FUNKTION: Empfängt URL, wandelt diese in einen JSON string um und schickt diese wieder zurück
    async function submitJSONdata(): Promise<void> {
        formData = new FormData(document.forms[0]);
        serverURL();

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        url += "/json" + "?" + query.toString();

        let response: Response = await fetch(url);                                                     
        let outConsoleJSON: Data = await response.json();                                                      
        console.log(outConsoleJSON);
    }
}
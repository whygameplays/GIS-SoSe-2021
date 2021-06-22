namespace E3_2 {
    //const serverOutContainer = document.getElementById("serverOutContainer");
    const serverOutHeader = document.getElementsByClassName("serverOutHeader");
    const serverOutText = document.getElementsByClassName("serverOutText");

    let formData: FormData;
    let url: string;
    document.getElementById("submitHTML").addEventListener("click", handleClickHTML);
    document.getElementById("submitJSON").addEventListener("click", handleClickJSON);

    async function handleClickHTML(): Promise<void> {
        serverOutHeader[0].innerHTML = "Server output - HTML:";
        handleRequest(true);
    }

    async function handleClickJSON(): Promise<void> {
        serverOutHeader[0].innerHTML = "Server output - JSON:";
        handleRequest(false);
    }

    function setURL(): void {
        url = "https://whygis-sose-2021.herokuapp.com/";
    }

    async function handleRequest(isHTML: boolean): Promise<void> {
        setURL();
        formData = new FormData(document.forms[0]);

        let query: URLSearchParams = new URLSearchParams(<any>formData);
        if (isHTML) {
            url += "/html" + "?" + query.toString();
            let response: Response = await fetch(url);
            let responseString: string = await response.text();
            console.log("Response String:", responseString);
            serverOutText[1].innerHTML = responseString;
        }
        
        else {
            url += "/json" + "?" + query.toString();
            let response: Response = await fetch(url);
            let responseJSON: string = await response.json();
            console.log("Response JSON", responseJSON);
            serverOutText[1].innerHTML = "Look in the console of this page to see the restult!";
        }
        setURL();
    }
}
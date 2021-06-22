namespace E3_4 {
    let formData: FormData;
    let url: string;
    let fdata: FData;

    interface FData {
        name: string;
        email: string;
        token: string;
        date: string;
        time: string;
        message: string;
    }

    function setServerURL(): void {
        url = "https://whygis-sose-2021-e3-4.herokuapp.com";
    }

    document.getElementById("submitToDB").addEventListener("click", submitToDB);
    function submitToDB(): void {
        handleRequest(0);
    }

    document.getElementById("receiveFromDB").addEventListener("click", receiveFromDB);
    function receiveFromDB(): void {
        handleRequest(1);
    }

    document.getElementById("deleteInDB").addEventListener("click", deleteInDB);
    function deleteInDB(): void {
        handleRequest(2);
        deletedInfo();
    }

    async function handleRequest(type: number): Promise<void> {
        setServerURL();

        formData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        if (type == 0) {
            url += "/submitToDB" + "?" + query.toString();
            let response: Response = await fetch(url);
            let replyString: string = await response.text();
            console.log("SUBMITTED: Data to database: ", fdata);
            console.log("URL:", url);
            document.getElementById("output").innerHTML += replyString + "\n\n";
        }
        
        else if (type == 1) {
            url += "/receiveFromDB" + "?" + query.toString();
            let reply: Response = await fetch(url);
            let replyJSON: FData = await reply.json();
            document.getElementById("output").innerHTML += JSON.stringify(replyJSON) + "\n\n";
            console.log("RECEIVED: All Data from Database\nURL: " + url);
        }
        
        else {
            url += "/deleteInDB" + "?" + query.toString();
            let reply: Response = await fetch(url);
            let replyString: string = await reply.text();
            console.log("DELETET: All database entrys connected to this request token (" + fdata.token + ")\nURL: " + url);
            document.getElementById("output").innerHTML += replyString + "\n\n";
        }
        setServerURL();
    }

    function deletedInfo(): void {
        document.getElementById("output").innerHTML += "INFO: Entrys will be deletet by your request token.\n";
    }
}
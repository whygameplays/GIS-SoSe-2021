import * as Mongo from "mongodb";
import * as Http from "http";
import * as Url from "url";

export namespace E3_4 {
    let databaseURL: string = "mongodb+srv://testuser:isOAoCxzMx4YV0fk@whygameplays.iba9w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let mongoDBDatabase: string = "E3-4";
    let mongoDBCollection: string = "FormData";

    interface FData {
        name: string;
        email: string;
        token: string;
        date: string;
        time: string;
        message: string;
    }

    console.log("--- STARTING SERVER ---");
    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("---     IDELING     ---");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("---    LISTENING    ---");
        
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let fdata: FData = {
                name: url.query.name + "",
                email: url.query.email + "",
                token: url.query.token + "",
                date: url.query.date + "",
                time: url.query.time + "",
                message: url.query.message + ""
            };

            if (url.pathname == "/submitToDB") {
                let response: string = await submitToDB(fdata);
                _response.write(response);
            }

            if (url.pathname == "/receiveFromDB") {
                let response: FData[] = await receiveFromDB();
                _response.write(JSON.stringify(response));
            }

            if (url.pathname == "/deleteInDB") {
                let response: string = await deleteInDB(fdata);
                _response.write(response);
            }
            _response.end();
        }
    }

    async function connectToDB(): Promise<Mongo.Collection> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseURL, options);

        await mongoClient.connect();
        let requestData: Mongo.Collection = mongoClient.db(mongoDBDatabase).collection(mongoDBCollection);
        return requestData;
    }

    async function submitToDB(fdata: FData): Promise<string> {
        let requestData: Mongo.Collection = await connectToDB();
        let output: string = "";
        requestData.insertOne(fdata);
        output = "DATA INPUT: " + fdata.name + " (" + fdata.token + ") " + "addet to database";
        return output;
    }

    async function receiveFromDB(): Promise<FData[]> {
        let requestData: Mongo.Collection = await connectToDB();
        let cursor: Mongo.Cursor = requestData.find();
        let result: FData[] = await cursor.toArray();
        return result;
    }

    async function deleteInDB(fdata: FData): Promise<string> {
        let requestData: Mongo.Collection = await connectToDB();
        let output: string = "";
        requestData.deleteOne({ "token": fdata.token });
        output = "DELETET: All entrys connected to this request token (" + fdata.token + ")";
        return output;
    }
}
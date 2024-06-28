// imports
import * as dotenv from "dotenv";
import path from "path";
import express from "express";

// configures env variables
dotenv.config();
// local imports
import { dialogueRouter } from "./controllers/dialogueRouter";


// sets the port for the server to use
let portNum : number = 3000;
if(process.env.PORT){
  portNum = parseInt(process.env.PORT as string)
} else if(process.env.NODE_PORT){
  portNum = parseInt(process.env.NODE_PORT as string)
}
const PORT : number = portNum

const app = express();

// static assets folder
app.use('/assets', express.static(path.resolve(`${__dirname}/../hosted/`)));

// disabling x-powered-by header
app.disable('x-powered-by');

// routing
app.use('/', dialogueRouter);

// start app listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
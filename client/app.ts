// imports
import path from "path";
import express from "express";
import session from "express-session";
import Villager from "../data/structs/Villager";
import NpcVillager from "../data/structs/NpcVillager";
import { Fruit } from "../data/enums/Fruit";

declare module "express-session" {
    interface SessionData {
      player: Villager;
      villagers: NpcVillager[];
      localFruit:Fruit;
    }
}

// sets the port for the server to use
let portNum : number = 3001;
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


// start app listening
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
import GrammerBuilder from "./Builders/GrammerBuilder";
import Villager from "./Villager";
import { baseGrammer } from "../grammers/BaseGrammer";

export default class GrammerFactory{
    static getGrammer(villager:Villager):GrammerBuilder{
        var grammar = new GrammerBuilder({
            name: [villager.name],
            "catch-phrase": [villager.catchphrase],
            ...baseGrammer
        });
        return grammar;
    }
}
import GrammerBuilder from "./Builders/GrammerBuilder";
import TraceryBuilder from "./Builders/TraceryBuilder";
import GrammerFactory from "./GrammarFactory";
import Villager from "./Villager";

var customModiferes = require("../helpers/customModifiers");

export default class Generator{
    villager:Villager;
    builder:GrammerBuilder;

    constructor(villager:Villager){
        this.villager = villager;
        this.builder = new GrammerBuilder({});
    }

    async createBuilder():Promise<Generator>{
        this.builder = await GrammerFactory.getGrammer(this.villager);
        return this;
    }

    generate(options:TraceryBuilder){
        this.builder.addObject(options);
        var grammar = this.builder.build();

        grammar.addModifiers(customModiferes);
        
        return grammar.flatten("#origin#");
    }
}

module.exports = Generator;
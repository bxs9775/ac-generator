import GrammerBuilder from "./Builders/GrammerBuilder";
import TraceryBuilder from "./Builders/TraceryBuilder";
import Villager from "./Villager";

var customModiferes = require("../helpers/customModifiers");
var BaseVillagerGrammer = require("./grammers/BaseVillagerGrammer");

export default class Generator{
    villager:any;
    builder:GrammerBuilder;

    constructor(villager:Villager){
        this.villager = villager.toJson();
        this.builder = new BaseVillagerGrammer(this.villager);
        //grammers.getPersonality(villager.personality).configure(this.builder);
    }

    generate(options:TraceryBuilder){
        this.builder.addObject(options);
        var grammar = this.builder.build();

        grammar.addModifiers(customModiferes);
        
        return grammar.flatten("#origin#");
    }
}

module.exports = Generator;
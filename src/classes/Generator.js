var customModiferes = require("../helpers/customModifiers");
var BaseVillagerGrammer = require("./grammers/BaseVillagerGrammer");

class Generator{
    constructor(villager){
        this.villager = villager.toJson();
        this.builder = new BaseVillagerGrammer(this.villager);
        //grammers.getPersonality(villager.personality).configure(this.builder);
    }

    generate(options = {}){
        this.builder.addObject(options);
        var grammar = this.builder.build();

        grammar.addModifiers(customModiferes);
        
        return grammar.flatten("#origin#");
    }
}

module.exports = Generator;
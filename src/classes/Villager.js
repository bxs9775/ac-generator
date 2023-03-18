Generator = require("./Generator");

class Villager{
    constructor(villager){
        this.name = villager.name["name-USen"];
        this.personality = villager.personality,
        this.species = villager.species,
        this.gender = villager.gender,
        this.catchphrase = villager["catch-phrase"],
        this.iconUri = villager.icon_uri

        this.generator = new Generator(this,"Base",this.personality)
    }

    toJson(){
        return {
            "name": this.name,
            "personality": this.personality,
            "species": this.species,
            "gender": this.gender,
            "catch-phrase": this.catchphrase,
            "icon_uri": this.iconUri
        };
    }
    
    generate(options = null){
        return this.generator.generate(options);
    }
}

module.exports = Villager;
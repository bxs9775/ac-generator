import TraceryBuilder from "./Builders/TraceryBuilder";
import Generator from "./Generator";

export default class Villager{
    name:string;
    personality:string;
    species:string;
    gender:string;
    hobby:string;
    catchphrase:string;
    iconUri:string;

    constructor(villager:any){
        this.name = villager.name["name-USen"];
        this.personality = villager.personality;
        this.species = villager.species;
        this.gender = villager.gender;
        this.hobby = villager.hobby;
        this.catchphrase = villager["catch-phrase"];
        this.iconUri = villager.icon_uri;
    }

    toJson():any{
        return {
            "name": this.name,
            "personality": this.personality,
            "species": this.species,
            "gender": this.gender,
            "hobby": this.hobby,
            "catch-phrase": this.catchphrase,
            "icon_uri": this.iconUri
        };
    }
}

module.exports = Villager;
import TraceryBuilder from "./Builders/TraceryBuilder";
import Generator from "./Generator";

export default class Villager{
    name:string;
    personality:string;
    species:string;
    gender:string;
    hobby:string = '';
    catchphrase:string;
    iconUri:string;

    constructor(villager:any){
        this.name = villager.name;
        this.personality = villager.personality;
        this.species = villager.species;
        this.gender = villager.gender;
        this.catchphrase = villager.phrase;
       
        if(villager.nh_details){
            this.hobby = villager.nh_details.hobby;
            this.iconUri = villager.nh_details.icon_url;
        } else {
            this.iconUri = villager.image_url;
        }
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
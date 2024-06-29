import TraceryBuilder from "./Builders/TraceryBuilder";
import Generator from "./Generator";

/**
 * class for storing and managing villager details
 */
export default class Villager{
    /**
     * name of the villager
     */
    name:string;
    /**
     * personality of the villager
     * value should be one of the following: Lazy, Jock, Smug, Cranky, Normal, Peppy, Uchi, Snooty
     */
    personality:string;
    /**
     * villager's species
     */
    species:string;
    /**
     * villager's gender
     */
    gender:string;
    /**
     * villager's hobby, defaults to "" if not available
     */
    hobby:string = '';
    /**
     * villager's catchphrase 
     */
    catchphrase:string;
    /**
     * URI/URL to the villager's icon/image
     */
    iconUri:string;

    /**
     * Constructs a new villager instance from Nookipedia API data
     * @param {*} villager the raw villager data
     */
    constructor(villager:any){
        this.name = villager.name;
        this.personality = villager.personality;
        this.species = villager.species;
        this.gender = villager.gender;
        this.catchphrase = villager.phrase;
        
        // sets hobby and iconUri fields based on whether the villager has New Horizons details
        if(villager.nh_details){
            this.hobby = villager.nh_details.hobby;
            this.iconUri = villager.nh_details.icon_url;
        } else {
            this.iconUri = villager.image_url;
        }
    }

    /**
     * Returns a JSON representation of the villager data
     * @returns the villager data formatted as JSON
     */
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
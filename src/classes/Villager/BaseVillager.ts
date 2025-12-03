import TopicEnum from "../../enums/TopicEnum";
import GrammarPicker from "../GrammarPicker";
import TraceryBuilder from "../Builders/TraceryBuilder";
import Grammar from "../Grammar";
import GrammarSet from "../GrammarSet";
import VillagerGrammarPackage from "../VillagerGrammarPackage";
import StringListRule from "../Rules/StringListRule";

/**
 * class for storing and managing villager details
 */
export default class BaseVillager{
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
     * Grammar object for this villager
     */
    grammars:GrammarSet;

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
        
        // calculates date info
        var today = new Date();

        var grammarPackage:VillagerGrammarPackage = GrammarPicker.selectGrammar(this.personality);
        
        var villagerGrammar = new TraceryBuilder({
            'name': new StringListRule([villager.name]),
            'catchphrase': new StringListRule([villager.phrase]),
            'month': new StringListRule([today.toLocaleString('default', { month: 'long' })])
        })
        .addObject(grammarPackage.generalGrammar);
        
        // sets hobby and iconUri fields based on whether the villager has New Horizons details
        if(villager.nh_details){
            this.hobby = villager.nh_details.hobby;
            this.iconUri = villager.nh_details.icon_url;
        } else {
            this.iconUri = villager.image_url;
        }

        this.grammars= (new GrammarSet())
            .addGrammarSet(grammarPackage.islandLifeGrammarSet);
        this.grammars.set('general',villagerGrammar);

        let hobbyGrammar:TraceryBuilder = new TraceryBuilder();
        let rawHobbyGrammar:TraceryBuilder|undefined = grammarPackage.hobbyGrammarSet.get(this.hobby.toLowerCase());
        if(typeof rawHobbyGrammar !== "undefined"){
            hobbyGrammar.addObject(rawHobbyGrammar);
        }
        
        this.grammars.set('hobby',hobbyGrammar);
    }

    generateGrammar(baseGrammar:TraceryBuilder,topic:TopicEnum):Grammar{
        console.log("Topic",topic);
        
        let grammar = baseGrammar.copy();
        grammar.addObject(this.grammars.get('general') as TraceryBuilder);
        let topicGrammar:TraceryBuilder|undefined = this.grammars.get(topic.toString().toLowerCase());
        if(typeof topicGrammar !== "undefined"){
            grammar.addObject(topicGrammar);
        }
        return grammar.build();
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
            "catchphrase": this.catchphrase,
            "icon_uri": this.iconUri
        };
    }
}

module.exports = BaseVillager;
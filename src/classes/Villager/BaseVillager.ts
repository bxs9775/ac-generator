import TopicEnum from "../../enums/TopicEnum";
import baseGrammarSet, {generalGrammar,hobbyGrammars} from "../../grammars/BaseGrammar";
import GrammarBuilder from "../Builders/GrammarBuilder";
import Grammar from "../Grammar";
import GrammarSet from "../GrammarSet";

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
        var month = today.getMonth()+1;

        var villagerGrammar = new GrammarBuilder({
            name: [villager.name],
            'catchphrase': [villager.catchphrase],
            month: today.toLocaleString('default', { month: 'long' })
        })
        .addObject(generalGrammar);


        
        // sets hobby and iconUri fields based on whether the villager has New Horizons details
        if(villager.nh_details){
            this.hobby = villager.nh_details.hobby;
            this.iconUri = villager.nh_details.icon_url;
        } else {
            this.iconUri = villager.image_url;
        }

        this.grammars= (new GrammarSet())
            .addGrammarSet(baseGrammarSet);
        this.grammars.set('general',villagerGrammar);

        let hobbyGrammar:GrammarBuilder = new GrammarBuilder();

        switch(villager.hobby){
            case "Fitness":
                hobbyGrammar.addObject(hobbyGrammars.fitness);
                break;
            case "Music":
                hobbyGrammar.addObject(hobbyGrammars.music);
                break;
            case "Play":
                hobbyGrammar.addObject(hobbyGrammars.play);
                break;
            case "Nature":
                hobbyGrammar.addObject(hobbyGrammars.nature);
                break;
            case "Education":
                hobbyGrammar.addObject(hobbyGrammars.education);
                break;
        }
        
        this.grammars.set('hobby',hobbyGrammar);
    }

    generateGrammar(baseGrammar:GrammarBuilder,topic:TopicEnum):Grammar{
        console.log(topic);
        
        let grammar = (new GrammarBuilder())
            .addObject(baseGrammar)
            .addObject(this.grammars.get('general') as GrammarBuilder)
            .addObject(this.grammars.get(topic.toString().toLowerCase()) as GrammarBuilder)

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
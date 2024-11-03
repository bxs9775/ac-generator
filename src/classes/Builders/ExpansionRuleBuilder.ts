import TraceryBuilder from "./TraceryBuilder";
import RuleDictionary from "./RuleDictionary";

/**
 * TraceryBuilder subclass for building a Tracery expansion rule
 * ex: "[toolVerb:catch][toolNoun:bug,butterfly][toolExtra:]"
 */
export default class ExpansionRuleBuilder extends TraceryBuilder{
    /**
     * Constructs a new ExpansionRuleBuilder
     * @param {RuleDictionary} startingObj A dictionary of grammar rules used to initialize the builder
     */
    constructor(startingObj:RuleDictionary={}){
        super(startingObj);
    }

    /**
     * Uses the builder to build a Trancery grammar JSON object
     * @returns a JSON object containing Tracery grammar.
     */
    build():string{
        var rules = Object.entries(this.data);
        return rules.reduce((result,rule) => {
            var val = "";
            if(typeof rule[1] === "string"){
                val = rule[1];
            } else if (Array.isArray(rule[1])){
                val = rule[1].join(",");
            }
            return result + `[${rule[0]}:${val}]`;
        },"");
    }
}
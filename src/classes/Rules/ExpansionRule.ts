import IRule from "../../interfaces/IRule";
import IStringDictionary from "../../interfaces/IStringDictionary";


/**
 * Rule subclass for a Tracery expansion rule
 * ex: "[toolVerb:catch][toolNoun:bug,butterfly][toolExtra:]"
 */
export default class ExpansionRule implements IRule{
    ruleType:string = "ExpansionRule";
    rawType:string = "IStringDictionary";
    data:IStringDictionary;

    
    /**
     * Constructs a new ExpansionRuleBuilder
     * @param {RuleDictionary} startingObj A dictionary of grammar rules used to initialize the builder
     */
    constructor(startingObj:IStringDictionary={}){
        this.data = startingObj;
    }
    
    rawValue():IStringDictionary{
        return this.data;
    }

    updateRule(newValues:IStringDictionary):ExpansionRule{
        let newEntries = [...new Set(Object.entries(newValues))];
        newEntries.forEach((entry) => {
            let [key,values] = entry;
            if(!this.data[key]){
                this.data[key] = values;
            } else {
                this.data[key] = [... new Set([...this.data[key],...values])];
            }
        });
        return this;
    }

    /**
     * Uses the builder to build a Trancery grammar JSON object
     * @returns a JSON object containing Tracery grammar.
     */
    build():Array<string>{
        //console.log(`Building Expansion Rule`);
        var rules = Object.entries(this.data);
        //console.log("Expansion rule entries",rules);
        let expansionRuleStr:string = rules.reduce((result,rule) => {
            var val = "";
            //console.log("Rule - ",rule);
            let [key,values] = rule;
            if(typeof rule[1] === "string"){
                val = rule[1];
            } else if (Array.isArray(rule[1])){
                val = rule[1].join(",");
            }
            return result + `[${rule[0]}:${val}]`;
        },"");
        return new Array(expansionRuleStr);
    }

    copy():ExpansionRule{
        return new ExpansionRule(JSON.parse(JSON.stringify(this.data)));
    }
}
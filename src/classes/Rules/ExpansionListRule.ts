import IRule from "../../interfaces/IRule";
import IRuleDictionary from "../../interfaces/IRuleDictionary";
import IStringDictionary from "../../interfaces/IStringDictionary";
import ExpansionRule from "./ExpansionRule";


/**
 * Rule subclass for a Tracery expansion rule
 * ex: "[toolVerb:catch][toolNoun:bug,butterfly][toolExtra:]"
 */
export default class ExpansionListRule implements IRule{
    ruleType:string = "ExpansionListRule";
    rawType:string = "ExpasnsionRule";
    data:ExpansionRule[];

    
    /**
     * Constructs a new ExpansionRuleBuilder
     * @param {RuleDictionary} startingObj A dictionary of grammar rules used to initialize the builder
     */
    constructor(startingObj:ExpansionRule[]=[]){
        this.data = startingObj.map((subrule) => subrule.copy());
    }
    
    rawValue():ExpansionRule[]{
        return this.data;
    }

    updateRule(newValues:ExpansionRule[]):ExpansionListRule{
        console.log("Updating ExpansionListRule");
        console.log("Current data",this.data);
        console.log("New data",newValues)
        this.data = [...new Set([...this.data,...newValues.map((rule) => rule.copy())])];
        return this;
    }

    updateAllRules(newValues:IStringDictionary):ExpansionListRule{
        this.data.forEach((rule) => {
            rule.updateRule(newValues);
        })
        return this;
    }

    /**
     * Uses the builder to build a Trancery grammar JSON object
     * @returns a JSON object containing Tracery grammar.
     */
    build():Array<string>{
        console.log('ExpansionRuleSet data',this.data);
        let expansionRuleSet:string[] = this.data.map((rule) => {
            //console.log("rule",rule);
            console.log("rule",rule);
            console.log("rule",rule.build());
            return rule.build()[0];
        },"");
        return expansionRuleSet;
    }

    copy():ExpansionListRule{
        let ruleCopy:ExpansionListRule = new ExpansionListRule([]);
        ruleCopy.updateRule(this.data);
        return ruleCopy;
    }
}
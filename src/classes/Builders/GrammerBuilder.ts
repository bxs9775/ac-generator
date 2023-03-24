import * as tracery from "tracery-grammar";
import TraceryBuilder from "./TraceryBuilder";
import ExpansionRuleBuilder from "./ExpansionRuleBuilder";
import RuleDictionary from "./RuleDictionary";

export default class GrammerBuilder extends TraceryBuilder{
    constructor(startingObj:RuleDictionary){
        super(startingObj);
    }

    build():any{
        var rules = Object.entries(this.data);
        var rawGrammer = rules.reduce<{[key:string]: Array<string>}>((result,[key,rule]) => {
            if(Array.isArray(rule)){
                if (rule.every((value: any) => typeof value === "string")){

                    result[key] = rule;
                } else if ((rule.every((value:any) => value instanceof ExpansionRuleBuilder))){
                    result[key] = rule.map<string>(val => val.build());
                }
            }
            return result;
        },{})
        var grammer = tracery.createGrammar(rawGrammer);
        grammer.addModifiers(tracery.baseEngModifiers);
        return grammer;
    }
}

module.exports = GrammerBuilder;
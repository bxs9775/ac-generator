import * as tracery from "tracery-grammar";
import TraceryBuilder from "./TraceryBuilder";
import ExpansionRuleBuilder from "./ExpansionRuleBuilder";
import RuleDictionary from "./RuleDictionary";

/**
 * TraceryBuilder subclass for building a Tracery grammer set
 * ex:
 * {
 *  "animal": ["dog","cat","bird"],
 *  "color": ["red","yellow", "blue"]
 * }
 */
export default class GrammerBuilder extends TraceryBuilder{
    /**
     * Constructs a new GrammerBuilder
     * @param {RuleDictionary} startingObj A dictionary of grammer rules used to initialize the builder
     */
    constructor(startingObj:RuleDictionary){
        super(startingObj);
    }

    /**
     * Uses the builder to build a Trancery grammer JSON object
     * @returns a JSON object containing Tracery grammer.
     */
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
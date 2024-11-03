import * as tracery from "tracery-grammar";
import TraceryBuilder from "./TraceryBuilder";
import ExpansionRuleBuilder from "./ExpansionRuleBuilder";
import RuleDictionary from "./RuleDictionary";
import Grammar from "../Grammar";

var customModifiers = require("../../helpers/customModifiers.js");

/**
 * TraceryBuilder subclass for building a Tracery grammar set
 * ex:
 * {
 *  "animal": ["dog","cat","bird"],
 *  "color": ["red","yellow", "blue"]
 * }
 */
export default class GrammarBuilder extends TraceryBuilder{
    /**
     * Constructs a new GrammarBuilder
     * @param {RuleDictionary} startingObj A dictionary of grammar rules used to initialize the builder
     */
    constructor(startingObj:RuleDictionary={}){
        super(startingObj);
    }

    /**
     * Uses the builder to build a Trancery grammar JSON object
     * @returns a JSON object containing Tracery grammar.
     */
    build():Grammar{
        var rules = Object.entries(this.data);
        var rawGrammar = rules.reduce<{[key:string]: Array<string>}>((result,[key,rule]) => {
            if(Array.isArray(rule)){
                if (rule.every((value: any) => typeof value === "string")){

                    result[key] = rule;
                } else if ((rule.every((value:any) => value instanceof ExpansionRuleBuilder))){
                    result[key] = rule.map<string>(val => val.build());
                }
            }
            return result;
        },{})
        var grammar = tracery.createGrammar(rawGrammar);
        grammar.addModifiers(tracery.baseEngModifiers);
        grammar.addModifiers(customModifiers);
        return new Grammar(grammar);
    }
}

module.exports = GrammarBuilder;
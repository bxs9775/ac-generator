import * as tracery from "tracery-grammar";
import TraceryBuilder from "./TraceryBuilder";
import Grammar from "../Grammar";
import IRuleDictionary from "../../interfaces/IRuleDictionary";
import IStringDictionary from "../../interfaces/IStringDictionary";
import IRule from "../../interfaces/IRule";

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
    constructor(startingObj:IRuleDictionary={}){
        super(startingObj);
    }

    /**
     * Uses the builder to build a Trancery grammar JSON object
     * @returns a JSON object containing Tracery grammar.
     */
    build():Grammar{
        console.log("Building general grammer")
        var rules:Array<[string,IRule]> = Object.entries(this.data);
        console.log("Grammer rules", rules);
        var rawGrammar = rules.reduce<{[key:string]: Array<string>}>((result,[key,rule]) => {
            result[key] = rule.build();
            return result;
        },{});
        console.log(rawGrammar);
        var grammar = tracery.createGrammar(rawGrammar);
        grammar.addModifiers(tracery.baseEngModifiers);
        grammar.addModifiers(customModifiers);
        return new Grammar(grammar);
    }

    copy(): GrammarBuilder {
        var newBuilder = new GrammarBuilder();
        var rules = Object.entries(this.data);
        rules.forEach((ruleEntry) => {
            let [key,rule] = ruleEntry;
            switch(rule.ruleType){
                case "ExpansionRule":
                    newBuilder.addOrUpdateExpansionRule(key,rule.rawValue() as unknown as IStringDictionary);
                    break;
                case "ExpansionListRule":
                    newBuilder.addOrUpdateExpansionListRule(key,rule.rawValue() as unknown as IStringDictionary[]);
                    break;
                case "StringListRule":
                    let newArray:Array<string> = rule.rawValue() as unknown as Array<string>;
                    newBuilder.addOrUpdateStringListRule(key,...newArray);
                    break;
                default:
                    break;
            }
        });
        return newBuilder;
    }
}

module.exports = GrammarBuilder;
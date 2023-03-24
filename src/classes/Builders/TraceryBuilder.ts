import * as tracery from "tracery-grammar";
import ExpansionRuleBuilder from "./ExpansionRuleBuilder";
import RuleDictionary from "./RuleDictionary";

export default class TraceryBuilder{
    data: RuleDictionary

    /**
     * Constructs base TraceryBuilder
     * @param {*} startingObj The starting object for the builder
     */
    constructor(startingObj:RuleDictionary){
        this.data = startingObj;
    }

    addRule<T>(rule:string,...values:Array<T>):TraceryBuilder{
        if(!this.data[rule]){
            this.data[rule] = new Array<T>();
        } 
        let ruleset = this.data[rule] as Array<T>;
        ruleset.push(...values);
        return this;
    }

    addObject(other:TraceryBuilder){
        var rules = Object.entries(other.data);
        rules.forEach((rule) => {
            this.addRule(rule[0],...rule[1]);
        });
        return this;
    }
}
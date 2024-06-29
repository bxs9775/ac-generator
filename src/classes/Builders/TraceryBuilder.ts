import * as tracery from "tracery-grammar";
import ExpansionRuleBuilder from "./ExpansionRuleBuilder";
import RuleDictionary from "./RuleDictionary";

/**
 * Base class for building a Tracery grammer object
 */
export default class TraceryBuilder{
    /**
     * The dictionary of Tracery grammer rules being built by this object.
     */
    data: RuleDictionary

    /**
     * Constructs base TraceryBuilder
     * @param {RuleDictionary} startingObj The starting object for the builder
     */
    constructor(startingObj:RuleDictionary){
        this.data = startingObj;
    }

    /**
     * Adds a new grammer rule to the builder
     * @param {string} rule the key for the new rule
     * @param {Array} values an array of objects to associate with the rule
     * @returns the TraceryBuilder instance for call chaining
     */
    addRule<T>(rule:string,...values:Array<T>):TraceryBuilder{
        if(!this.data[rule]){
            this.data[rule] = new Array<T>();
        } 
        let ruleset = this.data[rule] as Array<T>;
        ruleset.push(...values);
        return this;
    }

    /**
     * Joins another TraceryBuilder object to this one
     * @param {TraceryBuilder} other the other TraceryBuilder object to be joined to this one
     * @returns the TraceryBuilder instance for call chaining
     */
    addObject(other:TraceryBuilder){
        var rules = Object.entries(other.data);
        rules.forEach((rule) => {
            this.addRule(rule[0],...rule[1]);
        });
        return this;
    }
}
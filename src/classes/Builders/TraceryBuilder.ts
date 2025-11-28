import * as tracery from "tracery-grammar";
import IRuleDictionary from "../../interfaces/IRuleDictionary";
import ExpansionRule from "../Rules/ExpansionRule";
import IStringDictionary from "../../interfaces/IStringDictionary";
import StringListRule from "../Rules/StringListRule";
import ExpansionListRule from "../Rules/ExpansionListRule";

/**
 * Base class for building a Tracery grammar object
 */
export default class TraceryBuilder{
    /**
     * The dictionary of Tracery grammar rules being built by this object.
     */
    data: IRuleDictionary

    /**
     * Constructs base TraceryBuilder
     * @param {IRuleDictionary} startingObj The starting object for the builder
     */
    constructor(startingObj:IRuleDictionary={}){
        this.data = startingObj;
    }
    
    /**
     * Adds a new expansion rule to the builder
     * @param {string} rule the key for the new rule
     * @param {Array} values an array of objects to associate with the rule
     * @returns the TraceryBuilder instance for call chaining
     */
    addOrUpdateExpansionRule(rule:string,values:IStringDictionary):TraceryBuilder{
        let valuesCopy:IStringDictionary = JSON.parse(JSON.stringify(values));
        if(!this.data[rule]){
            this.data[rule] = new ExpansionRule(valuesCopy);
        } else {
            let expansionRule:ExpansionRule = this.data[rule] as ExpansionRule;
            expansionRule.updateRule(valuesCopy);
        }
        return this;
    }
    /**
     * 
     * @param rule 
     * @param values 
     * @returns 
     */
    addOrUpdateStringListRule(rule:string,...values:Array<string>):TraceryBuilder{
        let valuesCopy:Array<string> = [...values];
        if(!this.data[rule]){
            this.data[rule] = new StringListRule(valuesCopy);
        } else {
            let stringListRule:StringListRule = this.data[rule] as StringListRule;
            stringListRule.updateRule(valuesCopy);
        }
        return this;
    }

    /**
     * Adds a new expansion rule to the builder
     * @param {string} rule the key for the new rule
     * @param {Array} values an array of objects to associate with the rule
     * @returns the TraceryBuilder instance for call chaining
     */
    addOrUpdateExpansionListRule(rule:string,values:ExpansionRule[]):TraceryBuilder{
        let valuesCopy:ExpansionRule[] = values.map((rule) => rule.copy());
        if(!this.data[rule]){
            this.data[rule] = new ExpansionListRule(valuesCopy);
        } else {
            let expansionListRule:ExpansionListRule = this.data[rule] as ExpansionListRule;
            expansionListRule.updateRule(valuesCopy);
        }
        return this;
    }

    /**
     * Joins another TraceryBuilder object to this one
     * @param {TraceryBuilder} other the other TraceryBuilder object to be joined to this one
     * @returns the TraceryBuilder instance for call chaining
     */
    addObject(other:TraceryBuilder):TraceryBuilder{
        var otherCopy = other.copy();
        var rules = Object.entries(otherCopy.data);  
        rules.forEach((ruleEntry) => {
            let [key,rule] = ruleEntry;
            switch(rule.ruleType){
                case "ExpansionRule":
                    this.addOrUpdateExpansionRule(key,rule.rawValue() as unknown as IStringDictionary);
                    break;
                case "ExpansionListRule":
                    this.addOrUpdateExpansionListRule(key,rule.rawValue() as unknown as IStringDictionary[])
                case "StringListRule":
                    this.addOrUpdateStringListRule(key,...(rule.rawValue() as unknown as Array<string>));
                    break;
                default:
                    break;
            }
        });
        return this;
    }

    /**
     * Creates a copy of a TraceryBuilder
     */
    copy():TraceryBuilder{
        var newBuilder = new TraceryBuilder();
        var rules = Object.entries(this.data);
        rules.forEach((ruleEntry) => {
            let [key,rule] = ruleEntry;
            switch(rule.ruleType){
                case "ExpansionRule":
                    newBuilder.addOrUpdateExpansionRule(key,rule.rawValue() as unknown as IStringDictionary);
                    break;
                case "ExpansionListRule":
                    newBuilder.addOrUpdateExpansionListRule(key,rule.rawValue() as unknown as ExpansionRule[]);
                    break;
                case "StringListRule":
                    newBuilder.addOrUpdateStringListRule(key,...(rule.rawValue() as unknown as Array<string>));
                    break;
                default:
                    break;
            }
        });
        return newBuilder;
    }
}
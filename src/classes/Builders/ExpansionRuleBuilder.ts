import TraceryBuilder from "./TraceryBuilder";
import RuleDictionary from "./RuleDictionary";

export default class ExpansionRuleBuilder extends TraceryBuilder{
    constructor(startingObj:RuleDictionary){
        super(startingObj);
    }

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
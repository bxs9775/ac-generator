const TraceryBuilder = require("./TraceryBuilder");

class ExpansionRuleBuilder extends TraceryBuilder{
    constructor(startingObj){
        super(startingObj);
    }

    build(){
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
module.exports = ExpansionRuleBuilder;
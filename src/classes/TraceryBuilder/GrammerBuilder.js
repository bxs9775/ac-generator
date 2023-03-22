const tracery = require('tracery-grammar');
const TraceryBuilder = require("./TraceryBuilder");
const ExpansionRuleBuilder = require("./ExpansionRuleBuilder");

class GrammerBuilder extends TraceryBuilder{
    constructor(startingObj){
        super(startingObj);
    }

    buildRule(rule){
        if(typeof rule === 'string'){
            return rule
        }
        if(rule instanceof ExpansionRuleBuilder){
            return rule.build();
        }
        if(Array.isArray(rule)){
           return rule.map((item) => this.buildRule(item));
        }
        throw TypeError();
    }

    build(){
        var rules = Object.entries(this.data);
        var rawGrammer = rules.reduce((result,rule) => {
            var val = this.buildRule(rule[1]);
            result[rule[0]] = val;
            return result;
        },{})
        var grammer = tracery.createGrammar(rawGrammer);
        grammer.addModifiers(tracery.baseEngModifiers);
        return grammer;
    }
}

module.exports = GrammerBuilder;
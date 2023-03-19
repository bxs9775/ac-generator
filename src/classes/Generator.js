var tracery = require('tracery-grammar');
var {getRules} = require("../grammers");

coinflip = () => Math.floor(Math.random()*2) == 0;

class Generator{
    constructor(villager,...rules){
        this.villager = villager.toJson();
        this.rules = null;
        switch(typeof rules){
            case "string":
                this.rules = getRules(rules);
                break;
            case "object":
                if(Array.isArray(rules)){
                    var rulesets = rules.map(rule => getRules(rule));
                    this.rules = this.combineRules(...rulesets);
                    break;
                }
            default:
                throw TypeError();
        }
        this.rawGrammer = {
            ...this.villager,
            ...this.rules
        }
    }

    combineRules = (...grammers) => {
        return grammers.reduce((result,grammer) => {
            if(!grammer)
                return result;
            var rules = Object.entries(grammer);
            rules.forEach((rule) => {
                if(rule[0] in result){
                    result[rule[0]] = result[rule[0]].concat(rule[1]);
                } else {
                    result[rule[0]] = rule[1];
                }
            });
            return result;
        },{});
    }

    generate(options = {}){
        var currentGrammer = {...this.rawGrammer, ...options};
        var grammar = tracery.createGrammar(currentGrammer);
        grammar.addModifiers(tracery.baseEngModifiers); 

        var baseStr = `${coinflip?"#greeting# "+(coinflip?"#howare# ":""):""}#topic#`;
        return grammar.flatten(baseStr);
    }
}

module.exports = Generator;
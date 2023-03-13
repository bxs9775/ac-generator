var tracery = require('tracery-grammar');

grammerMap = {
    Base: require("./Base"),
    Lazy: require("./personality/Lazy"),
    Jock: require("./personality/Jock"),
    Cranky: require("./personality/Cranky"),
    Smug: require("./personality/Smug"),
    Normal: require("./personality/Normal"),
    Peppy: require("./personality/Peppy"),
    Snooty: require("./personality/Snooty"),
    Uchi: require("./personality/Uchi")
}

getRules = (name) => {
    try{
        return grammerMap[name];
    }
    catch(error){
        return null;
    }
}

combineRules = (...grammerSets) => {
    grammers = grammerSets.map(grammer => getRules(grammer))
    return grammers.reduce((result,grammer) => {
        if(!grammer)
            return result;
        rules = Object.entries(grammer);
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

getGrammer = (...grammer) => {
    rules = null;
    switch(typeof grammer){
        case "string":
            rules = getRules(grammer);
            break;
        case "object":
            if(Array.isArray(grammer)){
                rules = combineRules(...grammer);
                break;
            }
        default:
            return false;
    }
    return tracery.createGrammar(rules);
}


module.exports = {
    getRules, combineRules, getGrammer
}
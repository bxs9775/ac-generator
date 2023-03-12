var tracery = require('tracery-grammar');

grammerMap = {
    Base: require("./Base"),
    Cranky: require("./personality/Cranky")
}

getRules = (name) => {
    try{
        return grammerMap[name]
    }
    catch(error){
        return null
    }
}

combineRules = (...grammerSets) => {
    grammers = grammerSets.map(grammer => grammerMap[grammer])
    return grammers.reduce((grammer,result) => {
        rules = Object.entries(grammer);
        rules.forEach((rule) => {
            if(rule[0] in result){
                result[rule[0]] = result[rule[0]].concat(rule[1]);
            } else {
                result[rule[0]] = rule[1];
            }
        });
        return result;
    });
}

getGrammer = (...grammer) => {
    rules = null;
    switch(typeof grammer){
        case "string":
            rules = getRules(grammer);
            break;
        case "array":
            rules = combineRules(...grammer);
        default:
            return false;
    }
    return tracery.Grammar(rules);
}


module.exports = {
    getRules, combineRules, getGrammer
}
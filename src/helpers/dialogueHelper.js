var tracery = require('tracery-grammar');
var grammars = require("../grammers");
const generateDialogue = (villager) => {
    grammar = grammars.getGrammer("Base",villager.personality);

    grammar.addModifiers(tracery.baseEngModifiers); 

    flattened = grammar.flatten("#topic#");
    return flattened;
}

module.exports = { generateDialogue }
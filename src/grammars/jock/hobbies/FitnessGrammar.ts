import ExpansionRuleBuilder from "../../../classes/Builders/ExpansionRuleBuilder";
import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";


let fitnessGrammar:GrammarBuilder = new GrammarBuilder({
    "exerciseTopic": ["[#describeExercise#]I just finished my #exercise# regimen, #catch-phrase#. My #exerciseTarget.s# are going to be sore."],
    
});

export default fitnessGrammar;
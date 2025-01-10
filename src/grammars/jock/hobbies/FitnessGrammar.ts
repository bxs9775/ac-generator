import fitnessGrammar from "../../baseVillager/hobbies/FitnessGrammar";
import ExpansionRuleBuilder from "../../../classes/Builders/ExpansionRuleBuilder";
import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";


let jockFitnessGrammar:GrammarBuilder = new GrammarBuilder({
    "exerciseTopic": ["[#describeExercise#]I just finished my #exercise# regimen, #catch-phrase#. My #exerciseTarget.s# are going to be sore."],
});

jockFitnessGrammar.addObject(fitnessGrammar);

export default jockFitnessGrammar;
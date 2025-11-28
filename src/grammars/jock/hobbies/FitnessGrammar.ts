import fitnessGrammar from "../../baseVillager/hobbies/FitnessGrammar";
import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";


let jockFitnessGrammar:GrammarBuilder = fitnessGrammar.copy();

jockFitnessGrammar.addOrUpdateStringListRule("exerciseTopic","[#describeExercise#]I just finished my #exercise# regimen, #catchphrase#. My #exerciseTarget.s# are going to be sore.");

export default jockFitnessGrammar;
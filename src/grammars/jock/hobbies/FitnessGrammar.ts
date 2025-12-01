import fitnessGrammar from "../../baseVillager/hobbies/FitnessGrammar";
import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";


let jockFitnessGrammar:TraceryBuilder = fitnessGrammar.copy();

jockFitnessGrammar.addOrUpdateStringListRule("exerciseTopic","[#describeExercise#]I just finished my #exercise# regimen, #catchphrase#. My #exerciseTarget.s# are going to be sore.");

export default jockFitnessGrammar;
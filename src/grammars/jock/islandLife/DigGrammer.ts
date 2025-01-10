import digGrammar from "../../baseVillager/islandLife/DigGrammer";
import ExpansionRuleBuilder from "../../../classes/Builders/ExpansionRuleBuilder";
import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";


let jockDigGrammar:GrammarBuilder = new GrammarBuilder().addObject(digGrammar);

(jockDigGrammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("toolExtra"," That's a good idea for #digMuscle.a# workout."," You know #toolNoun# #toolVerb.ing# is good for developing your #digMuscle.s#?"," I should add that to my #digMuscle# regimen."));
(jockDigGrammar.data["describeDigOther"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("toolExtra"," That's a good idea for #digMuscle.a# workout."," You know #toolNoun# #toolVerb.ing# is good for developing your #digMuscle.s#?"," I should add that to my #digMuscle# regimen."));
jockDigGrammar.addRule("digMuscle","glute", "hamstring", "quad", "ab", "shoulder");

export default jockDigGrammar;
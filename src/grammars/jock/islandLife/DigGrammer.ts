import digGrammar from "../../baseVillager/islandLife/DigGrammer";
import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";
import ExpansionListRule from "../../../classes/Rules/ExpansionListRule";


let jockDigGrammar:TraceryBuilder = digGrammar.copy();

let toolExtraLines:string[] = [
    " That's a good idea for #digMuscle.a# workout.",
    " You know #toolNoun# #toolVerb.ing# is good for developing your #digMuscle.s#?",
    " I should add that to my #digMuscle# regimen."
];
(jockDigGrammar.data["describeDigTreasure"] as ExpansionListRule).updateAllRules({
    toolExtra: toolExtraLines
});
(jockDigGrammar.data["describeDigOther"] as ExpansionListRule).updateAllRules({
    toolExtra: toolExtraLines
});
jockDigGrammar.addOrUpdateStringListRule("digMuscle","glute", "hamstring", "quad", "ab", "shoulder");

export default jockDigGrammar;
import fishGrammar from "../../baseVillager/islandLife/FishGrammer";
import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";

let jockFishGrammar:GrammarBuilder = fishGrammar.copy();

(jockFishGrammar.data["describeFishing"] as ExpansionRule).updateRule({
    toolNoun: ['lurker'],
    toolExtra: ['[#describeFishType#] Fishing pros know that its the right time for catching #fishType# and #fishType# in the #fishLoc#.']
});

export default jockFishGrammar;
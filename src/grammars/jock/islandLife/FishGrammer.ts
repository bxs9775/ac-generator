import fishGrammar from "../../baseVillager/islandLife/FishGrammer";
import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";

let jockFishGrammar:TraceryBuilder = fishGrammar.copy();

(jockFishGrammar.data["describeFishing"] as ExpansionRule).updateRule({
    toolNoun: ['lurker'],
    toolExtra: ['[#describeFishType#] Fishing pros know that its the right time for catching #fishType# and #fishType# in the #fishLoc#.']
});

export default jockFishGrammar;
import fishGrammar from "../../baseVillager/islandLife/FishGrammer";
import ExpansionRuleBuilder from "../../../classes/Builders/ExpansionRuleBuilder";
import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";

let jockFishGrammar:GrammarBuilder = new GrammarBuilder().addObject(fishGrammar);

jockFishGrammar.data["describeFishing"][0].addRule("toolNoun","lurker");
jockFishGrammar.data["describeFishing"][0].addRule("toolExtra","[#describeFishType#] Fishing pros know that its the right time for catching #fishType# and #fishType# in the #fishLoc#.");


export default jockFishGrammar;
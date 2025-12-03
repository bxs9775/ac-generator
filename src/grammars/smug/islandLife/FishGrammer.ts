import fishGrammar from "../../baseVillager/islandLife/FishGrammer";
import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";

let smugFishGrammar:TraceryBuilder = fishGrammar.copy();

(smugFishGrammar.data["describeFishing"] as ExpansionRule).updateRule({
    toolNoun: ['lurker'],
    toolVerb: ['lure in']
});

export default smugFishGrammar;
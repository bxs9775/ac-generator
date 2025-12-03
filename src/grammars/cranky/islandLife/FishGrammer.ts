import fishGrammar from "../../baseVillager/islandLife/FishGrammer";
import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";
import ExpansionListRule from "../../../classes/Rules/ExpansionListRule";

let crankyFishGrammar:TraceryBuilder = fishGrammar.copy();

(crankyFishGrammar.data["describeFishing"] as ExpansionRule).updateRule({
    toolNoun: ['lurker']
});

let fishExtraLines:string[] = [
    '[#describeFish#]Back in my day, we used to fish for #fish# during #month#. I tell you, #player#, the #fishLoc.s# would be full of them, #catchphrase#.'
];

(crankyFishGrammar.data["describeFishing"] as ExpansionRule).updateRule({
    toolExtra: fishExtraLines
});

export default crankyFishGrammar;
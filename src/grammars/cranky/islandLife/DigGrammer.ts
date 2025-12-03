import digGrammar from "../../baseVillager/islandLife/DigGrammer";
import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";
import ExpansionListRule from "../../../classes/Rules/ExpansionListRule";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";


let crankyDigGrammar:TraceryBuilder = digGrammar.copy();

let toolExtraLines:string[] = [
    " Fine. Just keep out of my lawn."
];
let pitfallExtraLines:string[] = [
    " If I find myself in one of those darn holes #player#...",
    " Don't cause too much trouble #player#!"
];
((crankyDigGrammar.data["describeDigOther"] as ExpansionListRule).rawValue() as Array<ExpansionRule>)
.find(elem => elem.data["toolNoun"].includes("pitfall"))?.updateRule({
    toolExtra: pitfallExtraLines
});
(crankyDigGrammar.data["describeDigTreasure"] as ExpansionListRule).updateAllRules({
    toolExtra: toolExtraLines
});
(crankyDigGrammar.data["describeDigOther"] as ExpansionListRule).updateAllRules({
    toolExtra: toolExtraLines
});

export default crankyDigGrammar;
import digGrammar from "../../baseVillager/islandLife/DigGrammer";
import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";
import ExpansionListRule from "../../../classes/Rules/ExpansionListRule";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";


let smugDigGrammar:TraceryBuilder = digGrammar.copy();

let fossilExtraLines:string[] = [
    ' Dinosaur bones are old but I hear they are comming back into style.'
];

((smugDigGrammar.data["describeDigTreasure"] as ExpansionListRule).rawValue() as Array<ExpansionRule>)
.find(elem => elem.data["toolNoun"].includes("fossil"))?.updateRule({
    toolExtra: fossilExtraLines
});

export default smugDigGrammar;
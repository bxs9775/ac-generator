import digGrammar from "../../baseVillager/islandLife/DigGrammer";
import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";
import ExpansionListRule from "../../../classes/Rules/ExpansionListRule";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";


let smugDigGrammar:TraceryBuilder = digGrammar.copy();

let toolExtraLines:string[] = [
    ' Dinosaur bones are old but I hear they are comming back into style.'
];
((smugDigGrammar.data["describeDigTreasure"] as ExpansionListRule).rawValue() as Array<ExpansionRule>).forEach((elem) => {
    console.log("describeDigTreasure rule");
    console.log("toolNoun",elem.data["toolNoun"]);
});
((smugDigGrammar.data["describeDigTreasure"] as ExpansionListRule).rawValue() as Array<ExpansionRule>)
.find(elem => elem.data["toolNoun"].includes("fossil"))?.updateRule({
    toolExtra: toolExtraLines
});

export default smugDigGrammar;
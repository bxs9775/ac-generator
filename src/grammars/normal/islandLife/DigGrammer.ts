import digGrammar from '../../baseVillager/islandLife/DigGrammer';
import TraceryBuilder from '../../../classes/Builders/TraceryBuilder';
import ExpansionListRule from '../../../classes/Rules/ExpansionListRule';
import ExpansionRule from '../../../classes/Rules/ExpansionRule';


let normalDigGrammar:TraceryBuilder = digGrammar.copy();

let fossilExtraLines:string[] = [
    ' Blathers would be happy if you find anything new.'
];

((normalDigGrammar.data["describeDigTreasure"] as ExpansionListRule).rawValue() as Array<ExpansionRule>)
.find(elem => elem.data["toolNoun"].includes("fossil"))?.updateRule({
    toolExtra: fossilExtraLines
});

let greeneryRule:string[] = [
    'greenery',
    '#toolNoun#'
]
let greeneryExtraLines:string[] = [
    ' It\'s always #good# to have more #greenery.s#.'
];

let flowerExtraLines:string[] = [
    " Tending to a garden is so relaxing.",
    ...greeneryExtraLines
];
((normalDigGrammar.data["describeDigOther"] as ExpansionListRule).rawValue() as Array<ExpansionRule>)
.find(elem => elem.data["toolNoun"].includes("flower"))?.updateRule({
    toolExtra: flowerExtraLines
});

let treeExtraLines:string[] = [
    " That's great. Trees are good for the environment and provide shady places to read.",
    ...greeneryExtraLines
];
((normalDigGrammar.data["describeDigOther"] as ExpansionListRule).rawValue() as Array<ExpansionRule>)
.find(elem => elem.data["toolNoun"].includes("tree"))?.updateRule({
    toolExtra: treeExtraLines
});


export default normalDigGrammar;
import digGrammar from '../../baseVillager/islandLife/DigGrammer';
import TraceryBuilder from '../../../classes/Builders/TraceryBuilder';
import ExpansionListRule from '../../../classes/Rules/ExpansionListRule';
import ExpansionRule from '../../../classes/Rules/ExpansionRule';


let peppyDigGrammar:TraceryBuilder = digGrammar.copy();

let archeologyExtraLines:string[] = [
    ' That sounds fun. Maybe I should become the world\'s first pop-star/celebrity archeologist.'
];

let fossilExtraLines:string[] = [
    ' Dinosaur bones are old but I hear they are comming back into style.',
    ...archeologyExtraLines
];

((peppyDigGrammar.data["describeDigTreasure"] as ExpansionListRule).rawValue() as Array<ExpansionRule>)
.find(elem => elem.data["toolNoun"].includes("fossil"))?.updateRule({
    toolExtra: fossilExtraLines
});

let gyroidExtraLines:string[] = [
    ' Gyroids are great. They can be both your band and backup dancers.',
    ...archeologyExtraLines
];

((peppyDigGrammar.data["describeDigTreasure"] as ExpansionListRule).rawValue() as Array<ExpansionRule>)
.find(elem => elem.data["toolNoun"].includes("gyroid"))?.updateRule({
    toolExtra: gyroidExtraLines
});



export default peppyDigGrammar;
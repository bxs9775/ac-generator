import digGrammar from '../../baseVillager/islandLife/DigGrammer';
import TraceryBuilder from '../../../classes/Builders/TraceryBuilder';
import ExpansionListRule from '../../../classes/Rules/ExpansionListRule';
import ExpansionRule from '../../../classes/Rules/ExpansionRule';


let sisterlyDigGrammar:TraceryBuilder = digGrammar.copy();

let pitfallExtraLines:string[] = [
    ' If I find myself in one of your holes #player#...',
    ' Sounds like there is a new troublemaker in #town#.'
];


((sisterlyDigGrammar.data["describeDigOther"] as ExpansionListRule).rawValue() as Array<ExpansionRule>)
.find(elem => elem.data["toolNoun"].includes("pitfall"))?.updateRule({
    toolExtra: pitfallExtraLines
});


export default sisterlyDigGrammar;
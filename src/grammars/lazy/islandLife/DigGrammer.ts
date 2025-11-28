import digGrammar from '../../baseVillager/islandLife/DigGrammer';
import ExpansionRuleBuilder from '../../../classes/Builders/ExpansionRuleBuilder';
import GrammarBuilder from '../../../classes/Builders/GrammarBuilder';
import ExpansionListRule from '../../../classes/Rules/ExpansionListRule';
import ExpansionRule from '../../../classes/Rules/ExpansionRule';


let lazyDigGrammar:GrammarBuilder = digGrammar.copy();

// ???
/*
(lazyDigGrammar.data['describeDigTreasure'] as Array<ExpansionRuleBuilder>).find(elem => elem.data['toolNoun'] === 'fossil')?.addRule('toolExtra',' We\'re too late! We could be riding dinosaurs, #catchphrase#.',' Do you think you\'ll find any cool dinosaurs, #player#.');
(lazyDigGrammar.data['describeDigTreasure'] as Array<ExpansionRuleBuilder>).find(elem => elem.data['toolNoun'] === 'gyroid')?.addRule('toolExtra',' I like gyroids.',' I like gyroids, they make #lotOf.a# funny sounds.');
*/

lazyDigGrammar.addOrUpdateStringListRule('treasure','[adj:,pirate ,buried ]#adj#treasure')              
let describeDigTreasure = (lazyDigGrammar.data['describeDigTreasure'] as ExpansionListRule);
describeDigTreasure.updateRule([
    new ExpansionRule({
        toolNoun: ['#treasure#'],
        toolVerb: ['dig up','hunt for'],
        toolExtra: ['']
    })
])
export default lazyDigGrammar;
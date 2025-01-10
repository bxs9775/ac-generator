import digGrammar from '../../baseVillager/islandLife/DigGrammer';
import ExpansionRuleBuilder from '../../../classes/Builders/ExpansionRuleBuilder';
import GrammarBuilder from '../../../classes/Builders/GrammarBuilder';


let lazyDigGrammar:GrammarBuilder = new GrammarBuilder().addObject(digGrammar);

lazyDigGrammar.addRule('treasure','[adj:,pirate ,buried ]#adj#treasure')
lazyDigGrammar.data['describeDigTreasure'].push(new ExpansionRuleBuilder({
    toolNoun: '#treasure#',
    toolVerb: ['dig up','hunt for'],
    toolExtra: ['']
}));
(lazyDigGrammar.data['describeDigTreasure'] as Array<ExpansionRuleBuilder>).find(elem => elem.data['toolNoun'] === 'fossil')?.addRule('toolExtra',' We\'re too late! We could be riding dinosaurs, #catch-phrase#.',' Do you think you\'ll find any cool dinosaurs, #player#.');
(lazyDigGrammar.data['describeDigTreasure'] as Array<ExpansionRuleBuilder>).find(elem => elem.data['toolNoun'] === 'gyroid')?.addRule('toolExtra',' I like gyroids.',' I like gyroids, they make #lotOf.a# funny sounds.');
                

export default lazyDigGrammar;
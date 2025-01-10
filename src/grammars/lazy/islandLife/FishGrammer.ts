import fishGrammar from '../../baseVillager/islandLife/FishGrammer';
import ExpansionRuleBuilder from '../../../classes/Builders/ExpansionRuleBuilder';
import GrammarBuilder from '../../../classes/Builders/GrammarBuilder';

let lazyFishGrammar:GrammarBuilder = new GrammarBuilder().addObject(fishGrammar);
lazyFishGrammar.data['describeFishing'][0].addRule('toolVerb','nab');
lazyFishGrammar.data['describeFishing'][0].addRule('toolNoun','fishy');
lazyFishGrammar.data['describeFishing'][0].addRule('toolExtra','', ' You can catch nummy #fish# this time of year.',' If you catch too many, would you share with me?')
                
export default lazyFishGrammar;
import fishGrammar from '../../baseVillager/islandLife/FishGrammer';
import GrammarBuilder from '../../../classes/Builders/GrammarBuilder';
import ExpansionRule from '../../../classes/Rules/ExpansionRule';

let lazyFishGrammar:GrammarBuilder = fishGrammar.copy();

(lazyFishGrammar.data['describeFishing'] as ExpansionRule).updateRule({
    toolVerb: ['nab'],
    toolNoun: ['fishy'],
    toolExtra: ['', ' You can catch nummy #fish# this time of year.',' If you catch too many, would you share with me?']
})

export default lazyFishGrammar;
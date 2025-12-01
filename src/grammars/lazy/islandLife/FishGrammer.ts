import fishGrammar from '../../baseVillager/islandLife/FishGrammer';
import TraceryBuilder from '../../../classes/Builders/TraceryBuilder';
import ExpansionRule from '../../../classes/Rules/ExpansionRule';

let lazyFishGrammar:TraceryBuilder = fishGrammar.copy();

(lazyFishGrammar.data['describeFishing'] as ExpansionRule).updateRule({
    toolVerb: ['nab'],
    toolNoun: ['fishy'],
    toolExtra: ['', ' You can catch nummy #fish# this time of year.',' If you catch too many, would you share with me?']
})

export default lazyFishGrammar;
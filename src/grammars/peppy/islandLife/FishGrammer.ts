import fishGrammar from '../../baseVillager/islandLife/FishGrammer';
import TraceryBuilder from '../../../classes/Builders/TraceryBuilder';
import ExpansionRule from '../../../classes/Rules/ExpansionRule';

let peppyFishGrammar:TraceryBuilder = fishGrammar.copy();

(peppyFishGrammar.data["describeFishing"] as ExpansionRule).updateRule({
    toolVerb: ['lure in']
});

export default peppyFishGrammar;
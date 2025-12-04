import generalGrammar from '../baseVillager/GeneralGrammar';
import TraceryBuilder from '../../classes/Builders/TraceryBuilder';
import StringListRule from '../../classes/Rules/StringListRule';

/**
 * Creates the base Tracery Grammar objects for all villagers
 * @returns  base TraceryBuilder object
 */
let normalGeneralGrammar:TraceryBuilder = new TraceryBuilder({
    hello: new StringListRule(['Good #time#']),
    greeting: new StringListRule(['I hope you have #good.a# #time#.','It\'s #good# to see you, #player#.']),
    howare: new StringListRule(['It\'s #good# to see you.']),
    good: new StringListRule(['good','lovely','wonderful','nice']),
    time: new StringListRule(['day','morning','afternoon','evening','night']),
    lotOf:new StringListRule(['lot of'])
})

// Add baseline general grammar rules.
normalGeneralGrammar.addObject(generalGrammar);

export default normalGeneralGrammar;

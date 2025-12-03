import generalGrammar from '../baseVillager/GeneralGrammar';
import TraceryBuilder from '../../classes/Builders/TraceryBuilder';
import StringListRule from '../../classes/Rules/StringListRule';

/**
 * Creates the base Tracery Grammar objects for all villagers
 * @returns  base TraceryBuilder object
 */
let smugGeneralGrammar:TraceryBuilder = new TraceryBuilder({
    hello: new StringListRule(['bienvenue']),
    greeting: new StringListRule(['#player.capitalize# enters #stageDir#.']),
    stageDir: new StringListRule(['stage left','stage right']),
    lotOf:new StringListRule(['lot of'])
})

// Add baseline general grammar rules.
smugGeneralGrammar.addObject(generalGrammar);

export default smugGeneralGrammar;

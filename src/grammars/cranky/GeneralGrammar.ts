import generalGrammar from '../baseVillager/GeneralGrammar';
import TraceryBuilder from '../../classes/Builders/TraceryBuilder';
import StringListRule from '../../classes/Rules/StringListRule';

/**
 * Creates the base Tracery Grammar objects for all villagers
 * @returns  base TraceryBuilder object
 */
let crankyGeneralGrammar:TraceryBuilder = new TraceryBuilder({
    hello: new StringListRule(['hey']),
    greeting: new StringListRule(['You again.']),
    howare: new StringListRule(['#energetic.capitalize# as #always##iSee#.']),
    player: new StringListRule(['youngin','kid']),
    energetic: new StringListRule(['energetic','lively']),
    always: new StringListRule(['always','usual','ever']),
    iSee: new StringListRule(['I see','I take it']),
    lotOf:new StringListRule(['lot of']),
    heldToolComment: new StringListRule([
        'Look at #playerName# with their #tool#.#activityGuess#',
        'What is with all the #toolNoun# #toolVerb.ing#, #player#?',
        'What could you be up to with that #tool#, #player#?#activityGuess#'
    ]),
    activityRecomendation: new StringListRule(['Back when I was younger I spent all day #toolVerb.ing# with #toolGeneral.a#.'])
})

// Add baseline general grammar rules.
crankyGeneralGrammar.addObject(generalGrammar);

export default crankyGeneralGrammar;

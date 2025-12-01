import generalGrammar from '../baseVillager/GeneralGrammar';
import TraceryBuilder from '../../classes/Builders/TraceryBuilder';
import StringListRule from '../../classes/Rules/StringListRule';

/**
 * Creates the base Tracery Grammar objects for all villagers
 * @returns  base TraceryBuilder object
 */
let lazyGeneralGrammar:TraceryBuilder = new TraceryBuilder({
    hello: new StringListRule(['hi']),
    greeting: new StringListRule(['#greeting.toUpperCase#','#player.toUpperCase#!']),
    howare: new StringListRule(['Wanna play?','Wanna play, #catchphrase#?']),
    player: new StringListRule(['#friend#','snack #friend#']),
    friend: new StringListRule(['friend','friend','pal','buddy']),
    lotOf:new StringListRule(['lotsa','lotta']),
    heldToolComment: new StringListRule(['That is a neat #tool#.']),
    activityGuess: new StringListRule([' #toolVerb.capitalize.ing# #toolNoun.s#?',' What are ya doing? #toolVerb.ing.capitalize#?'])
})

// Add baseline general grammar rules.
lazyGeneralGrammar.addObject(generalGrammar);

export default lazyGeneralGrammar;

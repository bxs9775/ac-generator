import generalGrammar from '../baseVillager/GeneralGrammar';
import ExpansionRuleBuilder from '../../classes/Builders/ExpansionRuleBuilder'
import GrammarBuilder from '../../classes/Builders/GrammarBuilder';
import GrammarSet from '../../classes/GrammarSet';

/**
 * Creates the base Tracery Grammar objects for all villagers
 * @returns  base GrammarBuilder object
 */
let lazyGeneralGrammar:GrammarBuilder = new GrammarBuilder({
    hello: ['hi'],
    greeting: ['#greeting.toUpperCase#','#player.toUpperCase#!'],
    howare: ['Wanna play?','Wanna play, #catch-phrase#?'],
    player: ['#friend#','snack #friend#'],
    friend: ['friend','friend','pal','buddy'],
    lotOf:['lotsa','lotta'],
    heldToolComment: ['That is a neet #tool#.'],
    activityGuess: [' #toolVerb.capitalize.ing# #toolNoun.s#?',' What are ya doing? #toolVerb.ing.capitalize#?']
})

// Add baseline general grammar rules.
lazyGeneralGrammar.addObject(generalGrammar);

export default lazyGeneralGrammar;

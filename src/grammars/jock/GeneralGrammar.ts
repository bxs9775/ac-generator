import generalGrammar from '../baseVillager/GeneralGrammar';
import ExpansionRuleBuilder from '../../classes/Builders/ExpansionRuleBuilder'
import GrammarBuilder from '../../classes/Builders/GrammarBuilder';
import GrammarSet from '../../classes/GrammarSet';

/**
 * Creates the base Tracery Grammar objects for all villagers
 * @returns  base GrammarBuilder object
 */
let jockGeneralGrammar:GrammarBuilder = new GrammarBuilder({
    hello: ['yo','hey','hey there','heya','lookin\' built','sup','heeeya'],
    greeting: ['Hey, hey!','Morniiiing!','Hey listen up!'],
    howare: ['How ya doin\',  #catch-phrase#?', 'What\'s up?', 'Need something?', 'You bringin\' it?', 
        'Workin\' those legs?', 'Feelin\' strong, #catch-phrase#?', 'Whaddaya need, #catch-phrase#?',
        'Gettin\' an early start?', 'We meet again!', 
        'Wow, you just keep turning up today. It\'s like you\'re only playing offense, #catch-phrase#.', 
        'Wow, you just keep turning up today.',
        'Are we playing follow the leader or something, #catch-phrase#?'
    ],
    player: ['coach', 'teammate'],
    lotOf:['lot of'],
    activityRecomendation: ['Why don\'t you grab a #tool# and start #toolVerb.ing#?','I bet you could get a good workout #toolVerb.ing# #toolNoun.s# with a #toolGeneral#.']
})

// Add baseline general grammar rules.
jockGeneralGrammar.addObject(generalGrammar);

export default jockGeneralGrammar;

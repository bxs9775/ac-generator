import generalGrammar from '../baseVillager/GeneralGrammar';
import TraceryBuilder from '../../classes/Builders/TraceryBuilder';
import StringListRule from '../../classes/Rules/StringListRule';

/**
 * Creates the base Tracery Grammar objects for all villagers
 * @returns  base TraceryBuilder object
 */
let jockGeneralGrammar:TraceryBuilder = new TraceryBuilder({
    hello: new StringListRule(['yo','hey','hey there','heya','lookin\' built','sup','heeeya']),
    greeting: new StringListRule(['Hey, hey!','Morniiiing!','Hey listen up!']),
    howare: new StringListRule(['How ya doin\',  #catchphrase#?', 'What\'s up?', 'Need something?', 'You bringin\' it?', 
        'Workin\' those legs?', 'Feelin\' strong, #catchphrase#?', 'Whaddaya need, #catchphrase#?',
        'Gettin\' an early start?', 'We meet again!', 
        'Wow, you just keep turning up today. It\'s like you\'re only playing offense, #catchphrase#.', 
        'Wow, you just keep turning up today.',
        'Are we playing follow the leader or something, #catchphrase#?'
    ]),
    player: new StringListRule(['coach', 'teammate']),
    lotOf:new StringListRule(['lot of']),
    activityRecomendation: new StringListRule(['Why don\'t you grab a #tool# and start #toolVerb.ing#?','I bet you could get a good workout #toolVerb.ing# #toolNoun.s# with a #toolGeneral#.'])
})

// Add baseline general grammar rules.
jockGeneralGrammar.addObject(generalGrammar);

export default jockGeneralGrammar;

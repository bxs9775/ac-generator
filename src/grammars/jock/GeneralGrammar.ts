import ExpansionRuleBuilder from '../../classes/Builders/ExpansionRuleBuilder'
import GrammarBuilder from '../../classes/Builders/GrammarBuilder';
import GrammarSet from '../../classes/GrammarSet';

/**
 * Creates the base Tracery Grammar objects for all villagers
 * @returns  base GrammarBuilder object
 */
export let generalGrammar:GrammarBuilder = new GrammarBuilder({
    hello: ['yo','hey','hey there','heya','lookin\' built','sup','heeeya'],
    greeting: ['Hey, hey!','Morniiiing!','Hey listen up!'],
    howare: ['How ya doin\',  #catch-phrase#?', 'What\'s up?', 'Need something?', 'You bringin\' it?', 
        'Workin\' those legs?', 'Feelin\' strong, #catch-phrase#?', 'Whaddaya need, #catch-phrase#?',
        'Gettin\' an early start?', 'We meet again!', 
        'Wow, you just keep turning up today. It\'s like you\'re only playing offense, #catch-phrase#.', 
        'Wow, you just keep turning up today.',
        'Are we playing follow the leader or something, #catch-phrase#?'
    ],
    player: ['coach', 'teammate']
});

export default generalGrammar;

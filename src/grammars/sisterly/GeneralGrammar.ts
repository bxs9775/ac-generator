import generalGrammar from '../baseVillager/GeneralGrammar';
import TraceryBuilder from '../../classes/Builders/TraceryBuilder';
import StringListRule from '../../classes/Rules/StringListRule';

/**
 * Creates the base Tracery Grammar objects for all villagers
 * @returns  base TraceryBuilder object
 */
let sisterlyGeneralGrammar:TraceryBuilder = new TraceryBuilder({
    hello: new StringListRule(['hey','hey there','whoa there']),
    greeting: new StringListRule(['Hey there.','Whoa there!']),
    howare: new StringListRule(['What\'s the rush, #catchphrase#?','Hold on a minute there.','What are you up to, #catchphrase#?']),
    player: new StringListRule(['bukko','kid','kiddo']),
    heldToolComment: new StringListRule([
        "Look at #playerName# with their #tool#.",
        "What could you be up to with that #tool#, #player#?#activityGuess#",
        "I see that #tool#, #player#.#activityGuess#"
    ]),
    activityGuess: new StringListRule([
        " #toolVerb.capitalize.ing# #toolNoun.s#?"
    ]),
});

// Add baseline general grammar rules.
sisterlyGeneralGrammar.addObject(generalGrammar);

export default sisterlyGeneralGrammar;

import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder"
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";
/**
 * Creates the Tracery Grammer object for the play hobby
 * @returns  GrammerBuilder object for the play hobby
 */
export function createPlayGrammar():GrammerBuilder{
    return new GrammerBuilder({
        "topic": ["#playTopic#"],
        "playTopic": ["Oh, I'm just running around, #player#.#playExtra#","I enjoy playing #lotOf.a# games.#playExtra#"],
        "playExtra": [""," Would you like to join me?"],
        "playGame": ["treasure hunt","hide and seek","tag"]
    });
}
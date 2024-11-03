import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder"
import GrammarBuilder from "../../classes/Builders/GrammarBuilder";
/**
 * Creates the Tracery Grammar object for the play hobby
 * @returns  GrammarBuilder object for the play hobby
 */
export function createPlayGrammar():GrammarBuilder{
    return new GrammarBuilder({
        "topic": ["Oh, I'm just running around, #player#.#playExtra#","I enjoy playing #lotOf.a# games.#playExtra#"],
        "playExtra": [""," Would you like to join me?"],
        "playGame": ["treasure hunt","hide and seek","tag"]
    });
}
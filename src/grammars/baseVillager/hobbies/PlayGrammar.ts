import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";
import ExpansionRuleBuilder from "../../../classes/Builders/ExpansionRuleBuilder";

let playGrammar: GrammarBuilder = new GrammarBuilder({
    "topic": ["#playTopic#"],
    "playTopic": ["Oh, I'm just running around, #player#.#playExtra#","I enjoy playing #lotOf.a# games.#playExtra#"],
    "playExtra": [""," Would you like to join me?"],
    "playGame": ["treasure hunt","hide and seek","tag"]
});

export default playGrammar;
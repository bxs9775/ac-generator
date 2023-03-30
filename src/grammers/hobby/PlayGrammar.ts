import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder"
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";

export function createPlayGrammar():GrammerBuilder{
    return new GrammerBuilder({
        "topic": ["#playTopic#"],
        "playTopic": ["Oh, I'm just running around, #player#.#playExtra#","I enjoy playing a lot of games.#playExtra#"],
        "playExtra": [""," Would you like to join me?"],
        "playGame": ["treasure hunt","hide and seek","tag"]
    });
}
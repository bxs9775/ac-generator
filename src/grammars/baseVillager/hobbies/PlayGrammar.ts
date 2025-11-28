import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";
import StringListRule from "../../../classes/Rules/StringListRule";

let playGrammar: GrammarBuilder = new GrammarBuilder({
    "topic": new StringListRule(["#playTopic#"]),
    "playTopic": new StringListRule(["Oh, I'm just running around, #player#.#playExtra#","I enjoy playing #lotOf.a# games.#playExtra#"]),
    "playExtra": new StringListRule([""," Would you like to join me?"]),
    "playGame": new StringListRule(["treasure hunt","hide and seek","tag"])
});

export default playGrammar;
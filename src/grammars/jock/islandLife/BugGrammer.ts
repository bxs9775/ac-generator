import ExpansionRuleBuilder from "../../../classes/Builders/ExpansionRuleBuilder";
import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";

let bugGrammar:GrammarBuilder = new GrammarBuilder({
    topic: ["#bugTopic#"],
    // bug catching
    net: ["[adj:#baseToolAdj#,star ]#adj#net"],
    describeBugHunt: [
        new ExpansionRuleBuilder({
            toolNoun: ["bug","insect","beetle","butterfly","dragonfly"],
            toolVerb: ["catch"],
            toolExtra: [""]
        })
    ],
    bugTopic:[
        "[#describeBugHunt#][tool:#net#]#heldToolComment##toolExtra#"
    ]
});

export default bugGrammar;
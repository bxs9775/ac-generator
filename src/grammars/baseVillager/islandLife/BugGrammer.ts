import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";
import StringListRule from "../../../classes/Rules/StringListRule";

let bugGrammar:GrammarBuilder = new GrammarBuilder({
    topic: new StringListRule(["#bugTopic#"]),
    // bug catching
    net: new StringListRule(["[adj:#baseToolAdj#,star ]#adj#net"]),
    describeBugHunt: new ExpansionRule({
        toolNoun: ["bug","insect","beetle","butterfly","dragonfly"],
        toolVerb: ["catch"],
        toolExtra: [""]
    }),
    bugTopic: new StringListRule(["[#describeBugHunt#][tool:#net#]#heldToolComment##toolExtra#"])
});

export default bugGrammar;
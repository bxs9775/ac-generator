import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";
import StringListRule from "../../../classes/Rules/StringListRule";

let bugGrammar:TraceryBuilder = new TraceryBuilder({
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
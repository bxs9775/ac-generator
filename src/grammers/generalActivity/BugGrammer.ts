import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder";
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";

export function createBugGrammar():GrammerBuilder{
    return new GrammerBuilder({
        topic: ["#bugTopic#"],
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
        ],
    });
}
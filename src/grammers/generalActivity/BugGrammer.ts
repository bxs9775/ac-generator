import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder";
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";

export function createBugGrammar():GrammerBuilder{
    return new GrammerBuilder({
        topic: ["#bugTopic#"],
        net: ["[adj:#baseToolAdj#,star ]#adj#net"],
        bugNoun: ["bug","insect","beetle","butterfly","dragonfly"],
        bugVerb: ["catch"],
        bugTopic:[
            "Are you #bugVerb.ing# a lot of #bugNoun.s# with that #net.capitalize#, #player#?"
        ],
    });
}
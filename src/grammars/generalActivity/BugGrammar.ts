import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder";
import GrammarBuilder from "../../classes/Builders/GrammarBuilder";

/**
 * Creates the Tracery Grammar object for bug hunting
 * @returns  GrammarBuilder object for the bug hunting activity
 */
export function createBugGrammar():GrammarBuilder{
    return new GrammarBuilder({
        topic: [
            "[#describeBugHunt#][tool:#net#]#heldToolComment##toolExtra#"
        ],
        net: ["[adj:#baseToolAdj#,star ]#adj#net"],
        describeBugHunt: [
            new ExpansionRuleBuilder({
                toolNoun: ["bug","insect","beetle","butterfly","dragonfly"],
                toolVerb: ["catch"],
                toolExtra: [""]
            })
        ]
    });
}
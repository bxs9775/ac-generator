import { describe } from "node:test";
import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder";
import GrammarBuilder from "../../classes/Builders/GrammarBuilder";
/**
 * Creates the Tracery Grammar object for digging/fossil hunting
 * @returns  GrammarBuilder object for the digging/fossil hunting activity
 */
export function createDigGrammar():GrammarBuilder{
    return new GrammarBuilder({
        topic: [
            "[#describeDig#][tool:#shovel#][toolGeneral:shovel]#heldToolComment##toolExtra#",
            "[#describeDigTreasure#][tool:#shovel#][toolGeneral:shovel]I hear there are #lotOf.a# #toolNoun.s# around #town#.#activityRecommenation#"
        ],
        shovel: ["[adj:#baseToolAdj#,printed-design ]#adj#shovel"],
        describeDigTreasure: [
            new ExpansionRuleBuilder({
                toolNoun: "fossel",
                toolVerb: ["dig up","hunt for"],
                toolExtra: [""]
            }),
            new ExpansionRuleBuilder({
                toolNoun: "gyroid",
                toolVerb: ["dig up","hunt for"],
                toolExtra: [""]
            })
        ],
        describeDigOther: [
            new ExpansionRuleBuilder({
                toolNoun: "pitfall",
                toolVerb: ["plant","bury"],
                toolExtra: [""]
            }),
            new ExpansionRuleBuilder({
                toolNoun: "flower",
                toolVerb: ["plant","grow"],
                toolExtra: [""]
            }),
            new ExpansionRuleBuilder({
                toolNoun: "tree",
                toolVerb: ["plant","grow"],
                toolExtra: [""]
            })
        ],
        describeDig: ["#describeDigTreasure#","#describeDigOther#"]
    });
}
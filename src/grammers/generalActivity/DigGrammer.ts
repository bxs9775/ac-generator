import { describe } from "node:test";
import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder";
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";

export function createDigGrammar():GrammerBuilder{
    return new GrammerBuilder({
        topic: ["#digTopic#"],
        shovel: ["[adj:#baseToolAdj#,printed-design ]#adj#shovel"],
        digTopic:[
            "[#describeDig#]What is that #shovel# for, #catch-phrase#? Are you #digVerb.ing# #digNoun.s#?#digExtra#",
            "[#describeDigTreasure#]I hear there are #lotOf.a# #digNoun.s# around #town#. Why don't you grab a shovel and start digging?"],
        describeDigTreasure: [
            new ExpansionRuleBuilder({
                digNoun: "fossel",
                digVerb: ["dig up","hunt for"],
                digExtra: [""]
            }),
            new ExpansionRuleBuilder({
                digNoun: "gyroid",
                digVerb: ["dig up","hunt for"],
                digExtra: [""]
            })
        ],
        describeDigOther: [
            new ExpansionRuleBuilder({
                digNoun: "pitfall",
                digVerb: ["plant","bury"],
                digExtra: [""]
            }),
            new ExpansionRuleBuilder({
                digNoun: "flower",
                digVerb: ["plant","grow"],
                digExtra: [""]
            }),
            new ExpansionRuleBuilder({
                digNoun: "tree",
                digVerb: ["plant","grow"],
                digExtra: [""]
            })
        ],
        describeDig: ["#describeDigTreasure#","#describeDigOther#"]
    });
}
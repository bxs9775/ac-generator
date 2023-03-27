import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder";
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";

export function createDigGrammar():GrammerBuilder{
    return new GrammerBuilder({
        topic: ["#digTopic#"],
        shovel: ["[adj:#baseToolAdj#,printed-design ]#adj#shovel"],
        digTopic:["[#describeDig#]What is that #shovel.capitalize# for, #catch-phrase#? Are you #digVerb.ing# #digNoun.s#?#digExtra#"],
        describeDig: [
            new ExpansionRuleBuilder({
                digNoun: "fossel",
                digVerb: ["dig for","hunt for"],
                digExtra: [""]
            }),
            new ExpansionRuleBuilder({
                digNoun: "gyroid",
                digVerb: ["dig for","hunt for"],
                digExtra: [""]
            }),
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
        ]
    });
}
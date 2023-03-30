import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder";
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";

export function createDigGrammar():GrammerBuilder{
    return new GrammerBuilder({
        topic: ["#digTopic#"],
        shovel: ["[adj:#baseToolAdj#,printed-design ]#adj#shovel"],
        digTopic:["[#describeDig#]What is that #shovel# for, #catch-phrase#? Are you #digVerb.ing# #digNoun.s#?#digExtra#","[digNoun:fossel,gyroid]I hear there are a lot of #digNoun.s# around #town#. Why don't you grab a shovel and start digging?"],
        describeDig: [
            new ExpansionRuleBuilder({
                digNoun: "fossel",
                digVerb: ["dig up","hunt for"],
                digExtra: [""]
            }),
            new ExpansionRuleBuilder({
                digNoun: "gyroid",
                digVerb: ["dig up","hunt for"],
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
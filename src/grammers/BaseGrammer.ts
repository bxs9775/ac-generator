import ExpansionRuleBuilder from "../classes/Builders/ExpansionRuleBuilder"
import GrammerBuilder from "../classes/Builders/GrammerBuilder";
import RuleDictionary from "../classes/Builders/RuleDictionary"
import TraceryBuilder from "../classes/Builders/TraceryBuilder"

export function createBaseGrammer():GrammerBuilder{
    return new GrammerBuilder({
        player: ["#playerName#"],
        hello: ["hello"],
        digTopic:["[#describeDig#]What is that shovel for, #catch-phrase#? Are you #digVerb.ing##digFor# #digNoun.s#?#digExtra#"],
        topic: ["#digTopic#"],
        greeting: ["#hello.capitalize#, #player#."],
        howare: ["How are you, #catch-phrase#?"],
        origin: ["#topic#","#greeting# #topic#","#greeting# #howare# #topic#"],
        describeDig: [
            new ExpansionRuleBuilder({
                digNoun: "fossel",
                digVerb: ["dig","hunt"],
                digFor: " for",
                digExtra: [""]
            }),
            new ExpansionRuleBuilder({
                digNoun: "gyroid",
                digVerb: ["dig","hunt"],
                digFor: " for",
                digExtra: [""]
            }),
            new ExpansionRuleBuilder({
                digNoun: "pitfall",
                digVerb: ["plant","bury"],
                digFor: "",
                digExtra: [""]
            }),
            new ExpansionRuleBuilder({
                digNoun: "flower",
                digVerb: ["plant","grow"],
                digFor: "",
                digExtra: [""]
            }),
            new ExpansionRuleBuilder({
                digNoun: "tree",
                digVerb: ["plant","grow"],
                digFor: "",
                digExtra: [""]
            })
        ]
    });
}
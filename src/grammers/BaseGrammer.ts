import ExpansionRuleBuilder from "../classes/Builders/ExpansionRuleBuilder"
import RuleDictionary from "../classes/Builders/RuleDictionary"

export var baseGrammer:RuleDictionary = {
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
            digExtra: ""
        }),
        new ExpansionRuleBuilder({
            digNoun: "gyroid",
            digVerb: ["dig","hunt"],
            digFor: " for",
            digExtra: ""
        }),
        new ExpansionRuleBuilder({
            digNoun: "pitfall",
            digVerb: ["plant","bury"],
            digFor: "",
            digExtra: ""
        }),
        new ExpansionRuleBuilder({
            digNoun: ["flower","tree"],
            digVerb: ["plant","bury"],
            digFor: "",
            digExtra: ""
        })
    ]
}
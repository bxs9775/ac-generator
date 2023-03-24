import GrammerBuilder from "../Builders/GrammerBuilder";
import ExpansionRuleBuilder from "../Builders/ExpansionRuleBuilder";
import RuleDictionary from "../Builders/RuleDictionary";

export default class BaseVillagerGrammer extends GrammerBuilder{
    constructor(villager:RuleDictionary){
        super({
            name: [villager.name],
            "catch-phrase": [villager["catch-phrase"]],
            player: ["#playerName#"],
            hello: ["hello"],
            digTopic:["[#describeDig#]What is that shovel for, #catch-phrase#? Are you #digVerb.ing##digFor# #digNoun.s#?#digExtra#"],
            topic: ["#digTopic#"],
            greeting: ["#hello.capitalize#, #player#."],
            howare: ["How are you, #catch-phrase#?"],
            origin: ["#topic#","#greeting# #topic#","#greeting# #howare# #topic#"]
        });
        this.addRule("describeDig",
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
        );
    }
}

module.exports = BaseVillagerGrammer;
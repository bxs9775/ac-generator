import ExpansionRuleBuilder from "../classes/Builders/ExpansionRuleBuilder"
import GrammerBuilder from "../classes/Builders/GrammerBuilder";

export function createBaseGrammer():GrammerBuilder{
    return new GrammerBuilder({
        player: ["#playerName#"],
        hello: ["hello"],
        greeting: ["#hello.capitalize#, #player#."],
        howare: ["How are you, #catch-phrase#?"],
        origin: ["#topic#","#greeting# #topic#","#greeting# #howare# #topic#"],
        baseToolAdj: ["flimsy ","","golden ","colorful ","outdoorsy "]
    });
}
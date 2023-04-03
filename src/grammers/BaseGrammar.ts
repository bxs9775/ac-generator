import ExpansionRuleBuilder from "../classes/Builders/ExpansionRuleBuilder"
import GrammerBuilder from "../classes/Builders/GrammerBuilder";

export function createBaseGrammer():GrammerBuilder{
    return new GrammerBuilder({
        player: ["#playerName#"],
        hello: ["hello"],
        greeting: ["#hello.capitalize#, #player#."],
        howare: ["How are you, #catch-phrase#?"],
        origin: ["#topic#","#greeting# #topic#","#greeting# #howare# #topic#"],
        heldToolComment: [
            "What is that #tool# for, #catch-phrase#?#activityGuess#",
            "Are you #toolVerb.ing# #lotOf.a# #toolNoun.s# with that #tool#, #player#?"
        ],
        activityGuess: [
            "",
            " Are you #toolVerb.ing# #toolNoun.s#?"
        ],
        activityRecommenation: [
            "",
            " You can #toolVerb# them with a #toolGeneral#."
        ],
        baseToolAdj: ["flimsy ","","golden ","colorful ","outdoorsy "]
    });
}
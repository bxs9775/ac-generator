import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder"
import GrammarBuilder from "../../classes/Builders/GrammarBuilder";
import GrammarSet from "../../classes/GrammarSet";

/**
 * Creates the base Tracery Grammar objects for all villagers
 * @returns  base GrammarBuilder object
 */
export let generalGrammar:GrammarBuilder = new GrammarBuilder({
    player: ["#playerName#"],
    hello: ["hello"],
    greeting: ["#hello.capitalize#, #player#.","#hello.capitalize#.","#hello.capitalize#, #catchphrase#."],
    howare: ["How are you, #catchphrase#?"],
    origin: ["#topic#","#greeting# #topic#","#greeting# #howare# #topic#"],
    topic: [],
    heldToolComment: [
        "What is that #tool# for, #catchphrase#?#activityGuess#",
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
    baseToolAdj: ["flimsy ","","golden ","colorful ","outdoorsy "],
    lotOf: ["lot of"]
});

export default generalGrammar;

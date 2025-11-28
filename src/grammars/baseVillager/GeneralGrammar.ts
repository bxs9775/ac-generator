import GrammarBuilder from "../../classes/Builders/GrammarBuilder";
import StringListRule from "../../classes/Rules/StringListRule";

/**
 * Creates the base Tracery Grammar objects for all villagers
 * @returns  base GrammarBuilder object
 */
export let generalGrammar:GrammarBuilder = new GrammarBuilder({
    player: new StringListRule(["#playerName#"]),
    hello: new StringListRule(["hello"]),
    greeting: new StringListRule(["#hello.capitalize#, #player#.","#hello.capitalize#.","#hello.capitalize#, #catchphrase#."]),
    howare: new StringListRule(["How are you, #catchphrase#?"]),
    origin: new StringListRule(["#topic#","#greeting# #topic#","#greeting# #howare# #topic#"]),
    topic: new StringListRule([]),
    heldToolComment: new StringListRule([
        "What is that #tool# for, #catchphrase#?#activityGuess#",
        "Are you #toolVerb.ing# #lotOf.a# #toolNoun.s# with that #tool#, #player#?"
    ]),
    activityGuess: new StringListRule([
        "",
        " Are you #toolVerb.ing# #toolNoun.s#?"
    ]),
    activityRecommenation: new StringListRule([
        "",
        " You can #toolVerb# them with a #toolGeneral#."
    ]),
    baseToolAdj: new StringListRule(["flimsy ","","golden ","colorful ","outdoorsy "]),
    lotOf: new StringListRule(["lot of"])
});

export default generalGrammar;

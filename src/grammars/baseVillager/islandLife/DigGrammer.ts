import ExpansionRuleBuilder from "../../../classes/Builders/ExpansionRuleBuilder";
import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";


let digGrammar:GrammarBuilder = new GrammarBuilder({
    topic: ["#digTopic#"],
    // digging/fossil-hunting
    shovel: ["[adj:#baseToolAdj#,printed-design ]#adj#shovel"],
    digTopic:[
        "[#describeDig#][tool:#shovel#][toolGeneral:shovel]#heldToolComment##toolExtra#",
        "[#describeDigTreasure#][tool:#shovel#][toolGeneral:shovel]I hear there are #lotOf.a# #toolNoun.s# around #town#.#activityRecommenation#"],
    describeDigTreasure: [
        new ExpansionRuleBuilder({
            toolNoun: "fossel",
            toolVerb: ["dig up","hunt for"],
            toolExtra: [""]
        }),
        new ExpansionRuleBuilder({
            toolNoun: "gyroid",
            toolVerb: ["dig up","hunt for"],
            toolExtra: [""]
        })
    ],
    describeDigOther: [
        new ExpansionRuleBuilder({
            toolNoun: "pitfall",
            toolVerb: ["plant","bury"],
            toolExtra: [""]
        }),
        new ExpansionRuleBuilder({
            toolNoun: "flower",
            toolVerb: ["plant","grow"],
            toolExtra: [""]
        }),
        new ExpansionRuleBuilder({
            toolNoun: "tree",
            toolVerb: ["plant","grow"],
            toolExtra: [""]
        })
    ],
    describeDig: ["#describeDigTreasure#","#describeDigOther#"]
});

export default digGrammar;
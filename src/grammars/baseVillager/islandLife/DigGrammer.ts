import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";
import ExpansionListRule from "../../../classes/Rules/ExpansionListRule";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";
import StringListRule from "../../../classes/Rules/StringListRule";


let digGrammar:TraceryBuilder = new TraceryBuilder({
    topic: new StringListRule(["#digTopic#"]),
    // digging/fossil-hunting
    shovel: new StringListRule(["[adj:#baseToolAdj#,printed-design ]#adj#shovel"]),
    digTopic:new StringListRule(["[#describeDig#][tool:#shovel#][toolGeneral:shovel]#heldToolComment##toolExtra#",
        "[#describeDigTreasure#][tool:#shovel#][toolGeneral:shovel]I hear there are #lotOf.a# #toolNoun.s# around #town#.#activityRecommenation#"]),
    describeDigTreasure: new ExpansionListRule([
        new ExpansionRule({
            toolNoun: ["fossel"],
            toolVerb: ["dig up","hunt for"],
            toolExtra: [""]
        }),
        new ExpansionRule({
            toolNoun: ["gyroid"],
            toolVerb: ["dig up","hunt for"],
            toolExtra: [""]
        })
    ]),
    describeDigOther: new ExpansionListRule([
        new ExpansionRule({
            toolNoun: ["pitfall"],
            toolVerb: ["plant","bury"],
            toolExtra: [""]
        }),
        new ExpansionRule({
            toolNoun: ["flower","tree"],
            toolVerb: ["plant","grow"],
            toolExtra: [""]
        })
    ]),
    describeDig: new StringListRule(["#describeDigTreasure#","#describeDigOther#"])
});

export default digGrammar;
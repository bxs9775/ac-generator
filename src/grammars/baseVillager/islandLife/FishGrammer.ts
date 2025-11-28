import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";
import ExpansionListRule from "../../../classes/Rules/ExpansionListRule";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";
import StringListRule from "../../../classes/Rules/StringListRule";

let fishGrammar:GrammarBuilder = new GrammarBuilder({
    topic:new StringListRule(["#fishTopic#"]),
    fishTopic:new StringListRule([
        "[#describeFishing#][tool:#fishingrod#][toolGeneral:fishing rod]#heldToolComment##toolExtra#",
        "[#describeFishType#][#describeFishing#][tool:#fishingrod#][toolGeneral:fishing rod]I hear that #town#'s #fishLoc.s# are full of #fishType#. #activityRecommenation#"
    ]),
    fishingrod: new StringListRule(["[adj:#baseToolAdj#,fish ]#adj#fishing rod","[adj:#baseToolAdj#,fish ]#adj#rod"]),
    fish: new StringListRule(["fish"]),
    //fish: new StringListRule(["#riverFish#","#oceanFish#","#pondFish#"]),
    describeFishType:new ExpansionListRule([
        new ExpansionRule({
            fishLoc: ["river"],
            fishType: ["#riverFish#"]
        }),
        new ExpansionRule({
            fishLoc: ["ocean","sea"],
            fishType: ["#oceanFish#]"]
        }),
        new ExpansionRule({
            fishLoc: ["pond"],
            fishType: ["#pondFish#"]
        })
    ]),
    describeFishing: new ExpansionRule({
        toolNoun: ["fish"],
        toolExtra: [""," I hope you catch #lotOf.a# #toolNoun.s#."],
        toolVerb: ["catch"], 
    })
});

export default fishGrammar;
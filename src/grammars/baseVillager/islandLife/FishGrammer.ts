import ExpansionRuleBuilder from "../../../classes/Builders/ExpansionRuleBuilder";
import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";

let fishGrammar:GrammarBuilder = new GrammarBuilder({
    topic:["#fishTopic"],
    fishingrod: ["[adj:#baseToolAdj#,fish ]#adj#fishing rod","[adj:#baseToolAdj#,fish ]#adj#rod"],
    fish: ["#riverFish#","#oceanFish#","#pondFish#"],
    describeFishType:[
        new ExpansionRuleBuilder({
            fishLoc: "river",
            fishType: "#riverFish#"
        }),
        new ExpansionRuleBuilder({
            fishLoc: ["ocean","sea"],
            fishType: "#oceanFish#"
        }),
        new ExpansionRuleBuilder({
            fishLoc: "pond",
            fishType: "#pondFish#"
        })
    ],
    describeFishing: [new ExpansionRuleBuilder({
        toolNoun: ["fish"],
        toolExtra: [""," I hope you catch #lotOf.a# #toolNoun.s#."],
        toolVerb: ["catch"], 
    })],
    fishTopic:[
        "[#describeFishing#][tool:#fishingrod#][toolGeneral:fishing rod]#heldToolComment##toolExtra#",
        "[#describeFishType#][#describeFishing#][tool:#fishingrod#][toolGeneral:fishing rod]I hear that #town#'s #fishLoc.s# are full of #fishType#.#activityRecommenation#"
    ]
});

export default fishGrammar;
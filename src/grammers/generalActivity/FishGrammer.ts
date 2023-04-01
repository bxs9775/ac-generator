import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder";
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";
import AcApiHelper from "../../helpers/acnhapiHelper";

export async function createFishGrammar(month:number):Promise<GrammerBuilder>{
    var fishGrammar = new GrammerBuilder({
        topic: ["#fishTopic#"],
        fishingrod: ["[adj:#baseToolAdj#,fish ]#adj#fishing rod","[adj:#baseToolAdj#,fish ]#adj#rod"],
        fishVerb: ["catch"],
        fish: ["#riverFish#","#oceanFish#","#pondFish#"],
        describeFish:[
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
        fishNoun: ["fish"],
        fishExtra: [""," I hope you #fishVerb# #lotOf.a# #fishNoun.s#."],
        fishTopic:[
            "Are you #fishVerb.ing# #lotOf.a# #fishNoun.s# with that #fishingrod#, #player#?#fishExtra#",
            "What is that #fishingrod# for, #catch-phrase#? Are you #fishVerb.ing# #fishNoun.s#?#fishExtra#",
            "[#describeFish#]I hear that #town#'s #fishLoc.s# are full of #fishType#."
        ]
    });
    fishGrammar.addObject(new GrammerBuilder(await AcApiHelper.getFish(month)));

    return fishGrammar;
}
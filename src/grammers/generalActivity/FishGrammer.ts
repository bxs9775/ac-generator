import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder";
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";
import villagerHelper from "../../helpers/nookpediaHelper";

/**
 * Creates the Tracery Grammer object for fishing
 * @returns  GrammerBuilder object for the fishing activity
 */
export async function createFishGrammar(month:number):Promise<GrammerBuilder>{
    var fishGrammar = new GrammerBuilder({
        topic: ["#fishTopic#"],
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
    fishGrammar.addObject(new GrammerBuilder(await villagerHelper.getFish(month)));

    return fishGrammar;
}
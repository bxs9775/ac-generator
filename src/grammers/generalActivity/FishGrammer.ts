import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder";
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";

export function createFishGrammar():GrammerBuilder{
    return new GrammerBuilder({
        topic: ["#fishTopic#"],
        fishingrod: ["[adj:#baseToolAdj#,fish ]#adj#fishing rod","[adj:#baseToolAdj#,fish ]#adj#rod"],
        fishVerb: ["catch"],
        fish: ["black bass","sea bass","trout","horse makeral","salmon","tuna","barred knifejaw","squid","olive flounder","dab"],
        fishNoun: ["fish"],
        fishExtra: [""," I hope you #fishVerb# #lotOf.a# #fishNoun.s#."],
        fishTopic:[
            "Are you #fishVerb.ing# #lotOf.a# #fishNoun.s# with that #fishingrod#, #player#?#fishExtra#",
            "What is that #fishingrod# for, #catch-phrase#? Are you #fishVerb.ing# #fishNoun.s#?#fishExtra#"
        ]
    });
}
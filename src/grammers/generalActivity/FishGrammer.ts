import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder";
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";

export function createFishGrammar():GrammerBuilder{
    return new GrammerBuilder({
        topic: ["#fishTopic#"],
        fishingrod: ["[adj:#baseToolAdj#,fish ]#adj#fishing rod","[adj:#baseToolAdj#,fish ]#adj#rod"],
        fishVerb: ["catch"],
        fish: ["black bass","sea bass","trout","horse makeral","salmon","tuna","barred knifejaw","squid","olive flounder","dab"],
        fishNoun: ["fish","#fish#"],
        fishTopic:[
            "Are you #fishVerb.ing# a lot of #fishNoun.s# with that #fishingrod.capitalize#, #player#?",
            "Look at #playerName# with their #fishingrod.capitalize#. I hope you #fishVerb# a lot of #fishNoun.s#, #catch-phrase#.",
        ],
    });
}
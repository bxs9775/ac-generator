import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder";
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";
/**
 * Creates the Tracery Grammer object for the education hobby
 * @returns  GrammerBuilder object for the education hobby
 */
export function createEducationGrammar():GrammerBuilder{
    return new GrammerBuilder({
        "topic": ["#educationTopic#"],
        "educationTopic": [
            "[#describeEductation#]Have you found any #eduNoun.s# recently? If so, you should take them over to the museum.#museumExtra#.",
            "[#describeEductation#]Whenever I'm curious about #eduNoun.s# I go talk to Blathers at the #town# museum.#museumExtra#",
            "[#describeFish#]I've been learning about #fishLoc# fish recently. Do you want to hear some facts about #fishType#?"
        ],
        describeEducation: [
            new ExpansionRuleBuilder({
                eduNoun: ["fossel"],
                museumExtra: [
                    "",
                    " Blathers gets really excited about fossels, but sometimes he talks too much. #catch-phrase.capitalize#...",
                    " Blathers is an expert on appraising fossils. It is so cool."
                ]
            }),
            new ExpansionRuleBuilder({
                eduNoun: ["fish"],
                museumExtra: [""]
            }),
            new ExpansionRuleBuilder({
                eduNoun: ["bug"],
                museumExtra: [
                    "",
                    " Even though bugs make Blathers uncomfortable, he can still tell you a lot about them.",
                    " Although for some reason, Blathers always freaks out when bugs are involved..."
                ]
            }),new ExpansionRuleBuilder({
                eduNoun: ["painting","sculpture"],
                museumExtra: [""]
            }),
        ]
    });
}
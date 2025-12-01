import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";
import ExpansionListRule from "../../../classes/Rules/ExpansionListRule";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";
import StringListRule from "../../../classes/Rules/StringListRule";

let educationGrammar:TraceryBuilder = new TraceryBuilder({
    "topic": new StringListRule(["#educationTopic#"]),
    "educationTopic": new StringListRule([
        "[#describeEductation#]Have you found any #eduNoun.s# recently? If so, you should take them over to the museum.#museumExtra#.",
        "[#describeEductation#]Whenever I'm curious about #eduNoun.s# I go talk to Blathers at the #town# museum.#museumExtra#",
        "[#describeFish#]I've been learning about #fishLoc# fish recently. Do you want to hear some facts about #fishType#?"
    ]),
    describeEducation: new ExpansionListRule([
        new ExpansionRule({
            eduNoun: ["fossel"],
            museumExtra: [
                "",
                " Blathers gets really excited about fossels, but sometimes he talks too much. #catchphrase.capitalize#...",
                " Blathers is an expert on appraising fossils. It is so cool."
            ]
        }),
        new ExpansionRule({
            eduNoun: ["fish"],
            museumExtra: [""]
        }),
        new ExpansionRule({
            eduNoun: ["bug"],
            museumExtra: [
                "",
                " Even though bugs make Blathers uncomfortable, he can still tell you a lot about them.",
                " Although for some reason, Blathers always freaks out when bugs are involved..."
            ]
        }),
        new ExpansionRule({
            eduNoun: ["painting","sculpture"],
            museumExtra: [""]
        })
    ])
});

export default educationGrammar;
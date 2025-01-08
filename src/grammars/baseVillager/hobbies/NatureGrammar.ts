import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";
import ExpansionRuleBuilder from "../../../classes/Builders/ExpansionRuleBuilder";

let natureGrammar: GrammarBuilder = new GrammarBuilder({
    "topic": ["#natureTopic#"],
    "natureTopic": [
        "I love planting and tending to flowers. What about you, #player#? Do you like to garden?",
        "There is nothing like being outside.",
        "I'm thinking of growing #flower.s# and #flower.s#. What do you think?",
        "Did you know there is a special reward if #town# is made environmentally beutiful?",
        "What do you think of my #flower.s#, #player#? Don't you think I have quite the green thumb?",
        "I'm glad I live in #town#. [natureNoun:fish,bug,flower,plant]There are so many #natureNoun.s# here."
    ],
    flower: ["rose","cosmo","tulip","pansy","lily","hyacinth","windflower","mum"]
});

export default natureGrammar;
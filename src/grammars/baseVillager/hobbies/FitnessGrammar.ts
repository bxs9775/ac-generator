import ExpansionRuleBuilder from "../../../classes/Builders/ExpansionRuleBuilder";
import GrammarBuilder from "../../../classes/Builders/GrammarBuilder";


let fitnessGrammar:GrammarBuilder = new GrammarBuilder({
    "topic": ["#exerciseTopic#"],
    "exerciseTopic": ["[#describeExercise#]I'm thinking of doing some #exercise#. It's good for your #exerciseTarget.s#."],
    "describeExercise": [
        new ExpansionRuleBuilder({
            exercise: "cardio",
            exerciseTarget: ["leg","calf","muscle"]
        }),
        new ExpansionRuleBuilder({
            exercise: ["arm exercises","curls"],
            exerciseTarget: ["arm","bicep"]
        }),
        new ExpansionRuleBuilder({
            exercise: "pushups",
            exerciseTarget: ["tricep","pec","shoulder"]
        })
    ]
});

export default fitnessGrammar;
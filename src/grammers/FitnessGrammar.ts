import ExpansionRuleBuilder from "../classes/Builders/ExpansionRuleBuilder"
import GrammerBuilder from "../classes/Builders/GrammerBuilder";

export function createFitnessGrammar():GrammerBuilder{
    return new GrammerBuilder({
        "exerciseTopic": ["[#describeExercise#]I'm thinking of doing some #exercise#. Its good for your #exerciseTarget.s#."],
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
        ],
        "topic": ["#exerciseTopic#"]
    });
}
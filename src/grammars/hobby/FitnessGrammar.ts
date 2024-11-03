import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder"
import GrammarBuilder from "../../classes/Builders/GrammarBuilder";
/**
 * Creates the Tracery Grammar object for the fitness hobby
 * @returns  GrammarBuilder object for the fitness hobby
 */
export function createFitnessGrammar():GrammarBuilder{
    return new GrammarBuilder({
        "topic": ["[#describeExercise#]I'm thinking of doing some #exercise#. Its good for your #exerciseTarget.s#."],
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
}
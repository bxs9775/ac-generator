import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder"
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";
/**
 * Creates the Tracery Grammer object for the fitness hobby
 * @returns  GrammerBuilder object for the fitness hobby
 */
export function createFitnessGrammar():GrammerBuilder{
    return new GrammerBuilder({
        "topic": ["#exerciseTopic#"],
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
        ]
    });
}
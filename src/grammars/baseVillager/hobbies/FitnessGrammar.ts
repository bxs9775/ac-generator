import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";
import ExpansionListRule from "../../../classes/Rules/ExpansionListRule";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";
import StringListRule from "../../../classes/Rules/StringListRule";


let fitnessGrammar:TraceryBuilder = new TraceryBuilder({
    "topic": new StringListRule(["#exerciseTopic#"]),
    "exerciseTopic": new StringListRule(["[#describeExercise#]I'm thinking of doing some #exercise#. It's good for your #exerciseTarget.s#."]),
    "describeExercise": new ExpansionListRule([
        new ExpansionRule({
            exercise: ["cardio"],
            exerciseTarget: ["leg","calf","muscle"]
        }),
        new ExpansionRule({
            exercise: ["arm exercises","curls"],
            exerciseTarget: ["arm","bicep"]
        }),
        new ExpansionRule({
            exercise: ["pushups"],
            exerciseTarget: ["tricep","pec","shoulder"]
        })
    ])
});

export default fitnessGrammar;
import GrammerBuilder from "./Builders/GrammerBuilder";
import Villager from "./Villager";
import { createBaseGrammer } from "../grammers/BaseGrammer";
import ExpansionRuleBuilder from "./Builders/ExpansionRuleBuilder";

export default class GrammerFactory{
    static getGrammer(villager:Villager):GrammerBuilder{
        var villagerGrammer = new GrammerBuilder({
            name: [villager.name],
            "catch-phrase": [villager.catchphrase]
        });
        var grammar = createBaseGrammer().addObject(villagerGrammer);
        switch(villager.personality){
            case "Lazy":
                grammar.addRule("friend","friend","pal","buddy");
                grammar.addRule("player","#friend#","snack #friend#");
                grammar.addRule("howAre","Wanna play?","Wanna play, #catch-phrase#?");
                grammar.addRule("hello","hi");
                grammar.addRule("greeting","#greeting.toUpperCase#","#player.toUpperCase#!");
                grammar.data["describeDig"].push(new ExpansionRuleBuilder({
                    digNoun: "treasure",
                    digVerb: ["dig","hunt"],
                    digFor: " for",
                    digExtra: ""
                }));
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "fossil")?.addRule("digExtra"," We're too late! We could be riding dinosaurs, #catch-phrase#."," Do you think you'll find any cool dinosaurs, #player#.");
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "fossil")?.addRule("digExtra","I like gyroids, they make a lot of funny sounds.");
                break;
            case "Jock":
                grammar.addRule("player","coach","teammate");
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("digExtra"," That's a good idea for a #digMuscle# workout."," You know #digNoun# #digVerb.ing# is good for developing your #digMuscle.s#?"," I should add that to my #digMuscle# regimen."))
                grammar.addRule("digMuscle","glute", "hamstring", "quad", "ab", "shoulder");
                grammar.addRule("topic","#sportTopic#","#exerciseTopic#");
                grammar.addRule("sportTopic","[#describeSport#]It's good #sport# weather today.#sportExtra#","[#describeSport#]The weather is perfect for #sport#, #catch-phrase#. Would you join me for #sportGame.a#?","[#describeSport#]I've really been into #sport# lately. I'm practicing my #sportVerb.ing#. Care to join me, #catch-phrase#?",
                    "[#describeSport#]I've really been into #sport# lately.#sportExtra#");
                grammar.addRule("describeSport",
                new ExpansionRuleBuilder({
                    sport: "soccer",
                    sportGame: ["1v1 game","game","goal kick contest"],
                    sportVerb: ["dribble","pass","kick"],
                    sportExtra: [""," I'm getting lots of cardo, #catch-phrase#.","You should see my calves."]
                }),
                new ExpansionRuleBuilder({
                    sport: "golf",
                    sportGame: ["few holes","few rounds at the driving range"],
                    sportVerb: ["putt"],
                    sportExtra: [""," Although its a little boring..."]
                }),
                new ExpansionRuleBuilder({
                    sport: "baseball",
                    sportGame: ["game"],
                    sportVerb: ["bat","pitch","catch"],
                    sportExtra: [""]
                })
                );
                grammar.addRule("exerciseTopic","[#describeExercise#]I'm thinking of doing some #exercise#. Its good for your #exerciseTarget.s#.","[#describeExercise#]I just finished my #exercise# regimen, #catch-phrase#. My #exerciseTarget.s# are going to be sore.");
                grammar.addRule("describeExercise",
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
                );
                break;
            case "Smug":
                break;
            case "Cranky":
                break;
            case "Normal":
                break;
            case "Peppy":
                break;
            case "uchi":
                break;
            case "snooty":
                break;
        }
        return grammar;
    }
}
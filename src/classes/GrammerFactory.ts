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
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "gyroid")?.addRule("digExtra","I like gyroids, they make a lot of funny sounds.");
                break;
            case "Jock":
                grammar.addRule("player","coach","teammate");
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("digExtra"," That's a good idea for #digMuscle.a# workout."," You know #digNoun# #digVerb.ing# is good for developing your #digMuscle.s#?"," I should add that to my #digMuscle# regimen."))
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
                grammar.addRule("hello","bienvenue");
                grammar.addRule("stageDir","stage left","stage right");
                grammar.addRule("greeting","#player.capitalize# enters #stageDir#.");
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "fossil")?.addRule("digExtra"," Dinosaur bones are old but I hear they are comming back into style.");
                break;
            case "Cranky":
                grammar.addRule("player","youngin","kid");
                grammar.addRule("energetic","energetic","lively");
                grammar.addRule("always","always","usual","ever");
                grammar.addRule("iSee","",", I see",", I take it");
                grammar.addRule("howAre","#energetic.capitalize# as #always##iSee#.");
                grammar.addRule("hello","hey");
                grammar.addRule("greeting","You again.");
                grammar.addRule("digTopic","[#describeDig#]What is with all the #digNoun# #digVerb.ing#, #player#?");
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "pitfall")?.addRule("digExtra"," If I find myself in one of those darn holes #player#..."," Don't cause too much trouble #player#!");
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("digExtra"," Fine. Just keep out of my lawn."))
                break;
            case "Normal":
                grammar.addRule("good","good","lovely","wonderful","nice");
                grammar.addRule("time","day","morning","afternoon","evening","night");
                grammar.addRule("hello","Good #time#","I hope you have #good.a# #time#","Its #good# to see you");
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "fossil")?.addRule("digExtra"," Blathers would be happy if you find anything new.");
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "flower" )?.addRule("digExtra"," Its always #good# to have more greenery."," Tending to a garden is so relaxing.");
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "tree" )?.addRule("digExtra"," Its always #good# to have more greenery."," That's great. Trees are good for the environment and provide shady places to read.");
                break;
            case "Peppy":
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "fossil")?.addRule("digExtra"," That sounds fun. Maybe I should become the world's first pop-star/celebrity archeologist."," Dinosaur bones are old but I hear they are comming back into style.");
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "gyroid")?.addRule("digExtra"," That sounds fun. Maybe I should become the world's first pop-star/celebrity archeologist."," Gyroids are great. They can be both your band and backup dancers.");
                break;
            case "uchi":
                grammar.addRule("player","bukko","kid");
                grammar.addRule("hello","hey","hey there","whoa there");
                grammar.addRule("greeting","Hay there.","Whoa there!");
                grammar.addRule("howAre","What's the rush, #catch-phrase#?","Hold on a minute there.","What are you up to, #catch-phrase#?");
                grammar.addRule("digTopic","What could you be up to with that shovel, #player#.","#describeDig#I see that shovel, #player#. #digVerb.capitalize.ing##digFor# #digNoun.s#?");
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "pitfall")?.addRule("digExtra"," If I find myself in one of your holes #player#..."," Sounds like there is a new troublemaker in #town#.");
                break;
            case "snooty":
                grammar.addRule("player","youngin","kid");
                grammar.addRule("energetic","energetic","lively");
                grammar.addRule("always","always","usual","ever");
                grammar.addRule("iSee","",", I see",", I take it");
                grammar.addRule("howAre","#energetic.capitalize# as #always##iSee#.");
                grammar.addRule("hello","hey");
                grammar.addRule("greeting","You again.");
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "pitfall")?.addRule("digExtra"," If I find myself in one of your holes #player#...");
                (grammar.data["describeDig"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("digExtra"," Personally I prefer hunting around for bargans at Nook's."))
                break;
        }
        return grammar;
    }
}
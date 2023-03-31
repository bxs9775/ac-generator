import GrammerBuilder from "./Builders/GrammerBuilder";
import Villager from "./Villager";
import { createBaseGrammer } from "../grammers/BaseGrammar";
import ExpansionRuleBuilder from "./Builders/ExpansionRuleBuilder";
import { createFitnessGrammar } from "../grammers/hobby/FitnessGrammar";
import { createMusicGrammar } from "../grammers/hobby/MusicGrammar";
import { createDigGrammar } from "../grammers/generalActivity/DigGrammer";
import { createFishGrammar } from "../grammers/generalActivity/FishGrammer";
import { createPlayGrammar } from "../grammers/hobby/PlayGrammar";
import { createNatureGrammar } from "../grammers/hobby/NatureGrammar";

export default class GrammerFactory{
    static getGrammer(villager:Villager):GrammerBuilder{
        var villagerGrammer = new GrammerBuilder({
            name: [villager.name],
            "catch-phrase": [villager.catchphrase]
        });
        var grammar = createBaseGrammer()
            .addObject(villagerGrammer)
            .addObject(createDigGrammar())
            .addObject(createFishGrammar());
        if(villager.personality != "Lazy"){
            grammar.addRule("fishVerb","reel in","land","hook");
            grammar.addRule("lotOf","lot of")
        }
        switch(villager.personality){
            case "Lazy":
                grammar.addRule("friend","friend","pal","buddy");
                grammar.addRule("player","#friend#","snack #friend#");
                grammar.addRule("howAre","Wanna play?","Wanna play, #catch-phrase#?");
                grammar.addRule("hello","hi");
                grammar.addRule("greeting","#greeting.toUpperCase#","#player.toUpperCase#!");
                grammar.addRule("lotOf","lotsa","lotta")
                grammar.addRule("treasure","[adj:,pirate ,buried ]#adj#treasure")
                grammar.data["describeDigTreasure"].push(new ExpansionRuleBuilder({
                    digNoun: "#treasure#",
                    digVerb: ["dig up","hunt for"],
                    digExtra: [""]
                }));
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "fossil")?.addRule("digExtra"," We're too late! We could be riding dinosaurs, #catch-phrase#."," Do you think you'll find any cool dinosaurs, #player#.");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "gyroid")?.addRule("digExtra"," I like gyroids."," I like gyroids, they make #lotOf.a# funny sounds.");
                grammar.addRule("fishVerb","nab");
                grammar.addRule("fishNoun","fishy");
                grammar.addRule("fishExtra","", " The fish are nummiest at this time of year."," If you catch too many, would you share with me?")
                grammar.addRule("bugVerb","nab","make friends with");
                grammar.addRule("bugNoun","bug #friend#");
                break;
            case "Jock":
                grammar.addRule("player","coach","teammate");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("digExtra"," That's a good idea for #digMuscle.a# workout."," You know #digNoun# #digVerb.ing# is good for developing your #digMuscle.s#?"," I should add that to my #digMuscle# regimen."));
                (grammar.data["describeDigOther"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("digExtra"," That's a good idea for #digMuscle.a# workout."," You know #digNoun# #digVerb.ing# is good for developing your #digMuscle.s#?"," I should add that to my #digMuscle# regimen."));
                grammar.addRule("digMuscle","glute", "hamstring", "quad", "ab", "shoulder");
                grammar.addRule("topic","#sportTopic#");
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
                grammar.addObject(createFitnessGrammar());
                grammar.addRule("exerciseTopic","[#describeExercise#]I just finished my #exercise# regimen, #catch-phrase#. My #exerciseTarget.s# are going to be sore.");
                grammar.addRule("fishNoun","lurker");
                break;
            case "Smug":
                grammar.addRule("hello","bienvenue");
                grammar.addRule("stageDir","stage left","stage right");
                grammar.addRule("greeting","#player.capitalize# enters #stageDir#.");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "fossil")?.addRule("digExtra"," Dinosaur bones are old but I hear they are comming back into style.");
                grammar.addRule("fishVerb","lure in");
                grammar.addRule("fishNoun","lurker");
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
                (grammar.data["describeDigOther"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "pitfall")?.addRule("digExtra"," If I find myself in one of those darn holes #player#..."," Don't cause too much trouble #player#!"," Fine. Just keep out of my lawn.");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("digExtra"," Fine. Just keep out of my lawn."))
                grammar.addRule("fishNoun","lurker");
                grammar.addRule("fishTopic",
                "Look at #playerName# with their #fishingrod#. I hope you #fishVerb# #lotOf.a# #fishNoun.s#, #catch-phrase#.#fishExtra#");
                break;
            case "Normal":
                grammar.addRule("good","good","lovely","wonderful","nice");
                grammar.addRule("time","day","morning","afternoon","evening","night");
                grammar.addRule("hello","Good #time#","I hope you have #good.a# #time#","Its #good# to see you");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "fossil")?.addRule("digExtra"," Blathers would be happy if you find anything new.");
                (grammar.data["describeDigOther"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "flower" )?.addRule("digExtra"," Its always #good# to have more greenery."," Tending to a garden is so relaxing.");
                (grammar.data["describeDigOther"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "tree" )?.addRule("digExtra"," Its always #good# to have more greenery."," That's great. Trees are good for the environment and provide shady places to read.");
                break;
            case "Peppy":
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "fossil")?.addRule("digExtra"," That sounds fun. Maybe I should become the world's first pop-star/celebrity archeologist."," Dinosaur bones are old but I hear they are comming back into style.");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "gyroid")?.addRule("digExtra"," That sounds fun. Maybe I should become the world's first pop-star/celebrity archeologist."," Gyroids are great. They can be both your band and backup dancers.");
                grammar.addRule("fishVerb","lure in");
                break;
            case "Uchi":
                grammar.addRule("player","bukko","kid");
                grammar.addRule("hello","hey","hey there","whoa there");
                grammar.addRule("greeting","Hay there.","Whoa there!");
                grammar.addRule("howAre","What's the rush, #catch-phrase#?","Hold on a minute there.","What are you up to, #catch-phrase#?");
                grammar.addRule("digTopic","What could you be up to with that #shovel#, #player#?","#describeDig#I see that #shovel#, #player#. #digVerb.capitalize.ing# #digNoun.s#?");
                (grammar.data["describeDigOther"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "pitfall")?.addRule("digExtra"," If I find myself in one of your holes #player#..."," Sounds like there is a new troublemaker in #town#.");
                grammar.addRule("fishTopic",
                "Look at #playerName# with their #fishingrod#.#fishExtra#");
                break;
            case "snooty":
                grammar.addRule("player","youngin","kid");
                grammar.addRule("energetic","energetic","lively");
                grammar.addRule("always","always","usual","ever");
                grammar.addRule("iSee","",", I see",", I take it");
                grammar.addRule("howAre","#energetic.capitalize# as #always##iSee#.");
                grammar.addRule("hello","hey");
                grammar.addRule("greeting","You again.");
                (grammar.data["describeDigOther"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["digNoun"] === "pitfall")?.addRule("digExtra"," If I find myself in one of your holes #player#...");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("digExtra"," Personally I prefer #digNoun.ing# for bargans at Nook's."))
                grammar.addRule("fishVerb","lure in");
                grammar.addRule("fishTopic",
                "Look at #playerName# with their #fishingrod#.#fishExtra#");
                break;
        }
        switch(villager.hobby){
            case "Fitness":
                grammar.addObject(createFitnessGrammar());
                if(villager.personality === "Cranky"){
                    grammar.addRule("exerciseTopic","[#describeExercise#]At my age, it is important to take care of your body. That is why I do some #exercise# every day.","[#describeExercise#]My darn #exerciseTarget.s# are sore. Must be from the #exercise# the other day, #catch-phrase#.");
                }
                if(villager.personality === "Normal"){
                    grammar.addRule("exerciseTopic","[#describeExercise#]I want to keep in shape, so I'm trying to do some #exercise#.");
                }
                if(villager.personality === "Peppy" || villager.personality === "Smug"){
                    grammar.addRule("exerciseTopic","[#describeExercise#]I'm doing celebrity #exercise#. Do you want to join?");
                    grammar.addRule("describeExercise",
                    new ExpansionRuleBuilder({
                        exercise: "Zumba",
                        xerciseTarget: ["leg","calf","arm"]
                    }),
                    new ExpansionRuleBuilder({
                        exercise: "dance exercise",
                        xerciseTarget: ["leg","calf","arm"]
                    })
                    )
                }
                if(villager.personality === "Lazy"){
                    grammar.addRule("exerciseTopic","[#describeExercise#]Why are #exercise# so hard? Maybe I'll just run around instead...","[#describeExercise#]Do you do #exercise#, #player#? The person on TV says its good for #exerciseTarget.s#.");
                }
                break;
            case "Music":
                grammar.addObject(createMusicGrammar());
                if(villager.personality === "Lazy"){
                    grammar.addRule("musicTopic","[#describeMusic#]The best music to go with eating a snack is #musicGenre#.","[#describeMusic#]You know you can sing #musicSong# at any time? Its free.");
                }
                if(villager.personality === "Peppy"){
                    grammar.addRule("musicTopic","I'm listening to a variety of music for when I become famous. Recently, I have been listening to [#describeMusic#]#musicGenre# and [#describeMusic#]#musicGenre#.");
                }
                if(villager.personality === "Smug"){
                    grammar.addRule("musicTopic","If I described myself as an artist I would say I'm mainly into [#describeMusic#]#musicGenre# and [#describeMusic#]#musicGenre#. However, I'm also known in [#describeMusic#]#musicGenre# circles.");
                }
                if(villager.personality === "Uchi"){
                    grammar.addRule("musicTopic","I'm really into playing music and writing songs, #player#. I would love to be in a band, but I don't know anyone who plays.","My guitar is the center of my house. I love playing all types of music.");
                }
                break;
            case "Play":
                grammar.addObject(createPlayGrammar());
                if(villager.personality === "Lazy"){
                    grammar.addRule("playTopic","Sometimes I feel so full of energy, I just want to run around.","#town.capitalize# is so big, it is perfect for running around.","Wanna play #playGame#, #player#? Please?");
                    grammar.addRule("playExtra"," It's so fun."," I'm glad that #town# has lots of space.");
                }
                if(villager.personality === "Jock"){
                    grammar.addRule("playExtra", " Its good exercise."," Its a good way of building muscle.");
                }
                if(villager.personality === "Peppy"){
                    grammar.addRule("playTopic","It may look like I'm just running around, but I'm preparing for my life as a celebrity.","I'm going to be a famous #playGame# player.","Guess what, #player#. I'm playing one-person #playGame# and I won! I'm so bored...");
                }
                if(villager.personality === "Smug"){
                    grammar.addRule("playTopic","It may look like I'm just running around, but I'm preparing for my life as a celebrity.","I'm going to be a famous #playGame# player.");
                }
                if(villager.personality === "Cranky" || villager.personality === "Snooty"){
                    grammar.addRule("playExtra"," Are you surprised, #player#? I'm guessing you think I'm to old such things.");
                }
                break;
            case "Nature":
                grammar.addObject(createNatureGrammar());
                if(villager.personality === "Lazy"){
                    grammar.addRule("natureTopic", "Its lots of fun to nap under a tree.","I'm planting #flower.s# for my bug friends.")
                }
                if(villager.personality === "Jock"){
                    grammar.addRule("natureTopic", "[garden:garden,plant #flower.s#,plant trees]Surprised to see me #garden.ing#. [muscle:leg,arm,shoulder,neck,back,abdomen]Its a good #muscle# workout, #catch-phrase#.")
                }
                if(villager.personality === "Uchi"){
                    grammar.addRule("natureTopic", "Why is everyone surprised I like flowers, #catch-phrase#?","Hey! Watch yourself around my #flower.s#!");
                }
                if(villager.personality === "Cranky"){
                    grammar.addRule("natureTopic", "Stay off my lawn, #player#. You're going to trample the #flower.s.","I enjoy walking around outdoors, there is no telling what you'll see.");
                }
        }
        return grammar;
    }
}
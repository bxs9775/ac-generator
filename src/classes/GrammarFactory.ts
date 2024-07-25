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
import { createBugGrammar } from "../grammers/generalActivity/BugGrammer";

/**
 * Factory class for creating new grammer objects
 */
export default class GrammerFactory{
    /**
     * Generates Tracery grammer for a specific villager
     * @param {Villager} villager the villager to generate grammer for 
     * @returns GrammerBuilder instance containing the grammer for the specific villager
     */
    static async getGrammer(villager:Villager):Promise<GrammerBuilder>{
        // calculates date info
        var today = new Date();
        var month = today.getMonth()+1;
        
        // saves base vilager data
        var villagerGrammer = new GrammerBuilder({
            name: [villager.name],
            "catch-phrase": [villager.catchphrase],
            month: today.toLocaleString('default', { month: 'long' })
        });

        // adds base grammer
        var grammar = createBaseGrammer()
            .addObject(villagerGrammer)
            .addObject(createDigGrammar())
            .addObject(await createFishGrammar(month))
            .addObject(createBugGrammar());

        // adds personality specific grammer
        if(villager.personality != "Lazy"){
            grammar.data["describeFishing"][0].addRule("toolVerb","reel in","land","hook");
            grammar.addRule("lotOf","lot of")
            grammar.addRule("activityRecomendation", " Why don't you grab a #tool# and start #toolVerb.ing#?")
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
                    toolNoun: "#treasure#",
                    toolVerb: ["dig up","hunt for"],
                    toolExtra: [""]
                }));
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["toolNoun"] === "fossil")?.addRule("toolExtra"," We're too late! We could be riding dinosaurs, #catch-phrase#."," Do you think you'll find any cool dinosaurs, #player#.");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["toolNoun"] === "gyroid")?.addRule("toolExtra"," I like gyroids."," I like gyroids, they make #lotOf.a# funny sounds.");
                grammar.data["describeFishing"][0].addRule("toolVerb","nab");
                grammar.data["describeFishing"][0].addRule("toolNoun","fishy");
                grammar.data["describeFishing"][0].addRule("toolExtra","", " You can catch nummy #fish# this time of year."," If you catch too many, would you share with me?")
                grammar.data["describeBugHunt"][0].addRule("toolVerb","make friends with");
                grammar.data["describeBugHunt"][0].addRule("toolNoun","bug #friend#");
                grammar.addRule("heldToolComment","That is a neet #tool#.");
                grammar.addRule("activityGuess"," #toolVerb.capitalize.ing# #toolNoun.s#?"," What are ya doing? #toolVerb.ing.capitalize#?");
                break;
            case "Jock":
                grammar.addRule('hello','yo','hey', 'hey there', 'heya','lookin\' built','sup','heeeya');
                grammar.addRule('greeting','Hey, hey!','Morniiiing!','Hey listen up!');
                grammar.addRule('howAre', 'How ya doin\',  #catch-phrase#?',
                    'What\'s up?',
                    'Need something?',
                    'You bringin\' it?',
                    'Workin\' those legs?',
                    'Feelin\' strong, #catch-phrase#?',
                    'Whaddaya need, #catch-phrase#?',
                    'Gettin\' an early start?',
                    'We meet again!',
                    'Wow, you just keep turning up today. It\'s like you\'re only playing offense, #catch-phrase#.',
                    'Wow, you just keep turning up today.',
                    'Are we playing follow the leader or something, #catch-phrase#?'
                    );
                grammar.addRule("player","coach","teammate");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("toolExtra"," That's a good idea for #digMuscle.a# workout."," You know #toolNoun# #toolVerb.ing# is good for developing your #digMuscle.s#?"," I should add that to my #digMuscle# regimen."));
                (grammar.data["describeDigOther"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("toolExtra"," That's a good idea for #digMuscle.a# workout."," You know #toolNoun# #toolVerb.ing# is good for developing your #digMuscle.s#?"," I should add that to my #digMuscle# regimen."));
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
                grammar.data["describeFishing"][0].addRule("toolNoun","lurker");
                grammar.data["describeFishing"][0].addRule("toolExtra","[#describeFishType#] Fishing pros know that its the right time for catching #fishType# and #fishType# in the #fishLoc#.");
                grammar.addRule("activityRecommendation","I bet you could get a good workout #toolVerb.ing# #toolNoun.s# with a #toolGeneral#.");
                break;
            case "Smug":
                grammar.addRule("hello","bienvenue");
                grammar.addRule("stageDir","stage left","stage right");
                grammar.addRule("greeting","#player.capitalize# enters #stageDir#.");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["toolNoun"] === "fossil")?.addRule("toolExtra"," Dinosaur bones are old but I hear they are comming back into style.");
                grammar.data["describeFishing"][0].addRule("toolVerb","lure in");
                grammar.data["describeFishing"][0].addRule("toolNoun","lurker");
                break;
            case "Cranky":
                grammar.addRule("player","youngin","kid");
                grammar.addRule("energetic","energetic","lively");
                grammar.addRule("always","always","usual","ever");
                grammar.addRule("iSee","",", I see",", I take it");
                grammar.addRule("howAre","#energetic.capitalize# as #always##iSee#.");
                grammar.addRule("hello","hey");
                grammar.addRule("greeting","You again.");
                (grammar.data["describeDigOther"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["toolNoun"] === "pitfall")?.addRule("toolExtra"," If I find myself in one of those darn holes #player#..."," Don't cause too much trouble #player#!"," Fine. Just keep out of my lawn.");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("toolExtra"," Fine. Just keep out of my lawn."))
                grammar.data["describeFishing"][0].addRule("toolNoun","lurker");
                grammar.addRule("heldToolComment",
                    "Look at #playerName# with their #tool#.#activityGuess#",
                    "What is with all the #toolNoun# #toolVerb.ing#, #player#?",
                    "What could you be up to with that #tool#, #player#?#activityGuess#",
                );
                grammar.data["describeFishing"][0].addRule("toolExtra","[#describeFish#]Back in my day, we used to fish for #fish# during #month#. I tell you, #player#, the #fishLoc.s# would be full of them, #catch-phrase#.");
                grammar.addRule("activityRecommendation","Back when I was younger I spent all day #toolVerb.ing# with #toolGeneral.a#.");
                break;
            case "Normal":
                grammar.addRule("good","good","lovely","wonderful","nice");
                grammar.addRule("time","day","morning","afternoon","evening","night");
                grammar.addRule("hello","Good #time#","I hope you have #good.a# #time#","Its #good# to see you");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["toolNoun"] === "fossil")?.addRule("toolExtra"," Blathers would be happy if you find anything new.");
                (grammar.data["describeDigOther"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["toolNoun"] === "flower" )?.addRule("toolExtra"," Its always #good# to have more greenery."," Tending to a garden is so relaxing.");
                (grammar.data["describeDigOther"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["toolNoun"] === "tree" )?.addRule("toolExtra"," Its always #good# to have more greenery."," That's great. Trees are good for the environment and provide shady places to read.");
                break;
            case "Peppy":
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["toolNoun"] === "fossil")?.addRule("toolExtra"," That sounds fun. Maybe I should become the world's first pop-star/celebrity archeologist."," Dinosaur bones are old but I hear they are comming back into style.");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["toolNoun"] === "gyroid")?.addRule("toolExtra"," That sounds fun. Maybe I should become the world's first pop-star/celebrity archeologist."," Gyroids are great. They can be both your band and backup dancers.");
                grammar.data["describeFishing"][0].addRule("toolVerb","lure in");
                break;
            case "Uchi":
                grammar.addRule("player","bukko","kid");
                grammar.addRule("hello","hey","hey there","whoa there");
                grammar.addRule("greeting","Hay there.","Whoa there!");
                grammar.addRule("howAre","What's the rush, #catch-phrase#?","Hold on a minute there.","What are you up to, #catch-phrase#?");
                grammar.addRule("digTopic",);
                (grammar.data["describeDigOther"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["toolNoun"] === "pitfall")?.addRule("toolExtra"," If I find myself in one of your holes #player#..."," Sounds like there is a new troublemaker in #town#.");
                grammar.addRule("heldToolComment",
                "Look at #playerName# with their #tool#.",
                "What could you be up to with that #tool#, #player#?#activityGuess#",
                "I see that #tool#, #player#.#activityGuess#"
                );
                grammar.addRule("activityGuess"," #toolVerb.capitalize.ing# #toolNoun.s#?");
                break;
            case "snooty":
                grammar.addRule("player","youngin","kid");
                grammar.addRule("energetic","energetic","lively");
                grammar.addRule("always","always","usual","ever");
                grammar.addRule("iSee","",", I see",", I take it");
                grammar.addRule("howAre","#energetic.capitalize# as #always##iSee#.");
                grammar.addRule("hello","hey");
                grammar.addRule("greeting","You again.");
                (grammar.data["describeDigOther"] as Array<ExpansionRuleBuilder>).find(elem => elem.data["toolNoun"] === "pitfall")?.addRule("toolExtra"," If I find myself in one of your holes #player#...");
                (grammar.data["describeDigTreasure"] as Array<ExpansionRuleBuilder>).forEach(elem => elem.addRule("toolExtra"," Personally I prefer #toolNoun.ing# for bargans at Nook's."))
                grammar.data["describeFishing"].addRule("toolVerb","lure in");
                grammar.addRule("heldToolComment","Look at #playerName# with their #tool#.");
                grammar.addRule("activityRecommendation","I would #toolVerb# for #toolNoun.s#, but it sounds sweaty.");
                break;
        }

        // adds hobby-specific grammer
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
                    grammar.addRule("natureTopic", "Stay off my lawn, #player#. You're going to trample the #flower.s#.","I enjoy walking around outdoors, there is no telling what you'll see.");
                }
        }
        return grammar;
    }
}
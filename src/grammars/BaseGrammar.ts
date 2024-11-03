import ExpansionRuleBuilder from "../classes/Builders/ExpansionRuleBuilder"
import GrammarBuilder from "../classes/Builders/GrammarBuilder";
import GrammarSet from "../classes/GrammarSet";

/**
 * Creates the base Tracery Grammar objects for all villagers
 * @returns  base GrammarBuilder object
 */
export let generalGrammar:GrammarBuilder = new GrammarBuilder({
    player: ["#playerName#"],
    hello: ["hello"],
    greeting: ["#hello.capitalize#, #player#.","#hello.capitalize#.","#hello.capitalize#, #catchphrase#."],
    howare: ["How are you, #catchphrase#?"],
    origin: ["#topic#","#greeting# #topic#","#greeting# #howare# #topic#"],
    topic: [],
    heldToolComment: [
        "What is that #tool# for, #catchphrase#?#activityGuess#",
        "Are you #toolVerb.ing# #lotOf.a# #toolNoun.s# with that #tool#, #player#?"
    ],
    activityGuess: [
        "",
        " Are you #toolVerb.ing# #toolNoun.s#?"
    ],
    activityRecommenation: [
        "",
        " You can #toolVerb# them with a #toolGeneral#."
    ],
    baseToolAdj: ["flimsy ","","golden ","colorful ","outdoorsy "]
});

let bugGrammar:GrammarBuilder = new GrammarBuilder({
    topic: ["#bugTopic#"],
    // bug catching
    net: ["[adj:#baseToolAdj#,star ]#adj#net"],
    describeBugHunt: [
        new ExpansionRuleBuilder({
            toolNoun: ["bug","insect","beetle","butterfly","dragonfly"],
            toolVerb: ["catch"],
            toolExtra: [""]
        })
    ],
    bugTopic:[
        "[#describeBugHunt#][tool:#net#]#heldToolComment##toolExtra#"
    ]
});

let digGrammar:GrammarBuilder = new GrammarBuilder({
    topic: ["#digTopic#"],
    // digging/fossil-hunting
    shovel: ["[adj:#baseToolAdj#,printed-design ]#adj#shovel"],
    digTopic:[
        "[#describeDig#][tool:#shovel#][toolGeneral:shovel]#heldToolComment##toolExtra#",
        "[#describeDigTreasure#][tool:#shovel#][toolGeneral:shovel]I hear there are #lotOf.a# #toolNoun.s# around #town#.#activityRecommenation#"],
    describeDigTreasure: [
        new ExpansionRuleBuilder({
            toolNoun: "fossel",
            toolVerb: ["dig up","hunt for"],
            toolExtra: [""]
        }),
        new ExpansionRuleBuilder({
            toolNoun: "gyroid",
            toolVerb: ["dig up","hunt for"],
            toolExtra: [""]
        })
    ],
    describeDigOther: [
        new ExpansionRuleBuilder({
            toolNoun: "pitfall",
            toolVerb: ["plant","bury"],
            toolExtra: [""]
        }),
        new ExpansionRuleBuilder({
            toolNoun: "flower",
            toolVerb: ["plant","grow"],
            toolExtra: [""]
        }),
        new ExpansionRuleBuilder({
            toolNoun: "tree",
            toolVerb: ["plant","grow"],
            toolExtra: [""]
        })
    ],
    describeDig: ["#describeDigTreasure#","#describeDigOther#"]
});

let fishGrammar:GrammarBuilder = new GrammarBuilder({
    topic:["#fishTopic"],
    fishingrod: ["[adj:#baseToolAdj#,fish ]#adj#fishing rod","[adj:#baseToolAdj#,fish ]#adj#rod"],
    fish: ["#riverFish#","#oceanFish#","#pondFish#"],
    describeFishType:[
        new ExpansionRuleBuilder({
            fishLoc: "river",
            fishType: "#riverFish#"
        }),
        new ExpansionRuleBuilder({
            fishLoc: ["ocean","sea"],
            fishType: "#oceanFish#"
        }),
        new ExpansionRuleBuilder({
            fishLoc: "pond",
            fishType: "#pondFish#"
        })
    ],
    describeFishing: [new ExpansionRuleBuilder({
        toolNoun: ["fish"],
        toolExtra: [""," I hope you catch #lotOf.a# #toolNoun.s#."],
        toolVerb: ["catch"], 
    })],
    fishTopic:[
        "[#describeFishing#][tool:#fishingrod#][toolGeneral:fishing rod]#heldToolComment##toolExtra#",
        "[#describeFishType#][#describeFishing#][tool:#fishingrod#][toolGeneral:fishing rod]I hear that #town#'s #fishLoc.s# are full of #fishType#.#activityRecommenation#"
    ]
});

let baseGrammerSet:GrammarSet = new GrammarSet(
    [
        ['bug',bugGrammar],
        ['dig',digGrammar],
        ['fish',fishGrammar]
    ]
)

let educationGrammar:GrammarBuilder = new GrammarBuilder({
    "topic": ["#educationTopic#"],
    "educationTopic": [
        "[#describeEductation#]Have you found any #eduNoun.s# recently? If so, you should take them over to the museum.#museumExtra#.",
        "[#describeEductation#]Whenever I'm curious about #eduNoun.s# I go talk to Blathers at the #town# museum.#museumExtra#",
        "[#describeFish#]I've been learning about #fishLoc# fish recently. Do you want to hear some facts about #fishType#?"
    ],
    describeEducation: [
        new ExpansionRuleBuilder({
            eduNoun: ["fossel"],
            museumExtra: [
                "",
                " Blathers gets really excited about fossels, but sometimes he talks too much. #catchphrase.capitalize#...",
                " Blathers is an expert on appraising fossils. It is so cool."
            ]
        }),
        new ExpansionRuleBuilder({
            eduNoun: ["fish"],
            museumExtra: [""]
        }),
        new ExpansionRuleBuilder({
            eduNoun: ["bug"],
            museumExtra: [
                "",
                " Even though bugs make Blathers uncomfortable, he can still tell you a lot about them.",
                " Although for some reason, Blathers always freaks out when bugs are involved..."
            ]
        }),new ExpansionRuleBuilder({
            eduNoun: ["painting","sculpture"],
            museumExtra: [""]
        }),
    ]
});

let fitnessGrammar:GrammarBuilder = new GrammarBuilder({
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

let musicGrammar:GrammarBuilder = new GrammarBuilder({
    "topic": ["#musicTopic#"],
    "musicTopic": ["[#describeMusic#]I like listening to #musicGenre# music. What about you, #player#?","[#describeMusic#]I'm really into #musicGenre# lately. My favorite song has to be #musicSong#."],
    "describeMusic": [
        new ExpansionRuleBuilder({
            musicGenre: "pop",
            musicSong: ["K.K. Technopop","Only Me","K.K. Stroll","Bubblegum K.K."]
        }),
        new ExpansionRuleBuilder({
            musicGenre: "blues",
            musicSong: ["K.K. Blues","K.K. Safari","K.K. Love Song"]
        }),
        new ExpansionRuleBuilder({
            musicGenre: "electronic",
            musicSong: ["K.K. Disco","K.K. Technopop","K.K. Fusion","K.K. D&B","My Place","K.K. House","K.K. Groove","K.K. Synth"]
        }),
        new ExpansionRuleBuilder({
            musicGenre: "jazz",
            musicSong: ["K.K. Swing","K.K. Jazz","K.K. Gumbo","K.K. Groove"]
        }),
        new ExpansionRuleBuilder({
            musicGenre: "rock",
            musicSong: ["K.K. Rock","Rockin' K.K.","Surfin' K.K.","Two Days Ago","Steep Hill","K.K. Rockabilly","Stale Cupcakes",
            "Wandering","Space K.K."]
        }),
        new ExpansionRuleBuilder({
            musicGenre: "metal",
            musicSong: ["K.K. Metal"]
        }),
        new ExpansionRuleBuilder({
            musicGenre: "classical",
            musicSong: ["K.K. Waltz","K.K. Chorale","K.K. Étude","K.K. Aria","Café K.K.","K.K. Sonata"]
        }),
        new ExpansionRuleBuilder({
            musicGenre: "folk",
            musicSong: ["K.K. Faire","Lucky K.K.","K.K. Condor","K.K. Steppe","Imperial K.K.","K.K. Folk","K.K. Dixie",
            "Neapolitan","Steep Hill","K.K. Rally","Spring Blossoms","K.K. Bazaar"]
        }),
        new ExpansionRuleBuilder({
            musicGenre: "country",
            musicSong: ["K.K. Country","K.K. Western"]
        }),
        new ExpansionRuleBuilder({
            musicGenre: "Brazilian",
            musicSong: ["K.K. Samba","K.K. Bossa"]
        }),
        new ExpansionRuleBuilder({
            musicGenre: "Latin",
            musicSong: ["K.K. Salsa","K.K. Mambo","K.K. Tango","K.K. Flamenco","K.K. Moody"]
        }),
        new ExpansionRuleBuilder({
            musicGenre: "Jamacian",
            musicSong: ["K.K. Reggae","To the Edge","K.K. Ska"]
        }),
        new ExpansionRuleBuilder({
            musicGenre: "ragtime",
            musicSong: ["K.K. Ragtime"]
        })
    ]
});

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

export let hobbyGrammars: {[key:string]:GrammarBuilder} = {
    "general": generalGrammar,
    "bug": bugGrammar,
    "dig": digGrammar,
    "fish": fishGrammar,
    "education": educationGrammar,
    "fitness": fitnessGrammar,
    "music": musicGrammar,
    "nature": natureGrammar

};

export default baseGrammerSet;

import ExpansionRuleBuilder from "../../classes/Builders/ExpansionRuleBuilder"
import GrammerBuilder from "../../classes/Builders/GrammerBuilder";
/**
 * Creates the Tracery Grammer object for the music hobby
 * @returns  GrammerBuilder object for the music hobby
 */
export function createMusicGrammar():GrammerBuilder{
    return new GrammerBuilder({
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
}
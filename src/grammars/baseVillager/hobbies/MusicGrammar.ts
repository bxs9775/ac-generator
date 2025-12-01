import TraceryBuilder from "../../../classes/Builders/TraceryBuilder";
import StringListRule from "../../../classes/Rules/StringListRule";
import ExpansionListRule from "../../../classes/Rules/ExpansionListRule";
import ExpansionRule from "../../../classes/Rules/ExpansionRule";

let musicGrammar:TraceryBuilder = new TraceryBuilder({
    "topic": new StringListRule(["#musicTopic#"]),
    "musicTopic": new StringListRule([
        "[#describeMusic#]I like listening to #musicGenre# music. What about you, #player#?",
        "[#describeMusic#]I'm really into #musicGenre# lately. My favorite song has to be #musicSong#."
    ]),
    "describeMusic": new ExpansionListRule([
        new ExpansionRule({
            musicGenre: ["pop"],
            musicSong: ["K.K. Technopop","Only Me","K.K. Stroll","Bubblegum K.K."]
        }),
        new ExpansionRule({
            musicGenre: ["blues"],
            musicSong: ["K.K. Blues","K.K. Safari","K.K. Love Song"]
        }),
        new ExpansionRule({
            musicGenre: ["electronic"],
            musicSong: ["K.K. Disco","K.K. Technopop","K.K. Fusion","K.K. D&B","My Place","K.K. House","K.K. Groove","K.K. Synth"]
        }),
        new ExpansionRule({
            musicGenre: ["jazz"],
            musicSong: ["K.K. Swing","K.K. Jazz","K.K. Gumbo","K.K. Groove"]
        }),
        new ExpansionRule({
            musicGenre: ["rock"],
            musicSong: ["K.K. Rock","Rockin' K.K.","Surfin' K.K.","Two Days Ago","Steep Hill","K.K. Rockabilly","Stale Cupcakes",
            "Wandering","Space K.K."]
        }),
        new ExpansionRule({
            musicGenre: ["metal"],
            musicSong: ["K.K. Metal"]
        }),
        new ExpansionRule({
            musicGenre: ["classical"],
            musicSong: ["K.K. Waltz","K.K. Chorale","K.K. Étude","K.K. Aria","Café K.K.","K.K. Sonata"]
        }),
        new ExpansionRule({
            musicGenre: ["folk"],
            musicSong: ["K.K. Faire","Lucky K.K.","K.K. Condor","K.K. Steppe","Imperial K.K.","K.K. Folk","K.K. Dixie",
            "Neapolitan","Steep Hill","K.K. Rally","Spring Blossoms","K.K. Bazaar"]
        }),
        new ExpansionRule({
            musicGenre: ["country"],
            musicSong: ["K.K. Country","K.K. Western"]
        }),
        new ExpansionRule({
            musicGenre: ["Brazilian"],
            musicSong: ["K.K. Samba","K.K. Bossa"]
        }),
        new ExpansionRule({
            musicGenre: ["Latin"],
            musicSong: ["K.K. Salsa","K.K. Mambo","K.K. Tango","K.K. Flamenco","K.K. Moody"]
        }),
        new ExpansionRule({
            musicGenre: ["Jamacian"],
            musicSong: ["K.K. Reggae","To the Edge","K.K. Ska"]
        }),
        new ExpansionRule({
            musicGenre: ["ragtime"],
            musicSong: ["K.K. Ragtime"]
        })
    ])
});

export default musicGrammar;
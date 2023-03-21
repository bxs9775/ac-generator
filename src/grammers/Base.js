module.exports = {
    player: ["#player-name#"],
    hello: ["hello"],
    describeDig: [
        "[digNoun:fossel][digVerb:dig,hunt,look][digFor: for][digJob:archeologist][digExtra:, Do you think you'll find anything to donate to the museum?]",
        "[digNoun:gyroid][digVerb:dig,hunt,look,collect][digFor: for][digJob:archeologist,treasure hunter][digExtra:]",
        "[digNoun:pitfall][digVerb:bury,plant][digFor:][digJob:local troublemaker,comic][digExtra:, I hope not, #catch-phrase#., you better not be planning on getting me with that #player#!]",
        "[digNoun:flower,tree][digVerb:plant,grow][digFor:][digJob:botanist,gardener][digExtra:]",
        "[digNoun:rock][digVerb:hit,bang][digFor:][digJob:miner,drummer][digExtra: , Did you find anything good?, Do you know how loud that is #catch-phrase#?]"
    ],
    digTopic:["[#describeDig#]What is that shovel for, #catch-phrase#? Are you #digVerb.ing##digFor# #digNoun.s#?#digExtra#"],
    topic: ["#digTopic#"],
    greeting: ["#hello.capitalize#, #player#."],
    howare: ["How are you, #catch-phrase#?"],
    origin: ["#topic#","#greeting# #topic#","#greeting# #howare# #topic#"]
};
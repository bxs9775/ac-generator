module.exports = {
    player: ["coach","teammate"],
    describeExercise: [
        "[exercise:cardio][exerciseTarget:leg,calf,muscle]",
        "[exercise:arm exercises,curls][exerciseTarget:arm,bicep]",
        "[exercise:pushups][exerciseTarget:tricep,pec,shoulder]"
    ],
    exerciseTopic: [
        "[#describeExercise#]I'm thinking of doing some #exercise#. Its good for your #exerciseTarget.s#.",
        "[#describeExercise#]I just finished my #exercise# regimen, #catch-phrase#. My #exerciseTarget.s# are going to be sore."
    ],
    describeSport:[
        "[sport:soccer][sportGame:1v1 game,game,goal kick contest][sportVerb:dribble,pass,kick][sportExtra:, I'm getting lots of cardo, #catch-phrase#.,You should see my calves.]",
        "[sport:golf][sportGame:few holes,few rounds at the driving range][sportVerb:putt][sportExtra:, Although its a little boring...]",
        "[sport:baseball][sportGame:game][sportVerb:bat,pitch,catch][sportExtra:]"
    ],
    sportTopic: [
        "[#describeSport#]It's good #sport# weather today.#sportExtra#",
        "[#describeSport#]The weather is perfect for #sport#, #catch-phrase#. Would you join me for #sportGame.a#?",
        "[#describeSport#]I've really been into #sport# lately. I'm practicing my #sportVerb.ing#. Care to join me, #catch-phrase#?",
        "[#describeSport#]I've really been into #sport# lately.#sportExtra#"
    ],
    topic: ["#sportTopic#","#exerciseTopic#"],
    muscle: ["bicep","ab","lat"],
    howare: ["How are your #muscle.s#?"]
}
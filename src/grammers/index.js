grammerMap = {
    Base: require("./BaseVillagerGrammer"),
    Lazy: require("./personality/Lazy"),
    Jock: require("./personality/Jock"),
    Cranky: require("./personality/Cranky"),
    Smug: require("./personality/Smug"),
    Normal: require("./personality/Normal"),
    Peppy: require("./personality/Peppy"),
    Snooty: require("./personality/Snooty"),
    Uchi: require("./personality/Uchi")
}

getRules = (name) => {
    try{
        return grammerMap[name];
    }
    catch(error){
        return null;
    }
}

module.exports = {
    getRules,
    Base
}
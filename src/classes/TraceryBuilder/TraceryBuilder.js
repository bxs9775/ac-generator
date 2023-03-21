var tracery = require('tracery-grammar');

class TraceryBuilder{
    /**
     * Constructs base TraceryBuilder
     * @param {*} startingObj The starting object for the builder
     * @param {*} builderType The type of buider: grammer or expansionRule
     */
    constructor(startingObj,builderType){
        this.data = startingObj;
        this.builderType = builderType;
    }

    addRule(rule,...values){
        if(!this.data[rule]){
            this.data[rule] = values;
        } else if(typeof this.data[rule] === "string"){
            this.data[rule] = [this.data[rule],...values]
        } else if (Array.isArray(this.data[rule])){
            this.data[rule].append(values);
        } else {
            throw TypeError();
        }
        return this;
    }

    addObject(other){
        var rules = Object.entries(other);
        rules.forEach((rule) => {
            this.addRule(rule[0],...rule[1]);
        });
        return this;
    }

    build(){
        switch(this.builderType){
            case "grammer":
                var grammer = tracery.createGrammar(this.data);
                grammer.addModifiers(tracery.baseEngModifiers);
                return grammer;
            case "expansionRule":
                var rules = Object.entries(this.data);
                console.log(rules);
                return rules.reduce((result,rule) => {
                    var val = "";
                    if(typeof rule[1] === "string"){
                        val = rule[1];
                    } else if (Array.isArray(rule[1])){
                        val = rule[1].join(",");
                    }
                    return result + `[${rule[0]}:${val}]`;
                },"");
        }
    }
}

module.exports = TraceryBuilder;
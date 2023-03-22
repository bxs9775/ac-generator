var tracery = require('tracery-grammar');

class TraceryBuilder{
    /**
     * Constructs base TraceryBuilder
     * @param {*} startingObj The starting object for the builder
     */
    constructor(startingObj){
        this.data = startingObj;
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
}

module.exports = TraceryBuilder;
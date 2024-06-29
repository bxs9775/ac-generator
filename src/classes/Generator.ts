import GrammerBuilder from "./Builders/GrammerBuilder";
import TraceryBuilder from "./Builders/TraceryBuilder";
import GrammerFactory from "./GrammarFactory";
import Villager from "./Villager";

var customModiferes = require("../helpers/customModifiers");

/**
 * Class for generating the Tracery grammer for a specific vilager
 */
export default class Generator{
    /**
     * Villager instance for the villager grammer is being generated for
     */
    villager:Villager;
    /**
     * primary builder for this generator
     */
    builder:GrammerBuilder;

    /**
     * Creates a new generator instance for a given villager
     * @param {Villager} villager the villager instance that the grammer is being generated for
     */
    constructor(villager:Villager){
        this.villager = villager;
        this.builder = new GrammerBuilder({});
    }

    /**
     * Asyncronously creates the GrammerBuilder for the current generator and saves it
     * @returns the current Generator object for call chaining
     */
    async createBuilder():Promise<Generator>{
        this.builder = await GrammerFactory.getGrammer(this.villager);
        return this;
    }

    /**
     * Generates the tracery grammer given a base options object.
     * @param {TraceryBuilder} options a TraceryBuilder object providing options and customization for the grammer
     * @returns a JSON object containing Tracery grammer.
     */
    generate(options:TraceryBuilder):any{
        this.builder.addObject(options);
        var grammar = this.builder.build();

        grammar.addModifiers(customModiferes);
        
        return grammar.flatten("#origin#");
    }
}

module.exports = Generator;
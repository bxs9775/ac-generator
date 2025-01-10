import GrammarBuilder from "./Builders/GrammarBuilder";
import GrammarSet from "./GrammarSet";

export default class VillagerGrammarPackage{
    public readonly generalGrammar:GrammarBuilder;
    public readonly islandLifeGrammarSet:GrammarSet;
    public readonly hobbyGrammarSet:GrammarSet;

    constructor(generalGrammar:GrammarBuilder,islandLifeGrammarSet:GrammarSet,hobbyGrammarSet:GrammarSet){
        this.generalGrammar = generalGrammar;
        this.islandLifeGrammarSet = islandLifeGrammarSet;
        this.hobbyGrammarSet = hobbyGrammarSet;
    }

}
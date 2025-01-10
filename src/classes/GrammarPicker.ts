import VillagerGrammarPackage from './VillagerGrammarPackage';
import baseVillagerPackage from '../grammars/baseVillager';
import jockVillagerPackage from '../grammars/jock';

export default class GrammarPicker{
    public static selectGrammar(personality:string):VillagerGrammarPackage{
        switch(personality.toLowerCase()){
            case 'jock':
                return jockVillagerPackage;
                break;
            default:
                return baseVillagerPackage;
                break;
        }
    }
}
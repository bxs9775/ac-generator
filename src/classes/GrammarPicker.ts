import VillagerGrammarPackage from './VillagerGrammarPackage';
import baseVillagerPackage from '../grammars/baseVillager';
import jockVillagerPackage from '../grammars/jock';
import lazyVillagerPackage from '../grammars/lazy';

export default class GrammarPicker{
    public static selectGrammar(personality:string):VillagerGrammarPackage{
        switch(personality.toLowerCase()){
            case 'jock':
                return jockVillagerPackage;
                break;
            case 'lazy':
                return lazyVillagerPackage;
                break;
            default:
                return baseVillagerPackage;
                break;
        }
    }
}
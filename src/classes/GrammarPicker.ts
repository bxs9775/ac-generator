import VillagerGrammarPackage from './VillagerGrammarPackage';
import baseVillagerPackage from '../grammars/baseVillager';
import jockVillagerPackage from '../grammars/jock';
import lazyVillagerPackage from '../grammars/lazy';
import smugVillagerPackage from '../grammars/smug';
import crankyVillagerPackage from '../grammars/cranky';

export default class GrammarPicker{
    public static selectGrammar(personality:string):VillagerGrammarPackage{
        switch(personality.toLowerCase()){
            case 'jock':
                return jockVillagerPackage;
                break;
            case 'lazy':
                return lazyVillagerPackage;
                break;
            case 'smug':
                return smugVillagerPackage;
                break;
            case 'cranky':
                return crankyVillagerPackage;
                break;
            default:
                return baseVillagerPackage;
                break;
        }
    }
}
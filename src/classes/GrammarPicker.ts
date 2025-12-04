import VillagerGrammarPackage from './VillagerGrammarPackage';
import baseVillagerPackage from '../grammars/baseVillager';
import jockVillagerPackage from '../grammars/jock';
import lazyVillagerPackage from '../grammars/lazy';
import smugVillagerPackage from '../grammars/smug';
import crankyVillagerPackage from '../grammars/cranky';
import normalVillagerPackage from '../grammars/normal';

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
            case 'normal':
                return normalVillagerPackage;
                break;
            default:
                return baseVillagerPackage;
                break;
        }
    }
}
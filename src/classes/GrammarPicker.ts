import VillagerGrammarPackage from './VillagerGrammarPackage';
import baseVillagerPackage from '../grammars/baseVillager';
import jockVillagerPackage from '../grammars/jock';
import lazyVillagerPackage from '../grammars/lazy';
import smugVillagerPackage from '../grammars/smug';
import crankyVillagerPackage from '../grammars/cranky';
import normalVillagerPackage from '../grammars/normal';
import peppyVillagerPackage from '../grammars/peppy';
import sisterlyVillagerPackage from '../grammars/sisterly';

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
            case 'peppy':
                return peppyVillagerPackage;
                break;
            case 'sisterly':
                return sisterlyVillagerPackage;
            default:
                return baseVillagerPackage;
                break;
        }
    }
}
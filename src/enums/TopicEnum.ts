/**
 * Enum pattern class for the topic enum
 */
export default class TopicEnum{
    public static Keys = ['GENERAL','BUG','DIG','FISH','HOBBY'];
    public static GENERAL = new TopicEnum('GENERAL');
    public static BUG = new TopicEnum('BUG');
    public static DIG = new TopicEnum('DIG')
    public static FISH = new TopicEnum('FISH');
    public static HOBBY = new TopicEnum('HOBBY');
    public static UNKNOWN = new TopicEnum('');

    public readonly value:string;

    constructor(value: string){
        this.value = value;
    }

    /**
     * Gets the enum value of the associated key
     * @param key the key for the enum
     * @returns the TopicEnum object for that key
     */
    static get(key:string):TopicEnum{
        switch(key.toUpperCase()){
            case 'BUG':
                return TopicEnum.BUG;
                break;
            case 'DIG':
                return TopicEnum.DIG;
                break;
            case 'FISH':
                return TopicEnum.FISH;
                break;
            case 'HOBBY':
                return TopicEnum.HOBBY;
                break;
            case 'GENERAL':
                return TopicEnum.GENERAL;
                break;
            default:
                return TopicEnum.UNKNOWN;
                break;
        }
    }

    /**
     * Selects a picks a random enum value from those available
     * @returns the TopicEnum object
     */
    static sample():TopicEnum{
        let index = Math.floor(Math.random()*TopicEnum.Keys.length);
        let value = TopicEnum.Keys[index];
        return TopicEnum.get(value);
    }

    public toString():string{
        return this.value;
    }
}
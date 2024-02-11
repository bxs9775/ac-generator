import Villager from "../../src/classes/Villager";

export default interface NpcVillager extends Villager{
    personality:string;
    hobby:string;
    catchphrase:string;
    iconUri:string;
}
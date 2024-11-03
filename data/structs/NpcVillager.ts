import BaseVillager from "../../src/classes/Villager/BaseVillager";

export default interface NpcVillager extends BaseVillager{
    personality:string;
    hobby:string;
    catchphrase:string;
    iconUri:string;
}
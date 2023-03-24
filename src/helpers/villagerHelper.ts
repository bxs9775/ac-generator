import axios from "axios";
import Villager from "../classes/Villager";

const url:string = "https://acnhapi.com/v1/villagers/"



export default class VilagerHelper{
    /**
     * @summary Gets a random villager ID
     * @returns numerical ID for a villager
     * Addapted from newID() function in https://codepen.io/sharnajh/pen/zYBVLYe
     */
    static getRandomId():number {
        return Math.floor(Math.random() * 391) + 1;
    }

    static async getVillager(index:number):Promise<Villager|null>{
        try{
            var acRes = await axios.get(`${url}\\${index}`);
            return new Villager(acRes.data);
        }
        catch(error){
            return null;
        }
}
}
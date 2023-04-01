import axios from "axios";
import Villager from "../classes/Villager";
import RuleDictionary from "../classes/Builders/RuleDictionary";

const url:string = "https://acnhapi.com/v1"

enum Hemisphere{
    northern,
    southern
}


export default class AcApiHelper{  
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
            var acRes = await axios.get(`${url}/villagers/${index}`);
            return new Villager(acRes.data);
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    static async getFish(month:number,hemi:Hemisphere=Hemisphere.northern):Promise<RuleDictionary>{
        try{
            var acRes = await axios.get(`${url}/fish`);
            var fish = Object.values(acRes.data).filter((fsh:any) => fsh.isAllYear || fsh.availability[`month-array-${Hemisphere[hemi]}`].includes(month));
            return {
                "riverFish": fish.filter((fsh:any) => fsh.availability.location.includes("River")).map((fsh:any) => fsh.name["name-USen"]),
                "oceanFish": fish.filter((fsh:any) => fsh.availability.location.includes("Sea")).map((fsh:any) => fsh.name["name-USen"]),
                "pondFish": fish.filter((fsh:any) => fsh.availability.location.includes("Pond")).map((fsh:any) => fsh.name["name-USen"]),
            }
        }
        catch(error){
            console.log(error);
            return {};
        }
    }
}
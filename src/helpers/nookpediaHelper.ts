import axios from "axios";
import Villager from "../classes/Villager";
import RuleDictionary from "../classes/Builders/RuleDictionary";


enum Hemisphere{
    north='north',
    south='south'
}


export default class NookpediaHelpder{
    url:string;
    headers:{[key: string]:string|undefined};
    
    constructor(){
        this.url = "https://api.nookipedia.com";
        this.headers = {
            'X-API-KEY': process.env.NOOKIPEDIA_KEY,
            'Accept-Version': '1.0.0'
        }
    }
    /**
     * @summary Gets the name of a random villager
     * @returns the name of a random villager as a string
     */
    async getRandomVillagerName():Promise<string|undefined> {
        try{
            // gets a list of all villagers
            var acRes = await axios.get(`${this.url}/villagers`,{
                'params': { 'excludedetails': true },
                'headers': this.headers
            });
            var names = acRes.data;
            // picks a random villager
            // code from https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
            var villagerIndex = Math.floor(Math.random()*names.length);

            // return the selected name
            return names[villagerIndex];
        }
        catch(error){
            //console.log(error);
            return undefined;
        }
    }

    async getVillager(name:string):Promise<Villager|null>{
        try{
            var acRes = await axios.get(`${this.url}/villagers`,{
                'params': {
                    'name': name,
                    'nhdetails': true
                },
                'headers': this.headers
            });
            console.log('Villager data:\n',acRes.data[0]);
            return new Villager(acRes.data[0]);
        }
        catch(error){
            console.log(error);
            return null;
        }
    }

    async getFish(month:number|string,hemi:Hemisphere=Hemisphere.north):Promise<RuleDictionary>{
        try{
            var acRes = await axios.get(`${this.url}/nh/fish`,{
                params: {
                    'month': month
                }
            });
            var fish = acRes.data[hemi];
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
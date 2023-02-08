const axios = require("axios")

const url = "https://acnhapi.com/v1/villagers/"

/**
 * @summary Gets a random villager ID
 * @returns numerical ID for a villager
 * Addapted from newID() function in https://codepen.io/sharnajh/pen/zYBVLYe
 */
const getRandomId = () => {
    return Math.floor(Math.random() * 391) + 1;
}

const getRandomVillager = async () => {
    id = getRandomId();
    return await getVillager(id);
}

const getVillager = async (index) => {
    return await axios.get(`${url}\\${index}`);
}

module.exports = { getVillager, getRandomVillager }
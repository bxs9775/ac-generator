const { generateDialogue } = require("../helpers/dialogueHelper");

const getDialogue = async (req, res) => {
    dialogue = generateDialogue(req.query.villagerId)
    return res.status(200).json({"msg": dialogue})
  }

  module.exports = {
    getDialogue
  };
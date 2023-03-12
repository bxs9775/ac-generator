var { getRules, combineRules,getGrammer } = require("../grammers");

const getRulesTest = async (req,res) => {
    grammers = req.query.grammer;
    switch(typeof grammers){
        case "string":
            return res.status(200).json(getRules(grammers));
        case "object":
            if(Array.isArray(grammers))
                return res.status(200).json(combineRules(...grammers));
        default:
            return res.status(400).json({
                "msg": 'grammer parameter has an invalid type.',
                "expected": ["string","array"],
                "actual": typeof grammers
            });
    }
};

const getGrammers = async (req,res) => {
    grammers = req.query.grammer;
    return getGrammer(grammers);
};


module.exports = {
    getRulesTest, getGrammers
};
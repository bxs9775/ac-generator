var customModifiers = {
    ing: function(s){
        if(s.substring(s.length-2) == "ie"){
            return s.substring(0,s.length-1) + "ying";
        }
        if(s.substring(s.length-2) == "ic"){
            return s + "king";
        }
        lastChar = s.charAt(s.length -1);
        if(lastChar == "e"){
            return s.substring(0,s.length-1) + "ing";
        }
        if(/^[^aeiou][aeiou][^aeiouwxy]&/.test(s)){
            return s+lastChar+"ing";
        }
        return s + "ing";
    }
}

module.exports = customModifiers;
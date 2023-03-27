var customModifiers = {
    ing: function(s){
        var i = s.indexOf(" ");
        var verb = (i > -1)?s.substring(0,i):s;
        var remainder = (i > -1)?s.substring(i+1):"";
        lastChar = verb.charAt(verb.length -1);
        if(verb.substring(s.length-2) == "ie"){
            verb = verb.substring(0,verb.length-1) + "ying";
        } else if(s.substring(s.length-2) == "ic"){
            verb = verb + "king";
        } else if(lastChar == "e"){
            verb = verb.substring(0,verb.length-1) + "ing";
        }   else if(/^[^aeiou][aeiou][^aeiouwxy]$/.test(verb)){
            verb = verb+lastChar+"ing";
        } else{
            verb = verb + "ing";
        }
        if(i > -1){
            return `${verb} ${remainder}`;
        } else {
            return verb;
        }
    },
    toUpperCase: function(s){
        return s.toUpperCase();
    },
    toLowerCase: function(s){
        return s.toLowerCase();
    },
}

module.exports = customModifiers;
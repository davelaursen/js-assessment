if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var regex = /\d/;
        return regex.test(str);
    },

    containsRepeatingLetter : function(str) {
        var regex = /([A-Za-z])\1+/;
        return regex.test(str);
    },

    endsWithVowel : function(str) {
        var regex = /([AEIOUaeiou])$/;
        return regex.test(str);
    },

    captureThreeNumbers : function(str) {
        var regex = /(\d){3}/;
        var val = regex.exec(str);
        return val ? val[0] : false;
    },

    matchesPattern : function(str) {
        var regex = /^(\d){3}-(\d){3}-(\d){4}$/;
        return regex.test(str);
    },

    isUSD : function(str) {
        var regex = /^\$[1-9](\d){0,2}(,\d{3})*(\.\d{2})?$/;
        return regex.test(str); 
    }
  };
});

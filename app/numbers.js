if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var bitStr = num.toString(2);
        while (bitStr.length < 8) {
            bitStr = '0' + bitStr;
        }
        return parseInt(bitStr[8-bit], 10);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var bitStr = num.toString(2);
        while (bitStr.length < 8) {
            bitStr = '0' + bitStr;
        }
        return bitStr;
    },

    multiply: function(a, b) {
        return +(a * b).toFixed(8);
    }
  };
});


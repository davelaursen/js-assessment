if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = 0, len = arr.length; i < len; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        var newArr = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] !== item) {
                newArr.push(arr[i])
            }
        }
        return newArr;
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i = i - 1;
                len = len - 1;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
                count++;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var seen = {};
        var dups = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            var item = arr[i];
            seen[item] = seen[item] ? seen[item] + 1 : 1;
        }

        for (var i in seen) {
            if (seen[i] > 1) {
                dups.push(i);
            }
        }
        return dups;
    },

    square : function(arr) {
        var sqs = new Array(arr.length);
        for (var i = 0, len = arr.length; i < len; i++) {
            sqs[i] = arr[i] * arr[i];
        }
        return sqs;
    },

    findAllOccurrences : function(arr, target) {
        var found = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === target) {
                found.push(i);
            }
        }
        return found;
    }
  };
});

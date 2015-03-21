if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
        var files = [];
        var fn = function(data, dirName) {
            var f = [];
            var sub = [];
            for (var i=0, len=data.files.length; i < len; i++) {
                if (typeof data.files[i] === 'string') {
                    f.push(data.files[i]);
                } else {
                    sub.push(data.files[i]);
                }
            }
            if (!dirName) {
                files = files.concat(f);
                for (var i=0, len=sub.length; i < len; i++) {
                    fn(sub[i], dirName);
                }
            } else {
                if (data.dir === dirName) {
                    files = files.concat(f);
                    dirName = undefined;
                }
                for (var i=0, len=sub.length; i < len; i++) {
                    fn(sub[i], dirName);
                }
            }
        }
        fn(data, dirName);
        return files;
    },

    permute: function(arr) {
        var perm = [];
        function permute(arr, memo) {
            var cur, memo = memo || [];
            for (var i=0, l=arr.length; i < l; i++) {
                cur = arr.splice(i, 1);
                if (arr.length === 0) {
                    perm.push(memo.concat(cur));
                }
                permute(arr, memo.concat(cur));
                arr.splice(i, 0, cur[0]);
            }
        }

        permute(arr);
        return perm;
    },

    fibonacci: function(n) {
        function fib(x) {
            if (x == 1 || x == 2) {
                return 1;
            }
            return fib(x-1) + fib(x-2);
        }
        return fib(n);
    },

    validParentheses: function(n) {
        var result = [];
        function parens(open, close, str) {
            if (open == 0 && close == 0) {
                result.push(str);
            }
            if (open > 0) {
                parens(open-1, close+1, str + "(");
            }
            if (close > 0) {
                parens(open, close-1, str + ")");
            }
        }
        parens(n, 0, "");
        return result;
    }
  };
});

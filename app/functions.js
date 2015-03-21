if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str2) {
            return str + ", " + str2;
        }
    },

    makeClosures : function(arr, fn) {
        var funcs = [];
        for (var i=0, len=arr.length; i < len; i++) {
            var f = (function(x) {
                return function() {
                    return fn(x);
                }
            })(arr[i]);
            funcs.push(f);
        }
        return funcs;
    },

    partial : function(fn, str1, str2) {
        return function(x) {
            return fn(str1, str2, x);
        };
    },

    useArguments : function() {
        var val = 0;
        for (var i=0, len=arguments.length; i < len; i++) {
            val += arguments[i];
        }
        return val;
    },

    callIt : function(fn) {
        var args = [];
        for (var i=1, len=arguments.length; i < len; i++) {
            args.push(arguments[i]);
        }
        fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var args = [];
        for (var i=1, len=arguments.length; i < len; i++) {
            args.push(arguments[i]);
        }
        return function() {
            for (var i=0, len=arguments.length; i < len; i++) {
                args.push(arguments[i]);
            }
            return fn.apply(null, args);
        };
    },

    curryIt : function(fn) {
        var argCnt = fn.length;
        var args = [];
        function f() {
            return function (arg) {
                args.push(arg);
                if (args.length === argCnt) {
                    return fn.apply(null, args);
                } else {
                    return f();
                }
            }
        }
        return f();
    }
  };
});

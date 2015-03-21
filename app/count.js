if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
    	function f() {
    		console.log(start++);
    		if (start <= end) {
	    		setTimeout(function() {
	    			f();
	    		}, 100);
	    	}
    	};
    	f();
    	return {
    		cancel: function() {start = end;}
    	};
    }
  };
});
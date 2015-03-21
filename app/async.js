if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	var promise = new Promise(function(resolve, reject) {
    		if (value) {
    			resolve(value);
    		} else {
    			reject(Error("failed"));
    		}
    	});
    	return promise;
    },

    manipulateRemoteData : function(url) {
      var def = $.Deferred();
      $.ajax(url).then(function(data) {
        var people = [];
        for (var i=0, len=data.people.length; i < len; i++) {
          people.push(data.people[i].name);
        }
        def.resolve(people.sort());
      });
      return def.promise();
    }
  };
});

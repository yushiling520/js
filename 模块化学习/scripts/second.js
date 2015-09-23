define(function(){
	var add = function(x,y){
		console.log(x+y);
	};

	return {
		add:add
	};
});

//加载不符合AMD规范的库 

	/*require.config({
		shim: {
			'underscore' :{
				exports:'_'
			},
			'backbone' :{
				deps:['underscore','jquery'],
				exports:'Backbone'
			}
		}
	});*/
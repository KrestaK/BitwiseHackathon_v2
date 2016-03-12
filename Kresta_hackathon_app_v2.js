(function(){
	var app = angular.module('voting', []); 
	
	app.controller('VotingController', function(){
		this.features = properties;
	});
	
	app.controller('SimpleController', function(){
		this.comment = [];
		
		this.addComment = function(){
			if(this.featureComment != ' '){
				this.comment.push(this.featureComment);
				this.featureComment = " ";
			};
		};
	});
	
	
	
	var properties = [ 
	{
		
		name: 'Feature #1: Login with FaceBook',
		description: 'This feature will allow a user to login by using their facebook account.',
		
		
	},
	{
		name:"Feature #2: Display the user's twitter feed",		
		description: "This feature will allow the user to display their twitter feed on the page.",
		
	},
	{
		name:"Feature #3: Display threaded comments",		
		description: "Allows users to view comments posted by other users",
		
	},
	{
		name:"Feature #4: Today's Weather",		
		description: "This feature will display today's weather drawn from the weather.com API according to the user's zip code .",
		
	},
	{
		name:"Feature #5: Upload a profile picture",		
		description: "Allow users to view pictures of other users",
		
	},
	];
})();


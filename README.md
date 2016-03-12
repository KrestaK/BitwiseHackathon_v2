<!DOCTYPE html>
<html ng-app="voting">
	<head>
		<link rel="stylesheet" type="text/css" href="bootstrap.min.css"/>
		<link rel="stylesheet" type="text/css" href="Kresta_styles_v2.css"/>
		<title>Kresta's SuperCoolApp Voting System</title>
	</head>
	<header>
		<h1 align="center">Feature Voting For SuperCoolApp</h1>
		<h2 align="center">Please tell us which features you would love to see</h2>
		<br />
		
		<div id='overallResults'>
		<h4>Voting Results</h4>
		</div>
		
	</header>
	<body ng-controller="VotingController as voting">
	
		<div id='feature' ng-repeat="feature in voting.features"> 
			<h1> {{feature.name}} </h1>			
			<p> {{feature.description}} </p>
			
			<form name="reviewForm">
				<input ng-model="review.vote" type="radio" value="up" /> Up Vote
				<input ng-model="review.vote" type="radio" value="down" /> Down Vote
				<button ng-click="tallyForm();" value="Submit" onclick="alert('Thank you for your vote.');"> Submit Vote</button>
				<br />
				<br />
				
			<form ng-controller="SimpleController">
					<br />
					Comments:
                    <textarea ng-model="featureComment" placeholder="Your Comment Here" style='width:450px'></textarea>
                    <button ng-click='addComment();' style='margin-top:10px;'>Post Comment</button>

                    <h4>Comments</h4>
                    <ul>
                        <li ng-repeat="comt in comment"> {{ comt }} </li>
                    </ul>
                </form> 
				
				
			</form>
			
			
		</div>
		
		
		
		<script type="text/javascript" src="http://code.angularjs.org/1.3.8/angular.min.js"></script>
		<script type="text/javascript" src="kresta_hackathon_app_v2.js"></script>
		
		
		
		
	</body>
	
	
	
</html>
	
	
	

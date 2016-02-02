/**
 * Controller for policy Details screen
 */

app.controller('policyDetailsController', policyDetailsController);

policyDetailsController.$inject = [ '$rootScope', '$scope', '$location',
		'$routeParams','$http', '$cookies', 'defaultService' ];

function policyDetailsController($rootScope, $scope, $location,$routeParams, $http,
		$cookies, defaultService) {

	$scope.isError = false;
	$scope.activeMenu='home';
	$scope.accountDetails = {};
	$scope.pageHeading = "HOME";
		 	
	$scope.getHomeDetails = function(){
		
	};
	
	var init = function()
	{
		
		$scope.getHomeDetails();
	}
	
	init();
		    

}

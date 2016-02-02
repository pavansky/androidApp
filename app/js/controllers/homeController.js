/**
 * Controller for UserManagement screen
 */

app.controller('homeController', homeController);

homeController.$inject = [ '$rootScope', '$scope', '$location',
		'$routeParams','$http', '$cookies', 'defaultService' ];

function homeController($rootScope, $scope, $location,$routeParams, $http,
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

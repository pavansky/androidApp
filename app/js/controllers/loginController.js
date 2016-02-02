/**
 * Controller for Login screen
 */

app.controller('loginController', loginController);

loginController.$inject = [ '$scope', '$location', '$http', '$cookies','defaultService'];

function loginController($scope, $location, $http, $cookies,defaultService) {

	$scope.errors = [];
	$scope.msgs = [];



	$scope.login = function(form) {
		$scope.dataLoading = true;
		$scope.errormsg = "Loading...";
		$scope.isError = false;

		if (form.$invalid) {

			// form.$setPristine();
			// form.$setUntouched();
			return false;
		}

		defaultService.login()
		.success(function(data, status, headers,config) {
			
			 console.log('new users');
			 console.log(data);
			 $scope.newUsers = data;
			 
		}).error(function(data, status) {
			$scope.isError = true;
			$scope.errormsg = "System is not responding. Please try later.";
		});
		
	$location.path('/home');
	};

	// Function to logout from the application
	$scope.logout = function() {

	};
}
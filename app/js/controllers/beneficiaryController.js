/**
 * Controller for Beneficiary screen
 */

app.controller('beneficiaryController', beneficiaryController);

beneficiaryController.$inject = [ '$rootScope', '$scope', '$location',
		'$routeParams','$http', '$cookies', 'defaultService' ];

function beneficiaryController($rootScope, $scope, $location,$routeParams, $http,
		$cookies, defaultService) {

	$scope.isError = false;
	$scope.activeMenu='home';
	$scope.accountDetails = {};
	$scope.pageHeading = "Beneficiary details";
	
	$scope.gridOptions = {
		    columnDefs: [
			     {name: 'beneficiaryName', displayName: 'Beneficiary Name'},
			      {name: 'relation', displayName: 'Relation'},
			      {name: 'alphaCode', displayName: 'Alpha Code'},
			      {name: 'maId', displayName: 'MA - ID'},
			      {name: 'dataOfBirth', displayName: 'Date of Birth'}, 
			      {name: 'effectiveDate', displayName: 'Effective Date'},
			      {name: 'sumInsured', displayName: 'Sum Insured'},
			      {name: 'balanceSI', displayName: 'Balance SI'},
			      {name: 'domiLimit', displayName: 'Domi Limit'},
			      {name: 'domiBal', displayName: 'Domi Bal'},
			      {name: 'gender', displayName: 'Gender'}
			      
			   ],
			   data:[
			         {beneficiaryName:'Prabhakar',relation:'self',alphaCode:'A',maId:'4015076402',dataOfBirth:'25-03-1990',
			        	 effectiveDate:'07-07-2014',sumInsured:'95000',balanceSI:'95000',
			        	 domiLimit:'5000',domiBal:'4025',gender:'M'
			        	 },
			        
			         ]
			  };


		 	
	$scope.getHomeDetails = function(){
		
	};
	
	var init = function()
	{
		
		$scope.getHomeDetails();
	}
	
	init();
		    

}

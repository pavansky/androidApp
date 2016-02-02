/**
 * 
 */

app.factory('UserManagementService', ["api","$http","$q",function(api,$http) {
	var serviceApi = {};
	
	var serviceUrl = api.baseUrl;
	serviceApi.getPolicyDetails = function(){
		
		return $http.get(serviceUrl+api.userMangament.getPolicyDetails); 
	}
	
	serviceApi.getAccount = function(data){
		
		return $http.post(serviceUrl+api.userMangament.getAccount, data); 
	}

	
	
	
	return serviceApi
	
	
}]);
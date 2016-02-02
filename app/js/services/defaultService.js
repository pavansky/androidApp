/**
 * 
 */

app.factory('defaultService', ["api","$http","$q",function(api,$http) {
	var serviceApi = {};
	
	serviceApi.getApi = function(serviceUrl){
		
		return $http.get(api.serviceUrl); 
	}
	
	serviceApi.getApi = function(serviceUrl,data){
		
		return $http.post(serviceUrl, data, config); 
	}
	
	return serviceApi
	
	
}]);
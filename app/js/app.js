/**
 * 
 */

var app = angular.module('app', ['ngRoute', 'ngCookies' , 'ui.bootstrap','ui.grid']);

app.config([ '$httpProvider', function($routeProvider) {
	$routeProvider.defaults.useXDomain = true;
	//$routeProvider.defaults.headers.med_token = "dkjfasdhfkaslhdfasd";
	//$routeProvider.defaults.headers.post = "";
	//$routeProvider.defaults.headers.put = "";
	//$routeProvider.defaults.headers.patch = "";
}]);

app.constant('baseUrl', 'http://10.19.6.209/IWALLET/WebContent/ajax/');
app.constant('api', {
	baseUrl:'http://10.19.6.209/IWALLET/WebContent/ajax/',
	userMangament:{
		login:'login',
	}
});

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
		controller : 'LoginController',
		templateUrl : 'views/login.html'
	}).when('/home',{
		controller:'homeController',
		templateUrl:'views/home.html'
	}).when('/beneficiary',{
		controller:'beneficiaryController',
		templateUrl:'views/beneficiary.html'
	}).when('/policyDetails',{
		controller:'policyDetailsController',
		templateUrl:'views/policyDetails.html'
	}).when('/settings',{
		controller:'settingsController',
		templateUrl:'views/settings.html'
	}).when('/hospitalisationClaim',{
		controller:'hospitalisationClaimController',
		templateUrl:'views/hospitalisationClaim.html'
	}).otherwise({
		redirectTo : '/home'
	});
} ]);




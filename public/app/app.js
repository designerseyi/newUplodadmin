angular.module('userApp', ['appRoutes', 'userControllers' ,'userServices', 'ngAnimate', 'mainController', 'authServices', 'emailController', 'managementController'])

.config(function($httpProvider,$locationProvider) {
	$locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('AuthInterceptors');
});

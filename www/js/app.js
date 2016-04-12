// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
/*global cordova*/
angular.module('starter', ['ionic', 'ionic-material', 'starter.controllers', 'RESTConnection',
    'SSFConfig', 'SSFAlerts', 'SSFConnectivity', 'SSFDirectives', 'SSFFavorites',
    'SSFMailComposer', 'SSFSpinner'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      
      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/jobs');
  
  $stateProvider
  .state('jobs', {
    abstract: true,
    template: '<ion-nav-view></ion-nav-view>'
  })
  .state('jobs.landing', {
    url: '/jobs',
    templateUrl: 'templates/landing.html',
    controller: 'LandingCtrl'
  })
  .state('jobs.profile', {
    url: '/profile',
    cache: false,
    templateUrl: 'templates/job-view.html',
    controller: ['JobsProfService', '$scope', '$timeout', 'ionicMaterialInk', 'ionicMaterialMotion', '$window',
        'SSFAlertsService',
        function(JobsProfService, $scope, $timeout, ionicMaterialInk, ionicMaterialMotion, $window,
        SSFAlertsService) {
      $scope.jobData = JobsProfService.getData();
      $timeout(function(){
        ionicMaterialInk.displayEffect();
        ionicMaterialMotion.ripple();
      },0);
      $scope.inAppBrowser = function(newUrl) {
        
        SSFAlertsService.showAlert('Ionic View Error', 'This in app browser feature is not supported by the Ionic View app.');
        // if($window.cordova && cordova.InAppBrowser) {
        //   cordova.InAppBrowser.open(newUrl, '_blank', 'location=no, hardwareback=no');
        // }
        // else {
        //   $window.open(newUrl);
        // }
      };
    }]
  });
  
}]);

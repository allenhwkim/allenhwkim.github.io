(function() {
  'use strict';
  angular.module('blog',['ngTouch', 'ui.router', 'ngMap']);

  angular.module('blog').config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home', {
        url: '/?404',
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      })
      .state('post', {
        url: '/posts/:post',
        templateUrl: 'partials/post.html',
        controller: 'postCtrl'
      });


    $urlRouterProvider.otherwise('/');
  });

  angular.module('blog').run(function($rootScope, $http) {
    $http.get('api/page1.json').success(function(data) {
      $rootScope.posts = data.posts;
    });
  });

  angular.module('blog').run( function ($rootScope, $state, $window) {
    $rootScope.$state = $state;
    angular.element($window).bind('scroll', function() {
      $rootScope.winTop = $window.pageYOffset;
      $rootScope.winBottom = $window.pageYOffset + $window.innerHeight;
      $rootScope.winHeight = $window.innerHeight;
      $rootScope.$apply();
    });
  });

  angular.module('blog').controller('homeCtrl', function($stateParams, $location) {
    if ($stateParams['404']) {
      var url=$stateParams['404'].replace(/\/$/,'');
      $location.search('404', null); 
      $location.path(url);
    }
  });

  angular.module('blog').controller('postCtrl', function($scope, $timeout, $window, $stateParams, filterFilter) {
    $scope.post = $stateParams.post;
    $scope.date = $scope.post.match(/^[0-9]{8}/)[0].replace(/(\d\d)(\d\d)$/, "/$1/$2")
    $scope.title = document.title = $scope.post.
      replace(/\.html$/, '').
      replace(/^[0-9]{8}/, '').
      replace(/-([a-z])/gi, function(_, $1) { 
        return ' ' + $1.toUpperCase();
      });
    $scope.random = Math.floor(Math.random()*12);
    $timeout(function() {
      $window.scroll(0,0);
    });
  });
})();

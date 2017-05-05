export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'app/About/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'app/Contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'vm'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'app/Login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
    })
    .state('register', {
        url: '/register',
        templateUrl: 'app/Register/register.html',
        controller: 'RegisterController',
        controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}

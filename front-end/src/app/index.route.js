export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'app/About/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'app/Contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'app/Login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
    })
    .state('register', {
        url: '/register',
        templateUrl: 'app/Register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
    });

  $urlRouterProvider.otherwise('/');
}

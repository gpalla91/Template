export class NavBarController {
  constructor($auth){
      'ngInject'

      var vm = this;

      vm.isAuthenticated = $auth.isAuthenticated;

      vm.logout = function(){
        $auth.logout();
      }
  }
}

export class LoginController {
  constructor ($auth, $log, $state) {
    'ngInject';

      var vm = this;

      vm.login = function() {
        vm.dataLoading = true;

        var user = {
          email: vm.username,
          password: vm.password
        }

        $auth.login(user).then(function(token){
          vm.dataLoading = false;
          $auth.setToken(token);
          $state.go('home');
        });

      }
  }
}

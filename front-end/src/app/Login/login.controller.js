export class LoginController {
  constructor ($auth, $log, $state) {
    'ngInject';

      var vm = this;

      vm.errorMessage = '';
      vm.showError = false;

      vm.login = function() {
        vm.dataLoading = true;
        var user = {
          email: vm.username,
          password: vm.password
        }
        $auth.login(user).then(function(token){
          vm.dataLoading = false;
          vm.showError = false;
          $auth.setToken(token);
          $state.go('home');
        }).catch(function(err){
          vm.dataLoading = false;
          vm.showError = true;
          vm.errorMessage = err.data.message;
        });

      }
  }
}

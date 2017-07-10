export class RegisterController {
  constructor ($log, $auth, $state) {
    'ngInject';

      var vm = this;

      vm.errorMessage = '';
      vm.showError = false;

      vm.register = function() {
          vm.dataLoading = true;
          $auth.signup({
            email : vm.user.username,
            password : vm.user.password,
            firstName : vm.user.firstName,
            lastName : vm.user.lastName
          }).then(function(token){
            $auth.setToken(token);
            vm.dataLoading = false;
            vm.showError = false;
            $state.go('home');
          }).catch(function(err){
            vm.errorMessage = err.data.message;
            vm.dataLoading = false;
            vm.showError = true;
          });
      }
  }
}

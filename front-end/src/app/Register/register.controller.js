export class RegisterController {
  constructor ($log, $auth) {
    'ngInject';

      var vm = this;

      vm.register = function() {
          vm.dataLoading = true;
          $auth.signup({
            email : vm.user.username,
            password : vm.user.password,
            firstName : vm.user.firstName,
            lastName : vm.user.lastName
          }).then(function(result){
            vm.dataLoading = false;
            vm.user.username = '';
            vm.user.password = '';
            vm.user.password2 = '';
            vm.user.firstName = '';
            vm.user.lastName = '';
          }).catch(function(err){
            $log.log(err);
          });
      }
  }
}

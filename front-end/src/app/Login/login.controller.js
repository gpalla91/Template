export class LoginController {
  constructor ($log) {
    'ngInject';
      
      var vm = this;
      
      vm.login = function() {
        vm.dataLoading = true;
        $log.log("hello world");
          
          //insert nodejs express logic here
      }
  }
}

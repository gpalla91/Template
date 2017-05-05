export class RegisterController {
  constructor ($log) {
    'ngInject';
      
      var vm = this;
      
      vm.register = function() {
          vm.dataLoading = true;
          $log.log("hello world");
          
          //insert nodejs express logic here
      }

  }
}

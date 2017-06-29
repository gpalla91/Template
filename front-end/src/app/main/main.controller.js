export class MainController {
  constructor ($http, $log) {
    'ngInject';

    var vm = this;

    vm.getMessages = function() {
      var vm = this;
      $http.get('http://localhost:5000/api/message').then(function(result){
        vm.messages = result.data;
      });
    }

    vm.postMessage = function() {
      $http.post('http://localhost:5000/api/message', {msg: vm.message}).then(function(result){
        vm.message = '';
        $log.log(result);
        vm.getMessages();
      });
    }

    vm.getMessages();
  }
}

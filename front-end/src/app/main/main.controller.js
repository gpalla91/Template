export class MainController {
  constructor ($http, $log) {
    'ngInject';

    var vm = this;

    vm.getMessages = function() {
      var vm = this;
      $http.get('http://localhost:5000/api/message').then(function(result){
        vm.messages = result.data;
        $log.log('messages loaded');
      });
    }

    vm.postMessage = function() {
      $http.post('http://localhost:5000/api/message', {msg: vm.message}).then(function(result){
        $log.log('message posted', result);
        vm.message = '';
        vm.getMessages();
      });
    }

    vm.getMessages();
  }
}

export class MainController {
  constructor ($http, $log, $auth) {
    'ngInject';

    var vm = this;

    vm.isAuthenticated = function(){
      return $auth.isAuthenticated();
    }

    vm.getMessages = function() {
      $http.get('http://localhost:5000/api/message').then(function(result){
        vm.messages = result.data;
      });
    }

    vm.postMessage = function() {
      $http.post('http://localhost:5000/api/message', {msg: vm.message}).then(function(result){
        vm.message = '';
        vm.getMessages();
      });
    }

    vm.getMessages();
  }
}

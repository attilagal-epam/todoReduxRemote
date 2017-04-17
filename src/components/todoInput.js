angular.module('todoApp').component('todoInput', {
  template: `
    <form ng-submit="$event.preventDefault(); $ctrl.onEnter({todo: todo}); todo='';">
      <input class="todoinput" ng-model="todo" placeholder="Enter todo...">
    </form>`,
  bindings: {
    onEnter: '&'
  }
});

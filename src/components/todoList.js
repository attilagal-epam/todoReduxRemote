angular.module('todoApp').component('todoList', {
  template: `
    xcvcvb   {{$ctrl.todos}}
    <ul class="todolist">
      <li class="todolist__item" ng-repeat="item in $ctrl.items track by item.id">
        <label class="todolist__input">
          <input type="checkbox"
                 ng-model="toggle"
                 ng-change="$ctrl.onToggle({todo: item})">

          <span>{{item.title}}</span>
        </label>
        <button ng-click="$ctrl.onDelete({todo: item})"><i class="fa fa-times" aria-hidden="true"></i>D</button>
      </li>
    </ul>
  `,
  bindings: {
    items: '<',
    onToggle: '&',
    onDelete: '&'
  }
});

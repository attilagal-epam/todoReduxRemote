import actionMethods from '../actions';
export default class TodoApp {

  constructor($ngRedux) {
    const mapStateToThis = (state) => {
      console.log('STATE  ', state);
      return {
        todos: state.todos,
        //hasErrored: state.itemsHasErrored,
        isLoading: state.isItemsLoading
      };
    };

    const unsubscribe = $ngRedux.connect(mapStateToThis, actionMethods)(this);
    this.fetchData();
//    $scope.$on('$destroy', unsubscribe);
  }

}


TodoApp.$inject = ['$ngRedux'];

angular.module('todoApp').component('app', {
  controller: TodoApp,
  template: `
    <todo-input on-enter="$ctrl.addTodo(todo)"></todo-input>
    <br>{{$ctrl.todos}}<br>
    LOADING:<span ng-show="$ctrl.isLoading"></span><br>
    <todo-list items="$ctrl.todos" on-toggle="$ctrl.toggleTodo(todo)" on-delete="$ctrl.deleteTodo(todo)"></todo-list>
    <hr>
    <pre>Application state: {{$ctrl.todos|json}}</pre>
  `
});

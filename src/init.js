import todos from './reducers/todos';
import thunk from 'redux-thunk';

const todoApp = angular.module('todoApp', ['ngRedux'])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(todos, [thunk]);
  });

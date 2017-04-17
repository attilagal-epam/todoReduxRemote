import angular from 'angular';
import ngRedux from 'ng-redux';
import uuid from 'uuid';
import './init';
import './components/todoApp';
import './components/todoList';
import './components/todoInput';

import './index.scss';

angular.bootstrap(document.body, ['todoApp']);

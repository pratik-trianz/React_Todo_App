var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var uuid = require('node-uuid');

var TodoApp = React.createClass({

  render: function(){
    return (
      <div>
        <TodoSearch/>
        <TodoList/>
        <AddTodo/>
      </div>
    )
  }

});

module.exports = TodoApp;

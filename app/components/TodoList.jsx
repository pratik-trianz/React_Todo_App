var React = require('react');
var Todo = require('Todo')
var { connect } = require('react-redux');
var TodoAPI = require('TodoAPI');

var TodoList = React.createClass({
  render: function () {
    console.log(this.props);
    var {todos,showCompleted,searchText} = this.props;

    var renderTodos = () => {
      return TodoAPI.filterTodos(todos,showCompleted,searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = connect(
  (state) =>{
    return state;
  }
)(TodoList);

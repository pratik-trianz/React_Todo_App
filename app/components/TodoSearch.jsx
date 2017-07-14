var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');

var TodoSearch = React.createClass({

  render: function () {
    var {dispatch,showCompleted,searchText} = this.props;
    return (
      <div>
        <div>
          <input type="text" value={searchText} ref="searchText" placeholder="Search todos" onChange={()=>{
                var searchText = this.refs.searchText.value;
                dispatch(actions.setSearchText(searchText));
            }}/>

      </div>
        <div>
          <label>
            <input type="checkbox" checked={showCompleted} ref="showCompleted" onChange={()=>{
                dispatch(actions.toggleShowCompleted());
              }}/>
            Show Completed Todos
        </label>
        </div>
      </div>
    )

  }

});
module.exports = connect((state)=>{
  return {
    showCompleted: state.showCompleted,
    searchText : state.searchText
  }
})(TodoSearch);

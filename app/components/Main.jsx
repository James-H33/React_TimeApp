var React = require('react');

// Components
var Nav = require('Nav');


var Main = React.createClass({
  render: function() {
    return (
      <div>
      <Nav />
        <h1> Hello, I am the Main Component</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;

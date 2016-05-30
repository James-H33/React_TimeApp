var React = require('react');

// Components
var Clock = require('Clock');

var Timer = React.createClass({
  render: function() {
    return (
      <div>
        <h2> Timer Component</h2>
        <Clock />
      </div>
    );
  }
})

module.exports = Timer;

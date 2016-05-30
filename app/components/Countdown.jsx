var React = require('react');

// Components
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function() {
    return (
      <div>
        <h2> Countdown Component</h2>
        <Clock />
      </div>
    );
  }
});

module.exports = Countdown;

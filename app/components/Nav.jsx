var React = require('react');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">BFM</li>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

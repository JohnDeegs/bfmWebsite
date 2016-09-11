var React = require('react');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar stacked-for-small">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">BFM</li>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search"/></li>
            <li><button type="button" class="button">Search</button></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

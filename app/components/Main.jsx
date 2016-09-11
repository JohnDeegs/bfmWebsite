var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns small-12 small-centering">
          <img className="resize" src="http://static.tumblr.com/79688bd2df69ad7fa707bfa96a18423a/qqqr2nd/Lojn7tqxh/tumblr_static_9qpo5tcm0ycc8w8kwcwsgkc88.png"/>
        </div>
      </div>
      <div className="columns small-12 small-centering text-center">
        <button className="secondary hollow button" href="#">Listen Live</button>
      </div>
    </div>
  );
}

module.exports = Main;

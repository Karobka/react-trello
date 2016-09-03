var React = require('react');
var ReactDOM = require('react-dom');

var Card = function() {
    return (
        <div className="cards">
        <p>This is a card!</p>
        </div>
    );
};

var List = function() {
    return (
        <div>
        <Card />
        <Card />
        <Card />
        </div>
    );
};

var Board = function() {
    return (
        <div>
        <List />
        <List />
        <List />
        </div>
    );
};
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('my_board'));
});

var React = require('react');
var ReactDOM = require('react-dom');

/*var Card = function() {
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
};*/

var Board = function(props) {

    return (
        <div>
        <h1>{props.board_title}</h1> 
        
        <h2>{props.lists}</h2>
        </div>
    );
};

var List = function (props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <form>
                <input onChange={props.onAddInputChanged} type="text"></input>
                <button type="submit" onClick={event.preventDefault() props.onAddSubmit}>Submit</button>
            </form>
        </div>
    );
};

var Card = function(props) {
    return (
        <div>
        <p>{props.text}</p>
        </div>
    );
};

var Boardz = function () {
    return(
        <div>
            <Board board_title="My Fancy To Do Board"
                lists= {[
                    <div>
                    <List title="My Shopping List"/>
                        <Card text="Cat food"/>
                        <Card text="Dog food"/>
                        <Card text="Human food"/>
                    </div>,
                    <div>
                    <List title="Never Ending Shopping List"/>
                        <Card text="A Job"/>
                        <Card text="Kid Food"/>
                        <Card text="Adult Food"/>
                        <Card text="New Bed"/>
                    </div>
                ]}
            />
        </div>
    );
};


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Boardz />, document.getElementById('my_board'));
});

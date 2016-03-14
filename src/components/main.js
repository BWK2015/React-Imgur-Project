var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-list.js');

var Main = React.createClass({
    content: function(){
        if(this.props.children){
            return this.props.children;
        } else {
            return <TopicList />;   
        }
    },
    render: function(){
        return (
            <div>
                <Header />
                {this.content()}
            </div>
        );   
    }
});

module.exports = Main;
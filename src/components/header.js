var React = require('react');
var Link = require('react-router').Link;
var Actions = require('../actions');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');

var Header = React.createClass({
    mixins: [Reflux.listenTo(TopicStore, 'onChange')],
    getInitialState: function(){
        return {
            topics: []
        }
    },
    componentWillMount: function(){
        Actions.getTopics();
    },
    onChange: function(event, topics){
        this.setState({topics: topics});
    },
    render: function(){
        var topics = this.state.topics.slice(0, 4).map(function(topic){
            return <li activeClassName="active" key={topic.id}>
                    <Link to={"topics/" + topic.id}>{topic.name}</Link>
                </li>
        });
        return (
            <nav className="navbar navbar-default header">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Imgur Brand</Link>
                    <ul className="nav navbar-nav navbar-right">
                        {topics}
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
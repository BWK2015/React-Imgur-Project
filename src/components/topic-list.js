var React = require('react');
var Api = require('../utils/api');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var TopicList = React.createClass({
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
            return <Link to={"topics/" + topic.id} key={topic.id} className="list-group-item">
                    <h4>{topic.name}</h4>
                    <p>{topic.description}</p>
                </Link>
        });
        return (
            <div className="list-group">
                {topics}
            </div>
        );   
    }
});

module.exports = TopicList;
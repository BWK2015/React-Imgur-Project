var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
    getInitialState: function(){
        return {
            hover: false
        }  
    },
    image: function(){
        var link = "http://i.imgur.com/" + this.props.id + "h.jpeg";
        return <img src={link} />
    },
    video: function(){
        return (
            <div>
                <video preloader="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
                    <source src={this.props.mp4} type="video/mp4" />
                </video>
            </div>
        )
    },
    icon: function(){
        return (
            <span className="glyphicon glyphicon-play"></span>
        )
    },
    inset: function(){
        return (
            <div className="inset">
                Views: {this.props.views}
                <br />
                UpVotes: {this.props.ups}
            </div>
        )
    },
    handleMouseEnter: function(){
        this.setState({hover: true});
    },
    handleMouseLeave: function(){
        this.setState({hover: false});
    },
    render: function(){
        return (
            <Link to={"images/" + this.props.id} className="image-preview"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}>
                {this.props.animated && this.state.hover ? this.video() : this.image()}
                {this.props.animated && !this.state.hover ? this.icon() : null}
                {this.state.hover ? this.inset() : null}
            </Link>
        );   
    }
});
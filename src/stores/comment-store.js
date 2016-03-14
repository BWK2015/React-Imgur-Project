var Reflux = require('reflux');
var Actions = require('../actions');
var Api = require('../utils/api');

module.exports = Reflux.createStore({
    listenables: [Actions],
    getImage: function(id){
        Api.get('gallery/' + id + '/comments')
            .then(function(response){
                this.comment = response.data;
                this.triggerChange();
            }.bind(this))
    },
    triggerChange: function(){
        this.trigger('change', this.comment);
    }
});
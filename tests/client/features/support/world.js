/**
 * Created by robbin on 24-02-16.
 */

var zombie = require('zombie');

function World() {
    this.browser = new zombie(); // this.browser will be available in step definitions

    this.visit = function (url, callback) {
        if(callback){
            this.browser.visit(url, callback);
        } else {
            return this.browser.visit(url);
        }
    };

    this.setUser = function(user){
       this.user = user;
    };

    this.getUser = function(){
        return this.user;
    };
}

module.exports = function() {
    this.World = World;
};
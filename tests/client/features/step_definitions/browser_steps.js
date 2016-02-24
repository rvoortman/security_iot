/**
 * Created by robbin on 24-02-16.
 */
module.exports = function () {
    this.Given(/^I go to "([^"]*)"$/, function (url) {
        // Notice how `callback` is omitted from the parameters
        return this.visit(url);
    });
};
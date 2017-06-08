var BrowserInteractions = require('../Base/BrowserInteractions.js');

var browserInteractions = new BrowserInteractions();

var accountPage = function () {

    this.createButton = function () {
        expect(browserInteractions.getText('id', 'bAdd')).toEqual('Create');
    };
};

/*
var accountPage ={
    create: 'bAdd'
};
*/

module.exports = accountPage;

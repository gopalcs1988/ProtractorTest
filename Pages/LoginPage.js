var BrowserInteractions = require('../Base/BrowserInteractions.js');

var browserInteractions = new BrowserInteractions();

var loginPage = function() {

    this.login = function()  {
        browserInteractions.sendKeys('model', 'user.name', 'Luke');
        browserInteractions.sendKeys('model', 'user.password', 'Skywalker');
        browserInteractions.click('buttonText', 'Login');
    };
};

/*var LoginPage = {
    username: 'user.name',
    password: 'user.password',
    submit_button: 'Login'
};*/

module.exports = loginPage;
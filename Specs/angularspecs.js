var LoginPage = require('../Pages/LoginPage.js');
var AccountPage = require('../Pages/AccountPage')
var BrowserInteractions = require('../Base/BrowserInteractions.js');

var browserInteractions = new BrowserInteractions();

describe('First testing in protractor',function(){

   it('Home page validation',function(){
       browserInteractions.get('http://cafetownsend-angular-rails.herokuapp.com/login');
       browserInteractions.sendKeys('model',LoginPage.username,'Luke');
       browserInteractions.sendKeys('model',LoginPage.password,'Skywalker');
       browserInteractions.click('buttonText',LoginPage.submit_button);
       expect(browserInteractions.getText('id',AccountPage.create)).toEqual('Create');
   });

});



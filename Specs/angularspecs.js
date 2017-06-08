var LoginPage = require('../Pages/LoginPage.js');
var AccountPage = require('../Pages/AccountPage');
var CreateEmployeeData = require('../Pages/CreateEmployeeData');
var BrowserInteractions = require('../Base/BrowserInteractions.js');

var browserInteractions = new BrowserInteractions();
var loginPage = new LoginPage();
var accountPage = new AccountPage();
var createEmployeeData = new CreateEmployeeData();

describe('First testing in protractor',function(){

   it('Home page validation',function(){
       browserInteractions.get('http://cafetownsend-angular-rails.herokuapp.com/login');
       loginPage.login();
       accountPage.createButton();
   });

   it('Create employee data',function () {
       createEmployeeData.createData();
   });

});



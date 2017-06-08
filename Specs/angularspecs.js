var LoginPage = require('../Pages/LoginPage.js');
var AccountPage = require('../Pages/AccountPage');
var CreateEmployeeData = require('../Pages/CreateEmployeeData');
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

   it('Create employee data',function () {
       browserInteractions.click('id',CreateEmployeeData.create);
       browserInteractions.sendKeys('model',CreateEmployeeData.firstname,'test');
       browserInteractions.sendKeys('model',CreateEmployeeData.lastname,'testing_last');
       browserInteractions.sendKeys('model',CreateEmployeeData.email,'rajagopal1988@gmail.com');
       browserInteractions.sendKeys('model',CreateEmployeeData.startdate,'06-06-2016');
       browserInteractions.click('buttonText',CreateEmployeeData.addbutton);
   });


});



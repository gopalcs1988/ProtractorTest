var BrowserInteractions = require('../Base/BrowserInteractions.js');

var browserInteractions = new BrowserInteractions();

var createEmployeeData = function () {

    this.createData = function () {
        browserInteractions.click('id','bAdd');
        browserInteractions.sendKeys('model','selectedEmployee.firstName','test');
        browserInteractions.sendKeys('model','selectedEmployee.lastName','testing_last');
        browserInteractions.sendKeys('model','selectedEmployee.email','rajagopal1988@gmail.com');
        browserInteractions.sendKeys('model','selectedEmployee.startDate','06-06-2016');
        browserInteractions.click('buttonText','Add');
    };
};

/*var createEmployeeData ={
    create: 'bAdd',
    firstname: 'selectedEmployee.firstName',
    lastname: 'selectedEmployee.lastName',
    startdate: 'selectedEmployee.startDate',
    email: 'selectedEmployee.email',
    addbutton: 'Add'
};*/

module.exports = createEmployeeData;

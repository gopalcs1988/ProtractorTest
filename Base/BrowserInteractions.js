/**
 * Created by rajagopal on 31/5/17.
 */
var ElementLocators = require('../Base/ElementLocators.js');

var elementLocators = new ElementLocators();

var BrowserInteractions = function(){

    this.get = function(url) {
        browser.get(url);
    };

    this.getText = function(locator,locatorValue){
      return elementLocators.locator(locator,locatorValue).getText();
    };

    this.sendKeys = function (locator,locatorValue,value) {
        elementLocators.locator(locator,locatorValue).sendKeys(value);
    };

    this.click = function (locator, locatorValue) {
        elementLocators.locator(locator, locatorValue).click();
    };

    this.getAttribute = function (locator, locatorValue, attribute){
        return elementLocators.locator(locator,locatorValue).getAttribute(attribute);
    };
};

module.exports = BrowserInteractions;
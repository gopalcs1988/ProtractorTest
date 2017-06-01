/**
 * Created by rajagopal on 31/5/17.
 */

var ElementLocators = function(){

    this.locator = function(name,value){

        switch(name) {
            case 'id':
                return element(by.id(value));
                break;
            case 'name':
                return element(by.name(value));
                break;
            case 'buttonText':
                return element(by.buttonText(value));
                break;
            case 'model':
                return element(by.model(value));
                break;
            case 'css':
                return element(by.css(value));
                break;
            case 'binding':
                return element(by.binding(value));
                break;
        };
    };

};

module.exports = ElementLocators;

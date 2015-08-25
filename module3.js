var module1 = require('./module1');
var module2 = require('./module2');


//module2.convertRandom(module1.randomNumber());



var module3 = {
    accountBalance: function() {

    return 'Account balance: \n' + module2.convertRandom(module1.randomNumber()) +"\n";
    }
};


module.exports = module3;

/**
 * Created by kimhayden on 8/25/15.
 */


var module1 = {

  randomNumber: function(){

      var a =  Math.floor((Math.random() * 1000000) + 100);
      console.log("Your random numero is " + a);
      return a;
  }


};
module.exports = module1;
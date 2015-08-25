
var module2 = {
    convertRandom: function(randomNumber){

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }


        var usd = ("$" + numberWithCommas(randomNumber));
        return usd;
    }

};

module.exports = module2;





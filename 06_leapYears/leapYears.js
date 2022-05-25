const leapYears = function(year) {
    let leapyear=false;
    if((year%4==0)&&(year%100!==0||year%400==0)){
        leapyear= true;
    }
return leapyear;

};

// Do not edit below this line
module.exports = leapYears;

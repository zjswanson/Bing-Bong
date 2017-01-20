// test values.  Eventually, the interface should gather these values and assign to these variables.

var inputLength = 30;
var inputNumber1 = 3;
var inputNumber2 = 5;
var inputString1 = "ping";
var inputString2 = "pong";
var largeNumber;
var largeString = "";
var smallNumber;
var smallString = "";
var product;
var productString = "";

// Back end logic

var assignValues = function() {
  if (inputNumber1>inputNumber2) {
    largeNumber=inputNumber1;
    largeString=inputString1;
    smallNumber=inputNumber2;
    smallString=inputString2;
  } else {
    smallNumber=inputNumber1;
    smallString=inputString1;
    largeNumber=inputNumber2;
    largeString=inputString2;
  }
  product = inputNumber1*inputNumber2;
  productString=inputString1 + "-" +inputString2;
};

var writeList = function(length){
  var list =[];
  for (i=1;i<=length;i+=1) {
    if (i%largeNumber===0){
      list.push(largeString);
    } else {
      list.push(i);
    }
  }
  console.log(list);
  return list;
};

assignValues();
writeList(inputLength);
// Interface logic

$(function(){
  // hey Zach!  don't forget to move your global variables in here!


});

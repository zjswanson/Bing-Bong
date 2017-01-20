// Back end logic
var inputLength;
var inputNumber1;
var inputNumber2;
var inputString1;
var inputString2;
var largeNumber;
var largeString = "";
var smallNumber;
var smallString = "";
var product;
var productString = "";

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
  for (var i=1;i<=length;i+=1) {
    if (i%product===0){
      list.push(productString);
    } else if (i%largeNumber===0){
      list.push(largeString);
    }else if (i%smallNumber===0) {
      list.push(smallString);
    } else {
      list.push(i);
    }
  }
  return list;
};

// Interface logic

$(function(){
  $("#inputform").submit(function(event){
    event.preventDefault();
    $("#displaylist").children().remove();
    inputLength = parseInt($("input#length").val());
    inputNumber1 = parseInt($("input#number1").val());
    inputNumber2 = parseInt($("input#number2").val());
    inputString1 = $("input#string1").val();
    inputString2 = $("input#string2").val();
    assignValues();
    var list = writeList(inputLength);
    list.forEach(function(element){
      $("#displaylist").append("<li>"+element+"</li>");
    });
  });
});

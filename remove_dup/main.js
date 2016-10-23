// take out the unique value//



var myString ="abcdeabcdeiflfffgnssssssk"
  //declaring my string"
 var myArray = [];
      //declaring my Array
 for (var i = 0; i< myString.length; i++){
      //indexof is a built in method that returns to me the index of a value in te array.if the value is not there it returns -1
      if (myArray.indexOf(myString[i]) === -1){
        myArray.push(myString[i])
       // push the value to my array because it dosent exist in that array. we know it doesent exist because index return -1
      }
 } 
     
     console.log(myArray.join(""))
     

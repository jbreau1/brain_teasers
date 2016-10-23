var myString ="abcdeabcdeiflfffgnssssssk"

 var myArray = [];
 for (var i = 0; i< myString.length; i++){
      if (myArray.indexOf(myString[i]) === -1){
       myArray.push(myString[i])
      }
 }
     
     console.log(myArray.join(""))
     

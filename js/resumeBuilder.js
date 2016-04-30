/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var firstName = 'dima';
 var age =32;


var i = 100;
var y = 0;
var str = 'abc'


 $('#main').append(' tut');

 $('#main').prepend(' tat');


  console.log(str/y);


 var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    
    
    // Don't delete this line!


 	
 	newArray = _array.slice(0);

 	newArray[newArray.length -1 ]++;

	console.log(_array);

    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
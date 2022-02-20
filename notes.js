// js let example
let person= 'john',
carName='volvo',
price=200;

/*   

notes: you can't redeclare a variable declared with let or const
 if you put a number in quotes javascript will treat the rest of the numbers as strings so '5'+2+3 will be concatenated
let can't be redeclared and var also can't be redeclared
 variables outside of a block can't be used outside of it e.g {let x=2 ;  } but var can be used outside of it.

*/

/*
wrting into an HTML element - innerHTML
writing into HTML output - documemt.write()
writing into an alert box - windows.alert()
wrting into the browser console  - console.log()

*/

// THE BEST WAY TO BREAK A LINE IS AFTER AN OPERARATOR IS USED
//RETURN in javscript exits a function 
//fixed values in javascript are called literals 
//Variable values are called variables

// commenting in js is done by putting this ' // 'for a singl line comment and '/* */' for multi lines


// the = is used only for assignment while == is for operators
// it's a very good programming ethics  to declare all variables at the beginning of a script


// operators
/*
** is used for exponentiation
% is used for remainders of a division
++ is increment
-- is decrement


x+=y is the same as x=x*y
x-=y is the same as x=x-y


== is equal to
=== is equal value and type
!== means not equal
? is a ternary operator



 //LOGICAL OPERATORS

&& is the logical AND
// is the logical OR
! is the logical not 




// TYPE OPERATORS 
typeOf      -returns the type of variable
instanceOf   - returns TRUE if an object is an instance of an object type.



X**Y IS THE SAME AS math.pow(x,y);


let x=5 ;
letz = math.pow(x,2);

function toCelsius(f){
return(5/9) * (5-32);
}

document.getElementById("demo").innerHTML= toCelsius(77);


*/

//Automatic replacing of expressions with real values is called string interpolation.


//HTML EVENTS

onchange
onclick
onmousedown
onmouseover
onkeydown
onload


//text.lenght is used to determine the length of the string 


// methods for extracting part of a string

slice(start,end)
substring(start,end)
substr(start,length)

//examples
let str= 'apple', 'banana', 'kiwi';
let part = str.slice(7,13);


//if console shows ISNAN it means its not a number   Example below:
let x= 100/apple ; // the answer is obviously ISNAN

//Substrings cannot accept negative indexes


let text= 'please visit microsoft' ;
let new text= text.replace('microsoft', 'w3schools'); //repalce works only for first match and its also case sensitive



// changing text formats

text.toUpperCase() ;
text.toLowerCase();

//concatenating strings
concat()  --> concatenation

text1= 'my name';
text2= 'Abubakar';
text3= text1.concat('is' , text2 )


stringtrim()       // is used for clearing whitespace


padStart()
padEnd()


let extract = text.charAt(0) ; // returns first letter

//JS STRING SEARCH METTHODS
indexOf();
lastOfIndex();
startsWith();
endsWith();


let text= ` Welcome ${firstName} , ${lastName} ;`




let price= 10;
let VAT = 0.25;

Total =`  Total:${(price* (1+VAT)) toFixed(2)} ; `

//NUMBER METHODS
toFixed(2); // best used for money
toFixed(); //for approximating numbers
toPrecision();
valueOf();   


//string conversion
number();  // used inconverting strings to number
parsefloat();
parseInt();


// NUMBER PROPERTIES


MAX_VALUE   // FOR CHECKING LARGEST NUMBER
MIN_VALUE // for checking smallest number 
POSITIVE_INFINITY 
NEGATIVE_INFINITY
NAN //not a number


//examples
let x = number.MIN_VALUE;



//ARRAY

Array.isArray(fruits); //example for checking if fruits is an array , returns either true or false

//ARRAY METHODS

fruits.toString();     // will return an array as a comma seperated string
fruits.join();          // returns array as multiplication *
shift();           // remove first element of an array
unshift('abk');      // adds an element abk

splice ()// adds new item to an array
slice () // slices out a piece of an array
/*
examples
*/  
fruits.splice(2.0 , "kiwi" , "orange")



sort()// this method sorts an array alphabetically
reverse()// reverses to descending order

//DATE METHODS

//creating a date 
const date = new Date ();
document.getElementById('demo').innerHTML = d;

//Converting dates to different strings
d.toUTCstring(); // displays tue,15th february 2022 14:54:55 GMT
d.toDate string();// displays Tue feb 15 2022




//JS math methods

//number to integer
math.round(x);  // converts number to the nearest integer
math.round(x);
math.all(x);
math.floor(x);

//all the above method converts to the nerast integer


//more examples of math methods

math.floor(x); // returns the sign of the number(+, -)
math.pow(x); // exponentiation
math.sqrt(x);//returns the square root of X
math.abs(x);//returns absolute positive
math.cos(x);//returns cosine



math.random() // creates random number
math.log10() //returns the base 10 of  logarithm 
math.e() // Exponetiation




//CONDITIONS
variableName = (condition)  ? value1 : value2 ;



// TYPES OF DATA IN JAVASCRIPT

/*
Those that can containe value

string 
number
boolean 
object
function

Types of object
date
array
string 
number
boolean


*/


// ARROW FUNCTION

hello = () => {}

// normal OLD function style 
function =() { }

//JSON OBJECTS ARE WRITTEN IN ""










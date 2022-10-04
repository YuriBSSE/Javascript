// @ts-nocheck
const javscript = () => {


//Q1   Install Node.js and VS Code on your computer.
// Completed

//Q2 Personal Message: Store a personâ€™s name in a variable, and print a message to that person. Your message should be simple, such as, â€œHello Eric, would you like to learn some Python today?â€
var person = "Hello Eric, would you like to learn some Python today?"
console.log(person)

//Q3 Name Cases: Store a personâ€™s name in a variable, and then print that personâ€™s name in lowercase, uppercase, and titlecase.
// * LowerCase
let texts = "Hello World!";
let results = texts.toLowerCase();
console.log(results)
// * UpperCase
let text = "Hello World!";
let result = text.toUpperCase();
console.log(result)
// * TitleCase
var string="I'm student of karachi university. my favourt subject Programing ";
var n=string.split(".");
var vfinal=""
for(i=0;i<n.length;i++)
{
   var spaceput=""
   var spaceCount=n[i].replace(/^(\s*).*$/,"$1").length;
   n[i]=n[i].replace(/^\s+/,"");
   var newstring=n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
   for(j=0;j<spaceCount;j++)
   spaceput=spaceput+" ";
   vfinal=vfinal+spaceput+newstring+".";
 }
 vfinal=vfinal.substring(0, vfinal.length - 1);
 console.log(vfinal)

//Q4  Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, â€œA person who never made a mistake never tried anything new.â€
var quote =  "Albert Einstein once said, â€œA person who never made a mistake never tried anything new.â€"
console.log(quote)

// Q5 Famous Quote 2: Repeat Exercise 4, but this time store the famous personâ€™s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstein ";
var famous_quotes = "once said, â€œA person who never made a mistake never tried anything new.â€"
console.log(famous_person + famous_quotes) //Q10: this programme add 2 variables and return concatinated value 

//Q6 Stripping Names: Store a personâ€™s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var name = " \tJames Bond\n "
console.log(name.trim()) //Q10: this programme removes speace from string and return trimmed value 

// Q7 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(5+3)
console.log(12-4)
console.log(4*2)
console.log(16/2)

//Q8 You should create four lines that look like this:


//Q9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favNum = 8;
console.log("my favourite number is", favNum)

//Q10 Adding Comments: Choose two of the programs youâ€™ve written, and add at least one comment to each. If you donâ€™t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// ANSWER 6 ND 5

//Q11 Names: Store the names of a few of your friends in a array called names. Print each personâ€™s name by accessing each element in the list, one at a time.

var arrFriends = ["muhammad", "ahsan", "muneer"]
arrFriends.forEach(name => {
   console.log(name) 
});

//Q12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each personâ€™s name, print a message to them. The text of each message should be the same, but each message should be personalized with the personâ€™s name.
var arrfriendStatements = ["muhammad", "ahsan", "muneer"]
arrfriendStatements.forEach(nameState => {
   console.log("helow my friend",nameState ) 
});


// Q13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as â€œI would like to own a Honda motorcycle.â€

var arrTransports = ["I love to ride Honda Civic", "My favourite bike is CG 125", "I often go seaways on SQUALO boat"]
arrTransports.forEach(transport => {
    console.log(transport) 
 });

// Q 14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people youâ€™d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var arrPeople = ["muhammad", "ahsan", "muneer"]
arrPeople.forEach(guests => {
    console.log("I would like to invite you over dinner in my home, I will be delighted if you came over today. Seea yea!", guests) 
 });


// Q 15 Changing Guest List: You just heard that one of your guests canâ€™t make the dinner, so you need to send out a new set of invitations. Youâ€™ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who canâ€™t make it.
// â€¢ Modify your list, replacing the name of the guest who canâ€™t make it with the name of the new person you are inviting.
// â€¢ Print a second set of invitation messages, one for each person who is still in your list.
 var arrGuests = ["muhammad", "ahsan", "muneer"]
 arrGuests[2] = "text"
arrGuests.forEach(guests => {
    console.log("I would like to invite you over dinner in my home, I will be delighted if you came over today. Seea yea!", guests) 
});
//    Q16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// â€¢ Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// â€¢ Add one new guest to the beginning of your array.
// â€¢ Add one new guest to the middle of your array. â€¢ Use append() to add one new guest to the end of your list. â€¢ Print a new set of invitation messages, one for each person in your list.
 
var arrGuestsAdded = ["muhammad", "ahsan", "muneer"]
 arrGuestsAdded.unshift("muhammad")
 arrGuestsAdded[2]= "ahsan"
 arrGuestsAdded.push("ahmed")
 
arrGuestsAdded.forEach(guests => {
    console.log("I would like to invite you over dinner in my home, I will be delighted if you came over today. Seea yea!", guests) 
});

// Q17 Shrinking Guest List: You just found out that your new dinner table wonâ€™t arrive in time for the dinner, and you have space for only two guests.
// â€¢ Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// â€¢ Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know youâ€™re sorry you canâ€™t invite them to dinner.

// â€¢ Print a message to each of the two people still on your list, letting them know theyâ€™re still invited.

// â€¢ Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
for (let i = arrGuestsAdded.length-1; i >= 2; i--) {
   poppedPerson = arrGuestsAdded.pop();
   console.log("I am sorry, you are not invited today due to some reason", poppedPerson)
    
}

console.log(arrGuestsAdded)
arrGuestsAdded.forEach(guests => {
    console.log("You are still invited over dinner, dont worry! hehe", guests) 
});

//Q18 Seeing the World: Think of at least five places in the world youâ€™d like to visit.    
// â€¢ Store the locations in a array. Make sure the array is not in alphabetical order.
var original= ["pakistan", "south africa", "dubai" , "england" , "california"]

// â€¢ Print your array in its original order.
console.log(original)
// â€¢ Print your array in alphabetical order without modifying the actual list.
console.log([...original].sort())
// â€¢ Show that your array is still in its original order by printing it.
console.log(original)
// â€¢ Print your array in reverse alphabetical order without changing the order of the original list.
console.log([...original].sort().reverse())
// â€¢ Show that your array is still in its original order by printing it again.
console.log(original)
// â€¢ Reverse the order of your list. Print the array to show that its order has changed.
console.log(original.reverse())
// â€¢ Reverse the order of your list again. Print the list to show itâ€™s back to its original order.
console.log(original.reverse())
// â€¢ Sort your array so itâ€™s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(original.sort())
// â€¢ Sort to change your array so itâ€™s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(original.sort().reverse())

//Q19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(arrPeople.length)

//Q20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else youâ€™d like. Write a program that creates a list containing these items.

var x = []
function myFunction(a){
x.push(a);

console.log(x)
};
myFunction("abcd")

//Q21 They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

const car = {type:"Fiat", model:"500", color:"white"};

console.log(car)

//Q22 Intentional Error: If you havenâ€™t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var y = [4,3,2,1]
console.log(y[6])

//Q23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// â€¢ Look closely at your results, and make sure you understand why each line evaluates to True or False.

// â€¢ Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
const cat =  "meaw"

console.log(cat=="meaw")

const test = "abc"

console.log(test=="abc")

const test1 = "abc"

console.log(test1=="abc")

const test2 = "abc"

console.log(test2=="abc")

const test3 = "abc"

console.log(test3=="abc")

const test4 = "abc"

console.log(test4=="abc")

const cat1 =  "meaw"

console.log(!cat1=="meaw")

const cat2 =  "meaw"

// @ts-ignore
console.log(!cat2=="meaw")

const cat3 =  "meaw"

console.log(!cat3=="meaw")

const cat4 =  "meaw"

console.log(!cat4=="meaw")

const cat5 =  "meaw"

console.log(!cat5=="meaw")

// Q24 More Conditional Tests: You donâ€™t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// â€¢ Tests for equality and inequality with strings

// â€¢ Tests using the lower case function

// â€¢ Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// â€¢ Tests using "and" and "or" operators

// â€¢ Test whether an item is in a array

// â€¢ Test whether an item is not in a array

console.log("check","2"===2) //equality and inequality test
const a="hello";

console.log(a===a.toLocaleLowerCase(), ) 





















































};
javscript()
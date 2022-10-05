// @ts-nocheck
const javscript = () => {
  //Q1   Install Node.js and VS Code on your computer.
  // Completed

  //Q2
  var person = "Hello Eric, would you like to learn some Python today?";
  console.log(person);

  //Q3
  // * LowerCase
  let texts = "Hello World!";
  let results = texts.toLowerCase();
  console.log(results);
  // * UpperCase
  let text = "Hello World!";
  let result = text.toUpperCase();
  console.log(result);
  // * TitleCase
  var string =
    "I'm student of karachi university. my favourt subject Programing ";
  var n = string.split(".");
  var vfinal = "";
  for (i = 0; i < n.length; i++) {
    var spaceput = "";
    var spaceCount = n[i].replace(/^(\s*).*$/, "$1").length;
    n[i] = n[i].replace(/^\s+/, "");
    var newstring = n[i].charAt(n[i]).toUpperCase() + n[i].slice(1);
    for (j = 0; j < spaceCount; j++) spaceput = spaceput + " ";
    vfinal = vfinal + spaceput + newstring + ".";
  }
  vfinal = vfinal.substring(0, vfinal.length - 1);
  console.log(vfinal);

  //Q4
  var quote =
    "Albert Einstein once said, â€œA person who never made a mistake never tried anything new.â€";
  console.log(quote);

  // Q5
  var famous_person = "Albert Einstein ";
  var famous_quotes =
    "once said, â€œA person who never made a mistake never tried anything new.â€";
  console.log(famous_person + famous_quotes); //Q10: this programme add 2 variables and return concatinated value

  //Q6

  var name = " \tJames Bond\n ";
  console.log(name.trim()); //Q10: this programme removes speace from string and return trimmed value

  // Q7
  console.log(5 + 3);
  console.log(12 - 4);
  console.log(4 * 2);
  console.log(16 / 2);

  //Q8 You should create four lines that look like this:

  console.log("===================================================");
  console.log(5 + 3);
  console.log("===================================================");
  //Q9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
  var favNum = 8;
  console.log("my favourite number is", favNum);

  //Q10 Adding Comments: Choose two of the programs youâ€™ve written, and add at least one comment to each. If you donâ€™t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
  // ANSWER 6 ND 5

  //Q11

  const nnnn = ["muhammad", "ahsan", "muneer"];
  console.log(nnnn[0]);
  console.log(nnnn[1]);
  console.log(nnnn[2]);

  var arrFriends = ["muhammad", "ahsan", "muneer"];
  arrFriends.forEach((name) => {
    console.log(name);
  });

  //Q12
  var arrfriendStatements = ["muhammad", "ahsan", "muneer"];
  arrfriendStatements.forEach((nameState) => {
    console.log("helow my friend", nameState);
  });

  // Q13

  var arrTransports = [
    "I love to ride Honda Civic",
    "My favourite bike is CG 125",
    "I often go seaways on SQUALO boat",
  ];
  arrTransports.forEach((transport) => {
    console.log(transport);
  });

  // Q 14
  var arrPeople = ["muhammad", "ahsan", "muneer"];
  arrPeople.forEach((guests) => {
    console.log(
      "I would like to invite you over dinner in my home, I will be delighted if you came over today. Seea yea!",
      guests
    );
  });

  // Q 15
  var arrGuests = ["muhammad", "ahsan", "muneer"];
  arrGuests[2] = "text";
  arrGuests.forEach((guests) => {
    console.log(
      "I would like to invite you over dinner in my home, I will be delighted if you came over today. Seea yea!",
      guests
    );
  });
  // Q16

  var arrGuestsAdded = ["muhammad", "ahsan", "muneer"];
  arrGuestsAdded.unshift("muhammad");
  arrGuestsAdded[2] = "ahsan";
  arrGuestsAdded.push("ahmed");

  arrGuestsAdded.forEach((guests) => {
    console.log(
      "I would like to invite you over dinner in my home, I will be delighted if you came over today. Seea yea!",
      guests
    );
  });

  // Q17
  for (let i = arrGuestsAdded.length - 1; i >= 2; i--) {
    poppedPerson = arrGuestsAdded.pop();
    console.log(
      "I am sorry, you are not invited today due to some reason",
      poppedPerson
    );
  }

  console.log(arrGuestsAdded);
  arrGuestsAdded.forEach((guests) => {
    console.log("You are still invited over dinner, dont worry! hehe", guests);
  });

  //Q18
  var original = ["pakistan", "south africa", "dubai", "england", "california"];

  //  Print your array in its original order.
  console.log(original);
  //  Print your array in alphabetical order without modifying the actual list.
  console.log([...original].sort());
  //  Show that your array is still in its original order by printing it.
  console.log(original);
  //  Print your array in reverse alphabetical order without changing the order of the original list.
  console.log([...original].sort().reverse());
  //  Show that your array is still in its original order by printing it again.
  console.log(original);
  //  Reverse the order of your list. Print the array to show that its order has changed.
  console.log(original.reverse());
  //  Reverse the order of your list again. Print the list to show itâ€™s back to its original order.
  console.log(original.reverse());
  //  Sort your array so itâ€™s stored in alphabetical order. Print the array to show that its order has been changed.
  console.log(original.sort());
  //  Sort to change your array so itâ€™s stored in reverse alphabetical order. Print the list to show that its order has changed.
  console.log(original.sort().reverse());

  //Q19
  console.log(arrPeople.length);

  //Q20

  var x = [];
  function myFunction(a) {
    x.push(a);

    console.log(x);
  }
  myFunction("abcd");

  //Q21

  const car = { type: "Fiat", model: "500", color: "white" };

  console.log(car);

  //Q22
  var y = [4, 3, 2, 1];
  console.log(y[6]);

  //Q23
  const cat = "meaw";

  console.log(cat == "meaw");

  const test = "abc";

  console.log(test == "abc");

  const test1 = "abc";

  console.log(test1 == "abc");

  const test2 = "abc";

  console.log(test2 == "abc");

  const test3 = "abc";

  console.log(test3 == "abc");

  const test4 = "abc";

  console.log(test4 == "abc");

  const cat1 = "meaw";

  console.log(!cat1 == "meaw");

  const cat2 = "meaw";

  // @ts-ignore
  console.log(!cat2 == "meaw");

  const cat3 = "meaw";

  console.log(!cat3 == "meaw");

  const cat4 = "meaw";

  console.log(!cat4 == "meaw");

  const cat5 = "meaw";

  console.log(!cat5 == "meaw");

  // Q24

  const a = "Hello";
  const b = "ahsan";
  console.log("check", "2" === 2); //equality and inequality test
  console.log(a == a.toLowerCase());
  console.log(b == "Hello" ? "true" : "false");
  console.log(b.length >= a.length);

  let res = Array.isArray(b);
  console.log("a is Array", res);

  // 25.

  let alien_color = "red";

  console.log(alien_color == "red" && "OK");

  alien_color = "blue";

  console.log(alien_color == "blue" && "OK");

  // 26.

  let alien = "red";
  console.log(alien == "red" ? true : false);

  alien = "blue";
  console.log(alien == "blue" ? true : false);

  // 27.

  let a1 = "hydrabad";
  if (a1 == "asassa") {
    console.log("if");
  } else if (a1 == "hydrabad") {
    console.log("else if");
  } else {
    console.log("else");
  }

  a1 = "karachi";
  if (a1 == "karachi") {
    console.log("if");
  } else if (a1 == "lahore") {
    console.log("else if");
  } else {
    console.log("else");
  }

  let newVar = "islamabad";
  a1 = newVar;

  if (a1 == "islamabad") {
    console.log(" if");
  } else if (newVar == "karachi") {
    console.log("else if");
  } else {
    console.log("else");
  }

  // 28.

  let age = 25;
  if (age <= 2) {
    console.log("baby");
  } else if (age >= 2 && age <= 4) {
    console.log("toddler");
  } else if (age >= 4 && age <= 10) {
    console.log("kid");
  } else if (age >= 10 && age <= 24) {
    console.log("teenager");
  } else if (age >= 24 && age <= 75) {
    console.log("adult");
  } else {
    console.log("expire XD");
  }

  // 29.

  let fruits = ["kinno", "saib", "Keela"];
  for (let i = 0; i < fruits.length; i++) {
    if ("Keela" == fruits[i]) {
      console.log("Keela");
    } else if ("saib" == fruits[i]) {
      console.log("saib!");
    } else if ("kinno" == fruits[i]) {
      console.log("kinno!");
    }
  }

  // 30.

  let namesArray = [
    "Admin",
    "Ahsan",
    "Roshaan",
    "Shameel",
    "Talha",
    "Safana",
    "Aiman",
  ];
  for (let i = 0; i < namesArray.length; i++) {
    if (namesArray[i] == "Admin") console.log(`Hello  ${namesArray[i]}`);
    else if (namesArray[i] !== "Ahsan")
      console.log(`Hello  ${namesArray[i]} , logging in again`);
  }

  // 31.

  var newArray = [];
  if (newArray.length !== 0) {
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] == "Admin") console.log(`Hello  ${newArray[i]}`);
      else if (newArray[i] !== "Admin")
        console.log(`Hello  ${newArray[i]} , logging in again`);
    }
  } else {
    console.log("We need to find some users!");
  }

  // 32.

  namesArray.map((item) => item.toLowerCase());
  namesArray.map((item) => item.toLowerCase());

  for (let j = 0; j < namesArray.length; j++) {
    for (let i = 0; i < namesArray.length; i++) {
      if (namesArray[i] == namesArray[j]) {
        console.log("NAME", namesArray[i]);
      }
    }
  }

  // 33.

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) console.log("1st");
    else if (numbers[i] == 2) console.log("2nd");
    else if (numbers[i] == 3) console.log("3rd");
    else if (numbers[i] == 4) console.log("4th");
    else if (numbers[i] == 5) console.log("5th");
    else if (numbers[i] == 6) console.log("6th");
    else if (numbers[i] == 7) console.log("7th");
    else if (numbers[i] == 8) console.log("8th");
    else if (numbers[i] == 9) console.log("9th");
  }
};

// 35.

var animalsList = ["Loin", "Horse", "Cheeta"];
let i;
for (i = 0; i < animalsList.length; i++) {
  if (animalsList[i] == "Loin") {
    console.log(animalsList[i]);
  } else if (animalsList[i] == "Horse") {
    console.log(animalsList[i]);
  } else {
    console.log("Sorry");
  }

  // 36.

  function make_shirt(s, m) {
    console.log(
      `TShirt is ${s}, message that should be printed on the shirt ${m}`
    );
  }
  make_shirt("sm", " Here we go again");

  // 37.

  function make_shirt1(s, m) {
    console.log(
      `TShirt is ${s}, message that should be printed on the shirt ${m}`
    );
  }
  make_shirt1("sm", " I love JavaScript");
  make_shirt1("md", " I love JavaScript");
  make_shirt1("lg", " I love JavaScript");

  // 38.

  function describe_city(city, country) {
    console.log(`${city} is in ${country}`);
  }
  describe_city("London", "UK");
  describe_city("Karachi", "Pakistan");
  describe_city("Dehli", "india");

  // 39.

  function city_country(city, country) {
    return `${city} , ${country}`;
  }
  let lin = city_country("London", "UK");
  console.log(lin);

  // 40

  function make_album(n, tit, tra) {
    if (tra == null) {
      let object;
      object = {
        name: n,
        title: tit,
      };
      return object;
    }
    object = {
      name: n,
      title: tit,
      no: tra,
    };
    return object;
  }
  let first = make_album("abc", "xyz");
  let second = make_album("asd ", "asd", 2);
  let third = make_album("asd", "ahsan", 1);
  console.log(first);
  console.log(second);
  console.log(third);

  // 41.

  function show_magicians(name) {
    console.log(name);
  }
  let arr1 = ["a", "b", "c", "d", "e"];
  for (let i = 0; i < arr1.length; i++) {
    show_magicians(arr1[i]);
  }

  // 42.

  function show_magicians_agian(name) {
    console.log(name);
  }
  function make_great(name) {
    show_magicians_agian("Alphabets " + name);
  }

  for (let i = 0; i < arr1.length; i++) {
    make_great(arr1[i]);
  }

  // 43.

  function make_great1(name) {
    console.log(name);
  }
  function make_great1(name) {
    show_magicians2("memebers " + name);
  }
  let arrayOfPMLN = ["Nawaz", "Shabaz", "Dar", "Maryam"];
  for (let i = 0; i < arrayOfPMLN.length; i++) {
    let newObj = arrayOfPMLN[i];
    make_great1(newObj);
  }
  for (let i = 0; i < arrayOfPMLN.length; i++) {
    let newObj = arrayOfPMLN[i];
    show_magicians2(newObj);
  }

  function show_magicians2(name) {
    console.log(name);
  }

  // 44.

  function sandwich(a) {
    console.log(a);
  }
  sandwich("a");
  sandwich("v");
  sandwich("c");

  // 45.

  function cars(m, n, c, f) {
    let obj = {
      assembler: m,
      year: n,
      color: c,
      accentuated: f,
    };
    return obj;
  }
  let car1_Object = cars("mehran", "2012", "red", "automatic");
  let car2_Object = cars("civic", "2013", "black", "new");

  console.log(car1_Object);
  console.log(car2_Object);
}

javscript();

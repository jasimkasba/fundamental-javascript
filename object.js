var student = {id: 121, phone: 0176, name:"abir"}; // object ar belay property value gola colon: por rakhte hoy.
var student2 = { id: 222, phone: 0178, name:"kabir"};

// object property access korte chaile tin vabe kora jai.

// var phoneNo = student.phone;
// 2nd way te kora jai...

var phoneNo = student["phone"];

//3rd way jababe kora jai
var phoneProName = "name" //je value jante take  noton akat variable nilam,
var name = student[phoneProName]; // tarpor ai variable arekta var a rakhlam,
console.log(name);

// object ar vitor property value change korte chaile jemon phone num change korte chai

student2.phone = 45322; // student 2 phone num change hoye jabe.
//2nd way te value change kora jai

student2["phone"] = 9999;

//mmmul kotha object jababe ber kore , sebabe value change kora jai.

// ## abr noton kicho add korte chaile
student2.cinema = "ogni2"
student2["cinema"] = "smart girl"


// console.log(phoneNo);
console.log(student2);
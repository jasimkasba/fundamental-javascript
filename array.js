var friendsAge = [20, 22, 23, 21, 24];
// array list dekhte chaile 
//console.log(friendsAge)
// array position zero theke count hoy jake index no bole .
//array position dekhte chaile just verName ar sathe [] add kore dile hoy.
console.log(friendsAge[0]);

// array position ke abar variable o rakha jai 
// akhane akta var nibo = tarpor array var name sathe position num ta add kore dibo
var abidAge = friendsAge[0];
console.log(abidAge);

//array kono position ar data change korte chaile 
friendsAge[2] = 21; // varName ar sathe arry position ta add kore dile hobe. arpor = value or  maan dive.
console.log(friendsAge);

// array kono element ar position jante chaile indexof key word use korte hoy .
// kon maan ar position jante chai ta array varName ar sathe .indexof() add korte hoy
// akhane amara 24 ar posion jante chai , chaile amara atake o akta variable a rakhte pari .
// array te nai but amar ajodi jante chai tahole result asbe -1.
// like array te 25 nai akhon jodi 25 ar position jante chai tahole result -1 asbe.

var position = friendsAge.indexOf(25);
console.log(position);

// array jodi noton kno element jog korte chai tahole .push use korte hobe.
// .push korte sadanoto array last element hisabe add hoy.

friendsAge.push( 27);
console.log(friendsAge);

// array length jante hole .length  use korte hoy
console.log(friendsAge.length);

// array thake kono element delete korte chaile .pop korte horte hobe.
// pop korle seser element ta delete hoy, tai akhatre .pop ar () kicho declare korte hoy na.
friendsAge.pop();
console.log(friendsAge);

var friendsName = ["kalam", "salam", "balam", "kamal"];
console.log(friendsName);

// akhon jodi noton akta nam add korte chai tahole push kore debo,
friendsName.push("tamal");
console.log(friendsName);

// akhon jodi amara noto array prothome  add korte chai tahole .unshift use korte hobe

friendsName.unshift("jasim");
console.log(friendsName);

// ar jodi 1st thake badh dite chai tahole .shift use korte hobe.

friendsName.shift(); // () kicho declare korte hoy na coz shift mane prothom ta delete hobe.
console.log(friendsName);
console.log(friendsName.length);

// kono aray thake kono ongso or part nite chile .slice korte hoy
// suppoose friends name array thake 2jon nite chai tahole hobe
var part = friendsName.slice(1, 3); // akhane 3-1=2 mane 2jon oupput pwajabe
console.log(part);
console.log(friendsName); // slice korle main or orginal array kono change hobe na.





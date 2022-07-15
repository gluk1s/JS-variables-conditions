// 1 uzduotis

let fName = "Lukas";
let lName = "Gražys";
let birthYear = 1890;
let currentYear = 2022;

console.log("Aš esu " + fName + " " + lName + ". Man yra " + (currentYear - birthYear) + " metai(ų).");

// 2 uzduotis

let x1 = Math.floor(Math.random() * 5);
console.log(x1);
let x2 = Math.floor(Math.random() * 5);

if (x1 > x2) {
    console.log((Math.round(x1 / x2) * 100) / 100);
} else {
    console.log((Math.round(x2 / x1 * 100) / 100));
}

// 3 uzduotis

let y1 = Math.floor(Math.random() * 26);
let y2 = Math.floor(Math.random() * 26);
let y3 = Math.floor(Math.random() * 26);

console.log(y1, y2, y3);

if ((y1 == y2) && (y2 == y3)) {
    console.log("Visi skaiciai vienodi " + y1);
}
else if ((y1 == y2) || (y1 == y3)){
    console.log("Vidurinio skaiciaus nera.");
}
else if (((y1 > y2) && (y1 < y3)) || ((y1 > y3) && (y1 < y2))){
    console.log(y1);
}
else if (((y2 > y1) && (y2 < y3)) || ((y2 > y3) && (y2 < y1))) {
    console.log(y2);
} else {
    console.log(y3);
}

// 4 uzduotis

let a = Math.ceil(Math.random() * 10);
let b = Math.ceil(Math.random() * 10);
let c = Math.ceil(Math.random() * 10);

console.log(a, b, c);

if (a + b > c && a + c > b & b + c > a) {
    console.log("Trikampis galimas");
} else {
    console.log("Trikampis negalimas.");
}

// 5 uzduotis

let z1 = Math.floor(Math.random() * 3);
let z2 = Math.floor(Math.random() * 3);
let z3 = Math.floor(Math.random() * 3);
let z4 = Math.floor(Math.random() * 3);

let count0 = 0;
let count1 = 0;
let count2 = 0;

console.log(z1, z2, z3, z4);


if (z1 == 0) {
    count0++;
}
else if (z1 == 1) {
    count1++;
} else {
    count2++;
}

if (z2 == 0) {
    count0++;
}
else if (z2 == 1) {
    count1++;
} else {
    count2++;
}

if (z3 == 0) {
    count0++;
}
else if (z3 == 1) {
    count1++;
} else {
    count2++;
}

if (z4 == 0) {
    count0++;
}
else if (z4 == 1) {
    count1++;
} else {
    count2++;
}

console.log("Nuliu: " + count0 + ";vienetu: " + count1 + "; dvejetu: " + count2);

// 6 uzduotis

let k1 = Math.floor(Math.random() * 21) - 10;
let k2 = Math.floor(Math.random() * 21) - 10;
let k3 = Math.floor(Math.random() * 21) - 10;
console.log(k1, k2, k3);

if (k1 < 0) {
    console.log("[" + k1 + "]");
}
else if (k1 == 0) {
    console.log("(" + k1 + ")");
} else {
    console.log("{" + k1 + "}");
}

if (k2 < 0) {
    console.log("[" + k2 + "]");
}
else if (k2 == 0) {
    console.log("(" + k2 + ")");
} else {
    console.log("{" + k2 + "}");
}

if (k3 < 0) {
    console.log("[" + k3 + "]");
}
else if (k3 == 0) {
    console.log("(" + k3 + ")");
} else {
    console.log("{" + k3 + "}");
}

// 7 uzduotis

let candleCount = Math.floor(Math.random() * 2996) + 5;

if (candleCount >= 2000) {
    let sum = Math.round(candleCount * 0.96 * 100) / 100;
    console.log("Perkamas zvakiu kiekis: " + candleCount);
    console.log("Vienos zvakes kaina: " + (1 * 0.96) + " Eur.");
    console.log("Bendra suma: " + sum + " Eur");
}
else if (candleCount >= 1000) {
    let sum = Math.round(candleCount * 0.96 * 100) / 100;
    console.log("Perkamas zvakiu kiekis: " + candleCount);
    console.log("Vienos zvakes kaina: " + (1 * 0.97) + " Eur.");
    console.log("Bendra suma: " + sum + " Eur");
}
else {
    console.log("Perkamas zvakiu kiekis: " + candleCount);
    console.log("Vienos zvakes kaina: " + 1 + " Eur.");
    console.log("Bendra suma: " + candleCount + " Eur");
}

// 8 uzduotis

let m1 = Math.floor(Math.random() * 101);
let m2 = Math.floor(Math.random() * 101);
let m3 = Math.floor(Math.random() * 101);

console.log(m1, m2, m3);

let ave1 = Math.round((m1 + m2 + m3) / 3);
console.log(ave1);

let sum2 = 0;
let numCount = 0;

if (m1 >= 10 && m1 <= 90) {
    sum2 += m1;
    numCount++;
}

if (m2 >= 10 && m2 <= 90) {
    sum2 += m2;
    numCount++;
}

if (m3 >= 10 && m3 <= 90) {
    sum2 += m3;
    numCount++;
}

if (numCount == 0) {
    console.log("Skaiciai visi <10 arba >90");
}
else {
    let ave2 = Math.round(sum2 / numCount);
    console.log(ave2);
}

// 9 uzduotis

let hours = Math.floor(Math.random() * 23);
let minutes = Math.floor(Math.random() * 60);
let seconds = Math.floor(Math.random() * 60);

console.log(hours + ":" + minutes + ":" + seconds);

let inc = Math.floor(Math.random() * 301);

console.log("Pridejimas: " + inc);

let secNew = (seconds + inc) % 60;
let minInc = Math.floor((seconds + inc) / 60);

let minNew = (minutes + minInc) % 60;
let hoursInc = Math.floor((minutes + minInc) / 60);


hoursNew = (hours + hoursInc) % 24;

console.log(hoursNew + ":" + minNew + ":" + secNew);

// 10 uzduotis

let l1 = Math.floor(Math.random() * 9000) + 1000;
let l2 = Math.floor(Math.random() * 9000) + 1000;
let l3 = Math.floor(Math.random() * 9000) + 1000;
let l4 = Math.floor(Math.random() * 9000) + 1000;
let l5 = Math.floor(Math.random() * 9000) + 1000;
let l6 = Math.floor(Math.random() * 9000) + 1000;

let h1 = 0;
let h2 = 0;
let h3 = 0;
let h4 = 0;
let h5 = 0;
let h6 = 0;

// First highest
let currentHighest = l1;

if (l2 > currentHighest) {
    currentHighest = l2;
}
if (l3 > currentHighest) {
    currentHighest = l3;
}
if (l4 > currentHighest) {
    currentHighest = l4;
}
if (l5 > currentHighest) {
    currentHighest = l5;
}
if (l6 > currentHighest) {
    currentHighest = l6;
}

h1 = currentHighest;

// Second highest
currentHighest = 0;

if (l1 > currentHighest && l1 < h1) {
    currentHighest = l1;
}
if (l2 > currentHighest && l2 < h1) {
    currentHighest = l2;
}
if (l3 > currentHighest && l3 < h1) {
    currentHighest = l3;
}
if (l4 > currentHighest && l4 < h1) {
    currentHighest = l4;
}
if (l5 > currentHighest && l5 < h1) {
    currentHighest = l5;
}
if (l6 > currentHighest && l6 < h1) {
    currentHighest = l6;
}

h2 = currentHighest;

// Third highest
currentHighest = 0;

if (l1 > currentHighest && l1 < h2) {
    currentHighest = l1;
}
if (l2 > currentHighest && l2 < h2) {
    currentHighest = l2;
}
if (l3 > currentHighest && l3 < h2) {
    currentHighest = l3;
}
if (l4 > currentHighest && l4 < h2) {
    currentHighest = l4;
}
if (l5 > currentHighest && l5 < h2) {
    currentHighest = l5;
}
if (l6 > currentHighest && l6 < h2) {
    currentHighest = l6;
}

h3 = currentHighest;

// Fourth highest
currentHighest = 0;

if (l1 > currentHighest && l1 < h3) {
    currentHighest = l1;
}
if (l2 > currentHighest && l2 < h3) {
    currentHighest = l2;
}
if (l3 > currentHighest && l3 < h3) {
    currentHighest = l3;
}
if (l4 > currentHighest && l4 < h3) {
    currentHighest = l4;
}
if (l5 > currentHighest && l5 < h3) {
    currentHighest = l5;
}
if (l6 > currentHighest && l6 < h3) {
    currentHighest = l6;
}

h4 = currentHighest;

// Fifth highest
currentHighest = 0;

if (l1 > currentHighest && l1 < h4) {
    currentHighest = l1;
}
if (l2 > currentHighest && l2 < h4) {
    currentHighest = l2;
}
if (l3 > currentHighest && l3 < h4) {
    currentHighest = l3;
}
if (l4 > currentHighest && l4 < h4) {
    currentHighest = l4;
}
if (l5 > currentHighest && l5 < h4) {
    currentHighest = l5;
}
if (l6 > currentHighest && l6 < h4) {
    currentHighest = l6;
}

h5 = currentHighest;

// Second highest
currentHighest = 0;

if (l1 > currentHighest && l1 < h5) {
    currentHighest = l1;
}
if (l2 > currentHighest && l2 < h5) {
    currentHighest = l2;
}
if (l3 > currentHighest && l3 < h5) {
    currentHighest = l3;
}
if (l4 > currentHighest && l4 < h5) {
    currentHighest = l4;
}
if (l5 > currentHighest && l5 < h5) {
    currentHighest = l5;
}
if (l6 > currentHighest && l6 < h5) {
    currentHighest = l6;
}

h6 = currentHighest;

console.log(l1, l2, l3, l4, l5, l6);
console.log(h1, h2, h3, h4, h5, h6);
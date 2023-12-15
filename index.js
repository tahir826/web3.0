"use strict";
var day = 4;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Weakend");
        break;
    default:
        console.log("Sunday");
        break;
}
var day = 5;
if (day == 1) {
    console.log("Monday");
}
else if (day == 2) {
    console.log("Tuesday");
}
else if (day == 3) {
    console.log("Wednesday");
}
else if (day == 4) {
    console.log("Thursday");
}
else if (day == 5) {
    console.log("Friday");
}
else if (day == 6) {
    console.log("Weakend");
}
else if (day == 7) {
    console.log("Sunday");
}
var accountNumber = 8866;
var pin = 1234;
var balance = 5000;
if (accountNumber == 8866) {
    console.log("Account number is correct");
    if (pin == 1234) {
        console.log("your pin is correct");
    }
}
else {
    console.log("Your account number or pin is incorrect");
}
if (balance >= 500) {
    console.log("Your balance is eligible for withdraw ");
}
else {
    console.log("Your balance is insufficient");
}
var time = 10;
if (time >= 5 && time < 12) {
    console.log("Good Morning");
}
else if (time >= 12 && time < 17) {
    console.log("Good afternoon");
}
else if (time >= 17 && time < 21) {
    console.log("Good evening");
}
else {
    console.log("Good night");
}
function greetings(timeOnClock) {
    let greet = '';
    switch (true) {
        case (timeOnClock >= 6 && timeOnClock <= 11):
            greet = 'Good Morning!';
            break;
        case (timeOnClock >= 12 && timeOnClock <= 17):
            greet = 'Good Afternoon!';
            break;
        case (timeOnClock >= 18 && timeOnClock <= 20):
            greet = 'Good Evening!';
            break;
        case (timeOnClock >= 21 && timeOnClock <= 23):
        case (timeOnClock >= 0 && timeOnClock <= 5):
            greet = 'Good Night!';
            break;
        default:
            greet = 'Invalid Time!. Please enter time between 0 - 23';
            break;
    }
    return greet;
}
let timeOnClock = 10; // use time 24 hours (0 - 23):
console.log(greetings(timeOnClock));
var classsNumber = 12;
if (classsNumber == 0) {
    console.log("You are in Playgroup");
}
else if (classsNumber == 1) {
    console.log("You are in class one");
}
else if (classsNumber == 2) {
    console.log("You are in class two");
}
else if (classsNumber == 3) {
    console.log("You are in class three");
}
else if (classsNumber == 4) {
    console.log("You are in class four");
}
else if (classsNumber == 5) {
    console.log("You are in class five");
}
else if (classsNumber == 6) {
    console.log("You are in class six");
}
else if (classsNumber == 7) {
    console.log("You are in class 7");
}
else if (classsNumber == 8) {
    console.log("You are now in middle");
}
else if (classsNumber == 9) {
    console.log("You are in class 9");
}
else if (classsNumber == 10) {
    console.log("You are in Matric");
}
else if (classsNumber == 11) {
    console.log("You are in pre intermediate");
}
else if (classsNumber == 12) {
    console.log("You are in intermediate");
}
else if (classsNumber == 13) {
    console.log("You are doing graduation");
}
else if (classsNumber == 14) {
    console.log("You are doing graduation");
}
else if (classsNumber == 15) {
    console.log("You are doing graduation");
}
else if (classsNumber == 16) {
    console.log("You are doing graduation");
}
else if (classsNumber == 17) {
    console.log("You are doing Master");
}
else if (classsNumber == 18) {
    console.log("You are doing Master");
}
else if (classsNumber == 19) {
    console.log("You are doing M.PHYL");
}
else if (classsNumber == 20) {
    console.log("You are doing M.PHYL");
}
else if (classsNumber == 21) {
    console.log("You are doing P.HD");
}
else if (classsNumber == 22) {
    console.log("You are doing P.HD");
}
else if (classsNumber == 23) {
    console.log("You are doing P.HD");
}
else if (classsNumber == 24) {
    console.log("You are doing P.HD");
}
var num1 = 44;
var num2 = 23;
var num3 = 20;
var num4 = 10;
var num5 = 56;
if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
    console.log(`${num1} is Smallest number`);
}
else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
    console.log(`${num2} is smallest`);
}
else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) {
    console.log(`${num3} is smallest number`);
}
else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5) {
    console.log(`${num4} is smallest number`);
}
else if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4) {
    console.log(`${num5} is smallest number`);
}
var num1 = 44;
var num2 = 23;
var num3 = 20;
var num4 = 10;
var num5 = 56;
if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    console.log(`${num1} is largest number`);
}
else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    console.log(`${num2} is largest`);
}
else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    console.log(`${num3} is largest number`);
}
else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    console.log(`${num4} is largest number`);
}
else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4) {
    console.log(`${num5} is largest number`);
}

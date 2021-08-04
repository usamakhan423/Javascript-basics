//-----Javascript fundamentals---------//

//--If else statement--//
/*
var ageOfAli = 61;
var ageOfAhmed = 50;

if (ageOfAli > ageOfAhmed) {
    console.log('Ali is older..');
} else {
    console.log('Ahmed is older..');
}
*/

//--Another If else statement--//
/*
var age = 45;

if (age < 20) {
    console.log('This is too young.')
} else if ( age >= 20 && age <= 30 ) {
    console.log('The given value of the person is teenager.');
} 
else if ( age > 30 && age <= 40 ) {
    console.log('The given value of the person is younger.');
}
else if( age > 40 && age <= 50 ) {
    console.log('The given value of the person is older.');
} else {
    console.log('He is not able for the apply.')
}
*/

//--If else statement end here--//

//--Program using if else statement--//
/*
var rollNo = 23;

if ( rollNo > 1 && rollNo <= 10) {

    console.log('He is in the top 10 students one of them.');
}
else if ( rollNo >= 11 && rollNo <=20) {

    console.log('He is in the top 20 student one of them.');
} else if ( rollNo >= 21 && rollNo <=30) {

    console.log('He is in the top 30 student one of them.');
} else {

    console.log('He is in the top 40 student one of them.')
}
*/
//--Switch statement in Javascript--//
/*
var month = 'september';

month = prompt('What is your birth month..?');

switch (month) {

    case 'jan':
        console.log('This month consist of 28 days.');
        break;

    case 'february':
        console.log('This month consist of 29 days.');
        break;

    case 'march':
        console.log('This month consist of 30 days.');
        break;

    case 'april':
        console.log('This month consist of 29 days.');
        break;

    case 'may':
        console.log('This month consist of 30 days.');
        break;

    case 'june':
        console.log('This month consist of 29 days.');
        break;

    case 'july':
        console.log('This month consist of 31 days.');
        break;

    case 'augaust':
        console.log('This month consist of 30 days.');
        break;

    case 'september':
        console.log('This month consist of 28 days.');
        break;

    case 'october':
        console.log('This month is consist of 29 days.');
        break;

    case 'november':
        console.log('This month is consist of 31 days.');
        break;

    case 'december':
        console.log('This month consist of 31 days.');
        break;

    default:
        console.log('Invalid month')
}
*/
//---Coding challenge first----//

/*
var heightOfAli = 120;
var heightOfAhmed = 132;

var ageOfAli = 23;
var ageOfAhmed = 27;

scoreAli = (heightOfAli + 5 * ageOfAli);
scoreAhmed = (heightOfAhmed + 5 * ageOfAhmed);





var heightOfJameel = 180;
var ageOfJameel = 30;

var scoreOfJameel = (heightOfJameel + 5 * ageOfJameel);



if (scoreAli > scoreAhmed && scoreAli > scoreOfJameel) {
    console.log('Ali is winner with a score of ' + scoreAli);
} else if (scoreAhmed > scoreAli && scoreAhmed > scoreOfJameel) {
    console.log('Ahmed is winner with a score of ' + scoreAhmed);
} else if (scoreOfJameel > scoreAhmed && scoreOfJameel > scoreAli) {
    console.log('Jameel is winner with a score of ' + scoreOfJameel);
} else if (scoreAli === scoreAhmed === scoreOfJameel) {
    console.log('It\'s draw.');
}
*/

//--Coding challenge is well solved---appreciated--Good work USAMA KHAN--//


//--Functions in javascript--//

/*
function age() {
    document.write('Hello, Everybody');
}

age();
document.write('<br>');
age();
age();
age();

function rollNo() {

    document.write('2094');
}

rollNo();

//--Calculate product of two numbers--//

let product = myFunction(4, 3);

function myFunction(a, b) {

    return a * b;


}
console.log(product);
//----------------------//

//--Create a function which converts fahrenheit to celcius--//

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

var result = toCelsius(798);
console.log('The result is ' + result);

//--Funtion to find sqare of a number--//

function square(number) {

    return number * number;

}

var x = square(4);

console.log(x);
//---------------//

//Using funtion to find square without declaring variable--//

let reSult = myVariable(54);

function myVariable(a) {

    return a * a;
}
console.log(reSult);
//-----------------//

//--To calculate age of a person Using function----//
//--Also more than one person----//

function calculateAge(yearOfBirth) {

    var age = (2021 - yearOfBirth);

    return age;
}
var ageOfUsama = calculateAge(1998);
var ageOfYaqub = calculateAge(1996);




function yearsUntilRetirement(name, year) {

    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(retirement);
}
yearsUntilRetirement('Usama', 1996);
//-------------------------------------//

//--practice program to find age of a person---//
//--Also remaining years in retirement--//

function findAge(birthYear) {

    var result = (2021 - birthYear);

    return result;
}

var ageUsama = findAge(1970);
var ageYaseen = findAge(1960);
var ageGhaffar = findAge(1940);
console.log('Age of Usama = ' + ageUsama);


function yearsOfRetirement(names, years) {

    var result = findAge(years);
    var retirements = 65 - result;

    if (retirements >= 0) {
        console.log(names + 'Age remaining in retirements = '
            + retirements);
    } else {
        console.log(names + 'is already retired');
    }


}
yearsOfRetirement('Usama ', 1970);
yearsOfRetirement('yaseen ', 1960);
yearsOfRetirement('Ghaffar ', 1940);
    //----------------------------------//

//--Program using function to find percentage of a person--//
//--Also passed and fail--//

function percentage(name, marks) {

     
    var totalMarks = math + eng + cs + phy + chem;

    var perc = (totalMarks * 100) / 250;
    console.log(totalMarks);
    console.log(perc);

    if ( perc >= 60 && perc <=70) {

        console.log('He got C grade.');
    } else if ( perc >= 71 && perc <=80) {

        console.log('He got D grade. ');
    } else if ( perc >= 81 && perc <=90) {

        console.log('He got A grade.')

    } else if ( perc >= 91 && perc <= 100) {

        console.log('He got A1 grade. ');
    } else {

        console.log('He is considered to be failed.');
    }


}

var math = percentage('Maths', 38);
var eng = percentage('eng', 30);
var cs = percentage('cs', 45);
var phy = percentage('phy', 35);
var chem = percentage('chem', 42);
*/
//--------------------------------------//

//--Arrays in javascript--//
/*
var names = ['Usama', 'Yaseen', 'Muzamil'];
var yearOfBirth = new Array(1998, 1996, 2009);

console.log(yearOfBirth[2]);
//-------------------------------//

//--Push, Pop, & Unshift operation in Array--//

var mixture = ['Usama', 1998, true, 'Batkhela'];
console.log(mixture);

mixture.push('hello');
console.log(mixture);

mixture.unshift(95);
console.log(mixture);

mixture.pop();
console.log(mixture);

mixture.pop();
console.log(mixture);
//----------------------//
*/
//--Simple program to find out Rollno using Array--//

var rollNo = ['901', '902', 'ahmed', '904', '905'];

if (rollNo.indexOf('908') === -1) {
    console.log('Not found!');
}
//------------------------------//
/*
//--Create array using objects--//

var container = {

    name : 'Usama',
    lastName : 'Khan',
    rollNo : 901,
    department : 'Computer Science',
    address : 'Batkhela Malakand',
    jobTitle : 'Student'
}

console.log(container.address);
console.log(container['rollNo']);

//---Creating new variable to store data of the given data--// 
//--in the upper array--//
var test = 'department';
console.log(container[test]);
//--------------------------------//

//--To insert a new value to old Array--//

container.jobTitle = 'teacher';
container.lastName = 'Ghaffar';
container.address = 'Khyber pukhtoon khwa';
console.log(container);
//------------------//

//--Array methods Using array--//

var test = {

    name : 'Yaseen',
    lastName : 'Ghaffar',
    rollNo : 23,
    yearsOfBirth : 1940,
    family : ['Ali', 'Ahmed', 'Ania'],
    calculateAge : function() {

        return 2016 - this.yearsOfBirth;

    }
}

//console.log(test.calculateAge(1970));
console.log(test.calculateAge());
console.log(test);
//----------------------------------//
*/
//--Lecture------Loops in Javascript--//
/*
for (var i = 0; i < 10; i++) {

    console.log();
}

for (var i = 9; i >= 0; i--) {

    console.log(i);
}

//-- Taking loop in array--//

var names = ['Bilal', 'Syed', 'Ali', 'Ahmed', 'Zeeshan',
'Yaqub', 'Usama', 'Anwar', 'Sikandar', 'Baseer'];
//--for loop in javascript--//\
/*
for ( var i = 0; i < 10; i++ ) {

    console.log(names[i]);
}
*/
/*
var id = ['Bilal', 'Syed', 'Ali', 'Ahmed', 'Zeeshan',
'Yaqub', 'Usama', 'Anwar', 'Sikandar', 'Baseer']

for ( var i = 9; i >=0; i--) {

    console.log(id[i])
}
*/

      // Coding challenge 2  //
//------------------------------------//
/*
function printFullAges(yearsOfPersons) {

    var ages = [];
    var fullAges = [];
    for (var i = 0; i < yearsOfPersons.length; i++) {

        ages[i] = 2021 - yearsOfPersons[i];
        console.log(ages)
    }


    for (i = 0; i < ages.length; i++) {

        if (ages[i] < 18) {

            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years ' +
                'old and of full age.')
            fullAges.push(true);
        } else {

            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years ' +
                'old and Not of full age.')
            fullAges.push(false);
        }

    }
    return fullAges;
}

var yearsOfPersons = [1990, 1960, 2008, 2004];
var full_1 = printFullAges(yearsOfPersons);
var full_2 = printFullAges(2007, 1923, 1998);
//----Challenge Completed----//

//---Practice project---//
// To find out percentege and their respective grades--//

var rollNo = [901, 902, 903, 904, 905];
var marks = [];

*/
//Creating game//
var dice;

dice = Math.floor(Math.random() * 6 + 1);
console.log(dice);





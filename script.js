// Lecture: Hoisting


// functions
CalculateAge(1965);

function CalculateAge(year)
{
    console.log(2016 - year);
}



// retirement(1956);

var retirement = function(year)
{
    console.log(65 - (2016 - year));
}


// variables


console.log(age);
var age = 23;

function foo()
{
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);


var a = "Hello!";
First();

function First()
{
    var b = "Hi!";
    Second();

    function Second()
    {
        var c = "Hey!";
        Third();
    }
}

function Third()
{
    var d = "John";
    // console.log(a + b + c + d);
    console.log(a + d);
}

// Lecture: the this keyword

//console.log(this);


var john =
{
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function()
    {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        /*
        function innerFunction()
        {
            console.log(this)
        }
        innerFunction();
        */
    }
}

john.calculateAge();


var mike = 
{
    name: "mike",
    yearOfBirth: 1984,
}

mike.calculateAge = john.calculateAge;

mike.calculateAge();












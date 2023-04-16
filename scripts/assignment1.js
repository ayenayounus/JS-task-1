//.................TASK 1.....................

var zakaat_percentage = 0.025 ;
var user_input = prompt(" enter amount to calculate zakaat: ");
var result = zakaat_percentage*user_input; 

console.log(result);

alert("Your zakaat is: "+ result);


//...............TASK 2.......................
// Calculate fitra..

var family_members= Number(prompt(" Enter the total number of family members"))
var fitra_form= prompt("Select form to pay fitra : wheat=250, oats=450, dates=2100, raisins=2800" )
 if(fitra_form == 'wheat'){
    alert( "Your fitra amount is: " + 250*family_members )
 }
 else if(fitra_form == 'oats'){
    alert( "Your fitra amount is: " + 450*family_members )
 } 
 else if(fitra_form == 'dates'){
   alert( "Your fitra amount is: " + 2100*family_members )
 
 }
else if(fitra_form == 'raisins'){
    alert( "Your fitra amount is: " + 2800*family_members )
 }
else{  
    alert( " Value entered is invalid")
}

//...................TASK 3........................

var secret_number = 113
var guess = prompt("Guess the secret number within range 100-120");
if (guess == secret_number) {
    alert("Congragulations! You guessed the right number");
}
else if ( guess > secret_number) {
    alert(" Your guess is high. Try again");
}
else if( guess < secret_number){
    alert("Your guess is low. Try again");
}
else{
    alert(" Invalid number" );
}

//..................TASK 4 ..................

var Name=prompt("Enter Your Name");
console.log( Name)

var Firstletter=Name.slice(0,1);
Firstletter=Firstletter.toUpperCase();

var Otherletters= Name.slice(1,Name.length)
 Otherletters=Otherletters.toLowerCase()

var Finalname=Firstletter + Otherletters

console.log(Finalname)

//....................TASK 5....................

var contact_numbers = []
var contact_names = []

var Contact = Number(prompt(" Enter your contact number here"))
var Name = prompt(" Enter your name  here")

contact_numbers.push( Contact)
contact_names.push(Name)

console.log(contact_numbers)
console.log(contact_names)

console.log("Contacts:");
for (var i = 0; i < contact_numbers.length; i++) {
  console.log(contact_numbers + " - " + contact_names);
}

//................TASK 7.......................


var nationality = prompt(" Enter your nationality")
var age = Number(prompt(" Enter your age "))
var gender = prompt(" Enter your gender")

if (nationality == 'pakistani') {
    if (gender == 'male' && age >= 18) {
        alert("You can vote")
    }

     else if (gender == 'female' && age >= 18) {
        var married = prompt(" Are you married ?")}
        if (married == 'yes') {
            alert(" You can vote")
        }
        else {
            alert("You cannot vote")
        }
    }
else {
    alert(" You cannot vote because you are not nationality holder")
}
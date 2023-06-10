// Assignment # 9-10
// USER INPUT & CONDITIONAL
// STATEMENT
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

//  var city = prompt('City Name ?')

//  if (city == 'Karachi'| city == 'karachi'|city =='KARACHI') {
//    alert("Welcome to city of lights")
//  }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// var  gender = prompt("Gender male or female?")

//   if (gender == 'female') {
//    alert(" Good Morning Ma’am.")
//  }
//  if (gender == 'male') {
//      alert(" Good Morning Sir.")
//    }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

// var Signal_color =( prompt( "Please enter any one colour of signal." ))
// var Message = Signal_color.toLowerCase(Signal_color)
// if (Message=="red") {alert(  " .....  .....  ..... Red .....  .....  ..... \n ********   Must Stop      ********   ");}
// else if (Message=="red") {alert(  " .....  .....  ..... Yellow .....  .....  ..... \n ********    Ready to move     ********   ");}
// else  if (Message=="red") {alert(  " .....  .....  ..... Green .....  .....  ..... \n ********   Move now     ********   ");}
//   document.write("    <table style='border:2px solid skyblue;'>");
//   document.write("        <tr>");
//   document.write("            <th>Signal color </th>");
//   document.write("            <th>Message</th>");

//   document.write("        </tr>");


//   document.write("        <tr>");
//   document.write("            <td>Red  </td>");
//   document.write("            <td> Must Stop</td>");

//   document.write("        </tr>");
//   document.write("        <tr>");
//   document.write("            <td> Yellow  </td>");
//   document.write("            <td>   Ready to move </td>");

//   document.write("        </tr>");
//   document.write("        <tr>");
//   document.write("            <td>Green </td>");
//   document.write("            <td> Move now</td>");

//   document.write("        </tr>");

//   document.write("    </table>");


// 4. Write a program to take inputcfrom user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// var fuel = prompt(" Remaining fuel in car (in litres) ",)
// if (fuel> 0.25) {alert("Please refill the fuel in your car")
     
// }



// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


// anwer
// document.write("<h1>OUTPUT RECORDS</h1>")
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// document.write("given condition for variable a is true" +"</br>");
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// document.write("b'alert dosen't displayed"+"</br>")
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// document.write("For c condition 2 and 4 are true "+"</br>")

//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }
// document.write("for totalCost The cost equals ,True & car is smaller than cat are displayed at alert"+"</br>")

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:


// answe
// document.write('  <TABLE BORDER="1px solid white" width="50%" cellspacing="0"');
// document.write('        cellpadding="10">');
// document.write('        <tr style="color: aliceblue; background-color:rgb(65, 143, 199);text-align:center;">');
// document.write('            <th>Percentage %</th>');
// document.write('            <th>Grade</th>');
// document.write('            <th>Remarks</th>');
// document.write('        </tr>');
// document.write('        <tr style="background-color: rgb(172, 212, 241);text-align:center;">');
// document.write('            <td>Greater than or equal to 80</td>');
// document.write('            <td>A-one</td>');
// document.write('            <td>Excellent</td>');
// document.write('        </tr>');
// document.write('        <tr style="background-color:rgb(210, 224, 235);text-align:center;">');
// document.write('            <td>Greater than or equal to 70</td>');
// document.write('            <td>A</td>');
// document.write('            <td>Good</td>');
// document.write('        </tr>');
// document.write('        <tr style="background-color: rgb(172, 212, 241);text-align:center;">');
// document.write('            <td>Greater than or equal to 60</td>');
// document.write('            <td>B</td>');
// document.write('            <td>You need to improve</td>');
// document.write('        </tr>');
// document.write('        <tr  style="background-color:rgb(210, 224, 235);text-align:center;" >');
// document.write('            <td>Less than 60</td>');
// document.write('            <td>FAil</td>');
// document.write('            <td>Sorry</td>');
// document.write('        </tr>');
// document.write('    </TABLE>');

// var marks_obtained_sub1 = prompt("Marks obtained in subject one out of 100")
// var obt1 = parseInt(marks_obtained_sub1)
// var marks_obtained_sub2 = prompt("Marks obtained in subject two out of 100")
// var obt2 = parseInt(marks_obtained_sub2)
// var marks_obtained_sub3 = prompt("Marks obtained in subject three out of 100")
// var obt3 = parseInt(marks_obtained_sub3)
// var total_num =  (obt1+obt2+obt3)
// var Percentage =(total_num /300)*100
// document.write("<h1>Marks Sheet</h1>")
// document.write("Total marks : " + 300+"</br>" )
// document.write("Marks obtained : " + total_num+"</br>"  )
// document.write("Percentage : " + Percentage+"%"+"</br>" )
// if (Percentage>=80) {
//      document.write("Grade : A-one"+"</br>" )
//      document.write("Remarks : Excellent"+"</br>" )
// }
// if (Percentage>=70) {
//      document.write("Grade : A"+"</br>" )
//      document.write("Remarks : Good"+"</br>" )
// }
// if (Percentage>=60) {
//      document.write("Grade : B"+"</br>" )
//      document.write("Remarks : You need to improve"+"</br>" )
// }
// if (Percentage<60) {
//      document.write("Grade : Fail"+"</br>" )
//      document.write("Remarks : Sorry"+"</br>" )
// }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// var secret = 6
// var num = prompt("enter the secret number")
// if (num ==secret) {alert("Bingo! Correct answer.")
     
// }
// var secret2 = 7
//  if (num==secret2) {alert("Close enough to the correct answer.")
     
// }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// var enter = prompt("Enter any number.")
// // var division = enter % ==
// var zero = 3
// if (enter  % 3 == 0) {alert
//      (enter + " is divisible by 3.")
     
// } 
// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// const number = prompt("Enter a number: ");


// if(number % 2 == 0) {
//    alert("The number is even.");
// }

// else {
//     alert("The number is odd.");
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temp = prompt("what's todays temprature")
// if (temp >=40 ) {alert("It is too hot outside.")
     
// };

// if (temp >= 30 ) {alert("The Weather today is Normal")
     
// };
// if (temp>= 20) {alert("Today’s Weather is cool.")
     
// };
// if (temp >= 10) {alert("OMG! Today’s weather is so Cool.")
     
// };
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

// var  num1 = prompt(" First number")
// var num2 = prompt(" Second number")
// var num1a = parseInt(num1)
// var num2a = parseInt(num2)
// var   Operation  = prompt(" Operation (+, -, *, /, %)")

// if (Operation == ("+")) {
//  var plus =   num1a  + num2a
//  alert (num1 + " + " + num2 +"=" + plus)
    
// }
// if (Operation == ("-")) {
//     var minus =   num1a  + num2a
//     alert (num1 + " - " + num2 +"=" + minus)
       
//    }
//    if (Operation == ("*")) {
//     var multiply =   num1a  * num2a
//     alert (num1 + " * " + num2 +"=" + multiply)
       
//    }
//    if (Operation == ("/")) {
//     var divide =   num1a  / num2a
//     alert (num1 + " / " + num2 +"=" + divide)
       
//    }
//    if (Operation == ("%")) {
//     var modulus =   num1a  % num2a
//     alert (num1 + " + " + num2 +"=" + modulus)
       
//    }

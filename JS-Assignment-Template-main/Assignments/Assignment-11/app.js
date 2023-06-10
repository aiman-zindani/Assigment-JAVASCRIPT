// STRING METHODS

// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.

// var firstname = prompt("First name")
// var lastname = prompt("last name")
// var message = ( "Hi " +firstname +" " + lastname +".")
// alert(message)


// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// var model = prompt("Enter your favourite mobile model")
// var length =  arr.length(model)
// alert (length)
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var country = "Pakistani"

// document.write(country.indexOf("n"))




    

// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser.

// var greeting = "Hello World"
// document.write(greeting.lastIndexOf("l"))



// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// var country = "Pakistani"
// var character = country.charAt(3)
// console.log(character)

// document.write(character)

// 6. Repeat Q1 using stringAi concat() method.

// var firstname = prompt("First name")
// var lastname = prompt("last name")
// var message = firstname.concat(" ", lastname)
// alert(message)


// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad"

// var city1 = (city.replace(/Hyder/, "Islam"))
// document.write(  "City :" +city + "<br/>")
// document.write(  "After replacment :"  +city1)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var message =  "Ali and Sami are best friends. They play cricket and football together.";
// var update =   document.write(message.replace(/and/g, "&"))


// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.


// var value =  "472"
// var value1 =  Number(value)

// document.write( "Value:" + value+"<br/>")
// document.write( "Type:" + typeof (value)+"<br/>")
// document.write(  "Value:"+ value1+"<br/>")
// document.write(  "Type:" +  typeof (value1)+ "<br/>")


// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.

// var word = prompt("Type a new word")
// var uppercase =     (word.toUpperCase() )
// document.write(  "User input : " + word+ "<br/>")
// document.write(  "Upper case: " +  uppercase+ "<br/>")


// 11. Write a program that takes user input. Convert and 
// show the input in title case.

// var word = prompt("Type a new word")
// var uppercase =     (word.charAt(0).toUpperCase() +word.slice(1).toLowerCase()) 
// document.write(  "User input : " + word+ "<br/>")
// document.write(  "Upper case: " +  uppercase+ "<br/>")



// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
// var string =    num.toString().replace(".", "");
// document.write(  "Number : " + num+ "<br/>")
// document.write(  "Result : " + string+ "<br/>")



// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var input = prompt("Please enter your name")
// var symbols = ["@", "." ,","," !"]
// for (let i = 0; i < symbols.length; i++) {
// if (userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")){ alert("Please enter a valid  user name")}

// else{ alert("Welcome"+input)}

    
// } 










// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:


// You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Welcome to ABC Bakery! What do you want to order?");
// var itemFound = false;

// for (var i = 0; i < A.length; i++) {
//   if (input.toLowerCase() === A[i].toLowerCase()) {
//     itemFound = true;
//     alert(input + " is available at index " + i + " in the list.");
   
//   }
// }

// if (!itemFound) {
//   alert("We are sorry! " + input + " is not available in the list.");
// }








// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
var a = [a-z]
document.write(a)

var password = prompt("Password \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must at least 6 characters long")

if (password == (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}) {
    
}

if (password.includes([a-z]) || password.includes(".") || password.includes(",") || password.includes("!")){ alert("Please enter a valid  user name")}






// +( "b. It should not start with a number"+"<br/>")+
// ("c. It must at least 6 characters long"+))


     
// <!-- <form> -->
// <input type="email" name="email" id="email" required>
// <input type="password" name="password" id="password" required>
// <!-- <input type="text" id="country_code" name="country_code" pattern="[a-z]{3}" title="Three letter country code" required> -->
// <!-- <input type="submit" value="Login"> -->
// <button onclick="loginUSer()">Login</button>
// <!-- </form> -->

// function loginUSer() {
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;


//     console.log(email,password)

        // <!-- <form onsubmit="username(event)">
    //     <select name="countrycode" id="countrycode"  required >
    //         <option selected disabled>please select a value</option>
    //         <option value="+92" >pakistan</option>
    //         <option value="+91">india</option>

    //     </select>
    //     <label for="companycode">label</label>
        
    //     <input type="text" name="countrycode" id="countrycode" required disabled value="+92"
    //         placeholder="enter your country code">
    //     <input type="text" name="companycode" id="companycode" pattern="[0-9]{3}" title="please type 3 digits" required
    //         placeholder="enter your company code">
    //     <input type="text" name="contact" id="contact" pattern="[0-9]{7}" title="please type 7 digits" required
    //         placeholder="enter your contact code">
    //     <input type="submit" value="login">

    // </form>
    // <input type="text" id="result">





// <div class="container">
//   <form action="/action_page.php">
//     <label for="usrname">Username</label>
//     <input type="text" id="usrname" name="usrname" required>

//     <label for="psw">Password</label>
//   <  input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>

//     <input type="submit" value="Submit">
//   </form>
// </div>

// <div id="message">
//   <h3>Password must contain the following:</h3>
//   <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
//   <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
//   <p id="number" class="invalid">A <b>number</b></p>
//   <p id="length" class="invalid">Minimum <b>8 characters</b></p>
// </div>



// // 16. Write a program to convert the following string to an 
// // array using string split method.
// // var university = “University of Karachi”;
// // Display the elements of array in your browser.


// // 18. You have a string “The quick brown fox jumps over the 
// // lazy dog”. Write a program to count numbe
// // complete1,(1,3,4,5,6,7,8,9,10,11)
// // incomplete()
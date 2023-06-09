//                   ARRAYS


// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var stdname = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.



// var stdname = new Array()

// 3. Declare and initialize a strings array.

// var name = ["aiman"];

// 4. Declare and initialize a numbers array.


// var myNumbers = [25, 50, 75, 100];




// 5. Declare and initialize a boolean array.

// var myboo = [true,false];
// console.log(myboo)

// 6. Declare and initialize a mixed array.


// var std =[ 3,"myself",true]
// console.log(std)
// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:



// var qualifications = [ "1)SSC", "2)HSC", "3)BCS", "4)BS", "5)BCOM", "6)MS", "7)M.Phil.", "8)PhD" ]
// document.write("<h1>Qualifications :</h1>")
// document.write(qualifications[0] + "<br/>")
// document.write(qualifications[1] + "<br/>")
// document.write(qualifications[2] + "<br/>")
// document.write(qualifications[3] + "<br/>")
// document.write(qualifications[4] + "<br/>")
// document.write(qualifications[5] + "<br/>")
// document.write(qualifications[6] + "<br/>")
// document.write(qualifications[7] + "<br/>")


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

// var stdname = ["Aiman","Aisha","Areeba"] 
// var score = [250,435,236]
// var total = [500,500,500]
// var percentage = [(score [0]/total[0]*100),(score [1]/total[1]*100),(score [2]/total[2]*100) ]
// document.write("Score of " + stdname[0] + " is " + score [0] +".Percentage: " +percentage [0] +"<br/>"+"<br/>")
// document.write("Score of " + stdname[1] + " is " + score [1] +".Percentage: " +percentage [1]+"<br/>"+"<br/>")
// document.write("Score of " + stdname[2] + " is " + score [2] +".Percentage: " +percentage [2]+"<br/>"+"<br/>")

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// var color = ["Red" ,"Green","Blue"]
// document.write("colours list :"+color  + "<br/>")
// console.log(color + "<br/>")


// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// var addcolor = color.unshift( prompt( "Name the colour you want to add in beginning list Red ,Green ,Blue").split(","));
// document.write("Colour at at begining :"+color  + "<br/>"+ "<br/>")

// // Ask the user what color he/she wants to add to the end 
// // & add that color to the end of the array. Display the 
// // updated array in your browser.
// var addcolor = color.push( prompt("Name the colour you want to add last in  list Red ,Green ,Blue").split(","));
// document.write("Colour add at end :"+color  + "<br/>"+ "<br/>")

// // c. Add two more color to the beginning of the array. 
// // Display the updated array in your browser.
// var addcolor = color.unshift( prompt(
//     "Name the colour you want to add in beginning (use comma in colour's names").split(","));
// document.write("two or more colour added at begining :"+color + "<br/>" + "<br/>")
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// var addcolor = color.shift( );
// document.write("After deleting first colour "+color + "<br/>" + "<br/>")
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// var addcolor = color.pop( );
// document.write("After deleting last colour "+color + "<br/>" + "<br/>");




// // f. Ask the user at which index he/she wants to add a color 
// // & color name. Then add the color to desired 
// // position/index. . Display the updated array in your 
// // browser.


// var new_position = prompt("At which index you wants to add a color  &  color name.")
// var new_position_color = prompt("name the colour.")
// //  pets[4] = "fish";
// //  pets[5] = "gerbil"


// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

// var std_score = [30,54,31,84,49]

// console.log(std_score)
// document.write("Scores of student "+std_score +"<br/>")
// var array = std_score.sort()
// console.log("In asscending order : "+array)

// document.write("Order scores of student : "+array)

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.

// var cityname = [ "Karachi","Lahore", "Islamabad", "Quetta", "Peshawar"]

// document.write("Cities List:" +"<br/>")
// document.write(cityname +"<br/>"  +"<br/>")
// console.log(cityname)

// document.write("Selected cities List:" +"<br/>")
// var cityname2 = cityname.slice(2, 4);
// console.log(cityname2)
// document.write( cityname2+"<br/>"+"<br/>")


// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This ", " is ", " my ", " cat"];
// document.write("Array:"+ "<br/>")
// document.write(arr+ "<br/>")
// document.write("String :"+ "<br/>")
// document.write(arr.join("")+ "<br/>");

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// // were stored. (FIFO-First In First Out)

// var device = [ "keyboard","mouse", "printer","moniter"]
// document.write("Devices: "+ "</br>")
// document.write(device + "</br>"+ "</br>")


// var output = device.slice(0,1)
// document.write("Output:"  + "</br>")
// document.write(output  + "</br>")

// var output1 = device.slice(1,2)
// document.write("Output:"  + "</br>")
// document.write(output1  + "</br>")

// var output2 = device.slice(2,3)
// document.write("Output:"  + "</br>")
// document.write(output2  + "</br>")

// var output3 = device.slice(3,4)
// document.write("Output:"  + "</br>")
// document.write(output3  + "</br>")



// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)


// var device = [ "keyboard","mouse", "printer","moniter"]
// document.write("Devices: "+ "</br>")
// document.write(device + "</br>"+ "</br>")


// var output = device.slice(3)
// document.write("Output:"  + "</br>")
// document.write(output  + "</br>")

// var output1 = device.slice(2,-1)
// document.write("Output:"  + "</br>")
// document.write(output1  + "</br>")

// var output2 = device.slice(1 ,-2)
// document.write("Output:"  + "</br>")
// document.write(output2  + "</br>")

// var output3 = device.slice(0,1)
// document.write("Output:"  + "</br>")
// document.write(output3  + "</br>")

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method:


// complete(1,2,3,4,5,6,7,8,,,10,11,12,13)
//in complete(9,15)
// var phones = ["Apple","Samsung", "Motorola", "Nokia","Sony" , "Haier"]

// var password = document.getElementById('password').value;




// document.write()


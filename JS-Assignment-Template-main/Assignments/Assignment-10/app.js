                 // ARRAYS AND LOOP
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var activities = [];

// var  activities = [// ["Work" , hour]
//     ['study', 7],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];
// console.table(activities);
// console.log(activities);







// 2. Declare and initialize a multidimensional array 
// representing the following matrix:


// var myNumbers = [];

// var  myNumbers = [
//     [0,1,2,3 +"<br/>"],
//     [1,0,1,2+"<br/>"],
//     [2,1,0,1]
// ];


// document.write(myNumbers)
// console.log(myNumbers)


// 3. Write a program to print numeric counting from 1 to 10.

// var numeric = 10
// for (var  i = 1; i <= numeric; i++) {
// document.write(i + "<br/>")
        
    
// }

// console.log(numeric)



// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

// var table = prompt ("Enter a number to show its multiplication table");
// var table_length =  prompt ("Enter length for multiplication table");

// document.write("Multiplication table of " + table + "<br/>")
// document.write("Length " + table_length  + "<br/>" + "<br/>")

// for (var  i = 1; i <= table_length; i++) {
// document.write(table + " x " +i+ " = "   +  (i * table ) + "<br/>")
        
    
// }








// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", 
//     "strawberry"]
//     for ( var i = 0 ; i < fruits.length ; i++ ){
//         document.write( fruits [i ]  + "<br/>")
 
//    }
//    for ( var i = 0 ; i < fruits.length ; i++ ){
//     document.write("Element at Index " + i +" is "+ fruits[i]  + "<br/>")
// }










// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k



// document.write ("Counting" + "<br/>")
//    for (let i = 1; i <= 15; i++) {
//              document.write ([i] +",");
//             }
//             document.write ( "<br/>"+ "<br/>"+"Reverse counting" + "<br/>");
// for (let i = 10; i >=1; i--) {
    
//                document.write ([i] +",");}

//  document.write ( "<br/>"+ "<br/>"+"Even" + "<br/>");
//                for (let i = 0; i <=20; i+=2) {
//                    document.write ([i]) +",";}    
   
// document.write ( "<br/>"+ "<br/>"+"Odd" + "<br/>");
//      for (let i = 1; i <=19; i+=2) {document.write ([i] +",");}                      

//      document.write ( "<br/>"+ "<br/>"+"Series" + "<br/>");
//      for (let i = 2; i <=20; i+=2) {
//          document.write ([i] +"k" +",");}   




 
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:



// var bakery =  ["cake", "apple pie", "cookie", "chips", "patties"]
// var find = [prompt("Welcome to ABC bakery.What do you want to order sir/ma'am?")]



// for (let index = 0; index < bakery.length; index++) { 
  
// if (bakery[0] == find) { alert(find +" is available at index " + [0]+ " in our store")}

// else if
//  (bakery[1] == find) { alert(find +" is available at index " + [1]+ " in our store")}
// else if
//  (bakery[2] == find) { alert(find +" is available at index " + [2]+ " in our store")}
// else if 
// (bakery[3] == find) { alert(find +" is available at index " + [3]+ " in our store")}
// else if 
// (bakery[4] == find) { alert(find +" is available at index " + [4]+ " in our store")

//      console.log(bakery[index])
// }else{alert("We are sorry. "+ find +" is not available in our bakery")
// }     
// }









     

// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12].

// var  A = [24, 53, 78, 91, 12];
// var largest = A[0];

// for (var i = 0; i < A.length; i++) {
//     if (largest < A[i] ) {
//         largest = A[i];
//     }
// }

// document.write("Array items :" + A + "<br/>");
// document.write("The largest number is "+largest);

// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]


// var   A = [24, 53, 78, 91, 12];
// var smallest = A[0];

// for (var i = 0; i < A.length; i--) {
//     if (smallest < A[i] ) {
//      smallest = A[i];
//     }
// }

// document.write("Array items :" + A + "<br/>");
// document.write("The largest number is "+smallest);

// 10. Write a program to print multiples of 5 ranging 1 to 
// 100.



// completed(1,3,4,5,6,7,8,9)
// incompleted(2)
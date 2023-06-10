// Assignment # 6
// MATH EXPRESSIONS

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a = prompt("Please enter any number")

// document.write("Result:" +"</br>")
// document.write("The value of a is : " + a +"</br>")

// document.write("..........................." + "..........................."+
// "</br>" +"</br>")
// var a = ++a
// document.write("The value of ++a is : " + a +"</br>")
// document.write("Now the vale of a is :" + a +"</br>" +"</br>")



// var a1 = a++
// document.write("The value of a++ is : " +  a1+"</br>")
// document.write("Now the vale of a is :" + a +"</br>" +"</br>")
// var a2 = --a
// document.write("The value of --a is : " +  a2+"</br>")
// document.write("Now the vale of a is :" + a +"</br>" +"</br>")
// var a3 = a--
// document.write("The value of a-- is : " + a3 +"</br>")
// document.write("Now the vale of a is :" + a +"</br>" +"</br>")

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2, b = 1;
// document.write("a = " + a +"<br/>");
// document.write("b =" + b +"<br/>");
// var a1 = --a;
// document.write("--a  = " + a1+"<br/>");
// var ab = --a - --b;
// document.write("--a - --b = " + ab+"<br/>");
// var abb = --a - --b + ++b;

// document.write(" --a - --b + ++b = " + abb+"<br/>");
// var abbb = --a - --b + ++b + b--;
// document.write(" --a - --b + ++b + b-- = " + abbb+"<br/>");
// var result = --a - --b + ++b + b--;


// 3. Write a program that takes input a name from user &
// greet the user.
// var username = prompt("What's your name? ")
// var greet = alert("Welcome to JS world " + username + ".")
// 4.

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.



// var usernum = prompt("Enter any number")
// if (usernum<100) {
//     document.write()
//     var table = "Table of " + usernum
// document.write(table + "</br>")
// var table1 = usernum*1
// document.write(usernum+"x 1 = "  + table1+ "</br>")
// var table2 = usernum*2
// document.write(usernum+" x 2 = "  + table2+ "</br>")
// var table3 = usernum*3
// document.write(usernum+" x 3 = "  + table3+ "</br>")
// var table4 = usernum*4
// document.write(usernum+" x 4 = "  + table4+ "</br>")
// var table5 = usernum*5
// document.write(usernum+" x 5 = "  + table5+ "</br>")

// var table6 = usernum*6
// document.write(usernum+" x 6 = "  + table6+ "</br>")
// var table7 = usernum*7
// document.write(usernum+" x 7 = "  + table7+ "</br>")
// var table8 = usernum*8
// document.write(usernum+" x 8 = "  + table8+ "</br>")
// var table9 = usernum*9
// document.write(usernum+" x 9 = "  + table9 + "</br>")
// var table10 = usernum*10
// document.write(usernum+" x 10 = "  + table10+ "</br>")
// }else{
//     var table = "Table of 5"
// document.write(table + "</br>")
// var table1 = 5*1
// document.write("5 x 1 = "  + table1+ "</br>")
// var table2 = 5*2
// document.write("5 x 2 = "  + table2+ "</br>")
// var table3 = 5*3
// document.write("5 x 3 = "  + table3+ "</br>")
// var table4 = 5*4
// document.write("5 x 4 = "  + table4+ "</br>")
// var table5 = 5*5
// document.write("5 x 5 = "  + table5+ "</br>")

// var table6 = 5*6
// document.write("5 x 6 = "  + table6+ "</br>")
// var table7 = 5*7
// document.write("5 x 7 = "  + table7+ "</br>")
// var table8 = 5*8
// document.write("5 x 8 = "  + table8+ "</br>")
// var table9 = 5*9
// document.write("5 x 9 = "  + table9 + "</br>")
// var table10 = 5*10
// document.write("5 x 10 = "  + table10+ "</br>")
// }

// 6. Take 
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


// var favorite_subject1 = prompt("Enter yor first subject name.")
// var marks_obtained_sub1 = prompt("Enter your first subject marks.")

// var favorite_subject2 = prompt("Enter yor second subject name.")
// var marks_obtained_sub2 = prompt("Enter your second subject marks.")

// var favorite_subject3 = prompt("Enter yor third subject name.")
// var marks_obtained_sub3 = prompt("Enter your third subject marks.")

// var sub_1_total = 100
// var sub_2_total = 100
// var sub_3_total = 100

// var per1 = (marks_obtained_sub1 / sub_1_total)*100
// var per2 = (marks_obtained_sub2 / sub_2_total)*100
// var per3 = (marks_obtained_sub3 / sub_3_total)*100

// var  total = (sub_1_total+sub_2_total+sub_3_total)
// var  otbtain_total =(marks_obtained_sub1+marks_obtained_sub2+marks_obtained_sub3)
// var  total_percentage =(per1+per2+per3)


// document.write('    <table>');
// document.write('        <tr>');
// document.write('            <th>SUBJECT</th>');
// document.write('            <th>TOTAL MARKS</th>');
// document.write('            <th>MARKS OBTAINED</th>');
// document.write('            <th>PERCENTAGE</th>');
// document.write('        </tr>');
// document.write('        <tr>');
// document.write('            <td>'+favorite_subject1+'</td>');
// document.write('            <td>'+sub_1_total +'</td>');
// document.write('            <td>'+marks_obtained_sub1+'</td>');
// document.write('            <td>'+per1+'</td>');
// document.write('        </tr>');
// document.write('        <tr>');
// document.write('            <td>'+favorite_subject2+'</td>');
// document.write('            <td>'+sub_2_total +'</td>');
// document.write('            <td>'+marks_obtained_sub2+'</td>');
// document.write('            <td>'+per2+'</td>');
// document.write('        </tr>');
// document.write('        <tr>');
// document.write('            <td>'+favorite_subject3+'</td>');
// document.write('            <td>'+sub_3_total +'</td>');
// document.write('            <td>'+marks_obtained_sub3+'</td>');
// document.write('            <td>'+per3+'</td>');
// document.write('        </tr>');
// document.write('        <tr>');
// document.write('            <td>Total</td>');
// document.write('            <td>'+total +'</td>');
// document.write('            <td>'+otbtain_total+'</td>');
// document.write('            <td>'+total_percentage+'</td>');
// document.write('        </tr>');

// document.write('    </table>');


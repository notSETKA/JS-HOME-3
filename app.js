
// 1) დაწერეთ კოდი სადაც შეამოწმებთ დადებითია თუ უარყოფითი 
// ეს რიცხვი!!

//asnwer:






// let input = prompt("write a Number")

// if (input >= 0){
//     document.write("This number is possitive")
// }

// else if (input < 0){
//     document.write("This number is negative")
// }

// else{document.write("this is not a number")}






//2)დაწერეთ მარტივი კალკულატორი სადაც გამოიყენებთ ოპერატორებს(+, -, *, /)
// switch case დახმარებით უბრალოდ დარწმუნდით რომ თითოეულ ქეისი ასრულებს ამ მეთოდებს 

//asnwer:




// let calculate;

// let operator = prompt('ჩაწერე ოპერატორი ( +, -, * ან / ): ');
// let number1 = parselnt(prompt('ჩაწერე პირველი რიცხვი: '));
// let number2 = parselnt(prompt('ჩაწერე მეორე რიცხვი: '));

// switch(operator) {
//     case '+':
//          calculate = number1 + number2;
//         console.log(`${number1} + ${number2} = ${calculate}`);
//         break;

//     case '-':
//          calculate = number1 - number2;
//         console.log(`${number1} - ${number2} = ${calculate}`);
//         break;

//     case '*':
//          calculate = number1 * number2;
//         console.log(`${number1} * ${number2} = ${calculate}`);
//         break;
// }


//3) დაწერეთ იგივე კალკულატორი if else დახმარებით!!

//asnwer: 

// let operator = prompt('ჩაწერე ოპერატორი ( +, -, * ან / ): ');


// let number1 = parselnt(prompt('ჩაწერე პირველი რიცხვი: '));
// let number2 = parselnt(prompt('ჩაწერე მეორე რიცხვი: '));

// let calculate;


// if (operator == '+') {
//     calculate = number1 + number2;
// }
// else if (operator == '-') {
//     calculate = number1 - number2;
// }
// else if (operator == '*') {
//     calculate = number1 * number2;
// }
// else {
//     calculate = number1 / number2;
// }

// document.write(`${number1} ${operator} ${number2} = ${calculate}`);


//4) დაწერეთ ავტორიზაციის ლოგიკა სადაც უნდა დავარეგისტრიროთ User
// user უნდა შემოყავდეს firstName,lastName,email,password,phoneNumber
// firstName,lastName,email,password არის სავალდებულო ველები
// ამიტომ ერთიანად შეამოწმეთ ეს ოთხი ველი და დარწმუნდით თუ ცარიელი input 
// არარის მაშინ დალოგეთ რომ შენ დარეგისტრირდი წარმატებით თუ ცარიელია მაშინ
// დალოგეთ "input is required" გამოიყენეთ if else

//asnwer:




let firstname = prompt("Enter Your Firstname:")
let lastname = prompt("Enter Your Lastname:")
let email = prompt("Enter Your Email:")
let password = prompt("Enter Your Password:")
let phonenumber = prompt("Enter Your Phone Number:")
let User = `${firstname + " " + lastname + " " + email + " " + password + " " + phonenumber}`


if (firstname.length !== 0 && lastname.length !== 0 && 
   (email !== 0 || phonenumber !== 0) && password !== 8){
document.write("you have successfully registered!!   " )
document.write(User)
}


    else{
        document.write("please enter valid info!!")
        
    }

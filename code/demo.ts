console.log("Lets Learn TypeScript!!");
// let helloWorld = "Hello World";
//  let helloWorld1 :number= 111;
//  console.log(typeof helloWorld1);


//  let num = 123;
//  console.log(num)
//  console.log(typeof num)

let num1: string;
num1 = "shaikh"
//  console.log(num1);
//  num1.toLocaleUpperCase;
//  console.log(num1.toLocaleUpperCase());

// null >>> type >> Object
// undefined >> type >> undefined
// any >>> To Avoid Type checking 

// example of any

//  let data : any = {
//     product : "Samsung Ac",
//     price : 2222
//  }

//  console.log(data.product)
//  console.log(data.price);
//  console.log(data.a);



// interface ProductData {
//     product: string;
//     price: string;
// }
//   let data1 : ProductData = {
//     product : "Samsung Ac",
//     price : "summar"
//  }

//  console.log(data1.product)
//  console.log(data1.price);


// lets learn array in TypeSript 
// Array :>>>> Lis of data which in ordered;
// Type of array is >>> Object

// let arr : string[] =["Majid" , "shaik" , "Tarique" ];
// arr[1] = "Mohammad"
// console.log(arr);

// // number array

// let num : Number[] =[1 ,2,3,4,5 ]
// num[0] = 1000;

// console.log(num);

// num.push(222)

// console.log(num);
// console.log("Length array of number " + num.length)

// console.log(num.pop());
// console.log(num)

// union type
// let arr :( string | Number)[];

// arr =["Majid" ,"shaik" ,"Bisham" , 1 ,2 ,3] 


// arr.forEach((value) =>{
//     if(typeof value === "string"){
//         console.log(value.toUpperCase())
//     }else{
//         console.log(value.toFixed(3))
//     }
// })


// object 


// let user : {
//     name : string,
//     addrress : string,
//     phone : number,
//     age : number
// } ={
//     name : "Majid",
//     addrress : "bisham",
//     phone : 123345,
//     age : 22
// }

// console.log(user);
// console.log(user.name);

// interface user  {
//     name : string,
//     addrress : string,
//     phone : number,
//     age : number
// }


// const User : user={
//   name : "Majid",
//   addrress : "bisham",
//     phone : 123345,
//     age : 22

// }

// console.log(User);
// console.log(User.name);


// function


// function hello( num : number , str: string): string|Number {
//     console.log("How are you?");
//     if(typeof str == "string"){
//         return num
//     }else{
//         return str;
//     }


// }

//  let a = hello(12 , "Majid");
//  console.log(a);


// void

// function myfunc(a:number , b : number){
//     return a+b;
// }

// let b= myfunc(2,3);
// console.log(b)

// function myfunc (a : number , b: number) : void{
//     console.log("mai function hu." ,  a +b)
//     // return a+b;
// }

// myfunc( 2 , 5);


// unknown >> we can store any tpye of value

// function func(){
//     return 'This is unknown';
// }

// let value : unknown = func();
// let value1 : string = value as string;
// console.log(value)
// console.log(value1.toUpperCase());
// console.log(typeof value1)


//tuple
// which has fixed element;
// which has known type woth same elemnt 
// number of element must be same as number of type

// example:

// const skill:[string , string , number ] = ["java" , "Mern" , 200 ]
// console.log(skill[2]);
// console.log(skill)

// optional tuple >> doesnot required to give value if u want u can give.

// const skill2:[string , string , number  ,  string ,string? ] = ["java" , "Mern" , 200 , 'nextjs' ]
// console.log(skill2[4]);
// console.log(skill2)


// enum 

// enum Direction {
//   Up = "Move Up",
//   Down = "Move Down",
//   Left = "Move left",
//   Right = "Move Rigt"
// }

// enum Direction22 {
//   Up =1,
//   Down ,
//   Left ,
//   Right  
// }

// const direction : Direction = Direction.Up;
// const direction1 : Direction = Direction.Left;
// console.log(direction)
// console.log(direction1)

// const direction222 : Direction22 = Direction22.Down;

// console.log(direction222)


// enum ResponseStatus {
//   Success = 200,
//   NotFound = 404,
//   ServerError = 500
// }

// function handleResponse(status: ResponseStatus) {
//   switch (status) {
//     case ResponseStatus.Success:
//       console.log("Request was successful!");
//       break;
//     case ResponseStatus.NotFound:
//       console.log("Resource not found.");
//       break;
//     case ResponseStatus.ServerError:
//       console.log("Internal server error.");
//       break;
//     default:
//       console.log("Unknown status.");
//   }
// }

// handleResponse(ResponseStatus.Success); // Output: "Request was successful!"
// handleResponse(ResponseStatus.NotFound); // Output: "Resource not found."


// type alias


// type id = string;

// let address :id = "Hello , I am Alias";

// console.log(address)



// type order = {
//   title : string,
//   address : string,
//   price : number
//   }


// let ordered : order = {
//     title : "AC",
//     address : "Gr Noida",
//     price : 36000
//     }

// console.log(typeof ordered);

// console.log(ordered)
// console.log(ordered.price);



// type ID = number | string;

// let userId: ID = "bbb";    // Valid
// let anotherUserId: ID = 123; // Valid

// console.log(userId , anotherUserId)


// function types

// type operation = (a :number , b:number) => number;

// const myfunc : operation = (a , b)=>{
//    return a+b;
// }


// console.log(myfunc(10 , 22));

// console.log(typeof myfunc)


// optional parameter in function

function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Alice", "Good morning")); // Output: Good morning, Alice!










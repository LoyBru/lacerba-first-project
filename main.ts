console.log("Hello World!");
console.log("👨‍🔬👩‍🔬 This is my first Node Project!")

let myVar: number  = 3;
myVar += 10 // 13

console.log("myvar = ", myVar);

interface MyInterface {
    myNumber: number;
    myString: string;
}
let myInterface: MyInterface = {
    myNumber: 10,
    myString: 'Hello world',
};

console.log('myNumber = ', myInterface.myNumber);
console.log('myString = ', myInterface.myString);

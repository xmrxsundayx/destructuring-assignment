// *****Problem #1*****
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) 
// tesla
console.log(otherRandomCar)
// Mercedes

// I dont think that it will give a random car since you are saving a const variable and once it is set, it wont change. but i think it will be the first car and because of the "," it will also be the second car in the list.


// *****Problem #2*****
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
// Not defined
console.log(otherName);
// code will break before it gets here

// Name is not defined error


// *****Problem #3*****
const person = {
        name: 'Phil Smith',
        age: 47,
        height: '6 feet'
    }
    const password = '12345';
    const { password: hashedPassword } = person;  
    //Predict the output
    console.log(password);
    // 12345
    console.log(hashedPassword);
    // undifined
    
    // hashed password is not defined


    // *****Problem #4*****
    const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
    const [,first] = numbers;
    const [,,,second] = numbers;
    const [,,,,,,,,third] = numbers;
    //Predict the output
    console.log(first == second);
    // false
    console.log(first == third);
    // true

// false and true

// *****Problem #5*****
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
// Value
console.log(secondKey);
// [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);
// 1
console.log(willThisWork);
// 5

// i thought there would be an error. I was wrong. yes it actually worked


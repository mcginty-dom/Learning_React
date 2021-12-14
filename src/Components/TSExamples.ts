//type "tsc TSExamples.ts -w" in the terminal 
//  to convert to js automatically
//Note: do not have the js file open or it may not convert

type Combinable = number | string; //Type aliases
type Gender = 'Male' | 'Female' | 'Other'; //Literal

interface Person {
    name: string;
    age: number;
    role: [number, string]; //Tuple
    subrole: Subrole; //Enum
    gender: Gender; //Literal
}

//Start at 0 and increment 
//but you can change the starting value
//as well as set them all individually. 
//Additionally: they do not have to be numbers 
//              they can be any type of object

enum Subrole {
    ADMIN, //0
    READ_ONLY, //1,
    AUTHOR, //2
}

export const person: Person = {
    name: 'Dom',
    age: 22,
    role: [2, 'author'],
    subrole: Subrole.AUTHOR,
    gender: 'Male',
};

function combine(
    inputOne: Combinable, inputTwo: Combinable): Combinable {
    let result : Combinable = 
        'Error: TSExamples.combine('
            +inputOne+' | '+typeof inputOne+','
            +inputTwo+' | '+typeof inputTwo+')';
    if (typeof inputOne === 'number' 
        && typeof inputTwo === 'number') {
        result = inputOne + inputTwo;
    } else if (typeof inputOne === 'string' 
        && typeof inputTwo === 'string') {
        result = inputOne + inputTwo;
    }
    return result;
}

function print(input: any): void {
    console.log(input);
}

print(combine(1,2))

//Function that takes no parameters and returns nothing
//and is stored in x
let x: () => void;

function addAndHandle(a: number, b: number, cb: (num: number) => void) {
    const result = a + b;
    cb(result);
}

//Third parameter is a callback function
//This adds 10 and 20, then uses the cb function to output result
addAndHandle(10,20, (result) => {console.log(result)});
//This adds 10 and 10, but does nothing with it
addAndHandle(10,10, () => {});

//more restrictive than any, wont let you blindly assign to others
let userInput: unknown; 
let userName: string;
//...
userInput = 'Dom'
if (typeof userInput === 'string') {
    userName = userInput;
}

//never is used for error handling
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code};
}

generateError('Error: ', 500);
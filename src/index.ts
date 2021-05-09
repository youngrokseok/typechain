const name = "Youngrok",
    age = 36,
    gender = "male";

const sayHi = (name: string, age: number, gender: string): string => {
    return `Hi ${name}, you are ${age}, you are a ${gender}!`;    
}

console.log(sayHi(name, age, gender));

export {};

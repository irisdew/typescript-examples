// interface dosen't work in JS
// interface Human {
//     name: string; 
//     age: number;
//     gender: string;
// }

class Human {
    public name: string;
    // private age: number; // privite으로 선언하면 you cannot use outside of this class
    public age: number;
    public gender: string;
    constructor(name:string, age: number, gender: string) { // class로 객체를 만들때 constructor가 실행됨
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const person = {
    name: "Iris", 
    age: 25, 
    gender: "female"
}

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are ${person.gender}!`;
}

console.log(sayHi(person));

export {};
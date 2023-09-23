/*They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.*/

type T = {
    name:string,
    age:number,
    hobby: string[]
}

let obj:T = {
    name: "Muhammad Hammad",
    age: 19,
    hobby: ["Playing Table Tennis","Learning","Coding"]
}

console.log(obj);

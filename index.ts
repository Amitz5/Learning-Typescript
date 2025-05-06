let x: number = 1;

// Types ->  number,string,any

// if i run "npx tsc -b"  it will convert file to js

function greet(firstName: string){
    console.log("Hello" + firstName);
}

function sum(a: number,b: number){
    return a+b;
}

let ans = sum(1,2);

console.log(ans);

function delayedCall(fn: ()=> void){
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hello")
})

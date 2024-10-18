function add(a,b){
    return a+b;
}

console.log(add(8,9));
function sub(a,b){
    return a-b;
}

console.log(sub(8,4));
function mul(a,b){
    return a*b;
}

console.log(mul(8,9));
function div(a,b){
    return a/b;
}
let a = 20;
let b = 10;
console.log(div(a,b));

let arr = [1,4,9,16,25];

let newar = arr.map(Math.sqrt);
let newarr = arr.map((x)=>(x*x));
console.log(newarr);
console.log(newar);

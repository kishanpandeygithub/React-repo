console.log("Hello i am kishan");
let b =20;
function greet(){
    let a =10;
    function meet(){
        console.log(a);
    }
    return meet;
}
const num =greet();
console.log(num);
num();
// console.log(a);
let userAge=prompt("enter your age");
if (userAge>=18){
    alert('you are old enough to drive');

}else{
    let ageleft=18- Number(userAge)
    alert(`you are left with ${ageleft} years to drive`)
}

//QUE4
const number= prompt('what number do you with to know it it even or odd?')
if(+number%2===0){
    alert('number is an even number')
}else{
    alert('number is an odd number')
}

const myfirstArray=Array(10).fill('student');
console.log(myfirstArray);
const studentArray =['Aisha','salamat','comfort'];
console.log(studentArray);
const numberArray=[2,2,3,1,8]
console.log(numberArray);
const mixedArray =["me","you",'us',1,3,3]
console.log(mixedArray);
const javascript ="javascripts is bae"
console.log(javascript);
console.log(javascript.split("a"));
console.log(studentArray[3]);
console.log(studentArray.length);
console.log(javascript.lastIndexOf('x'));
console.log(javascript.lastIndexOf("a"));
studentArray.push("Bashirah");
console.log(studentArray);
studentArray.unshift('bashira');
console.log(studentArray);
studentArray.pop();
studentArray.shift('bashira');
console.log(studentArray.reverse());
console.log(studentArray.indexOf('comfort'));
console.log(javascript.charAt(0));


console.log(studentArray.concat(numberArray));
console.log(Array.isArray(javascript));
console.log(studentArray.join(''));
console.log(studentArray.join("a"));
studentArray.splice(1, 1,"Aminah","Kausar");
console.log(studentArray);

studentArray.slice()



//loop
// let x=0
// x++
//for(let i=0; i<=5; i++){
//     console.log(i);
// }
// let n=0
// for(let x=0; x<3; x++){
//     console.log(n += x);

for(let a=5; a>=0; a--){
    console.log(a);
}
for(let i=0; i<=5; i++){
    console.log(`${i} *${i} =${i * i}`);
}
let n=0 
let x=0
while(n<3){
    n++
    console.log((x +-n));
}

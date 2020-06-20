//chap 11
let vowalscount = 0

let vowles =['a','e','i','o','u']

let str = 'today is  best day of my life'

for (let i =0 ;i < str.length; i++){
    console.log(vowles.indexOf(str[i]))
    if(vowles.indexOf(str[i]) !== -1) vowalscount++
}

console.log(vowalscount)

//chap 10

var cars = [
    {
        brand : "Honda", price:13000
    },
    {
        brand : "Rolls-roys", price:120000
    }
]

const carInfo = car => {
    let s 
    if (car.price < 20000) s = 'cheap'
    else s= 'expensive'
    return `price of  my new ${car.brand} is ${car.price} it is ${s}` 
}

cars.map(car => console.log(carInfo(car)))


//chap 9

var a=[1,2,3]

var b

    b=[...a]

    b.push(4)
    console.log(a)
    console.log(b)


//chapter 8

var a,b,c,d,arr

a=[1,2]
b=[4,5]
c=[8,9,10]
d=11

arr =[0,...a,3,...b,6,7,...c,d]
console.log(arr)




//chapter 7

var arr=[1,2,3,4,5,6,7]

var  [a,b,...c] = arr

console.log(a)

console.log(b)

console.log(c)

//chapter 6

var obj = {
    a:10,
    b:5,
    c:2
}

const multiply= ({a,b,c}) =>  a*b*c

console.log(multiply(obj));
 //chapter 5

const multby = (a , mult = 2) => {
    mult = mult !== undefined ? mult : 2
    mult = mult || 2
    console.log(a * mult)
}

multby(2)
//4

multby(2,undefined)
//4

multby(2,0)
//0
multby(5,10)
//50

//chapter 4

const mult = (a,b) => {
 return a*b
}

setTimeout(() => {
    console.log(mult(3,4))
}, 0);

//chapter 3

var a =5
 b = 10

 if(a<b){
     let c = 2
     c=a+b+c
     //let c = 2
     console.log(c)
 }

console.log(c)


//chapter 2

var i = 10

for (let i = 0 ; i < 5 ; i++){
   i= i + 5
}

console.log(i)




//chapter 1
const sum = (...arg) => {
  let total;

  total = arg.reduce((acc, ele) => acc + ele, 0);

  console.log(total);
};

sum(1, 3); //4

sum(1, 2, 5); //8

sum(10, 8, 9, 5); //32



let i = 0;
while (i<10 ){ 
    console.log(i);
    i++;
    
}

for (i=0; i<10; i++){
    if ( i % 2==0)
    console.log(i);
    
} 
console.log('faaaaaaaaaaa');

 for (let x = 10; x>0; x--) { 
    if(x % 2==0){
    console.log(x+' is an even number');
    }else{
        console.log(x+' is an odd number')
    }
}

let arry = ['apple','mango','banana']

for (let i=0; i<arry.length;i++) {
    console.log("The "+(i+1)+" Fruit's is "+arry[i]);
    
} 

let arry1 = [1,2,3,4,5,6]

let sum = arry1.reduce((previousValue,currentValue)=>{
    return previousValue+currentValue
},0)

console.log(sum);

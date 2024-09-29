const man = {
    name:'fahad',
    age:22,
    gender:'male',
    eat: function () {
        console.log('fahad is eating');
     this.walk();
    } ,
    walk: function() {
        console.log('i am walking now')
    }
}

man.eat();
console.log(man['age'])
man.walk()
console.log(man.name)

function sleep(name,time){
    console.log(name+' is sleeping now '+time);

}

sleep ('fahad','12am');
sleep ('fahad bin siddique','11pm');

let count = 10;
count = count + 1;
console.log(count);




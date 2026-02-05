//multiple way to create  object 

const pen = {brand:'matador',price: 10, color:'blue'}
console.log(pen); //{ brand: 'matador', price: 10, color: 'blue' }



const pencil = new Object();
console.log(pencil); //{}



const rubber = Object.create({});
rubber.brand = 'matador';
rubber.price = 10;
rubber.color = 'blue';

console.log(rubber);

// Matchy Code
var animal = {};
animal.species = "reptile";
animal['name'] = "Chester";
animal.noises = [];
console.log(animal);

var noises = [];
noises[0] = "hiss";
noises.push("slither");
noises.unshift("pahh");
noises[noises.length] = "shala";
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

animal["noises"] = noises;
animal.noises.push("sloosh");
console.log(animal);

var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
var panda = { species: 'panda', name: 'Jack', noises: ['growl', 'maul', 'chew', 'sniff'] };
var opossum = { species: 'opossum', name: 'Ivan', noises: ['ree', 'sqeak', 'crunch', 'retch'] };
animals.push(panda, opossum);
console.log(animals);

//We chose Array b/c it can contain objects and is ordered.
var friends = [];
function randAn(){
    var i = Math.floor(Math.random()*animals.length);
    return animals[i].name;
}
friends.push(randAn());
console.log(friends);


function myOwnFriend(){
  for(var i = 0; i < friends.length; i++){
      var j = Math.floor(Math.random()*animals.length);
    if(friends[i] !== animals[j].name){
      return animals[j].friends = friends;
    } else {
        return randAn();
    }
  }
}

console.log(myOwnFriend());
console.log(animals);

//pt 2

function search(anName){
    for(var i = 0; i < animals.length; i++){
    if(animals[i]['name'].toLowerCase() === anName.toLowerCase()){
      return animals[i];
      } 
    }
 return null;
}
search();

function edit(anName, obj) {
    for(var i = 0; i < animals.length; i++){
    if(animals[i]['name'].toLowerCase() === anName.toLowerCase()){
      return animals.splice(i, 1, obj);
      } 
    }
}
edit();

function remove(anName) {
    for(var i = 0; i < animals.length; i++){
    if(animals[i]['name'].toLowerCase() === anName.toLowerCase()){
      return animals.splice(i, 1);
      } 
    }
}
remove();

function create(obj){
    if(obj.name.length > 0 && obj.species.length > 0){
        for(var i = 0; i < animals.length; i++){
            if(animals[i]['name'].toLowerCase() === obj.name.toLowerCase()){
            return null;
            }  
        }
    } return animals.push(obj);
}
create();
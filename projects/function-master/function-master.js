
function objectValues(object){
    return Object.values(object);
}
objectValues({name: 'david', age: 28});
//

function keysToString(object){
    return Object.keys(object).join(' ');
}
keysToString({name: 'david', age: 28});
//

function valuesToString(object){
    var arr = Object.values(object);
    var str = [];
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "string"){
            str.push(arr[i]);
        }
    }
    return str.join(' ');
}
valuesToString({name: 'david', age: 28});
//
function arrayOrObject(arg){
    if(Array.isArray(arg)){
        return "array";
    } else if (typeof arg === 'object'){
        return "object";
    }
}

//
function capitalizeWord(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//
function capitalizeAllWords(string){
    var array = string.split(' ');
    var strArr = [];   
    for(var i = 0; i < array.length; i++){
        if(typeof array[i] === 'string'){
            strArr.push(capitalizeWord(array[i]));
        }
    }
    return strArr.join(' ');
}

//
function welcomeMessage(object){
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) +"!";
}

//
function profileInfo(object){
    return object.name.charAt(0).toUpperCase() + object.name.slice(1) +" is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1) ;
}

//
function maybeNoises(object){
    if(!!object.noises && object.noises.length > 0){
        return object.noises.join(' ')
    } else {
        return 'there are no noises';
    }
}

//
function hasWord(string, word){
    var array = string.split(' ');
    for(var i = 0; i < array.length; i++){
        if(word === array[i]){
            return true;
        }
    }return false;
}

//
function addFriend(name, object){
    object.friends.push(name);
    return object;
}
//
function isFriend(name, object){
   if(object.friends){
    for(var i = 0; i < object.friends.length; i++){
        if(name === object.friends[i]){
            return true;
        }
      }    
    } return false;
}

//
function nonFriends(name, arrObj){
    var notFri = [];
    for(var i = 0; i < arrObj.length; i++){
        if(name !== arrObj[i].name){
            if(!isFriend(name, arrObj[i])){
                notFri.push(arrObj[i].name);
            }
        }
    } return notFri;
    
}

//
function updateObject(obj, key, val){
    if(obj.hasOwnProperty(key)){
        obj[key] = val;
    } else {
        obj[key] = val;
    } return obj;
}

//
function removeProperties(obj, array){
    for(var i = 0; i < array.length; i++){
        if(obj.hasOwnProperty(array[i])){
            delete obj[array[i]];
        }
    }return obj;
}

//
function dedup(array){
    var newArr = [];
    for(var i = 0; i < array.length; i++){
        if(newArr.indexOf(array[i]) === -1){
            newArr.push(array[i]);
        }
    }return newArr;
}



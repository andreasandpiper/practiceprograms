//loop through each key in the object 
//store in a new constructor

function deepClone(obj){
    if (obj === null || typeof obj !== 'object') {
        return obj;
     }
    var objClone = {};
    for(var key in obj){
        objClone[key] = deepClone(obj[key])
    }
    return objClone
}


var obj1 = {
    name: 'bob',
    address: {
      streetAddress: "123 Main St",
      city: "Anytown",
      state: "yes"
    }
  };

  var obj2 = deepClone(obj1);
  console.log(obj2)

  console.log(obj1.address === obj2.address)
var nameVar = 'Billy';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Andrew';
nameLet = 'Jan';
console.log('nameLet', nameLet);

const nameConst = 'Julie';
// nameConst = 'joe';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'Billy Mech';
let firstName;

if(fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
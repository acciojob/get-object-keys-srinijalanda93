
// Creating the student object
const student = {
  name: "John Doe"
};

// Adding getKeys() method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Testing the getKeys() method on the student object
const keysArray = student.getKeys();
console.log(keysArray);
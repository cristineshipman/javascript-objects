
// the following code was givin
function Person(name, email, phone) {
  this.name = name;
  this.email = email;
  this.phone = phone;
}

Person.prototype.greet = function(other) {
  console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

// Instantiate and instance object of Person with Sonny's information
var sonny = new Person('Sonny','sonny@hotmail.com','483-485-4948');
// Instantiate and instance object of Person with Jordan's information
var jordan = new Person('Jordan','jordan@aol.com', '495-586-3456');

// Have sonny greet Jordan using the greet method:
sonny.greet(jordan);
// Have jordan greet sonny using the greet method:
jordan.greet(sonny);

//write a statement to print the contact info (email and phone) of Sonny:
console.log("Sonny's contact info; email: " + sonny.email + " , phone:" + sonny.phone);
//write a statement to print the contact info (email and phone) of Jordan:
console.log("Jordan's contact info; email: " + jordan.email + " , phone:" + jordan.phone);

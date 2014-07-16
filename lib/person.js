var Person = function(fname, lname, age, weight, height, friends){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.weight = weight || 80;
    this.height = height || Math.random() * (200 - 150) + 150;
    this.friends = friends || [];
};


Person.prototype.fullname = function(){
    return this.fname + " " + this.lname;
   };

Person.prototype.weightInStone = function(){
    return this.weight/14;
   };

Person.prototype.addFriend = function(person){
    this.friends.push(person);
   };

// Person.prototype.greetPeople = function(person){
//     this.friends.push(person);
//    };


var bob = new Person("bob","smith",25,100,6.7);
var tom = new Person("tom","smith",30,120,7.7);


bob.addFriend(tom);
console.log(bob.fullname() + " " + bob.age + " " + bob.weight + " " + bob.height + " " + bob.friends);

console.log(bob.weightInStone());


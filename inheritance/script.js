// --------------> 1 <-----------------------
String.prototype.filter = function (element) {
    if (this.indexOf(element) > -1) {
      return this.replace(element, "").trim();
    }
    return this;
  };
  
  // --------------> 2 <-----------------------
  Array.prototype.bubbleSort = function bblSort(){
    
    for(var i = 0; i < this.length; i++){       
      for(var j = 0; j < ( this.length - i -1 ); j++){         
        if(this[j] > this[j+1]){           
          var temp = this[j]
          this[j] = this[j + 1]
          this[j+1] = temp
        }
      }
    }   
    return this;
   }
  
  // --------------> 3 <-----------------------
  var Person = function () {};
  
  Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
  };
  
  Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
  };
  
  var Student = function () {};
  Student.prototype = new Person();
  
  Student.prototype.learn = function (subject) {
    console.log(this.name + " just learned " + subject);
  };
  
  var Teacher = function () {};
  Teacher.prototype = new Person();
  
  Teacher.prototype.teach = function (subject) {
    return (this.name + " is now teaching " + subject);
  };
  
  var me = new Student();
  var te = new Teacher();
  me.initialize("John", 25);
  te.initialize("Alice", 32);
  me.learn("Inheritance");
  te.teach("Inheritance");
const Person = function(firstAndLast) {
    // Only chanbob.ge code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast
    this.getFullName = function() {
        console.log(fullName)
    };
    this.getFirstName= function() {
       console.log(fullName.split(" ")[0])
    }
    this.getLastName= function() {
        console.log(fullName.split(" ")[1])
     }
     this.setFirtName= function(name) {
        console.log(fullName = name + " " + fullName.split(" ")[1])
     }
     this.setLastName= function(name) {
        console.log(fullName = fullName.split(" ")[1]+ " " + name)
     }
     this.setFullName= function(name) {
        console.log(fullName = name)
     }

  };
  
  const bob = new Person('Bob Ross');
  bob.getFullName();
  bob.getFirstName();
bob.getLastName();
bob.setFirtName("Fola")
bob.setLastName("Akintola")
bob.setFullName("Fola Akintola")

let employee = function(id, name, address){
    this.empId = id;
    this.empName = name;
    this.empAddress = address;

    this.display = function(){
        console.log("The name: " + this.empName)
        console.log("The Address: " + this.empAddress)
        console.log("The ID: " + this.empId)
    }
}

emp1.display();
emp2.display();
emp3.display();
console.log("The data: " + emp2.empName);




var myComputer = {
    brand: "Dell",
    price: 35000,
    color: "Balck",
};

//when you know the specific property name, use dot notation to get the property value
var find = myComputer.brand;
console.log(find);



//alternative way of:://when you know the specific property name, use dot notation to get the property value::
var find1 = myComputer["brand"];
console.log(find1);



//Another alternative way of:://when you know the specific property name, use dot notation to get the property value::
var propertyName = "brand";
var propertyValue = myComputer[propertyName];
console.log(propertyValue);




//Display all properties of an object::
var properties = Object.keys(myComputer);
console.log(properties);

//Display all property values of an object
var Propertyvalues = Object.values(myComputer);
console.log(Propertyvalues);


//Set Property Value::
myComputer.brand = "mac"
myComputer.price = 94000;
myComputer.color = "silver";
console.log(myComputer);

//alternative ways of //Set Property Value::

myComputer["brand"] = "Lenovo";
myComputer["price"] = 80000;
myComputer["color"] = "White";
console.log(myComputer);

//Another alternative ways of //Set Property Value::
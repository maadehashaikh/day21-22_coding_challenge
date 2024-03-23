// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.
var Vehicles;
(function (Vehicles) {
    Vehicles["cars"] = "corolla";
    Vehicles["trucks"] = "Toyota Tundra";
    Vehicles["motorcycles"] = "CD70";
})(Vehicles || (Vehicles = {}));
console.log(Vehicles);

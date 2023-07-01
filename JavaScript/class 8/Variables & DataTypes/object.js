const captainAmerica = {
  name: "Steve Rogers",
  age: 102,
  allies: ["Tony", "Bruce", "Natasha", "Bucky"],
  address: {
    country: "USA",
    city: {
      name: "Brooklyn",
      pincode: "12345",
    },
  },
  isAvenger: true,
  sayHi: function () {
    console.log("Captains Says Hi!..");
  },
};

// accessing properties from the object
console.log(captainAmerica.age);

console.log(captainAmerica.allies[1]);

console.log(captainAmerica.address.city.pincode);

captainAmerica.sayHi();

// manipulate data

captainAmerica.isAvenger = false;

// add data
captainAmerica.movies = [
  "Civil War",
  "End Game",
  "Age of Ultron",
  "Infinity War",
];
console.log("after adding movies", captainAmerica);

// delete properties

delete captainAmerica.movies;
console.log("after removing movies", captainAmerica);

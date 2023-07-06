// The easiest way to explain the difference between declarative
// and imperative code, would be that imperative code focuses on
// writing an explicit sequence of commands to describe how you
// want the computer to do things, and declarative code focuses
// on specifying the result of what you want.

const myVeggies = ["poTatoes", "pEppers", "hot-peppers"];

// get peppers out of it -> list down all peppers

// imperative

const getPeperrs = (myVeggies) => {
  let veggies = [];
  for (let i = 0; i < myVeggies.length; i++) {
    if (myVeggies[i].toLowerCase().includes("peppers")) {
      veggies.push(myVeggies[i]);
    }
  }
  return veggies;
};

// declarative

const getPeperrs1 = (myVeggies) => {
  const getPep = (myVeggies) => {
    myVeggies.filter((myVeggies) => {
      myVeggies.toLowerCase().includes("peppers");
    });
  };
  return getPep;
};

getPeperrs1(myVeggies);

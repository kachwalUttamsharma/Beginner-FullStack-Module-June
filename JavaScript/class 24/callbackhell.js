// making a burger

function makeBurger() {
   const burger =  assembleAll(items,
        getSalads(salad,
            getBuns(buns, 
                cookAlloTikki(alloTikki,  
                    function getAluTikki() {return aluTikki;}))))
    return burger;
}


function makeBurger() {
    const burger = getAluTikki.then(() => {"returning alu tikki and new promise"})
    .then(() => {"returing fired alu tikki and new promise"})
    .then(() => {"return buns and new promise"})
    .then(() => {"return salda and new promise"})
    .then(() => {return "asembling burger and returning burger"})
    .catch("error");
    return burger;
}
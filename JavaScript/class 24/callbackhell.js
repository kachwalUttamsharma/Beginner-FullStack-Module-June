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
    const burger = getAluTikki.then(() => {"returning alu tikki"}).catch("error");
    return burger;
}
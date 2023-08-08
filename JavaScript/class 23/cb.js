// dummy api response
let dataArr = [
    {name: "Adam", age: 32},
    {name: "steve", age:25}
]

function getData() {
    console.log("Making an api call 1");
    setTimeout(function() {
        let output = '';
        dataArr.forEach((data) => {
            output += `<li>${data.name} ${data.age}</li>`
        })
        document.body.innerHTML = output;
    }, 3000);
    console.log("Completed execution of api call 3");
}

// ,making an api call to add new data into db(dataArr)
function createData(data, cb) {
    console.log("Making an api call 1 for posting new data");
    setTimeout(function() {
        dataArr.push(data);
        cb();
    }, 3500);
    console.log("Completed execution of api call 3 for new data");
}

// getData();
createData({name: 'Mark', age: 30}, getData);

// create data -> get data


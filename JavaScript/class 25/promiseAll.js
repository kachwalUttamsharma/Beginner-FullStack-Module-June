// [p1,p2,p3,p4]

// promise.all([p1,p2,p3,p4]).then().catch()

// scaler
// user profile
// batch profile
// performace profile

const userProfile = Promise.resolve({name: "atharva", age: "26"});
const performanceProfile = Promise.resolve({psp: "90", attendance: "95"});
const batchProfile = Promise.resolve({batchName: "intermediate"});

const page_promises = Promise.all([userProfile,performanceProfile,batchProfile]);

page_promises.then((val) => {
    console.log(val);
}).catch((err) => {
    console.log(err);
})
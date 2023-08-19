// function getMenu(time) {
//     console.log("I have entered the cafe");
//     const flag = time >= 6 && time <= 10 ? true : false;
//     let menu = new Promise(function (resolve, reject) {
//       if (flag) {
//         resolve("Menu is shared or given");
//       } else {
//         reject("Cafe is Closed, Can you come back between 6 and 10");
//       }
//     });
//     return menu;
//   }
//   function placeAnOrder(item1, item2) {
//     const arr = ["Tea", "Coffee", "Milkshakes", "Biscuits"];
//     let orderStatus = new Promise(function (resolve, reject) {
//       if (arr.includes(item1) && arr.includes(item2)) {
//         resolve(`Order has been placed for ${item1} and ${item2}`);
//       } else {
//         reject("One of the item or all items are not available that you ordered");
//       }
//     });
//     return orderStatus;
//   }
  
//   function serve(item1, item2) {
//     let servingOrder = new Promise(function (resolve) {
//       setTimeout(() => {
//         resolve(`Order is served, enjoy your time`);
//       }, 5000);
//     });
//     return servingOrder;
//   }
  
//   function geneateBill() {
//     let bill = new Promise(function (resolve) {
//       setTimeout(() => {
//         resolve("Pay the Bill: 500 Rupee");
//       }, 5000);
//     });
//     return bill;
//   }
  
  
  
//   async function cafeFlow() {
//     try {
//       const menu = await getMenu(7);
//       const placeAnOrder = await placeAnOrder("Tea", "Coffee");
//       const serve = await serve();
//       const bill = await geneateBill();
//       console.log(menu);
//       console.log(placeAnOrder);
//       console.log(serve);
//       console.log(bill);
//       console.log("Payement is done");
//       console.log("Thankyou for the visit..!!");
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   cafeFlow();

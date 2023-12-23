// 2- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

function itemAdd(cart: string[], item: string) {
  cart.splice(cart.length, 0, item);
  console.log(
    `You Just added "${item}" to your Cart.\nYour Updated cart is : [${cart}]`
  );
}

function itemRemove(cart: string[], index: number) {
  let removedItem = cart.splice(index, 1);
  console.log(
    `You Just removed "${removedItem}" from your Cart.\nYour Updated cart is : [${cart}]`
  );
}

function itemUpdate(cart: string[], index: number, item: string) {
  let replacedItem = cart.splice(index, 1, item);
  console.log(
    `You Replaced This item ${replacedItem} with ${item}.\nYour Updated cart is : [${cart}]`
  );
}

let myCart: string[] = [
  "Hyper X Cloud II",
  "Gaming Chair",
  "RGB Mechanical Keyboard",
];
itemAdd(myCart, "Airpods pro 2");
itemRemove(myCart, 2);
itemUpdate(myCart, 2, "Gaming Keyboard");
export {};

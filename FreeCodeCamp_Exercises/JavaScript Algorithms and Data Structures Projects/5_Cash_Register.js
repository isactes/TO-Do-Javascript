/*
Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]

*/

const demon = [
  {name: "PENNY", val: 0.01},
  {name: "NICKEL", val: 0.05},
  {name: "DIME", val: 0.1},
  {name: "ONE", val: 1},
  {name: "FIVE", val: 5},
  {name: "TEN", val: 10},
  {name: "TWENTY", val: 20},
  {name: "ONE HUNDRED", val: 100}
]

function checkCashRegister(price, cash, cid) {
  const output = { status: null, change: []};
  const change = cash - price;
  const register = cid.reduce(function (acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});
  if (register.total === change) {
    output.status = 'CLOSED';
    output.change = cid
    return output
  }
  if (register.total < change) {
    output.status = ' UNSUFFICIENT_FUNDS';
    return output
  }
  const change_arr = demon.reduce(function (acc, curr) {
    const values = 0;
    while(register[curr.name] > 0 && change >= curr.val){
      change -= curr.val;
      register[curr.name] -= curr.val
      values += curr.val;
      change = Math.round(change * 100) / 100
    }
    if (values > 0) {
      acc.push([ curr.name, values])
    }
    return acc
  }, [])
  if (change_arr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output
  }
  output.status = 'OPEN';
  output.change = change_arr
  return output;
}

console.log("✨",checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
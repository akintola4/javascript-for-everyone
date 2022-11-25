/* 
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
*/

//firstly i convert them to cents thus mutiplying them by 100
// penny is 0.01
//nickel is 0.05
//dime is 0.1
//quarter is 0.25
const cashToCents = { "ONE HUNDRED": 10000, "TWENTY": 2000, "TEN": 1000, "TEN": 1000, "FIVE": 500, "ONE": 100, "QUARTER": 25, "DIME": 10, "NICKEL": 5, "PENNY": 1 }

function checkCashRegister(price, cash, cid) {
  // we also need to convert out change into cents too 
  //since we are not going to work with decimals 
  let change = cash * 100 - price * 100
  console.log(change)
  //we also nee to check for the total of cid in cents
  let cidTotal = 0;
  for (const i of cid) {
    cidTotal += i[1] * 100
  }
  if (change > cidTotal) {
    return { status: "INSUFFICIENT_FUNDS", change: [] }
  } else if (change === cidTotal) {
    return { status: "CLOSED", change: cid }
  } else {
    let newValue = []
    let cashToCents = { "ONE HUNDRED": 10000, "TWENTY": 2000, "TEN": 1000, "TEN": 1000, "FIVE": 500, "ONE": 100, "QUARTER": 25, "DIME": 10, "NICKEL": 5, "PENNY": 1 }
    //have rearrange the object to highest to lowest not lowest to highest
    cid = cid.reverse()
    //loop through it 
    for (let i of cid) {
      let holder = [i[0], 0]
      //mutiple all the values from the object expect the string to get them in cents 
      i[1] = i[1] * 100
      //loop here to test for the conditions it sounds crazy i know it is but thw while loop helped me here 
      while (change >= cashToCents[i[0]] && i[1] > 0) {
        change -= cashToCents[i[0]]
        i[1] -= cashToCents[i[0]]
        //since it value is in cents we have to convert it back to decimals
        holder[1] += cashToCents[i[0]] / 100

      }
      //we also have to put the remainder after we minus the change of the customer 
      if (holder[1] > 0) {
        newValue.push(holder)
      }
    }
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] }
    }
    return { status: "OPEN", change: newValue }
  }
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
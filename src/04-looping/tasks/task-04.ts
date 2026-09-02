/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */
const sales: number[] = [
  125000,
  350000,
  78000,
  910000,
  150000,
  420000,
  275000,
  99000,
  640000,
  18000
];

let totalSales: number = 0;
let highestTransaction: number = sales[0];
let lowestTransaction: number = sales[0];
let transactionsAbove300k: number = 0;

for (const sale of sales) {
  // Total sales
  totalSales += sale;

  // Highest transaction
  if (sale > highestTransaction) {
    highestTransaction = sale;
  }

  // Lowest transaction
  if (sale < lowestTransaction) {
    lowestTransaction = sale;
  }

  // Transaction Rp300,000 or more
  if (sale >= 300000) {
    transactionsAbove300k++;
  }
}

const averageTransaction: number = totalSales / sales.length;

console.log("=== Sales Analysis ===");
console.log("Total sales revenue: Rp" + totalSales);
console.log("Highest transaction: Rp" + highestTransaction);
console.log("Lowest transaction: Rp" + lowestTransaction);
console.log("Transactions >= Rp300,000:", transactionsAbove300k);
console.log("Average transaction value: Rp" + averageTransaction);
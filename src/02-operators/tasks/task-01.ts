/**
 * The school cafeteria sells lunch packages to students. Today, 
 * Raka purchased 3 fried rice meals, 
 * each costing Rp18,000, and 2 bottles of mineral water, 
 * 
 * each costing Rp5,000. 
 * 
 * Because he is a member of the student council, 
 * 
 * he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const PriceFriedRiceMeal:number = 18000;
const qtyFriedRiceMeal:number = 3;


const PriceMineralWater:number = 5000;
const qtyMineralWater:number = 2; 

const isMember:boolean = true;
const discount:number = 10000;

// Total price of fried rice
const TotalPriceFriedChicken = PriceFriedRiceMeal * qtyFriedRiceMeal;


// drink
const TotalPriceMineralWater =  PriceMineralWater *  qtyMineralWater;

// total nasi ayam + minuman
const Grandtotal = TotalPriceFriedChicken+ TotalPriceMineralWater;

// total nasi ayam + minuman setelah diskon
// ( total ayam + total minuman) - diskon
const FinalPayment = (TotalPriceFriedChicken + TotalPriceMineralWater) - discount;

console.log("===calculation===");
console.log("Total Price Fried Rice Meal : ", PriceFriedRiceMeal * qtyFriedRiceMeal );
console.log("Total Price Mineral Water :",PriceMineralWater*qtyMineralWater  );
console.log("Total price before discount :",TotalPriceFriedChicken+ TotalPriceMineralWater );
console.log("Final amount to be paid :", (TotalPriceFriedChicken + TotalPriceMineralWater) - discount );
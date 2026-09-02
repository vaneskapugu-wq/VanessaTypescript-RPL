/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */
const ratePerHour: number = 8000;
const playingHours: number = 7;
const playingMinutes: number = 35;

// Total playing time in minutes
const totalMinutes: number = (playingHours * 60) + playingMinutes;

// Remaining minutes after full hours
const remainingMinutes: number = totalMinutes % 60;

// Total billed hours
const billedHours: number = playingHours + (remainingMinutes > 0 ? 1 : 0);

// Total payment before discount
const totalPayment: number = billedHours * ratePerHour;

// Discount
const discount: number =
  billedHours > 5 ? totalPayment * 0.15 : 0;

// Final payment
const finalPayment: number = totalPayment - discount;

console.log("=== Internet Café Billing ===");
console.log("Total Playing Time:", totalMinutes, "minutes");
console.log("Remaining Minutes:", remainingMinutes, "minutes");
console.log("Total Billed Hours:", billedHours, "hours");
console.log("Payment Before Discount:", totalPayment);
console.log("Discount:", discount);
console.log("Final Payment:", finalPayment);
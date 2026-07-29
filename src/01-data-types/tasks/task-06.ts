/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */
interface Product{
    ProductCode:String;
    ProductName:String;
    PriceSell:Number;
    QtyStock:Number ;
    WeightProduct:Number;
    CustRating:Number;
    IsDiscount:boolean;
}

const Product1 : Product ={
    ProductCode:"J4mkf",
    ProductName:"Jam Dinding",
    PriceSell:1200,
    QtyStock:20,
    WeightProduct:5,
    CustRating:8,
    IsDiscount:true,
};
const Product2 : Product ={
    ProductCode:"Leg0nsdl",
    ProductName:"Lego",
    PriceSell:25000,
    QtyStock:10,
    WeightProduct:3,
    CustRating:10,
    IsDiscount:true,
};
const Product3 : Product ={
    ProductCode:"Capydjk29",
    ProductName:"Penghapus Capybara",
    PriceSell:45000,
    QtyStock:15,
    WeightProduct:5,
    CustRating:9,
    IsDiscount:true,
};

console.log("===products data===");
console.log({
    Product1,
    Product2,
    Product3,
});


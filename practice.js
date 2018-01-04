const TAX_RATE=0.05,
PHONE_PRICE=100, ACCESSORY_PRICE=10, SPENDING_THRESHOLD=750;
var bank_acc_bal = prompt("What is your account balance?");
var no_of_phones=0;
var no_of_accessories=0;

function calculateTax(amount){
	var tax_amt= amount * TAX_RATE;
	return tax_amt;
}

function format_price(price_amt){
	var formatted_price= '$'+parseFloat(price_amt).toFixed(2);
	return formatted_price;
}

function calculate_total_price(no_phones, no_accessories){
	var total_price = (no_phones*PHONE_PRICE) + (no_accessories*ACCESSORY_PRICE);
	var total_price_with_tax = total_price + calculateTax(total_price);
	return total_price_with_tax;
}

function purchase(){
	while(calculate_total_price(no_of_phones,no_of_accessories)<bank_acc_bal){
		no_of_phones++;
		if(calculate_total_price(no_of_phones,no_of_accessories)<SPENDING_THRESHOLD){
			no_of_accessories++;
		}
	}
	no_of_phones--;
	console.log("The user is buying "+ no_of_phones + " phones," + no_of_accessories + " accessories");
	console.log("Total price you bought: "+ format_price(calculate_total_price(no_of_phones,no_of_accessories)));
}

purchase();
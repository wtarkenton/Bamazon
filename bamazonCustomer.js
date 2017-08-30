var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "",
	database: "bamazon_db"
});

//Connect to MySQL
connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
	showProducts();
});

//function for posting items
function showProducts() {
 
 connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
	console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | $" + res[i].price + " | " + res[i].stock_quantity);
	}
	buyItem();
 });
}

//function used to buy items
function buyItem() {

connection.query("SELECT * FROM products", function(err, res) {
	if (err) throw err;
	inquirer.prompt([
		{
		 name: "buyStuff",
		 type: "input",
		 message: "Please enter the id of the item would you like to buy."
		},
		{
		 name: "howMuch",
		 type: "input",
	   	 message: "How many units do you want?"
		}
	])

	.then(function(answer) {
		if (res[answer.buyStuff - 1].stock_quantity > answer.howMuch) {
		var newQuantity = res[answer.buyStuff - 1].stock_quantity - answer.howMuch;
		var purchasePrice = answer.howMuch * res[answer.buyStuff - 1].price;
		connection.query(
			"UPDATE products SET ? WHERE ?",
			[
				{
			   	 stock_quantity: newQuantity
				},
				{
				 item_id: answer.buyStuff
				}
			])

	console.log("You have purchased " + answer.howMuch + " " + res[answer.buyStuff - 1].product_name + "s.");
	console.log("The total cost of your purchase is $" + purchasePrice + ".")
			
//here down isnt working WHYYYYY???????
	inquirer.prompt(
		{
		 name: "continue",
		 type: "list",
		 message: "Would you like to continue?",
		 choices: ['Yes', 'No']
	})

	.then(function(answer) {
		if (answer.continue === 'Yes') {
			showProducts();
	  } else {
			process.exit();
		}
	})

	  } else {
		console.log("Not enough Items!");
		inquirer.prompt(
			{
			 name: "continue",
			 type: "list",
			 message: "Would you like to continue?",
			 choices: ['Yes', 'No']
			})
	
	.then(function(answer) {
		if (answer.continue === 'Yes') {
			showProducts();
	  } else {
			process.exit();
					}
				})
			}
		})
	})
}


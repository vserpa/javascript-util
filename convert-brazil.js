// Receive brazilian string money format and return float value
function moneyTextToFloat(text) {
	var cleanText = text.replace("R$ ", "").replace(",", ".");
	return parseFloat(cleanText);
}

// Receive float value and return a brazilian string money
function floatToMoneyText(value) {
	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
	text = "R$ " + text;
	return text.substr(0, text.length - 2) + "," + text.substr(-2);
}
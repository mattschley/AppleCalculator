function alertme(){

	alert("This is in javascript.js!");

}

function calculate(){
var x = $( "#p").text(); 
//alert(x);
//var y = new Array();
var y = x.split(" ");
//alert(y);
evaluate(y);
}

function read_operand(y){

var array = y;
//alert(y[i]);
var num = array[0];
var integ = parseInt(num);

//alert(integ);
y = array.shift();
//alert(shifted);
//num += num; 
//read_operand(shifted);
if(integ == NaN){return 0;}
return integ;
}

function evaluate(y){

if(y[0] == null){
alert("Empty array!");
return 0;
}
var value = read_operand(y);
//alert(value);
//alert(y);
while(y[0] != null){
	

	var operator = y[0];
	var result;
	//alert(operator);
	//var shifted = y.shift();
	var temp = y[1];
	temp = parseInt(temp);
	if(operator == '+'){
		result = value + temp;
	}	
	else if(operator == '-'){
		result = value - temp;	
	}
	else if (operator == '*') {
		result = value * temp;
	}
	else if (operator == '/'){
		var div = Math.floor(value/temp);
		result = div;
	}

	else{return 0;}
	$("p").html("");
	$("p").append(result);
	break;
 //evaluate(y);
}

//alert(result);
//$("p").append(value);
}
const age = () =>{
	let myAge = document.getElementById("age").value;
	let early = 2;
	early *= 10.6;
	let later = myAge-2;
	later *= 4;
	let dogAge = later + early;
	document.getElementById("mini").innerHTML = `Since your age is ${myAge} years old, you will be ${dogAge} years old in Dog Age.`;
}
//document.getElementById("mini").innerHTML =

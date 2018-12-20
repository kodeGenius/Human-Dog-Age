const age = () =>{
	let myAge = document.getElementsById('age').value;
	let early = 2;
	early *= 10.5;
	let later = myAge-2;
	later *= 4;
	let dogAge = later + early;
	document.getElementById('mini').innerHTML = `Since your age is ${myAge} years old, you will be ${dogAge} years old in Dog Age.`
}
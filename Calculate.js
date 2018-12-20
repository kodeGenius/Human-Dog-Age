const age = () =>{
	let myAge = document.getElementsByTagName('input').value;
	let early = 2;
	early *= 10.5;
	let later = myAge-2;
	later *= 4;
	let dogAge = later + early;
	document.getElementById('').innerHTML = `Since your age is ${myAge} years old, you will be ${dogAge} years old in Dog Age.`
}
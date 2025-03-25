function firstNonRepeatedChar(str) {
 // Write your code here
	let arr=str.split('')
	for(let a of arr){
		if(arr.count(a)==1) return a
	}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

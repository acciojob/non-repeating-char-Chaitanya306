function firstNonRepeatedChar(str) {
 // Write your code here
	//let arr=str.split('')
	for(let a of str){
		if(str.indexOf(a)==str.lastIndexOf(a)){
			return a
		}
	}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 

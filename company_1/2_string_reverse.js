const reverseString = (string)=>{
  if((string.indexOf('a') > -1) || (string.indexOf('b') > -1) || (string.indexOf('c') > -1) || (string.indexOf('d') > -1)){
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
  }else{
    return string;
  }
  
  
}
let sample = "abc";
console.log(reverseString(sample));
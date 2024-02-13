/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function checkIsLetter(ch) {
  if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) {
    return true;
  }
  return false;
}
function isPalindrome(str) {
  str = str.toLowerCase();
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (checkIsLetter(str[i]) && checkIsLetter(str[j])) {
      if (str[i] == str[j]) {
        i++;
        j--;
      } else return false;
    }
    if (checkIsLetter(str[i]) == false) i++;
    if (checkIsLetter(str[j]) == false) j--;
  }
  return true;
}

module.exports = isPalindrome;

function isPalindrome(x) {
  // your code here
  const len = x.length;

    for (let i = 0; i < len / 2; i++) {

        if (x[i].toLowerCase() !== x[len - 1 - i].toLowerCase()) {
            return false;
        }
    }
    return true;
 
}

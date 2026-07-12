class Solution {
  addBinary(a, b) {
    let result = "";
    let carry = 0;
    
    // Set pointers to the end of both strings
    let i = a.length - 1;
    let j = b.length - 1;

    // Loop through both strings from right to left
    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) {
            sum += parseInt(a[i]);
            i--;
        }
        
        if (j >= 0) {
            sum += parseInt(b[j]);
            j--;
        }

        // Add the current bit to the front of the result
        result = (sum % 2) + result;

        // Calculate the new carry
        carry = Math.floor(sum / 2);
    }

    // Return the final completed string
    return result;
  }
}

// How to use it:
const solver = new Solution();
console.log(solver.addBinary("1010", "1011")); // Output: "10001"
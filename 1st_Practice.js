function longestCommonPrefix(strs) {
    // Edge case: If the array is empty, there is no common prefix
    if (!strs || strs.length === 0) return "";

    // Take the first string as our baseline prefix to compare against
    let firstStr = strs[0];

    // Loop through each character of the first string
    for (let i = 0; i < firstStr.length; i++) {
        let char = firstStr[i];

        // Check this character against the same position in all other strings
        for (let j = 1; j < strs.length; j++) {
            // If the current string is shorter than 'i', or the character doesn't match
            if (i === strs[j].length || strs[j][i] !== char) {
                // Return everything we've successfully matched up to index i
                return firstStr.slice(0, i);
            }
        }
    }

    // If we made it through the whole loop, the entire first string is the prefix
    return firstStr;
}

// --- Test Cases ---
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // Output: "inters"
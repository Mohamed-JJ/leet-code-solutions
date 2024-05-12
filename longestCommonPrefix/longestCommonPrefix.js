function longestCommonPrefix(strs) {
    function longetstWord(strs) {
        var longest = "";
        for (var i = 0; i < strs.length; i++) {
            if (strs[i + 1]) {
                strs[i].length > strs[i + 1].length ? longest = strs[i + 1] : longest = strs[i];
            }
        }
        return { length: longest.length, id: strs.indexOf(longest) };
    }
    var longest = longetstWord(strs);
    for (var i = 0; i < longest.length; i++) {
        var char = strs[0][i];
        for (var j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return j === 0 ? "" : strs[0].substring(0, i);
            }
        }
    }
    return strs[longest.id];
}
console.log(longestCommonPrefix(["a"])); // Output: "fl"

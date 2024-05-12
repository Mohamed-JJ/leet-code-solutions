function longestCommonPrefix(strs: string[]): string {
	if (strs.length === 1) return strs[0];
  function longetstWord(strs: string[]): {id:number, length: number} {
    let longest = "";
    for (let i = 0; i < strs.length; i++) {
		if (strs[i + 1]) {
		  
        strs[i].length > strs[i + 1]!.length! ? longest = strs[i + 1] : longest = strs[i]!;
      }
    }
    return {length: longest.length, id: strs.indexOf(longest)};
  }
  const longest = longetstWord(strs);
  for (let i = 0; i < longest.length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return j === 0 ? "" : strs[0].substring(0, i);
      }
    }
  }
  return strs[longest.id];
}

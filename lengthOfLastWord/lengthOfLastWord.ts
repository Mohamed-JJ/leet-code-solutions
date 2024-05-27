function lengthOfLastWord(s: string): number {
	const list = s.trim().split(" ");
	return list[list.length - 1].length;
};
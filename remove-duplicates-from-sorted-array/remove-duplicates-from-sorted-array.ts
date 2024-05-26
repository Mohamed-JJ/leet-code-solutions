function removeDuplicates(nums: number[]): number {
	const seen = new Set<number>();
	let writeIndex = 0;
  
	for (let i = 0; i < nums.length; i++) {
	  if (!seen.has(nums[i])) {
		seen.add(nums[i]);
		nums[writeIndex] = nums[i];
		writeIndex++;
	  }
	}
  
	// Trim the array to remove extra elements
	nums.length = writeIndex;
  
	return writeIndex;
  }

const nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums)) // 2
console.log(nums) // [1, 2]
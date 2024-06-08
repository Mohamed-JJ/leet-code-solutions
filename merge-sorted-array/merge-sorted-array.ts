/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const finalLength = nums1.length > m + n ? nums1.length : m + n
    for (let i = nums1.length - 1; nums1[i] === 0; i--) {
        nums1.pop()
    }
    for (const num of nums2) {
        nums1.push(num)
    }
    nums1 = nums1.sort((a, b) => a - b);
    if (m + n === finalLength && nums1.length === finalLength) {
        return
    }
    for (let i = m; i < finalLength; i++) {
            nums1.push(0)
    }
};

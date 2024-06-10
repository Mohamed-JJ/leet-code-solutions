class Solution:

    def singleNumber(self, nums: List[int]) -> int:
        counter = 0
        for i in nums:
            counter ^= i

        return counter


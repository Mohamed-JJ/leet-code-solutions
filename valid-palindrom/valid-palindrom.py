class Solution:
    def isPalindrome(self, s: str) -> bool:
        # filling an empty string with the filter function return, and reassigning the s variable
        s = ''.join(filter(lambda ch: ch.isalnum() and not ch.isspace(), s))
        return s.lower()[::-1] == s.lower()
        

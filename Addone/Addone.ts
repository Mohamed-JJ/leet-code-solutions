function plusOne(digits: number[]): number[] {
    let carry = false
    for (let i = digits.length - 1 ; i >= 0; i--) {
        if (digits[i] === 9) {
            carry = true
            digits[i] = 0;
        } else {
            digits[i] += 1
            return digits;
        }
}
    if (carry) {
        digits.splice(0, 0, 1);
    }
return digits
};

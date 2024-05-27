function searchInsert(nums, target) {
    return nums.findIndex(function (num) {
        console.log(num, target);
        return num >= target;
    });
}
;

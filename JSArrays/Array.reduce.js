var reduce = function(nums, fn, init) {
    let arrLen = nums.length;
    if (arrLen === 0) {
        return init;
    } else {
        let val = init;
        for (let i = 0; i < arrLen; i++) {
            val = fn (val, nums[i]);
        }
        return val;
    } 
};

const nums = [];
const val = reduce(nums, function (accum, curr) {
    return 0;
}, 25)

console.log(val);
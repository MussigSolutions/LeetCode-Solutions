/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  
  
  var increasing = true, decreasing = true;
  
        for (let i = 1; i < nums.length; ++i) {
          
          if(!(nums[i-1] <= nums[i])) increasing = false;
          
          if(!(nums[i-1] >= nums[i])) decreasing = false;

        }
        return increasing || decreasing;
    
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  
  
  var increasing = true, decreasing = true;
  
        for (let i = 1; i < nums.length; ++i) {
          
          //checks to see if current value is smaller then the next, if false

            if((increasing==true) && !(nums[i-1] <= nums[i])) increasing = false;

            if((decreasing==true)&& !(nums[i-1] >= nums[i])) decreasing = false;
          

        }
        return increasing || decreasing;
    
};
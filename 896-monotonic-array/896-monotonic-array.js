/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  
  
  var increasing = true, decreasing = true;
  
        for (let i = 1; i < nums.length; ++i) {
          
          //if current calc is true check if current value is smaller than next, if not array is not monotonic increasing.
            if((increasing==true) && !(nums[i-1] <= nums[i])) increasing = false;
          //Check if current value is larger than next, if not array is not monotonic decreasing.
            if(!(nums[i-1] >= nums[i])) decreasing = false;
          

        }
        return increasing || decreasing;
    
};
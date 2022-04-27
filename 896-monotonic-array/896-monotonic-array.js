/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
  
  
  var increasing = true, decreasing = true;
  
        for (let i = 1; i < nums.length; ++i) {
          
          //if current calc is true check the next num[i] for monotonic increasing else move on to check for monotonic decreasing
            if((increasing==true) && !(nums[i-1] <= nums[i])){ increasing = false;}
          //Check if current value is smaller than next, if false
            if(!(nums[i-1] >= nums[i])) decreasing = false;
          

        }
        return increasing || decreasing;
    
};
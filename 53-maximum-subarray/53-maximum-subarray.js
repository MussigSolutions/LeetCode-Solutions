/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  
    var currentMax=nums[0], possibleMax=nums[0];
  
    for (var i=1;i<nums.length;++i){
      
      //Checks if the sum of the currently stored value + next num is higher than the next num alone.
      //Could possibly be faster to check if divisible by 0?
    	possibleMax = Math.max(possibleMax+nums[i],nums[i]);
      
      //compares the current highest value to the possibly highest value
            
    	currentMax = Math.max(currentMax, possibleMax);	
      
    }
  
    return currentMax;
};
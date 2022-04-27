/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  
    var currentMax=nums[0], possibleMax=nums[0];
  
    for (var i=1;i<nums.length;++i){
      
    	possibleMax = Math.max(possibleMax+nums[i],nums[i]);
    	currentMax = Math.max(currentMax, possibleMax);	
      
    }
  
    return currentMax;
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  
  //Check if amount in the set is different to the amount input
  
  //Set.size will not count duplicate values
  
  if(new Set(nums).size < nums.length){
    
    return true;
    
  } return false;

  
};
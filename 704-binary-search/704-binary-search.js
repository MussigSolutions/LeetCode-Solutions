/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  
  //checking if array includes target
  
  if(nums.includes(target)){
    
    //true returns the position of target
    
    return nums.indexOf(target);   
  }else
    
    //false returns -1
    
    return -1;
  
};
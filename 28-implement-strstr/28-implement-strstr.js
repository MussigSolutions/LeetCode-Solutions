/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  //check if either string is empty
  if (needle.length == 0 || haystack.length == 0) return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    
    //compare needle to parts of haystack equal in size.
    if (needle == haystack.substring(i, i + needle.length)) {
      return i;
    }
  }

  return -1;
};
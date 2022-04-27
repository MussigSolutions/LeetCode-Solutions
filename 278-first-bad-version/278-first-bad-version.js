/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  

    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      
    var l = 0, r = n;

      
      if(isBadVersion(r)&&!isBadVersion(r-1)){
        return r;
      }while((r-l)>=1){    
        
      var mid = Math.floor (l+(r-l)/2);
        
      if(isBadVersion(mid)){
        if(!isBadVersion(mid-1)) return mid;
        r = mid;
        
      }else{ 
        
        if(!isBadVersion(mid))
         
        l = mid; 
      }
        
      }
      

    };
};
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

      //Checks to see if n = first bad version
      if(isBadVersion(r)&&!isBadVersion(r-1)){
        return r;
      }while((r-l)>=1){    
        
      var mid = Math.floor (l+(r-l)/2);
        //Check if current var (isBadVersion && var-1!isBadVersion)
      if(isBadVersion(mid)){
        if(!isBadVersion(mid-1)) return mid;
        
        //If true we recognise the first bad version is in the first half of versions
        r = mid;
        
      }else{ 
        //If false we recognise the first bad version is in the second half of versions
        l = mid; 
      }
        
      }
      

    };
};
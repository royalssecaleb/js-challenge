function MinWindowSubstring(strArr) {
  const N = strArr[0];
  const K = strArr[1];
  
  // Create a frequency map for characters in K
  const charFreqK = {};
  for (let i = 0; i < K.length; i++) {
    const char = K[i];
    charFreqK[char] = charFreqK[char] ? charFreqK[char] + 1 : 1;
  }
  
  let windowStart = 0;
  let windowEnd = 0;
  let minLength = Infinity;
  let minWindow = "";
  let charCount = K.length;
  
  // Slide the window across N
  while (windowEnd < N.length) {
    const charEnd = N[windowEnd];
    
    // If the character is in K, decrement its count
    if (charFreqK[charEnd] !== undefined) {
      if (charFreqK[charEnd] > 0) {
        charCount--;
      }
      charFreqK[charEnd]--;
    }
    
    // If all characters in K are found, try to minimize the window
    while (charCount === 0) {
      const currentWindowLength = windowEnd - windowStart + 1;
      
      if (currentWindowLength < minLength) {
        minLength = currentWindowLength;
        minWindow = N.substring(windowStart, windowEnd + 1);
      }
      
      const charStart = N[windowStart];
      
      // If the character at windowStart is in K, increment its count
      if (charFreqK[charStart] !== undefined) {
        charFreqK[charStart]++;
        
        // If the count becomes positive, it means we need to find it again
        if (charFreqK[charStart] > 0) {
          charCount++;
        }
      }
      
      windowStart++;
    }
    
    windowEnd++;
  }
  
  return minWindow;
}
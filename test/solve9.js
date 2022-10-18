/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    //loop through the string
    for (let i = 0; i < str.length; i++) {
        //save the current index into test
        const test = str.charCodeAt(i);
        
        //ff code of current character is not equal to first character + no of iteration
        //then a letter was skipped
        if(test !== str.charCodeAt(0) + i){
            //if current char skipped past a pprevoius find it 
            console.log( String.fromCharCode(test - 1));
        }
    }
    console.log( undefined)
  }
  
  fearNotLetter("abcdefghjklmno") ;
  fearNotLetter("stvwx")
  fearNotLetter("abcdefghijklmnopqrstuvwxyz")
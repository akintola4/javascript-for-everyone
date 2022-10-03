function truncateString(str, num) {

    if(str.length > num){
        console.log(str.slice(0,num)+"...")
     return str.slice(0,num)+"..."
     
    }else{
      return str;
    }
    
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
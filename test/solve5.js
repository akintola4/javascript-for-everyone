function urlSlug(str) {
    //the | there means either like a or 
        let newArray = str.split(/\s|_|(?=[A-Z])/);
        console.log(newArray.join('-').toLowerCase())
    }
    
    urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
    urlSlug("AllThe-small Things")
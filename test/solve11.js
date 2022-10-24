//Convert the characters &, <, >, " (double quote), and ' 
//(apostrophe), in a string to their corresponding HTML entities.

//firstly lets understand what a html entite is Some characters are reserved in HTML.
//If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags.
//Character entities are used to display reserved characters in HTML.
//A character entity looks like this:
function convertHTML(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    let test = str.replace(/([&<>\"'])/g, match => htmlEntities[match])
    console.log(test)
}

convertHTML("Dolce & Gabbana");
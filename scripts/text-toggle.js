//Show/Hide Text 
function toggleText() { 

    // Get all the elements from the page 
    var points = 
        document.getElementByClassName("points"); 

    var showMoreText = 
        document.getElementByClassName("moreText"); 

    var buttonText = 
        document.getElementByClassName("textButton"); 

    // If the display property of the dots 
    // to be displayed is already set to 
    // 'none' (that is hidden) then this 
    // section of code triggers 
    if (points.style.display === "none") { 

        // Hide the text between the span 
        // elements 
        showMoreText.style.display = "none"; 

        // Show the dots after the text 
        points.style.display = "inline"; 

        // Change the text on button to 
        // 'Show More' 
        buttonText.innerHTML = "READ MORE..."; 
    } 

    // If the hidden portion is revealed, 
    // we will change it back to be hidden 
    else { 

        // Show the text between the 
        // span elements 
        showMoreText.style.display = "inline"; 

        // Hide the dots after the text 
        points.style.display = "none"; 

        // Change the text on button 
        // to 'Show Less' 
        buttonText.innerHTML = "SHOW LESS..."; 
    } 
}
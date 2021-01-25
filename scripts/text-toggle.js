//Show/Hide Text 
function toggleText() { 

    // Get all the elements from the page  
    var points1 = document.getElementById("points1"); 
    var points2 = document.getElementById("points2"); 
    var points3 = document.getElementById("points3"); 
    var points4 = document.getElementById("points4"); 

    var showMoreText1 = document.getElementById("moreText1"); 
    var showMoreText2 = document.getElementById("moreText2");
    var showMoreText3 = document.getElementById("moreText3"); 
    var showMoreText4 = document.getElementById("moreText4"); 
 
    var buttonText1 = document.getElementById("textButton1"); 
    var buttonText2 = document.getElementById("textButton2");
    var buttonText3 = document.getElementById("textButton3"); 
    var buttonText4 = document.getElementById("textButton4"); 

    // If the display property of the dots 
    // to be displayed is already set to 
    // 'none' (that is hidden) then this 
    // section of code triggers 
    //if (points.style.display === "none") { 

        // Hide the text between the span 
        // elements 
        //showMoreText.style.display = "none"; 

        // Show the dots after the text 
        //points.style.display = "inline"; 

        // Change the text on button to 
        // 'Show More' 
      //  buttonText.innerHTML = "READ MORE..."; 
    //} 

    // If the hidden portion is revealed, 
    // we will change it back to be hidden 
    //else { 

        // Show the text between the 
        // span elements 
        //showMoreText.style.display = "inline"; 

        // Hide the dots after the text 
        //points.style.display = "none"; 

        // Change the text on button 
        // to 'Show Less' 
      //  buttonText.innerHTML = "SHOW LESS..."; 
    //} 


    //first experience
    function textMovement(points, showMoreText, buttonText){
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

    textMovement(points1, showMoreText1, buttonText1);
    textMovement(points2, showMoreText2, buttonText2);
    textMovement(points3, showMoreText3, buttonText3);
    textMovement(points4, showMoreText4, buttonText4);
}
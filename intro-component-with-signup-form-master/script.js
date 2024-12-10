document.getElementById('user-form').addEventListener("submit", function(event) {

    event.preventDefault(); 

    const form = event.target; 
    let isValid= true; 

    // Iterate over the form inputs
    const inputs = form.querySelectorAll("input"); 
    inputs.forEach(input => {
      const errorMessage = input.nextElementSibling; // getting the span tag
      if(!input.value.trim()){

        // input is invalid
        input.classList.add("invalid");  
        input.classList.add("input-error");  
        errorMessage.classList.add("show"); 
        isValid = false; 
      }
      else {
        // input is valid
        input.classList.remove("invalid"); // remove the invalid flag
        input.classList.remove("input-error");  
        errorMessage.classList.remove("show"); 
      }

      // Add an event listener for the 'input' event to clear validation errors while typing
      input.addEventListener("input", function () {
        input.classList.remove("invalid");
        input.classList.remove("input-error");
        errorMessage.style.display = "none";
        errorMessage.classList.add("hide"); 
      });
        
    });
    
    // Submit the form if all inputs valid
    if(isValid){
      alert("Form submitted successfully!"); 
      form.reset(); // reset the form
    }
  })
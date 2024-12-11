document.getElementById('user-form').addEventListener("submit", function (event) {

    event.preventDefault();

    const form = event.target;
    let isValid = true;

    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Get the input and corresponding error message
    const input = form.querySelector("input");
    const errorMessage = input.nextElementSibling; // getting the span tag

    if (!input.value.trim()) {
        // Input is empty
        input.classList.add("input-error");
        errorMessage.textContent = "Email is required.";
        errorMessage.classList.add("show");
        isValid = false;
    } else if (!emailRegex.test(input.value.trim())) {
        // Input does not match the email pattern
        input.classList.add("input-error");
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.classList.add("show");
        isValid = false;
    } else {
        // Input is valid
        input.classList.remove("input-error");
        errorMessage.classList.remove("show");
        errorMessage.textContent = ""; // Clear the error message
    }

    // Add an event listener for the 'input' event to clear validation errors while typing
    input.addEventListener("input", function () {
        input.classList.remove("input-error");
        errorMessage.classList.remove("show");
        errorMessage.textContent = ""; // Clear the error message while typing
    });

    // Submit the form if all inputs are valid
    if (isValid) {
        alert("Form submitted successfully!");
        form.reset(); // Reset the form
    }
});

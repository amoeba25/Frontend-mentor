document.querySelector('.form').addEventListener('submit', function (e){


    const day = document.getElementById("day").value; 
    const month = document.getElementById("month").value; 
    const year = document.getElementById("year").value; 

    // clearing previous error message
    clearError(); 

    e.preventDefault();
    if(!isValidDate(day, month, year)) {
        return
    }
    calculateAge(day, month, year); 
})

function clearError() {
    const errorElements = document.getElementsByClassName('form__error'); 
    for(let errorElement of errorElements) {
        errorElement.textContent = ''; 
        errorElement.style.display = 'none'; 
    }
    
    const errorBorders = document.getElementsByClassName("form__input");
    for(let errorBorder of errorBorders) {
        errorBorder.classList.remove('border-error');
    }

    const errorLabels = document.getElementsByClassName("form__label");
    for(let errorLabel of errorLabels) {
        errorLabel.classList.remove('label-error');
    }
}

function showError(id, message) {
    const errorInputGroup = document.getElementById(id); 

    const span = errorInputGroup.querySelector('span'); 
    span.textContent = message; 
    span.style.display = 'block'; 

    const borderElement = errorInputGroup.querySelector('input');
    borderElement.classList.add("border-error"); 

    const labelElement = errorInputGroup.querySelector('label'); 
    labelElement.classList.add('label-error'); 

    // display items shown to be --
    const spans = document.querySelectorAll('.display span');
    
    // Iterate over each span and set its content to '--'
    spans.forEach(span => {
        span.textContent = '--';
    });

}

function isValidDate(day, month, year) {

    let isValid = true; 
    
    // Required validations
    if (!day) {
        showError('input-day', 'This field is required');
        isValid = false;
    } else if (isNaN(day) || day < 1 || day > 31) {
        // Range validation for day (only if the field is not empty)
        showError('input-day', 'Must be a valid day');
        isValid = false;
    }

    if (!month) {
        showError('input-month', 'This field is required');
        isValid = false;
    } else if (isNaN(month) || month < 1 || month > 12) {
        // Range validation for month (only if the field is not empty)
        showError('input-month', 'Must be a valid month');
        isValid = false;
    }

    if (!year) {
        showError('input-year', 'This field is required');
        isValid = false;
    } else if (isNaN(year) || year > new Date().getFullYear()) {
        // Range validation for year (only if the field is not empty)
        showError('input-year', 'Must be in the past');
        isValid = false;
    }

    return isValid;

}

function showValue(id, value) {
    const valueElement = document.getElementById(id); 
    valueElement.textContent = value; 
}

function calculateAge(day, month, year) {

    const currentDate = new Date(); 
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed
    const currentDay = currentDate.getDate();


    // Calculate years
    let years = currentYear - year;
    console.log(years);

    // Calculate months
    let months = currentMonth - month;

    // Adjust if the current date is before the birth date in the year
    if (months < 0) {
        years--;
        months += 12;
    }

    // Calculate days
    let days = currentDay - day;

    // Adjust if the current day is before the birth day in the month
    if (days < 0) {
        months--;
        const previousMonth = currentMonth - 1 === 0 ? 12 : currentMonth - 1;
        const daysInPreviousMonth = new Date(
            currentYear,
            previousMonth,
            0
        ).getDate(); // Get days in the previous month
        days += daysInPreviousMonth;
    }

    showValue("day-value", days); 
    showValue("month-value",months); 
    showValue("year-value", years); 

}
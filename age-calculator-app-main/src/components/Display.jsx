import React from 'react'

const Display = ({submittedData}) => {

    const getAge = (submittedData) => {

        let currentYear = new Date().getFullYear(); 
        let currentMonth = new Date().getMonth() + 1;
        let currentDay = new Date().getDate(); 

        let birthYear = Number(submittedData.year);
        let birthMonth = Number(submittedData.month);
        let birthDay = Number(submittedData.day);  
        
        let calculatedYear = currentYear - birthYear;
        let calculatedMonth = currentMonth - birthMonth;
        let calculatedDay = currentDay - birthDay;

        // logic for age calculation
        if(calculatedMonth < 0) { 
            calculatedYear -= 1; 
            calculatedMonth = 12 + calculatedMonth; 
        }
        if(calculatedDay < 0) {
            calculatedMonth -= 1;
            const lastDayOfMonth = new Date(currentYear, currentMonth, 0).getDate();
            calculatedDay = lastDayOfMonth + calculatedDay; // Adjust days
        }

        return {
            year : calculatedYear, 
            month: calculatedMonth,
            day : calculatedDay
        }
    }

  return (
    <div className="display">
        <h2 className='text-7xl italic text-purple font-bold'>{submittedData.year? getAge(submittedData).year: '--'} <span className='text-black '>years</span></h2>
        <h2 className='text-7xl italic text-purple font-bold'>{submittedData.month? getAge(submittedData).month: '--'} <span className='text-black '>months</span></h2>
        <h2 className='text-7xl italic text-purple font-bold'>{submittedData.day? getAge(submittedData).day: '--'} <span className='text-black '>days</span></h2>
    </div>
  )
}

export default Display
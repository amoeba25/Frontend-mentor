import React, { useState } from 'react'


const Form = ({onSubmit}) => {
    
    const [birthDate, setBirthDate] = useState({
        year : '',
        month : '',
        day : ''
    })

    const [error, setError] = useState({
        year: '',
        month: '',
        day: ''
    })
    
    const inputChange = (e) => {
    const {name, value} = e.target; 

    setBirthDate({
        ...birthDate, 
        [name] : value
    })

    setError({
        ...error,
        [name] : ''
    })
    }

    const submitForm = (e) => {
        e.preventDefault(); 
        onSubmit(birthDate); 
        
        const validationError = {}; //temp empty object

        const year = Number(birthDate.year);
        const month = Number(birthDate.month);
        const day = Number(birthDate.day);

        // year validation
        if (year === 0) {
            validationError.year = 'this field is required'
        }   
        if(year > new Date().getFullYear()) {
            validationError.year = 'Must be in past'
        }

        //month validation
        if(month < 1 || month>12){
            validationError.month = 'must be a valid month'
        }
        if(month === 0) {
            validationError.month = 'this field is required'
        }

        //day validation
        if(day > new Date(year, month, 0).getDate()) {
            validationError.day = 'must be a valid date'
        }
        if(day < 0 || day>31){
            validationError.day = 'must be a valid day'
        }
        if(day === 0) {
            validationError.day = 'this field is required'
        }

        setError(prevData => ({
            ...prevData,
            ...validationError
        }))


    }

    

    return (
    <div className="form border-b-2 mb-10 border-lightGrey">
        <form action="" onSubmit={submitForm} className='relative'>
            <div className='flex space-x-6 py-10'>
            <div className='flex flex-col'>
                <label htmlFor="day" className='text-[0.7em] uppercase text-smokeyGrey my-1 tracking-[.25em]'>Day</label>
                <input type="number" id='day' placeholder='DD' name='day' value={birthDate.day} onChange={inputChange} className='w-28 py-3 px-3 border-2 border-lightGrey rounded'/>
                    {error.day && <span className='error-msg text-[0.7rem] mt-1 italic text-lightRed'>{error.day}</span>}
            </div>

            <div className="flex flex-col">
                <label htmlFor="month" className='text-[0.7em] uppercase text-smokeyGrey my-1 tracking-[.25em]'>Month</label>
                <input type="number" id='month' placeholder='MM' name='month' value ={birthDate.month} onChange={inputChange} className='w-28 py-3 px-3 border-2 border-lightGrey rounded'/>
                    {error.month && <span className='error-msg text-[0.7rem] mt-1 italic text-lightRed'>{error.month}</span>}
            </div>

            <div className="flex flex-col">
                <label htmlFor="year" className='text-[0.7em]  uppercase text-smokeyGrey my-1 tracking-[.25em]'>Year</label>
                <input type="number" id='year' name='year' placeholder='YYYY' value = {birthDate.year} onChange={inputChange} className='w-28 py-3 px-3 border-2 border-lightGrey rounded'/>
                    {error.year && <span className='error-msg text-[0.7rem] mt-1 italic text-lightRed'>{error.year}</span>}
            </div>
            </div>
            <button type='submit' className='absolute right-0 -bottom-10 bg-purple p-3 rounded-full'>
                <img src="/src/assets/images/icon-arrow.svg" alt="" className='scale-75'/>
            </button>
        </form>
    </div>
    )
}

export default Form
import { useState, useEffect } from 'react'

function App() {

  const [quote, setQuote] = useState(null)

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error(`HTTP error! Status : ${response.status}`); 
      }

      const result = await response.json();
      setQuote(result.slip); 
    } catch (error) {
      console.error('Error fetching the data', error); 
    }
  }

  useEffect(()=> {
    fetchQuote()
  }, [])

  const changeQuote = () => {
    fetchQuote()
  }

  return (
    <div className='main h-full bg-darkBlue flex justify-center items-center'>
      <div className="quoteRoot w-5/6 md:w-[500px] flex flex-col items-center bg-darkGrayishBlue px-4 pt-8 pb-[4rem] relative rounded-lg shadow-lg">
        {quote? (
          <>
          <h3 className='text-neonGreen text-xs tracking-[0.3em] uppercase font-thin py-4'> Advice #{JSON.stringify(quote.id)}</h3>
          <h2 className='text-white text-[1.75em] px-6 pb-6 pt-4 text-center'> {JSON.stringify(quote.advice)} </h2>
          </>
        ): 
      <h2>Loading...</h2>} 
      <img src="src/assets/images/pattern-divider-desktop.svg" alt="divider" />
      <button onClick={changeQuote} className='absolute p-4 bg-neonGreen rounded-full -bottom-8'>
        <img src="src/assets/images/icon-dice.svg" alt="" />
      </button>
      </div>

    </div>
  )
}

export default App

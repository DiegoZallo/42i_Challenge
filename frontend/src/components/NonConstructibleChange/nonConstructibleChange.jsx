import { useState } from 'react'
import calcNonConstructibleChange from './calcNonConstructibleChange'

const NonConstructibleChange =()=>{
    const [coins, setCoins] = useState({values:'', result:0})
    const handleCoinChange = (event) => {
        setCoins({...coins,
          [event.target.name]: event.target.value})
      }
    
      const handleCoins = ()=>{
        setCoins({...coins,
                  result:calcNonConstructibleChange(coins.values)})
      }    
    return (
        <div className='container'>
        <h2>Non-Constructible Change</h2>
        <label htmlFor='coins'>Enter coin number/s separated by space</label>
        <br />
        <input type='text' name='values' value={coins.values} onChange={handleCoinChange}></input>
        <br />

        <button onClick={handleCoins} className='button'>
          Result: {coins.result}
        </button>
      </div>
    )
}

export default NonConstructibleChange
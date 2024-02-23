import { useState } from 'react'
import logo42i from './assets/42i.jpg'
import './App.css'
import nonConstructibleChange from './components/nonConstructibleChange'
import twoNumberSum from './components/twoNumberSum'

const App = ()=> {
  const [data, setData] = useState({numbers:'', targetSum:0, result:[]})
  const [coins, setCoins] = useState({values:'', result:0})

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }
  const handleData = ()=>{
    setData({...data,
              result: twoNumberSum(data)})
  }

  const handleCoinChange = (event) => {
    setCoins({...coins,
      [event.target.name]: event.target.value})
  }

  const handleCoins = ()=>{
    setCoins({...coins,
              result:nonConstructibleChange(coins.values)})
  }

  return (
    <>
      <div>
        <a href="https://42i.co/" target="_blank">
          <img src={logo42i} className="logo" alt="42i logo" />
        </a>
      </div>
      <h1>Challenge</h1>
      <div className='container'>
        <h2>Two Number Sum</h2>
        <label htmlFor='numbers'>Enter number/s separated by space</label>
        <br />
        <input type='text' name='numbers' value={data.numbers} onChange={handleChange}></input>
        <br />
        <label htmlFor='targetSum'>Enter target sum</label>
        <br />
        <input type='number' name='targetSum' value={data.targetSum} onChange={handleChange}></input>
        <br />
        <button onClick={handleData} className='button'>
          Result: [ {data.result.join(', ')} ]
        </button>
      </div>
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

    </>
  )
}

export default App

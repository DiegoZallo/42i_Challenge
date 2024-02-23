
import { useState } from 'react';
import calcTwoNumberSum from './calcTwoNumberSum';

const TwoNumberSum = ()=>{
    const [data, setData] = useState({numbers:'', targetSum:0, result:[]})
    const handleChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value
        });
      }
      const handleData = ()=>{
        setData({...data,
                  result: calcTwoNumberSum(data)})
      }   
    return (
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

    )
}

export default TwoNumberSum
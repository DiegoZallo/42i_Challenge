
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { get_TwoNumSum } from '../../Redux/actions/actions';

const TwoNumberSum = ()=>{
    const [data, setData] = useState({numbers:'', targetSum:0})
    const dispatch = useDispatch();
    const result = useSelector(state=>state.tnsResult)

    const handleChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value
        });
      }
    const handleData = ()=>{
        dispatch(get_TwoNumSum(data))
      }   
    
     return (
        <div className='container'>
        <h2>Two Number Sum</h2>
        <label htmlFor='numbers'>Enter number/s separated by space</label>
        <br />
        <input type='text' id='numbers' name='numbers' value={data.numbers} onChange={handleChange}></input>
        <br />
        <label htmlFor='targetSum'>Enter target sum</label>
        <br />
        <input type='number' id='targetSum' name='targetSum' value={data.targetSum} onChange={handleChange}></input>
        <br />
        <button onClick={handleData} className='button'>
          Result: [ {result.join(', ')} ]
        </button>
      </div>

    )
}

export default TwoNumberSum
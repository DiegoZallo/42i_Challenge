import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { get_NonConstChg } from '../../Redux/actions/actions';

const NonConstructibleChange =()=>{
    const [coins, setCoins] = useState({values:''})
    const dispatch = useDispatch();
    const result = useSelector(state=>state.nccResult)

    const handleCoinChange = (event) => {
        setCoins({...coins,
          [event.target.name]: event.target.value})
      }
    
      const handleCoins = async()=>{
        dispatch(get_NonConstChg(coins.values))

      }    
    return (
        <div className='container'>
        <h2>Non-Constructible Change</h2>
        <label htmlFor='coins'>Enter coin number/s separated by space</label>
        <br />
        <input type='text' id='coins' name='values' value={coins.values} onChange={handleCoinChange}></input>
        <br />

        <button onClick={handleCoins} className='button'>
          Result: {result}
        </button>
      </div>
    )
}

export default NonConstructibleChange
const nonConstChg =  (req, res) => {
    try {
        const {coins} = req.body;
        if (!Array.isArray(coins)) return res.status(400).json({error:"Invalid coins format"})
        
        //starts with 1 as it is the min change i can NOT create and i need to sort the array to make the logic work 
        let minChange = 1;
        let arr = coins.map((coin)=>Number(coin)).sort((a, b)=> a-b)
    
        for(let i = 0; i<arr.length; i++){
          if(arr[i] > minChange){
            break
          }
          minChange += arr[i];
        }
    
        res.status(200).json(minChange)
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
 };
  
  module.exports = nonConstChg
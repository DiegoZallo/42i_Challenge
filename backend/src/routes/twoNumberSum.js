const twoNumberSum =  (req, res) => {
    try {
        const {numbers, targetSum} = req.body;
        if (!Array.isArray(numbers)) return res.status(400).json({error:"Invalid numbers format"})
        if(!Number(targetSum)) return res.status(400).json({error:'Invalid target sum format/value'})  
        if(!(numbers.length>0)) return res.status(400).json({error:"Can't acept an empty numbers array"})  

        let result = [];
        const arr = numbers.map((number)=>Number(number)).filter((number)=>{return number !==0});
        

        let sum = 0
        
        for(let i = 0; i < arr.length-1; i++){
            for(let j = i+1; j < arr.length; j++){
                sum = arr[i] + arr[j]
                if(sum === Number(targetSum)) {
                    result=[arr[i] , arr[j]]
                    return res.status(200).json(result)
                }
            }
        }

        res.status(200).json(result)
        
    } catch (error) {
        res.status(500).json({error: 'There has been a problem processing your request'})
    }
 };
  
  module.exports = twoNumberSum
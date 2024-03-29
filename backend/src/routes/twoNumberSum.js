const twoNumberSum =  (req, res) => {
    try {
        const {numbers, targetSum} = req.body;

        //Validations:
        if (!Array.isArray(numbers)) return res.status(400).json({error:"Invalid numbers format"})
        if(!Number(targetSum)) return res.status(400).json({error:'Invalid target sum format/value'})  
        if(!(numbers.length>0)) return res.status(400).json({error:"Can't acept an empty numbers array"}) 
        let numbersSet = new Set(numbers);
        if(numbersSet.size<numbers.length) return res.status(400).json({error:"Can't acept repeated numbers"}) 

        let result = [];
        //creates an array with only numbers and !== 0
        const arr = numbers.map((number)=>Number(number)).filter((number)=>{return number !==0});
        
        let sum = 0
        //Sums first number in the array with the next one, and the next and so on, until it matches the target sum. If no match, result is [] 
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
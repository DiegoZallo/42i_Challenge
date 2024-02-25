const nonConstChg =  (req, res) => {
    try {
        const {coins} = req.body;

        let minChange = 1;
        let arr = coins.map((coin)=>Number(coin)).sort((a, b)=> a-b)
    
        for(let i = 0; i<arr.length; i++){
          if(arr[i] > minChange){
            break
          }
          minChange += arr[i];
        }
    
        res.status(200).json(minChange)

    // let minChange=2
    // let minNotChange = 0

    // const calculateChange=(minChange)=>{
    //     if(arr.find(num=> num==minChange)) return 0

    //     let shortArr = arr.filter((coin)=>{
    //         return coin < minChange
    //     })

    //     for(let i = 0; i<shortArr.length; i++){
    //         for(let j=1; j<=shortArr.length; j++){
    //             let auxArr = [...shortArr]
    //             auxArr.splice(i,shortArr.length-j)
    //             let sum=0
    //             for(let x = 0; x<auxArr.length;x++){
    //                 sum += auxArr[x]
    //                 if(sum==minChange) return 0
    //             }
    //         }            
    //     }

    //     return minChange
    // }
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
 };
  
  module.exports = nonConstChg
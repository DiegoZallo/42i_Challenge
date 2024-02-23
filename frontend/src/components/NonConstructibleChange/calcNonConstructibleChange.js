
const nonConstructibleChange =(coins)=>{
    let arr = coins.trim().split(' ').map((coin)=>Number(coin)).sort((a, b)=> a-b)
    let minChange = 1;

    arr.map((coin) => {
      if (coin > minChange) {
        return minChange;
      }
      minChange += coin;
    });

    return minChange;


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

    // while(minNotChange==0){
    //     minNotChange = calculateChange(minChange)
    //     minChange++
    // }
    // return minNotChange

}

export default nonConstructibleChange;

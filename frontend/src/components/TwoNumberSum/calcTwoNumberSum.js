
const calcTwoNumberSum =({numbers, targetSum})=>{

    let result = [];

    const arr = numbers.split(' ').map((number)=>Number(number));

    let sum = 0
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++){
            sum = arr[i] + arr[j]
            if(sum === Number(targetSum)) return result=[arr[i] , arr[j]]
        }
    }
    return result
}

export default calcTwoNumberSum;

// Your code here

Array.prototype.uniq = function(){
    let newArray = []
    this.forEach((num)=>{
        if ( !newArray.includes(num) ) {
            newArray.push(num)
        }
    })
    return newArray
}

// let array = [1, 2, 3, 4, 5, 5, 6]

// console.log(array.uniq())

Array.prototype.twoSum = function(){
    let returnArray = []
    for(let i = 0; i < this.length; i++){
        for(let j = i + 1; j < this.length; j++){
            if (this[i] + this[j] === 0){
                returnArray.push([i,j])
            }
        }
    }
    return returnArray
}

//let sumArray = [-1, 0, 2, -2, 1]
//console.log(sumArray.twoSum());

Array.prototype.transpose = function(){
    let returnArray = []
    for(let i = 0; i < this.length; i++){
        let newSubArray = []
        this.forEach((subarray)=>{
            newSubArray.push(subarray[i])
        })
        returnArray.push(newSubArray)
    }
    return returnArray
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())
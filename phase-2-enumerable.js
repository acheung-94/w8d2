// Your code here

Array.prototype.myEach = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i])
    }
}

// let array = [1, 2, 3, 4, 5, 6]
// let callback = function(ele){
//     return (ele * 2)
// }
// console.log(array.myEach(callback))

Array.prototype.myMap = function(callback){
    let newArray = []
    this.myEach(ele => {
        newArray.push(callback(ele))
    })
    return newArray;
}


Array.prototype.myMap = function(cb2){
    let newArray = []
    this.myEach(function(ele){
        newArray.push(cb2(ele))
    })
    return newArray
}

// let array = [1, 2, 3, 4, 5, 6]
// let callback = function(ele){
//     return (ele * 2)
// }
// console.log(array.myMap(callback))


Array.prototype.myReduce = function(callback, initialValue){
    if (initialValue){
        this.myEach(ele => {
            initialValue = callback(initialValue, ele)
        })
    }else{
        initialValue = this[0]
        this.slice(1).myEach(ele => {
            initialValue = callback(initialValue, ele)
        })
    }
    return initialValue;
}

let array = [1, 2, 3, 4, 5, 6]
let callback = function(acc, ele){
    return (acc + ele)
}
console.log(array.myReduce(callback, 25))


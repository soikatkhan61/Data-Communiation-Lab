let number = 1001110111


let numberArr = number.toString().split('')

let cn=0
for(let i=0;i<numberArr.length;i++){
    if(numberArr[i] == '1'){
        cn++
    }
}

let newArr
if(cn%2==0){
    newArr =  numberArr
    newArr.unshift('1')
}else{
    newArr =  numberArr
    newArr.unshift('0')
}

console.log(newArr.join(''))

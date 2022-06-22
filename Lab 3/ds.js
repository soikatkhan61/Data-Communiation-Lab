let flag = 6
console.log(flag)

let data = "1011111011000"
let dataArr = data.split('')
let stuffingData = []
let count = 0 , k=0
for(let i = 0; i< dataArr.length; i++){
    if(dataArr[i] == '1'){
        count++
    }else{
        count = 0
    }
    stuffingData[k] = dataArr[i]
    if(count == 5){
        stuffingData[k] = "1"
        i++

    }
    k++
}


console.log(stuffingData.join('') == 101111111000)
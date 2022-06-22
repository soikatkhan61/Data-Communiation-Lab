function calculate() {
    let flag = 6
    console.log(flag)

    let data = "101111111000"
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
            stuffingData[k+1] = "0"
            k++
        }
        k++
    }


   console.log(stuffingData.join(''))
}



// let i = 0, j = 0, count = 1
// let newData = []
// while (i < flag) {
//     if (dataArr[i] == '1') {
//         newData[j] = dataArr[i]
//         for (let k = i + 1; dataArr[k] == '1' && k < flag && count < 5; k++) {
//             j++
//             newData[j] = dataArr[k]
//             count++
//             if (count == 5) {
//                 j++
//                 newData[j] = '0'
//             }
//             i = k
//         }
//     } else {
//         newData[j] = dataArr[j]
//     }
//     i++
//     j++
// }

// console.log(newData.join(''))

// let result = document.getElementById('result')
// result.style.display = "block"
// result.innerText = `Result: ${newData.join('')}`g
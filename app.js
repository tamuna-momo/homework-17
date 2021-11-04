// 5. დამატებითი
// const candles = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];

// // console.log(candles.filter((birthdayCakeCandles) =>birthdayCakeCandles===90));
// function birthdayCakeCandles(candles) {
//     let maxHeightCount = Math.max(...candles);
//     let maxHeightCount = 0;  
//     for( i = 0; i < candles.length; i++){
//         if (candles[i] == maxHeight){
//             maxHeight = maxHeightCount + 1;
//         }
//     }
//     return maxHeightCount;
// }
// console.log(maxHeightCount);

// 1.
const clickButton = document.querySelector('#click-button');
function handleMyBtnClick(event){
    const clickButton = document.querySelector('#click-button');
    clickButton.remove();
}

clickButton.addEventListener('click',handleMyBtnClick);


/*
 * 创建一个包含所有卡片的数组
 */
// let a = ['fa-diamond','fa-paper-plane-o','fa-anchor','fa-bolt','fa-cube','fa fa-bomb','fa-leaf','fa-bicycle','fa-diamond','fa-paper-plane-o','fa-anchor','fa-bolt','fa-cube','fa fa-bomb','fa-leaf','fa-bicycle']

// box = document.getElementsByClassName('deck')[0]


// 洗牌函数来自于 http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}




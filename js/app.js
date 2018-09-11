/*
 * 创建一个包含所有卡片的数组
 */


/*
 * 显示页面上的卡片
 *   - 使用下面提供的 "shuffle" 方法对数组中的卡片进行洗牌
 *   - 循环遍历每张卡片，创建其 HTML
 *   - 将每张卡的 HTML 添加到页面
 */
var count1 = 0
document.getElementsByClassName("moves")[0].innerHTML = count1
a = document.querySelectorAll(".card");

// firstcard = []
// for (let i = 0; i < a.length; i++) {
//     firstcard.push(a[i].children[0].className)
// }

// shuffleCard = shuffle(firstcard)
// for (let i = 0; i < shuffleCard.length; i++) {

//     a[i].children[0].setAttribute("class", shuffleCard[i])

// }

xipai(a)


function xipai(a) {
    for (let p = 0; p < a.length; p++) {
        a[p].setAttribute("class","card");
    }
    document.getElementsByClassName("moves")[0].innerHTML = 0
    firstcard = []
    for (let i = 0; i < a.length; i++) {
        firstcard.push(a[i].children[0].className)
    }

    shuffleCard = shuffle(firstcard)
    for (let i = 0; i < shuffleCard.length; i++) {

        a[i].children[0].setAttribute("class", shuffleCard[i])

    }
}

// 洗牌函数来自于 http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * 设置一张卡片的事件监听器。 如果该卡片被点击：
 *  - 显示卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 将卡片添加到状态为 “open” 的 *数组* 中（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 如果数组中已有另一张卡，请检查两张卡片是否匹配
 *    + 如果卡片匹配，将卡片锁定为 "open" 状态（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果卡片不匹配，请将卡片从数组中移除并隐藏卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 增加移动计数器并将其显示在页面上（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果所有卡都匹配，则显示带有最终分数的消息（将这个功能放在你从这个函数中调用的另一个函数中）
 */
open = []
done = []
function pushOpen(element) {
    open.push(element)
    return open
}

function unmatch(open) {
    open[0].setAttribute("class", "card");
    open[1].setAttribute("class", "card");
}

function match(open) {
    open[0].setAttribute("class", "card match");
    open[1].setAttribute("class", "card match");
    for (let l = 0; l < 2; l++) {
        done.push(open[l])
        
    }
    if (done.length == 16) {
        xipai(a);
        alert("恭喜你成功了，散花！！！")
        done = []
    }
    
}
a = document.querySelectorAll(".card");

for (let m = 0; m < a.length; m++) {

    a[m].addEventListener("click", function () {


        if (a[m].className === "card") {
            count1++
            document.getElementsByClassName("moves")[0].innerHTML = count1
            console.log(count1)
            b = document.getElementsByClassName("stars")[0]
            if (count1 == 10) {
                b.removeChild(b.children[0]);
            } 
            if (count1 == 20) {
                b.removeChild(b.children[0]);
            } 
            if (count1 == 30) {
                b.removeChild(b.children[0]);
            } 
            a[m].setAttribute("class", "card open show");
            pushOpen(a[m]);
            if (open.length > 1) {
                if (open[0].children[0].className === open[1].children[0].className) {
                    console.log("66666")
                    match(open)
                    open = [];
                } else {
                    setTimeout(unmatch, 1000, open);
                    console.log("7777777777")
                    open = []

                }

            }

        } else {
            console.log("无效点击，再次点击")
        }

    })
}

restart = document.getElementsByClassName("restart")[0];
restart.addEventListener("click",function () {

    xipai(a)
})



function xipai() {
    a = document.querySelectorAll(".card");
    firstcard = []
    for(let i =0;i<a.length;i++)
    {
    firstcard.push(a[i].children[0].className)
    }
    
    shuffleCard = shuffle(firstcard)
    for(let i =0;i<shuffleCard.length;i++)
    {
    
    a[i].children[0].setAttribute("class",shuffleCard[i])
    
    } 
}


// 添加eventlistener
for(let m =0;m<a.length;m++)
{
a[m].addEventListener("click",function(){
	a[m].setAttribute("class","card open show")
})
}

var img=document.getElementById("target");
img.addEventListener("mouseover",function(){
    this.src="./img/go_to_ancient.png";
})
img.addEventListener("mouseout",function(){
    this.src="./img/Guardians- 2.png";
})
var yes = confirm('要聆聽這片土地上的勇者考驗古詩嗎？');
if (yes){
    alert('擊退叛變傀儡兵，\n勇者考驗方現形。');
} else {
    alert('好吧...');
}
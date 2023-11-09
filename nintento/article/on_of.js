var btn = document.getElementById('btn');
var body = document.querySelector('body');
var flag = 0;/*預設黑*/ 
btn.onclick = function () {
    if (flag == 0) {/*改成其他顏色(開燈)*/ 
        body.style.backgroundColor ='#BEBEBE';
        document.getElementById('title').style.backgroundColor='#FFFFCE';
        document.getElementById('text').style.backgroundColor='#FFFFFF';
        document.getElementById('in_text').style.color='#000000';
        document.getElementById('back').style.color='#000000';
        document.getElementById('back_index').style.color='#000000';
        flag = 1;
    }
    else {/*關燈(回預設)*/ 
        body.style.backgroundColor = 'rgb(24,24,24)';
        document.getElementById('title').style.backgroundColor='rgba(218, 221, 234, 0.426)';
        document.getElementById('text').style.backgroundColor='#252525';
        document.getElementById('in_text').style.color='#cacaca';
        document.getElementById('back').style.color='#f0ffff';
        document.getElementById('back_index').style.color='#f0ffff';
        flag = 0;
    }
}
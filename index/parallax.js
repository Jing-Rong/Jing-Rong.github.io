let parallax0 = document.querySelector('#parallax0'); // 選取特定的圖層
let layers = document.querySelectorAll('.key_layer'); // 選取所有圖層

window.addEventListener("scroll", function () {
    let fromTop = window.scrollY;

    for (let layer of layers) {
        let speed = layer.getAttribute('speed');
        let initialOffset = parseInt(layer.getAttribute('initial-offset'), 10);
        let yPos = initialOffset + (fromTop * speed) * 0.01;
        let xPos = Math.min(fromTop * 0.5, 0)
        let start = parseInt(layer.getAttribute('data-start'), 10);
        let stop = parseInt(layer.getAttribute('data-stop'), 10);
        let end = parseInt(layer.getAttribute('data-end'), 10);

        // 僅應用於 #parallax0 的放大效果
        if ((layer === parallax0)||(layer === parallax6)) {
            let scale = 1 + fromTop * 0.0002; // 計算放大比例
            layer.style.transform = `translateY(${yPos}px) scale(${scale})`;
        }
        
        else {
            layer.style.transform = `translate(${xPos}px, ${yPos}px)`;//其他圖層只移動
        }

        //實驗瓶的跑動效果
        if(layer === parallax3||layer === parallax4||layer === parallax5){
            if (fromTop >= start && fromTop < stop) {
                // 圖層進入畫面，透明度漸變為 1
                layer.style.opacity = 1;
                layer.style.transform = 'translateY(0)';
            } else if (fromTop >= stop && fromTop < end) {
                // 圖層靜止不動
                layer.style.opacity = 1;
                layer.style.transform = 'translateY(0)';
            } else {
                // 圖層移出畫面，透明度漸變為 0
                layer.style.opacity = 0;
                layer.style.transform = 'translateY(-100vh)';
            }
        }
        
    }
});

let finalImage = document.getElementById('finalImage'); // 選取目標圖片層

window.addEventListener("scroll", function () {
    let fromTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let documentHeight = document.body.scrollHeight;

    // 滾動到最底部時
    if (fromTop + windowHeight >= documentHeight) {
        finalImage.style.opacity = 1; // 淡入圖片
    } else {
        finalImage.style.opacity = 0; // 滾回上方時再次隱藏圖片
    }
});




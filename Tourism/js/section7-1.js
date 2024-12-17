// dialog1#####################################################
const imgElement = document.getElementById("dialog1-1");

imgElement.addEventListener("mouseover", () => {
  imgElement.style.animationPlayState = "paused"; // 停止動畫
  imgElement.style.opacity = "0"; // 先將圖片變透明
  imgElement.src = "webimg/dialog1-1-0.svg";
  imgElement.style.opacity = "1"; // 恢復不透明度，顯示新圖片
});

imgElement.addEventListener("mouseout", () => {
  imgElement.style.animationPlayState = "running"; // 恢復動畫
  imgElement.style.opacity = "0"; // 先將圖片變透明

  imgElement.src = "webimg/dialog1-1.svg";
  imgElement.style.opacity = "1"; // 恢復不透明度，顯示新圖片
});

// dialog2#######################################################
const imgElement2 = document.getElementById("dialog1-2");

imgElement2.addEventListener("mouseover", () => {
  imgElement2.style.animationPlayState = "paused"; // 停止動畫
  imgElement2.style.opacity = "0"; // 先將圖片變透明
  imgElement2.src = "webimg/dialog1-2-0.svg";
  imgElement2.style.opacity = "1"; // 恢復不透明度，顯示新圖片
});

imgElement2.addEventListener("mouseout", () => {
  imgElement2.style.animationPlayState = "running"; // 恢復動畫
  imgElement2.style.opacity = "0"; // 先將圖片變透明
  imgElement2.src = "webimg/dialog1-2.svg";
  imgElement2.style.opacity = "1"; // 恢復不透明度，顯示新圖片
});

// dialog3#########################################################
const imgElement3 = document.getElementById("dialog1-3");

imgElement3.addEventListener("mouseover", () => {
  imgElement3.style.animationPlayState = "paused"; // 停止動畫
  imgElement3.style.opacity = "0"; // 先將圖片變透明
  imgElement3.src = "webimg/dialog1-3-0.svg";
  imgElement3.style.opacity = "1"; // 恢復不透明度，顯示新圖片
});

imgElement3.addEventListener("mouseout", () => {
  imgElement3.style.animationPlayState = "running"; // 恢復動畫
  imgElement3.style.opacity = "0"; // 先將圖片變透明
  imgElement3.src = "webimg/dialog1-3.svg";
  imgElement3.style.opacity = "1"; // 恢復不透明度，顯示新圖片
});

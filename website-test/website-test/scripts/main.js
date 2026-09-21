const myImage = document.querySelector("img");
let counter = 0;
let tolerance = 0;
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Firefox.jpeg") {
    myImage.setAttribute("src", "images/Firefox2.jpeg");
  } else {
    myImage.setAttribute("src", "images/Firefox.jpeg");
  }
};
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    alert("你干嘛");
    tolerance++;
    if (tolerance >= 15 && tolerance < 30) {
      let choice = confirm("别惹我");
      if (!choice) {
        alert("看来你需要一点惩罚了！");
        window.location.replace(
          "https://zh.wikibooks.org/wiki/%E9%AB%98%E7%AD%89%E6%95%B0%E5%AD%A6",
        );
      }
    } else if (tolerance >= 30) {
      document.body.style.pointerEvents = "none";

      const overlay = document.createElement("div");

      overlay.textContent = "点太多了，正在强制跳转……";

      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.background = "black";
      overlay.style.color = "white";
      overlay.style.display = "flex";
      overlay.style.justifyContent = "center";
      overlay.style.alignItems = "center";
      overlay.style.fontSize = "40px";
      overlay.style.zIndex = "9999";

      document.body.appendChild(overlay);
      alert("知错不改，真是可恶！去见江师去吧！");
      setTimeout(() => {
        window.location.replace("https://diglogic.p.cs-lab.top/#1");
      }, 2000);
    }
    setUserName();
  }
  tolerance = 0;
  localStorage.setItem("name", myName);
  if (myName == "Huangda" || myName == "Runiu" || myName == "Laishen") {
    alert("不要偷完电脑！");
    myHeading.textContent = `${myName} Niufu!`;
  } else {
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  if (
    storedName == "Huangda" ||
    storedName == "Runiu" ||
    storedName == "Laishen"
  ) {
    alert("不要偷玩电脑！");
    myHeading.textContent = `${storedName} Niufu!`;
  } else {
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
}
myButton.onclick = function () {
  setUserName();
};
myImage.addEventListener("click", () => {
  counter++;
  alert(`别摸我！你已经点击了 ${counter} 次`);
  counterText.textContent = `Clicks: ${counter}`;
  if (counter >= 50) {
    const answer = confirm("你点太多了！确定要继续吗？");
    if (answer) {
      alert("Niudi, 去干正事吧！");
      window.location.replace("https://jw.hitsz.edu.cn/");
    } else {
      alert("你继续");
      counter = 0;
    }
  }
});

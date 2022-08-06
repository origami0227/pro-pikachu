const string = `
.skin *{box-sizing: border-box;}
.skin *::before,.skin *::after{box-sizing: border-box;}
.skin *{
    padding: 0;
    margin: 0;
}

.skin{
    position: relative;
    background-color: #FFE900;
    min-height: 50vh;/*沾满全屏*/
}
.nose{
    border: 12px solid #000;
    border-color: #000 transparent transparent;
    /* border-bottom: none; */
    position: absolute;
    left: 50%;
    top:145px;
    margin-left: -10px;
    z-index: 10;
    border-radius: 11px;
}
@keyframes wave{
    0%{
transform: rotate(0deg);
    }
    33%{
transform: rotate(6deg);
    }
    66%{
transform: rotate(-6deg);
    }
    100%{
transform: rotate(0deg)
    }
}
.nose:hover{
    transform-origin: 50% 100%;/*左右50%中间 上下100%最下面*/
animation: wave 300ms infinite linear;
}

.eye{
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left:50%;
    top: 100px;
    margin-left: -32px;
    background-color: #333333;
    border-radius: 50%;
}
.eye::before{
    content: '';
    display: block;
    border: 3px solid 000;
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top:3px
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
.mouth .up{
position: relative;
top: -20px;
z-index: 1;
}
.mouth .up .lip{
    border: 3px solid black;
    width: 100px;
    height: 30px;
    border-top-color: transparent;
    border-right-color: transparent; 
    position: relative;
    position: absolute;
    left:50%;
    margin-left: -50px;
    background-color: #FFE900;
}
.mouth .up .lip.left{

    border-radius: 0 0 0 50px;

    transform: rotate(-15deg) translateX(-53px);

}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0px;
    transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background-color: #FFE900;
}
.mouth .up .lip.left::before{
    right: -6px;
}

.mouth .up .lip.right::before{
    left: -6px;
}
.mouth .down{
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background-color: #A50008;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    border: 1px solid transparent;
    width: 200px;
    height: 300px;
    position: absolute;
    bottom: -150px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
    background-color: #FF526B;
}
.face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
}
.face.left {
    transform: translateX(-180px);
    background-color: #FE1900;
    border-radius: 50%;
}
.face.right {
    transform: translateX(180px);
    background-color: #FE1900;
    border-radius: 50%;
}
`;
const demo = document.querySelector("#demo");
const demo2 = document.querySelector("#demo2");
// demo.innerText = string.substring(0, n); //展示字符串，从第零个到第n个
// demo2.innerHTML = string.substring(0, n);
let n = 1;
let time = 50; //默认中速

//将这些函数转化成对象
const player = {
  init: () => {
    demo.innerText = string.substring(0, n); //展示字符串，从第零个到第n个
    demo2.innerHTML = string.substring(0, n);
  },
  run: () => {
    n += 1;
    if (n > string.length) {
      window.clearInterval(id); //取消计时器
      return;
    }
    console.log(n + ":" + string.substring(0, n));
    demo.innerText = string.substring(0, n);
    demo2.innerHTML = string.substring(0, n);
    demo.scrollTop = demo.scrollHeight; //将滚动条拉到底
  },
  play: () => {
    return setInterval(player.run, time);
  }, //声明播放函数
  pause: () => {
    window.clearInterval(id);
  }, //声明暂停函数
  slow: () => {
    player.pause();
    time = 300;
    id = player.play();
  },
  normal: () => {
    player.pause();
    time = 100;
    id = player.play();
  },
  fast: () => {
    player.pause();
    time = 5;
    id = player.play();
  },
};
let id = player.play(); //记录计时器
// const run = () => {
//   n += 1;
//   if (n > string.length) {
//     window.clearInterval(id); //取消计时器
//     return;
//   }
//   console.log(n + ":" + string.substring(0, n));
//   demo.innerText = string.substring(0, n);
//   demo2.innerHTML = string.substring(0, n);
//   demo.scrollTop = demo.scrollHeight; //将滚动条拉到底
// };

// const play = () => {
//   return setInterval(run, time);
// }; //声明播放函数
// const pause = () => {
//   window.clearInterval(id);
// }; //声明暂停函数

// const slow = () => {
//   pause();
//   time = 300;
//   id = play();
// };
// const normal = () => {
//   pause();
//   time = 100;
//   id = play();
// // };
// const fast = () => {
//   pause();
//   time = 5;
//   id = play();
// };

//给暂停按钮添加事件
document.querySelector("#btnPause").onclick = () => {
  player.pause(); //暂停就是取消这个计时器
};

//给播放按钮添加事件
document.querySelector("#btnPlay").onclick = () => {
  id = player.play();
};

//变速
document.querySelector("#btnSlow").onclick = player.slow;
//代码简化
// btnSlow.onclick = () => {
// pause(); //先做一个取消的动作，在以新速度接着重新开始
// time = 150;
// id = play(); //因为计时器和里面的函数和run函数等价，所以可以简化为run
// };

document.querySelector("#btnNormal").onclick = player.normal;
// btnNormal.onclick = () => {
//   pause();
//   time = 50;
//   id = play();
// };

document.querySelector("#btnFast").onclick = player.fast;
// btnFast.onclick = () => {
//   pause();
//   time = 0;
//   id = play();
// };

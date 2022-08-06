// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = "\n.skin *{box-sizing: border-box;}\n.skin *::before,.skin *::after{box-sizing: border-box;}\n.skin *{\n    padding: 0;\n    margin: 0;\n}\n\n.skin{\n    position: relative;\n    background-color: #FFE900;\n    min-height: 50vh;/*\u6CBE\u6EE1\u5168\u5C4F*/\n}\n.nose{\n    border: 12px solid #000;\n    border-color: #000 transparent transparent;\n    /* border-bottom: none; */\n    position: absolute;\n    left: 50%;\n    top:145px;\n    margin-left: -10px;\n    z-index: 10;\n    border-radius: 11px;\n}\n@keyframes wave{\n    0%{\ntransform: rotate(0deg);\n    }\n    33%{\ntransform: rotate(6deg);\n    }\n    66%{\ntransform: rotate(-6deg);\n    }\n    100%{\ntransform: rotate(0deg)\n    }\n}\n.nose:hover{\n    transform-origin: 50% 100%;/*\u5DE6\u53F350%\u4E2D\u95F4 \u4E0A\u4E0B100%\u6700\u4E0B\u9762*/\nanimation: wave 300ms infinite linear;\n}\n\n.eye{\n    border: 2px solid #000;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left:50%;\n    top: 100px;\n    margin-left: -32px;\n    background-color: #333333;\n    border-radius: 50%;\n}\n.eye::before{\n    content: '';\n    display: block;\n    border: 3px solid 000;\n    width: 25px;\n    height: 25px;\n    background-color: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top:3px\n}\n.eye.left{\n    transform: translateX(-100px);\n}\n.eye.right{\n    transform: translateX(100px);\n}\n.mouth{\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n}\n.mouth .up{\nposition: relative;\ntop: -20px;\nz-index: 1;\n}\n.mouth .up .lip{\n    border: 3px solid black;\n    width: 100px;\n    height: 30px;\n    border-top-color: transparent;\n    border-right-color: transparent; \n    position: relative;\n    position: absolute;\n    left:50%;\n    margin-left: -50px;\n    background-color: #FFE900;\n}\n.mouth .up .lip.left{\n\n    border-radius: 0 0 0 50px;\n\n    transform: rotate(-15deg) translateX(-53px);\n\n}\n.mouth .up .lip.right{\n    border-radius: 0 0 50px 0px;\n    transform: rotate(15deg) translateX(53px);\n}\n.mouth .up .lip::before{\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background-color: #FFE900;\n}\n.mouth .up .lip.left::before{\n    right: -6px;\n}\n\n.mouth .up .lip.right::before{\n    left: -6px;\n}\n.mouth .down{\n    height: 180px;\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    overflow: hidden;\n}\n.mouth .down .yuan1{\n    border: 3px solid black;\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px/300px;\n    background-color: #A50008;\n    overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2{\n    border: 1px solid transparent;\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    bottom: -150px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n    background-color: #FF526B;\n}\n.face {\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    margin-left: -44px;\n    z-index: 3;\n}\n.face.left {\n    transform: translateX(-180px);\n    background-color: #FE1900;\n    border-radius: 50%;\n}\n.face.right {\n    transform: translateX(180px);\n    background-color: #FE1900;\n    border-radius: 50%;\n}\n";
var demo = document.querySelector("#demo");
var demo2 = document.querySelector("#demo2");
// demo.innerText = string.substring(0, n); //展示字符串，从第零个到第n个
// demo2.innerHTML = string.substring(0, n);
var n = 1;
var time = 50; //默认中速

//将这些函数转化成对象
var player = {
    init: function init() {
        demo.innerText = string.substring(0, n); //展示字符串，从第零个到第n个
        demo2.innerHTML = string.substring(0, n);
    },
    run: function run() {
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
    play: function play() {
        return setInterval(player.run, time);
    }, //声明播放函数
    pause: function pause() {
        window.clearInterval(id);
    }, //声明暂停函数
    slow: function slow() {
        player.pause();
        time = 300;
        id = player.play();
    },
    normal: function normal() {
        player.pause();
        time = 100;
        id = player.play();
    },
    fast: function fast() {
        player.pause();
        time = 5;
        id = player.play();
    }
};
var id = player.play(); //记录计时器
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
document.querySelector("#btnPause").onclick = function () {
    player.pause(); //暂停就是取消这个计时器
};

//给播放按钮添加事件
document.querySelector("#btnPlay").onclick = function () {
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
},{}],"../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '51891' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.c2661ebd.map
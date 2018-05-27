/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Promise对象
{
	// 没有Promise对象之前的一些操作
	var ajax = function ajax(callback) {
		console.log('执行');
		setTimeout(function () {
			callback && callback();
		}, 1000);
	};

	ajax(function () {
		console.log('timeout1');
	});
}

{
	var _ajax = function _ajax() {
		console.log('执行2');
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve();
			}, 1000);
		});
	};

	_ajax().then(function () {
		console.log('promise', 'timeout2');
	});
}

{
	var _ajax2 = function _ajax2() {
		console.log('执行2');
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve();
			}, 1000);
		});
	};

	_ajax2().then(function () {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve();
			}, 2000);
		});
	}).then(function () {
		console.log('timeout3');
	});
}

{
	var _ajax3 = function _ajax3(num) {
		return new Promise(function (resolve, reject) {
			if (num > 5) {
				resolve();
			} else {
				throw Error('出错了');
			}
		});
	};

	_ajax3(6).then(function () {
		console.log('log', 6);
	}).catch(function (err) {
		console.log('catch', err);
	});

	_ajax3(3).then(function () {
		console.log('log', 3);
	}).catch(function (err) {
		console.log('catch', err);
	});
}

// Promise对象的高级使用
// all使用
{
	// 所有图片加载完成再加载到页面
	var loadImg = function loadImg(src) {
		return new Promise(function (resolve, reject) {
			var img = document.createElement('img');
			img.src = src;
			img.onload = function () {
				resolve(img);
			};
			img.onerror = function (err) {
				reject(err);
			};
		});
	};

	var showImgs = function showImgs(imgs) {
		imgs.forEach(function (img) {
			document.body.appendChild(img);
		});
	};

	Promise.all([loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527449236483&di=000e5a357739e588811184154e109d4f&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201603%2F21%2F20160321233248_wmHKU.thumb.700_0.jpeg'), loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527449298290&di=fb362f7b92ed1dd55c3e96edd9b1ed3a&imgtype=0&src=http%3A%2F%2Fimages.zb580.tv%2Fupload%2F201707%2F28%2F201707281413204427.jpg'), loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527449358489&di=1083cb0d4f00ee296403cee28aa37ce9&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20170105%2F4332921483585630.jpg')]).then(showImgs);
}

// race使用
{
	// 当有一个图片加载完成就加载到页面
	var _loadImg = function _loadImg(src) {
		return new Promise(function (resolve, reject) {
			var img = document.createElement('img');
			img.src = src;
			img.onload = function () {
				resolve(img);
			};
			img.onerror = function (err) {
				reject(err);
			};
		});
	};

	var _showImgs = function _showImgs(img) {
		var p = document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p);
	};

	Promise.race([_loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527449236483&di=000e5a357739e588811184154e109d4f&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201603%2F21%2F20160321233248_wmHKU.thumb.700_0.jpeg'), _loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527449298290&di=fb362f7b92ed1dd55c3e96edd9b1ed3a&imgtype=0&src=http%3A%2F%2Fimages.zb580.tv%2Fupload%2F201707%2F28%2F201707281413204427.jpg'), _loadImg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527449358489&di=1083cb0d4f00ee296403cee28aa37ce9&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20170105%2F4332921483585630.jpg')]).then(_showImgs);
}

/***/ })
/******/ ]);
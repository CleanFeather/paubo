(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/wangeditor/dist/wangEditor.js":
/*!****************************************************!*\
  !*** ./node_modules/wangeditor/dist/wangEditor.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 127);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(128);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 封装 DOM 操作
 * @wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _includes = _interopRequireDefault(__webpack_require__(110));

var _filter = _interopRequireDefault(__webpack_require__(86));

var _splice = _interopRequireDefault(__webpack_require__(87));

var _indexOf = _interopRequireDefault(__webpack_require__(52));

var _map = _interopRequireDefault(__webpack_require__(111));

var _trim = _interopRequireDefault(__webpack_require__(21));

var _map2 = _interopRequireDefault(__webpack_require__(41));

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _isArray = _interopRequireDefault(__webpack_require__(115));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.DomElement = void 0;

var util_1 = __webpack_require__(7);

var AGENT_EVENTS = [];
/**
 * 根据 html 字符串创建 elem
 * @param {String} html html
 */

function _createElemByHTML(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  var elems = div.children;
  return util_1.toArray(elems);
}
/**
 * 判断是否是 DOM List
 * @param selector DOM 元素或列表
 */


function _isDOMList(selector) {
  if (!selector) {
    return false;
  }

  if (selector instanceof HTMLCollection || selector instanceof NodeList) {
    return true;
  }

  return false;
}
/**
 * 封装 querySelectorAll
 * @param selector css 选择器
 */


function _querySelectorAll(selector) {
  var elems = document.querySelectorAll(selector);
  return util_1.toArray(elems);
}
/**
 * 封装 _styleArrTrim
 * @param styleArr css
 */


function _styleArrTrim(style) {
  var styleArr = [];
  var resultArr = [];

  if (!(0, _isArray["default"])(style)) {
    // 有 style，将 style 按照 `;` 拆分为数组
    styleArr = style.split(';');
  } else {
    styleArr = style;
  }

  (0, _forEach["default"])(styleArr).call(styleArr, function (item) {
    var _context;

    // 对每项样式，按照 : 拆分为 key 和 value
    var arr = (0, _map2["default"])(_context = item.split(':')).call(_context, function (i) {
      return (0, _trim["default"])(i).call(i);
    });

    if (arr.length === 2) {
      resultArr.push(arr[0] + ':' + arr[1]);
    }
  });
  return resultArr;
} // 构造函数


var DomElement =
/** @class */
function () {
  function DomElement(selector) {
    // 初始化属性
    this.selector = '';
    this.elems = [];
    this.length = this.elems.length;
    this.dataSource = new _map["default"]();

    if (!selector) {
      return;
    } // 原本就是 DomElement 实例，则直接返回


    if (selector instanceof DomElement) {
      return selector;
    }

    var selectorResult = []; // 存储查询结果

    this.selector = selector;
    var nodeType = selector.nodeType;

    if (nodeType === 9) {
      // document 节点
      selectorResult = [selector];
    } else if (nodeType === 1) {
      // 单个 DOM 节点
      selectorResult = [selector];
    } else if (_isDOMList(selector)) {
      // DOM List
      selectorResult = util_1.toArray(selector);
    } else if (selector instanceof Array) {
      // Element 数组（其他数据类型，暂时忽略）
      selectorResult = selector;
    } else if (typeof selector === 'string') {
      var _context2;

      // 字符串
      selector = (0, _trim["default"])(_context2 = selector.replace('/\n/mg', '')).call(_context2);

      if ((0, _indexOf["default"])(selector).call(selector, '<') === 0) {
        // 如 <div>
        selectorResult = _createElemByHTML(selector);
      } else {
        // 如 #id .class
        selectorResult = _querySelectorAll(selector);
      }
    }

    var length = selectorResult.length;

    if (!length) {
      // 空数组
      return this;
    } // 加入 DOM 节点


    var i = 0;

    for (; i < length; i++) {
      this.elems.push(selectorResult[i]);
    }

    this.length = length;
  }

  (0, _defineProperty["default"])(DomElement.prototype, "id", {
    /**
     * 获取元素 id
     */
    get: function get() {
      return this.elems[0].id;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * 遍历所有元素，执行回调函数
   * @param fn 回调函数
   */

  DomElement.prototype.forEach = function (fn) {
    for (var i = 0; i < this.length; i++) {
      var elem = this.elems[i];
      var result = fn.call(elem, elem, i);

      if (result === false) {
        break;
      }
    }

    return this;
  };
  /**
   * 克隆元素
   * @param deep 是否深度克隆
   */


  DomElement.prototype.clone = function (deep) {
    var _context3;

    if (deep === void 0) {
      deep = false;
    }

    var cloneList = [];
    (0, _forEach["default"])(_context3 = this.elems).call(_context3, function (elem) {
      cloneList.push(elem.cloneNode(!!deep));
    });
    return $(cloneList);
  };
  /**
   * 获取第几个元素
   * @param index index
   */


  DomElement.prototype.get = function (index) {
    if (index === void 0) {
      index = 0;
    }

    var length = this.length;

    if (index >= length) {
      index = index % length;
    }

    return $(this.elems[index]);
  };
  /**
   * 获取第一个元素
   */


  DomElement.prototype.first = function () {
    return this.get(0);
  };
  /**
   * 获取最后一个元素
   */


  DomElement.prototype.last = function () {
    var length = this.length;
    return this.get(length - 1);
  };

  DomElement.prototype.on = function (type, selector, fn) {
    var _context4;

    if (!type) return this; // 没有 selector ，只有 type 和 fn

    if (typeof selector === 'function') {
      fn = selector;
      selector = '';
    }

    return (0, _forEach["default"])(_context4 = this).call(_context4, function (elem) {
      // 没有事件代理
      if (!selector) {
        // 无代理
        elem.addEventListener(type, fn);
        return;
      } // 有事件代理


      var agentFn = function agentFn(e) {
        var target = e.target;

        if (target.matches(selector)) {
          ;
          fn.call(target, e);
        }
      };

      elem.addEventListener(type, agentFn); // 缓存代理事件

      AGENT_EVENTS.push({
        elem: elem,
        selector: selector,
        fn: fn,
        agentFn: agentFn
      });
    });
  };

  DomElement.prototype.off = function (type, selector, fn) {
    var _context5;

    if (!type) return this; // 没有 selector ，只有 type 和 fn

    if (typeof selector === 'function') {
      fn = selector;
      selector = '';
    }

    return (0, _forEach["default"])(_context5 = this).call(_context5, function (elem) {
      // 解绑事件代理
      if (selector) {
        var idx = -1;

        for (var i = 0; i < AGENT_EVENTS.length; i++) {
          var item = AGENT_EVENTS[i];

          if (item.selector === selector && item.fn === fn && item.elem === elem) {
            idx = i;
            break;
          }
        }

        if (idx !== -1) {
          var agentFn = (0, _splice["default"])(AGENT_EVENTS).call(AGENT_EVENTS, idx, 1)[0].agentFn;
          elem.removeEventListener(type, agentFn);
        }
      } else {
        elem.removeEventListener(type, fn);
      }
    });
  };

  DomElement.prototype.attr = function (key, val) {
    var _context6;

    if (val == null) {
      // 获取数据
      return this.elems[0].getAttribute(key) || '';
    } // 否则，设置属性


    return (0, _forEach["default"])(_context6 = this).call(_context6, function (elem) {
      elem.setAttribute(key, val);
    });
  };
  /**
   * 删除 属性
   * @param key key
   */


  DomElement.prototype.removeAttr = function (key) {
    var _context7;

    (0, _forEach["default"])(_context7 = this).call(_context7, function (elem) {
      elem.removeAttribute(key);
    });
  };
  /**
   * 添加 css class
   * @param className css class
   */


  DomElement.prototype.addClass = function (className) {
    var _context8;

    if (!className) {
      return this;
    }

    return (0, _forEach["default"])(_context8 = this).call(_context8, function (elem) {
      if (elem.className) {
        // 当前有 class
        var arr = elem.className.split(/\s/);
        arr = (0, _filter["default"])(arr).call(arr, function (item) {
          return !!(0, _trim["default"])(item).call(item);
        }); // 添加 class

        if ((0, _indexOf["default"])(arr).call(arr, className) < 0) {
          arr.push(className);
        } // 修改 elem.class


        elem.className = arr.join(' ');
      } else {
        // 当前没有 class
        elem.className = className;
      }
    });
  };
  /**
   * 添加 css class
   * @param className css class
   */


  DomElement.prototype.removeClass = function (className) {
    var _context9;

    if (!className) {
      return this;
    }

    return (0, _forEach["default"])(_context9 = this).call(_context9, function (elem) {
      if (!elem.className) {
        // 当前无 class
        return;
      }

      var arr = elem.className.split(/\s/);
      arr = (0, _filter["default"])(arr).call(arr, function (item) {
        item = (0, _trim["default"])(item).call(item); // 删除 class

        if (!item || item === className) {
          return false;
        }

        return true;
      }); // 修改 elem.class

      elem.className = arr.join(' ');
    });
  };
  /**
   * 是否有传入的 css class
   * @param className css class
   */


  DomElement.prototype.hasClass = function (className) {
    if (className === void 0) {
      className = '';
    }

    if (!className) {
      return false;
    }

    var elem = this.elems[0];

    if (!elem.className) {
      // 当前无 class
      return false;
    }

    var arr = elem.className.split(/\s/);
    return (0, _includes["default"])(arr).call(arr, className); // 是否包含
  };

  DomElement.prototype.css = function (key, val) {
    var _context10;

    var currentStyle;

    if (val == '') {
      currentStyle = '';
    } else {
      currentStyle = key + ":" + val + ";";
    }

    return (0, _forEach["default"])(_context10 = this).call(_context10, function (elem) {
      var _context11;

      var style = (0, _trim["default"])(_context11 = elem.getAttribute('style') || '').call(_context11);

      if (style) {
        // 有 style，将 style 按照 `;` 拆分为数组
        var resultArr = _styleArrTrim(style); // 替换现有的 style


        resultArr = (0, _map2["default"])(resultArr).call(resultArr, function (item) {
          if ((0, _indexOf["default"])(item).call(item, key) === 0) {
            return currentStyle;
          } else {
            return item;
          }
        }); // 新增 style

        if (currentStyle != '' && (0, _indexOf["default"])(resultArr).call(resultArr, currentStyle) < 0) {
          resultArr.push(currentStyle);
        } // 去掉 空白


        if (currentStyle == '') {
          resultArr = _styleArrTrim(resultArr);
        } // 重新设置 style


        elem.setAttribute('style', resultArr.join('; '));
      } else {
        // 当前没有 style
        elem.setAttribute('style', currentStyle);
      }
    });
  };
  /**
   * 封装 getBoundingClientRect
   */


  DomElement.prototype.getBoundingClientRect = function () {
    var elem = this.elems[0];
    return elem.getBoundingClientRect();
  };
  /**
   * 显示
   */


  DomElement.prototype.show = function () {
    return this.css('display', 'block');
  };
  /**
   * 隐藏
   */


  DomElement.prototype.hide = function () {
    return this.css('display', 'none');
  };
  /**
   * 获取子节点（只有 DOM 元素）
   */


  DomElement.prototype.children = function () {
    var elem = this.elems[0];

    if (!elem) {
      return null;
    }

    return $(elem.children);
  };
  /**
   * 获取子节点（包括文本节点）
   */


  DomElement.prototype.childNodes = function () {
    var elem = this.elems[0];

    if (!elem) {
      return null;
    }

    return $(elem.childNodes);
  };
  /**
   * 将子元素全部替换
   * @param $children 新的child节点
   */


  DomElement.prototype.replaceChildAll = function ($children) {
    var parent = this.getNode();
    var elem = this.elems[0];

    while (elem.hasChildNodes()) {
      parent.firstChild && elem.removeChild(parent.firstChild);
    }

    this.append($children);
  };
  /**
   * 增加子节点
   * @param $children 子节点
   */


  DomElement.prototype.append = function ($children) {
    var _context12;

    return (0, _forEach["default"])(_context12 = this).call(_context12, function (elem) {
      (0, _forEach["default"])($children).call($children, function (child) {
        elem.appendChild(child);
      });
    });
  };
  /**
   * 移除当前节点
   */


  DomElement.prototype.remove = function () {
    var _context13;

    return (0, _forEach["default"])(_context13 = this).call(_context13, function (elem) {
      if (elem.remove) {
        elem.remove();
      } else {
        var parent_1 = elem.parentElement;
        parent_1 && parent_1.removeChild(elem);
      }
    });
  };
  /**
   * 当前元素，是否包含某个子元素
   * @param $child 子元素
   */


  DomElement.prototype.isContain = function ($child) {
    var elem = this.elems[0];
    var child = $child.elems[0];
    return elem.contains(child);
  };
  /**
   * 获取当前元素的尺寸和位置信息
   */


  DomElement.prototype.getSizeData = function () {
    var elem = this.elems[0]; // 可得到 bottom height left right top width 的数据

    return elem.getBoundingClientRect();
  };
  /**
   * 获取当前元素 nodeName
   */


  DomElement.prototype.getNodeName = function () {
    var elem = this.elems[0];
    return elem.nodeName;
  };
  /**
   * 获取当前元素节点
   */


  DomElement.prototype.getNode = function () {
    var elem = this.elems[0];
    return elem;
  };
  /**
   * 获取当前元素可视高度
   */


  DomElement.prototype.getClientHeight = function () {
    var elem = this.elems[0];
    return elem.clientHeight;
  };
  /**
   * 获取当前元素可视宽度
   */
  // getClientWidth(): number {
  //     const elem = this.elems[0]
  //     return elem.clientWidth
  // }

  /**
   * 查询
   * @param selector css 选择器
   */


  DomElement.prototype.find = function (selector) {
    var elem = this.elems[0];
    return $(elem.querySelectorAll(selector));
  };

  DomElement.prototype.text = function (val) {
    if (!val) {
      // 获取 text
      var elem = this.elems[0];
      return elem.innerHTML.replace(/<[^>]+>/g, function () {
        return '';
      });
    } else {
      var _context14;

      // 设置 text
      return (0, _forEach["default"])(_context14 = this).call(_context14, function (elem) {
        elem.innerHTML = val;
      });
    }
  };

  DomElement.prototype.html = function (val) {
    var elem = this.elems[0];

    if (!val) {
      // 获取 html
      return elem.innerHTML;
    } else {
      // 设置 html
      elem.innerHTML = val;
      return this;
    }
  };
  /**
   * 获取元素 value
   */


  DomElement.prototype.val = function () {
    var _context15;

    var elem = this.elems[0];
    return (0, _trim["default"])(_context15 = elem.value).call(_context15); // 暂用 any
  };
  /**
   * focus 到当前元素
   */


  DomElement.prototype.focus = function () {
    var _context16;

    return (0, _forEach["default"])(_context16 = this).call(_context16, function (elem) {
      elem.focus();
    });
  };
  /**
   * 当前元素前一个兄弟节点
   */


  DomElement.prototype.prev = function () {
    var elem = this.elems[0];
    return $(elem.previousElementSibling);
  };
  /**
   * 当前元素后一个兄弟节点
   */


  DomElement.prototype.next = function () {
    var elem = this.elems[0];
    return $(elem.nextElementSibling);
  };
  /**
   * 获取父元素
   */


  DomElement.prototype.parent = function () {
    var elem = this.elems[0];
    return $(elem.parentElement);
  };

  DomElement.prototype.parentUntil = function (selector, curElem) {
    var elem = curElem || this.elems[0];

    if (elem.nodeName === 'BODY') {
      return null;
    }

    var parent = elem.parentElement;

    if (parent == null) {
      return null;
    }

    if (parent.matches(selector)) {
      // 找到，并返回
      return $(parent);
    } // 继续查找，递归


    return this.parentUntil(selector, parent);
  };
  /**
   * 判读是否相等
   * @param $elem 元素
   */


  DomElement.prototype.equal = function ($elem) {
    if ($elem instanceof DomElement) {
      return this.elems[0] === $elem.elems[0];
    } else if ($elem instanceof HTMLElement) {
      return this.elems[0] === $elem;
    } else {
      return false;
    }
  };
  /**
   * 将该元素插入到某个元素前面
   * @param selector css 选择器
   */


  DomElement.prototype.insertBefore = function (selector) {
    var _context17;

    var $referenceNode = $(selector);
    var referenceNode = $referenceNode.elems[0];

    if (!referenceNode) {
      return this;
    }

    return (0, _forEach["default"])(_context17 = this).call(_context17, function (elem) {
      var parent = referenceNode.parentNode;
      parent.insertBefore(elem, referenceNode);
    });
  };
  /**
   * 将该元素插入到某个元素后面
   * @param selector css 选择器
   */


  DomElement.prototype.insertAfter = function (selector) {
    var _context18;

    var $referenceNode = $(selector);
    var referenceNode = $referenceNode.elems[0];
    var anchorNode = referenceNode && referenceNode.nextSibling;

    if (!referenceNode) {
      return this;
    }

    return (0, _forEach["default"])(_context18 = this).call(_context18, function (elem) {
      var parent = referenceNode.parentNode;

      if (anchorNode) {
        parent.insertBefore(elem, anchorNode);
      } else {
        parent.appendChild(elem);
      }
    });
  };
  /**
   * 设置/获取 数据
   * @param key key
   * @param value value
   */


  DomElement.prototype.data = function (key, value) {
    if (value != null) {
      // 设置数据
      this.dataSource.set(key, value);
    } else {
      // 获取数据
      return this.dataSource.get(key);
    }
  };
  /**
   * 获取当前节点的顶级(段落)
   * @param editor 富文本实例
   */


  DomElement.prototype.getNodeTop = function (editor) {
    if (this.length < 1) {
      return this;
    }

    var $parent = this.parent();

    if (editor.$textElem.equal($parent)) {
      return this;
    }

    return $parent.getNodeTop(editor);
  };
  /**
   * 获取当前 节点 基与上一个拥有相对或者解决定位的父容器的位置
   * @param editor 富文本实例
   */


  DomElement.prototype.getOffsetData = function () {
    var $node = this.elems[0];
    return {
      top: $node.offsetTop,
      left: $node.offsetLeft,
      width: $node.offsetWidth,
      height: $node.offsetHeight,
      parent: $node.offsetParent
    };
  };

  return DomElement;
}();

exports.DomElement = DomElement; // new 一个对象

function $(selector) {
  return new DomElement(selector);
}

exports["default"] = $;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(132);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var getOwnPropertyDescriptor = __webpack_require__(66).f;
var isForced = __webpack_require__(96);
var path = __webpack_require__(11);
var bind = __webpack_require__(45);
var createNonEnumerableProperty = __webpack_require__(16);
var has = __webpack_require__(15);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(302);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(175);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 工具函数集合
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _isArray = _interopRequireDefault(__webpack_require__(115));

var _typeof2 = _interopRequireDefault(__webpack_require__(90));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(119));

var _slice = _interopRequireDefault(__webpack_require__(53));

var _parseInt2 = _interopRequireDefault(__webpack_require__(253));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.toArray = exports.deepClone = exports.isFunction = exports.debounce = exports.throttle = exports.arrForEach = exports.forEach = exports.replaceSpecialSymbol = exports.replaceHtmlSymbol = exports.getRandom = exports.UA = void 0;

var NavUA =
/** @class */
function () {
  function NavUA() {
    this._ua = navigator.userAgent;

    var math = this._ua.match(/(Edge?)\/(\d+)/);

    this.isOldEdge = math && math[1] == 'Edge' && (0, _parseInt2["default"])(math[2]) < 19 ? true : false;
    this.isFirefox = /Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua) ? true : false;
  } // 是否为 IE


  NavUA.prototype.isIE = function () {
    return 'ActiveXObject' in window;
  }; // 是否为 webkit


  NavUA.prototype.isWebkit = function () {
    return /webkit/i.test(this._ua);
  };

  return NavUA;
}(); // 和 UA 相关的属性


exports.UA = new NavUA();
/**
 * 获取随机石
 * @param prefix 前缀
 */

function getRandom(prefix) {
  var _context;

  if (prefix === void 0) {
    prefix = '';
  }

  return prefix + (0, _slice["default"])(_context = Math.random().toString()).call(_context, 2);
}

exports.getRandom = getRandom;
/**
 * 替换 html 特殊字符
 * @param html html 字符串
 */

function replaceHtmlSymbol(html) {
  return html.replace(/</gm, '&lt;').replace(/>/gm, '&gt;').replace(/"/gm, '&quot;').replace(/(\r\n|\r|\n)/g, '<br/>');
}

exports.replaceHtmlSymbol = replaceHtmlSymbol;

function replaceSpecialSymbol(value) {
  return value.replace(/&lt;/gm, '<').replace(/&gt;/gm, '>').replace(/&quot;/gm, '"');
}

exports.replaceSpecialSymbol = replaceSpecialSymbol;
/**
 * 遍历对象或数组，执行回调函数
 * @param obj 对象或数组
 * @param fn 回调函数 (key, val) => {...}
 */

function forEach(obj, fn) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var result = fn(key, obj[key]);

      if (result === false) {
        // 提前终止循环
        break;
      }
    }
  }
}

exports.forEach = forEach;
/**
 * 遍历类数组
 * @param fakeArr 类数组
 * @param fn 回调函数
 */

function arrForEach(fakeArr, fn) {
  var i, item, result;
  var length = fakeArr.length || 0;

  for (i = 0; i < length; i++) {
    item = fakeArr[i];
    result = fn.call(fakeArr, item, i);

    if (result === false) {
      break;
    }
  }
}

exports.arrForEach = arrForEach;
/**
 * 节流
 * @param fn 函数
 * @param interval 间隔时间，毫秒
 */

function throttle(fn, interval) {
  if (interval === void 0) {
    interval = 200;
  }

  var flag = false;
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (!flag) {
      flag = true;
      (0, _setTimeout2["default"])(function () {
        flag = false;
        fn.call.apply(fn, __spreadArrays([null], args)); // this 报语法错误，先用 null
      }, interval);
    }
  };
}

exports.throttle = throttle;
/**
 * 防抖
 * @param fn 函数
 * @param delay 间隔时间，毫秒
 */

function debounce(fn, delay) {
  if (delay === void 0) {
    delay = 200;
  }

  var lastFn = 0;
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (lastFn) {
      window.clearTimeout(lastFn);
    }

    lastFn = window.setTimeout(function () {
      lastFn = 0;
      fn.call.apply(fn, __spreadArrays([null], args)); // this 报语法错误，先用 null
    }, delay);
  };
}

exports.debounce = debounce;
/**
 * isFunction 是否是函数
 * @param fn 函数
 */

function isFunction(fn) {
  return typeof fn === 'function';
}

exports.isFunction = isFunction;
/**
 * 引用与非引用值 深拷贝方法
 * @param data
 */

function deepClone(data) {
  if ((0, _typeof2["default"])(data) !== 'object' || typeof data == 'function' || data === null) {
    return data;
  }

  var item;

  if ((0, _isArray["default"])(data)) {
    item = [];
  }

  if (!(0, _isArray["default"])(data)) {
    item = {};
  }

  for (var i in data) {
    if (Object.prototype.hasOwnProperty.call(data, i)) {
      item[i] = deepClone(data[i]);
    }
  }

  return item;
}

exports.deepClone = deepClone;
/**
 * 将可遍历的对象转换为数组
 * @param data 可遍历的对象
 */

function toArray(data) {
  return (0, _slice["default"])(Array.prototype).call(data);
}

exports.toArray = toArray;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(131)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var shared = __webpack_require__(72);
var has = __webpack_require__(15);
var uid = __webpack_require__(60);
var NATIVE_SYMBOL = __webpack_require__(76);
var USE_SYMBOL_AS_UID = __webpack_require__(99);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(11);
var has = __webpack_require__(15);
var wrappedWellKnownSymbolModule = __webpack_require__(91);
var defineProperty = __webpack_require__(17).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var definePropertyModule = __webpack_require__(17);
var createPropertyDescriptor = __webpack_require__(32);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(95);
var anObject = __webpack_require__(23);
var toPrimitive = __webpack_require__(56);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(11);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(205);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 下拉菜单 Class
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var Menu_1 = __importDefault(__webpack_require__(92));

var DropList_1 = __importDefault(__webpack_require__(124));

var DropListMenu =
/** @class */
function (_super) {
  __extends(DropListMenu, _super);

  function DropListMenu($elem, editor, conf) {
    var _this = _super.call(this, $elem, editor) || this; // 国际化


    conf.title = editor.i18next.t("menus.dropListMenu." + conf.title); // 非中文模式下 带 icon 的下拉列表居左

    var className = editor.config.lang === 'zh-CN' ? '' : 'w-e-drop-list-tl';

    if (className !== '' && conf.type === 'list') {
      var _context;

      (0, _forEach["default"])(_context = conf.list).call(_context, function (item) {
        var $elem = item.$elem;
        var $children = dom_core_1["default"]($elem.children());

        if ($children.length > 0) {
          var nodeName = $children === null || $children === void 0 ? void 0 : $children.getNodeName();

          if (nodeName && nodeName === 'I') {
            $elem.addClass(className);
          }
        }
      });
    } // 初始化 dropList


    var dropList = new DropList_1["default"](_this, conf);
    _this.dropList = dropList; // 绑定事件

    $elem.on('mouseenter', function () {
      var _context2;

      if (editor.selection.getRange() == null) {
        return;
      }

      $elem.css('z-index', editor.zIndex.get('menu')); // 触发 droplist 悬浮事件

      (0, _forEach["default"])(_context2 = editor.txt.eventHooks.dropListMenuHoverEvents).call(_context2, function (fn) {
        return fn();
      }); // 显示

      dropList.showTimeoutId = window.setTimeout(function () {
        dropList.show();
      }, 200);
    }).on('mouseleave', function () {
      $elem.css('z-index', 'auto'); // 隐藏

      dropList.hideTimeoutId = window.setTimeout(function () {
        dropList.hide();
      });
    });
    return _this;
  }

  return DropListMenu;
}(Menu_1["default"]);

exports["default"] = DropListMenu;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 按钮菜单 Class
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var Menu_1 = __importDefault(__webpack_require__(92));

var BtnMenu =
/** @class */
function (_super) {
  __extends(BtnMenu, _super);

  function BtnMenu($elem, editor) {
    return _super.call(this, $elem, editor) || this;
  }

  return BtnMenu;
}(Menu_1["default"]);

exports["default"] = BtnMenu;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(67);
var requireObjectCoercible = __webpack_require__(44);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var fails = __webpack_require__(12);
var has = __webpack_require__(15);

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description panel class
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _set = _interopRequireDefault(__webpack_require__(122));

var _find = _interopRequireDefault(__webpack_require__(54));

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var const_1 = __webpack_require__(30);

var Panel =
/** @class */
function () {
  function Panel(menu, conf) {
    this.menu = menu;
    this.conf = conf;
    this.$container = dom_core_1["default"]('<div class="w-e-panel-container"></div>'); // 隐藏 panel

    var editor = menu.editor;
    editor.txt.eventHooks.clickEvents.push(Panel.hideCurAllPanels);
    editor.txt.eventHooks.toolbarClickEvents.push(Panel.hideCurAllPanels);
    editor.txt.eventHooks.dropListMenuHoverEvents.push(Panel.hideCurAllPanels);
  }
  /**
   * 创建并展示 panel
   */


  Panel.prototype.create = function () {
    var _this = this;

    var menu = this.menu;

    if (Panel.createdMenus.has(menu)) {
      // 创建过了
      return;
    }

    var conf = this.conf; // panel 的容器

    var $container = this.$container;
    var width = conf.width || 300; // 默认 300px

    var rect = menu.editor.$toolbarElem.getBoundingClientRect();
    var menuRect = menu.$elem.getBoundingClientRect();
    var top = rect.height + rect.top - menuRect.top;
    var left = (rect.width - width) / 2 + rect.left - menuRect.left;
    $container.css('width', width + 'px').css('margin-top', top + "px").css('margin-left', left + "px").css('z-index', menu.editor.zIndex.get('panel')); // 添加关闭按钮

    var $closeBtn = dom_core_1["default"]('<i class="w-e-icon-close w-e-panel-close"></i>');
    $container.append($closeBtn);
    $closeBtn.on('click', function () {
      _this.remove();
    }); // 准备 tabs 容器

    var $tabTitleContainer = dom_core_1["default"]('<ul class="w-e-panel-tab-title"></ul>');
    var $tabContentContainer = dom_core_1["default"]('<div class="w-e-panel-tab-content"></div>');
    $container.append($tabTitleContainer).append($tabContentContainer); // 设置高度

    var height = conf.height; // height: 0 即不用设置

    if (height) {
      $tabContentContainer.css('height', height + 'px').css('overflow-y', 'auto');
    } // tabs


    var tabs = conf.tabs || [];
    var tabTitleArr = [];
    var tabContentArr = [];
    (0, _forEach["default"])(tabs).call(tabs, function (tab, tabIndex) {
      if (!tab) {
        return;
      }

      var title = tab.title || '';
      var tpl = tab.tpl || ''; // 添加到 DOM

      var $title = dom_core_1["default"]("<li class=\"w-e-item\">" + title + "</li>");
      $tabTitleContainer.append($title);
      var $content = dom_core_1["default"](tpl);
      $tabContentContainer.append($content); // 记录到内存

      tabTitleArr.push($title);
      tabContentArr.push($content); // 设置 active 项

      if (tabIndex === 0) {
        $title.data('active', true);
        $title.addClass('w-e-active');
      } else {
        $content.hide();
      } // 绑定 tab 的事件


      $title.on('click', function () {
        if ($title.data('active')) {
          return;
        } // 隐藏所有的 tab


        (0, _forEach["default"])(tabTitleArr).call(tabTitleArr, function ($title) {
          $title.data('active', false);
          $title.removeClass('w-e-active');
        });
        (0, _forEach["default"])(tabContentArr).call(tabContentArr, function ($content) {
          $content.hide();
        }); // 显示当前的 tab

        $title.data('active', true);
        $title.addClass('w-e-active');
        $content.show();
      });
    }); // 绑定关闭事件

    $container.on('click', function (e) {
      // 点击时阻止冒泡
      e.stopPropagation();
    }); // 添加到 DOM

    menu.$elem.append($container); // 绑定 conf events 的事件，只有添加到 DOM 之后才能绑定成功

    (0, _forEach["default"])(tabs).call(tabs, function (tab, index) {
      if (!tab) {
        return;
      }

      var events = tab.events || [];
      (0, _forEach["default"])(events).call(events, function (event) {
        var selector = event.selector;
        var type = event.type;
        var fn = event.fn || const_1.EMPTY_FN;
        var $content = tabContentArr[index];
        (0, _find["default"])($content).call($content, selector).on(type, function (e) {
          e.stopPropagation();
          var needToHide = fn(e); // 执行完事件之后，是否要关闭 panel

          if (needToHide) {
            _this.remove();
          }
        });
      });
    }); // focus 第一个 elem

    var $inputs = (0, _find["default"])($container).call($container, 'input[type=text],textarea');

    if ($inputs.length) {
      $inputs.get(0).focus();
    } // 隐藏其他 panel


    Panel.hideCurAllPanels(); // 记录该 menu 已经创建了 panel

    menu.setPanel(this);
    Panel.createdMenus.add(menu);
  };
  /**
   * 移除 penal
   */


  Panel.prototype.remove = function () {
    var menu = this.menu;
    var $container = this.$container;

    if ($container) {
      $container.remove();
    } // 将该 menu 记录中移除


    Panel.createdMenus["delete"](menu);
  };
  /**
   * 隐藏当前所有的 panel
   */


  Panel.hideCurAllPanels = function () {
    var _context;

    if (Panel.createdMenus.size === 0) {
      return;
    }

    (0, _forEach["default"])(_context = Panel.createdMenus).call(_context, function (menu) {
      var panel = menu.panel;
      panel && panel.remove();
    });
  }; // 记录已经创建过的 panelMenu


  Panel.createdMenus = new _set["default"]();
  return Panel;
}();

exports["default"] = Panel;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(11);
var global = __webpack_require__(8);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 常亮
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.urlRegex = exports.imgRegex = exports.EMPTY_FN = void 0;

function EMPTY_FN() {}

exports.EMPTY_FN = EMPTY_FN; //用于校验图片链接是否符合规范

exports.imgRegex = /\.(gif|jpg|jpeg|png)$/i; //用于校验是否为url格式字符串

exports.urlRegex = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description Modal 菜单 Class
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var Menu_1 = __importDefault(__webpack_require__(92));

var PanelMenu =
/** @class */
function (_super) {
  __extends(PanelMenu, _super);

  function PanelMenu($elem, editor) {
    return _super.call(this, $elem, editor) || this;
  }
  /**
   * 给 menu 设置 panel
   * @param panel panel 实例
   */


  PanelMenu.prototype.setPanel = function (panel) {
    this.panel = panel;
  };

  return PanelMenu;
}(Menu_1["default"]);

exports["default"] = PanelMenu;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(58);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(44);

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var isArrayIteratorMethod = __webpack_require__(158);
var toLength = __webpack_require__(33);
var bind = __webpack_require__(45);
var getIteratorMethod = __webpack_require__(159);
var iteratorClose = __webpack_require__(160);

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(77);
var defineProperty = __webpack_require__(17).f;
var createNonEnumerableProperty = __webpack_require__(16);
var has = __webpack_require__(15);
var toString = __webpack_require__(162);
var wellKnownSymbol = __webpack_require__(9);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!has(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(166);
var global = __webpack_require__(8);
var isObject = __webpack_require__(13);
var createNonEnumerableProperty = __webpack_require__(16);
var objectHas = __webpack_require__(15);
var shared = __webpack_require__(73);
var sharedKey = __webpack_require__(59);
var hiddenKeys = __webpack_require__(47);

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(45);
var IndexedObject = __webpack_require__(67);
var toObject = __webpack_require__(35);
var toLength = __webpack_require__(33);
var arraySpeciesCreate = __webpack_require__(85);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(210);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description Tooltip class
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var Tooltip =
/** @class */
function () {
  function Tooltip(editor, $elem, conf) {
    this.editor = editor;
    this.$targetElem = $elem;
    this.conf = conf;
    this._show = false;
    this._isInsertTextContainer = false; // 定义 container

    var $container = dom_core_1["default"]('<div></div>');
    $container.addClass('w-e-tooltip');
    this.$container = $container;
  }
  /**
   * 获取 tooltip 定位
   */


  Tooltip.prototype.getPositionData = function () {
    var $container = this.$container;
    var top = 0;
    var left = 0; // tooltip 的高度

    var tooltipHeight = 20; // 网页的 scrollTop

    var pageScrollTop = document.documentElement.scrollTop; // 目标元素的 rect

    var targetElemRect = this.$targetElem.getBoundingClientRect(); // 编辑区域的 rect

    var textElemRect = this.editor.$textElem.getBoundingClientRect(); // 获取基于 textContainerElem 的 位置信息

    var targetOffset = this.$targetElem.getOffsetData();
    var targetParentElem = dom_core_1["default"](targetOffset.parent); // 获取 编辑区域的滚动条信息

    var scrollTop = this.editor.$textElem.elems[0].scrollTop; // 是否插入 textContainer 中

    this._isInsertTextContainer = targetParentElem.equal(this.editor.$textContainerElem);

    if (this._isInsertTextContainer) {
      // 父容器的高度
      var targetParentElemHeight = targetParentElem.getClientHeight(); // 相对于父容器的位置信息

      var offsetTop = targetOffset.top,
          offsetLeft = targetOffset.left,
          offsetHeight = targetOffset.height; // 元素基于父容器的 绝对top信息

      var absoluteTop = offsetTop - scrollTop;

      if (absoluteTop > tooltipHeight + 5) {
        // 说明模板元素的顶部空间足够
        top = absoluteTop - tooltipHeight - 15;
        $container.addClass('w-e-tooltip-up');
      } else if (absoluteTop + offsetHeight + tooltipHeight < targetParentElemHeight) {
        // 说明模板元素的底部空间足够
        top = absoluteTop + offsetHeight + 10;
        $container.addClass('w-e-tooltip-down');
      } else {
        // 其他情况，tooltip 放在目标元素左上角
        top = (absoluteTop > 0 ? absoluteTop : 0) + tooltipHeight + 10;
        $container.addClass('w-e-tooltip-down');
      } // 计算 left


      if (offsetLeft < 0) {
        left = 0;
      } else {
        left = offsetLeft;
      }
    } else {
      if (targetElemRect.top < tooltipHeight) {
        // 说明目标元素的顶部，因滑动隐藏在浏览器上方。tooltip 要放在目标元素下面
        top = targetElemRect.bottom + pageScrollTop + 5; // 5px 间距

        $container.addClass('w-e-tooltip-down');
      } else if (targetElemRect.top - textElemRect.top < tooltipHeight) {
        // 说明目标元素的顶部，因滑动隐藏在编辑区域上方。tooltip 要放在目标元素下面
        top = targetElemRect.bottom + pageScrollTop + 5; // 5px 间距

        $container.addClass('w-e-tooltip-down');
      } else {
        // 其他情况，tooltip 放在目标元素上方
        top = targetElemRect.top + pageScrollTop - tooltipHeight - 15; // 减去 toolbar 的高度，还有 15px 间距

        $container.addClass('w-e-tooltip-up');
      } // 计算 left


      if (targetElemRect.left < 0) {
        left = 0;
      } else {
        left = targetElemRect.left;
      }
    } // 返回结果


    return {
      top: top,
      left: left
    };
  };
  /**
   * 添加 tooltip 菜单
   */


  Tooltip.prototype.appendMenus = function () {
    var _this = this;

    var conf = this.conf;
    var editor = this.editor;
    var $targetElem = this.$targetElem;
    var $container = this.$container;
    var length = conf.length;
    (0, _forEach["default"])(conf).call(conf, function (item, index) {
      // 添加元素
      var $elem = item.$elem;
      var $wrapper = dom_core_1["default"]('<div></div>');
      $wrapper.addClass('w-e-tooltip-item-wrapper ');
      $wrapper.append($elem);
      $container.append($wrapper); // 绑定点击事件

      $elem.on('click', function (e) {
        e.preventDefault();
        var res = item.onClick(editor, $targetElem);
        if (res) _this.remove();
      });
    });
  };
  /**
   * 创建 tooltip
   */


  Tooltip.prototype.create = function () {
    var editor = this.editor;
    var $container = this.$container; // 生成 container 的内容

    this.appendMenus(); // 设置定位

    var _a = this.getPositionData(),
        top = _a.top,
        left = _a.left;

    $container.css('top', top + "px");
    $container.css('left', left + "px"); // 设置 z-index

    $container.css('z-index', editor.zIndex.get('tooltip')); // 添加到 DOM

    if (this._isInsertTextContainer) {
      this.editor.$textContainerElem.append($container);
    } else {
      dom_core_1["default"]('body').append($container);
    }

    this._show = true;
  };
  /**
   * 移除该 tooltip
   */


  Tooltip.prototype.remove = function () {
    this.$container.remove();
    this._show = false;
  };

  (0, _defineProperty["default"])(Tooltip.prototype, "isShow", {
    /**
     * 是否显示
     */
    get: function get() {
      return this._show;
    },
    enumerable: false,
    configurable: true
  });
  return Tooltip;
}();

exports["default"] = Tooltip;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(28);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var defineProperties = __webpack_require__(135);
var enumBugKeys = __webpack_require__(71);
var hiddenKeys = __webpack_require__(47);
var html = __webpack_require__(98);
var documentCreateElement = __webpack_require__(68);
var sharedKey = __webpack_require__(59);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(16);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(172);
var DOMIterables = __webpack_require__(173);
var global = __webpack_require__(8);
var classof = __webpack_require__(61);
var createNonEnumerableProperty = __webpack_require__(16);
var Iterators = __webpack_require__(37);
var wellKnownSymbol = __webpack_require__(9);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(43);

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);
var wellKnownSymbol = __webpack_require__(9);
var V8_VERSION = __webpack_require__(82);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(197);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(249);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(276);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(97);
var enumBugKeys = __webpack_require__(71);

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(72);
var uid = __webpack_require__(60);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(77);
var classofRaw = __webpack_require__(43);
var wellKnownSymbol = __webpack_require__(9);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(28);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(170).charAt;
var InternalStateModule = __webpack_require__(39);
var defineIterator = __webpack_require__(83);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 65 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var propertyIsEnumerableModule = __webpack_require__(55);
var createPropertyDescriptor = __webpack_require__(32);
var toIndexedObject = __webpack_require__(25);
var toPrimitive = __webpack_require__(56);
var has = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(95);

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);
var classof = __webpack_require__(43);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var isObject = __webpack_require__(13);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(25);
var toLength = __webpack_require__(33);
var toAbsoluteIndex = __webpack_require__(70);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(58);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(34);
var store = __webpack_require__(73);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.7.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var setGlobal = __webpack_require__(136);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var toObject = __webpack_require__(35);
var sharedKey = __webpack_require__(59);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(156);

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var aPossiblePrototype = __webpack_require__(157);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(29);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(43);
var global = __webpack_require__(8);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var userAgent = __webpack_require__(79);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var createIteratorConstructor = __webpack_require__(171);
var getPrototypeOf = __webpack_require__(74);
var setPrototypeOf = __webpack_require__(75);
var setToStringTag = __webpack_require__(38);
var createNonEnumerableProperty = __webpack_require__(16);
var redefine = __webpack_require__(48);
var wellKnownSymbol = __webpack_require__(9);
var IS_PURE = __webpack_require__(34);
var Iterators = __webpack_require__(37);
var IteratorsCore = __webpack_require__(108);

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var isArray = __webpack_require__(50);
var wellKnownSymbol = __webpack_require__(9);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(189);

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(193);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(56);
var definePropertyModule = __webpack_require__(17);
var createPropertyDescriptor = __webpack_require__(32);

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(44);
var whitespaces = __webpack_require__(65);

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(217);

var _Symbol = __webpack_require__(220);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);

exports.f = wellKnownSymbol;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description Menu class 父类
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var Panel_1 = __importDefault(__webpack_require__(27));

var Menu =
/** @class */
function () {
  function Menu($elem, editor) {
    var _this = this;

    this.$elem = $elem;
    this.editor = editor;
    this._active = false; // 绑定菜单点击事件

    $elem.on('click', function (e) {
      var _context;

      Panel_1["default"].hideCurAllPanels(); // 隐藏当前的所有 Panel
      // 触发菜单点击的钩子

      (0, _forEach["default"])(_context = editor.txt.eventHooks.menuClickEvents).call(_context, function (fn) {
        return fn();
      });
      e.stopPropagation();

      if (editor.selection.getRange() == null) {
        return;
      }

      _this.clickHandler(e);
    });
  }
  /**
   * 菜单点击事件，子类可重写
   * @param e event
   */


  Menu.prototype.clickHandler = function (e) {};
  /**
   * 激活菜单，高亮显示
   */


  Menu.prototype.active = function () {
    this._active = true;
    this.$elem.addClass('w-e-active');
  };
  /**
   * 取消激活，不再高亮显示
   */


  Menu.prototype.unActive = function () {
    this._active = false;
    this.$elem.removeClass('w-e-active');
  };

  (0, _defineProperty["default"])(Menu.prototype, "isActive", {
    /**
     * 是否处于激活状态
     */
    get: function get() {
      return this._active;
    },
    enumerable: false,
    configurable: true
  });
  return Menu;
}();

exports["default"] = Menu;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 上传图片
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _indexOf = _interopRequireDefault(__webpack_require__(52));

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _bind = _interopRequireDefault(__webpack_require__(123));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(7);

var upload_core_1 = __importDefault(__webpack_require__(325));

var progress_1 = __importDefault(__webpack_require__(326));

var UploadImg =
/** @class */
function () {
  function UploadImg(editor) {
    this.editor = editor;
  }
  /**
   * 提示信息
   * @param alertInfo alert info
   * @param debugInfo debug info
   */


  UploadImg.prototype.alert = function (alertInfo, debugInfo) {
    var customAlert = this.editor.config.customAlert;

    if (customAlert) {
      customAlert(alertInfo);
    } else {
      window.alert(alertInfo);
    }

    if (debugInfo) {
      console.error('wangEditor: ' + debugInfo);
    }
  };
  /**
   * 往编辑区域插入图片
   * @param src 图片地址
   */


  UploadImg.prototype.insertImg = function (src) {
    var _this_1 = this;

    var editor = this.editor;
    var config = editor.config;
    var i18nPrefix = 'validate.';

    var t = function t(text, prefix) {
      if (prefix === void 0) {
        prefix = i18nPrefix;
      }

      return editor.i18next.t(prefix + text);
    }; // 先插入图片，无论是否能成功


    editor.cmd["do"]('insertHTML', "<img src=\"" + src + "\" style=\"max-width:100%;\"/>"); // 执行回调函数

    config.linkImgCallback(src); // 加载图片

    var img = document.createElement('img');

    img.onload = function () {
      img = null;
    };

    img.onerror = function () {
      _this_1.alert(t('插入图片错误'), "wangEditor: " + t('插入图片错误') + "\uFF0C" + t('图片链接') + " \"" + src + "\"\uFF0C" + t('下载链接失败'));

      img = null;
    };

    img.onabort = function () {
      return img = null;
    };

    img.src = src;
  };
  /**
   * 上传图片
   * @param files 文件列表
   */


  UploadImg.prototype.uploadImg = function (files) {
    var _this_1 = this;

    if (!files.length) {
      return;
    }

    var editor = this.editor;
    var config = editor.config; // ------------------------------ i18next ------------------------------

    var i18nPrefix = 'validate.';

    var t = function t(text) {
      return editor.i18next.t(i18nPrefix + text);
    }; // ------------------------------ 获取配置信息 ------------------------------
    // 服务端地址


    var uploadImgServer = config.uploadImgServer; // base64 格式

    var uploadImgShowBase64 = config.uploadImgShowBase64; // 图片最大体积

    var maxSize = config.uploadImgMaxSize;
    var maxSizeM = maxSize / 1024 / 1024; // 一次最多上传图片数量

    var maxLength = config.uploadImgMaxLength; // 自定义 fileName

    var uploadFileName = config.uploadFileName; // 自定义参数

    var uploadImgParams = config.uploadImgParams; // 参数拼接到 url 中

    var uploadImgParamsWithUrl = config.uploadImgParamsWithUrl; // 自定义 header

    var uploadImgHeaders = config.uploadImgHeaders; // 钩子函数

    var hooks = config.uploadImgHooks; // 上传图片超时时间

    var timeout = config.uploadImgTimeout; // 跨域带 cookie

    var withCredentials = config.withCredentials; // 自定义上传图片

    var customUploadImg = config.customUploadImg;

    if (!customUploadImg) {
      // 没有 customUploadImg 的情况下，需要如下两个配置才能继续进行图片上传
      if (!uploadImgServer && !uploadImgShowBase64) {
        return;
      }
    } // ------------------------------ 验证文件信息 ------------------------------


    var resultFiles = [];
    var errInfos = [];
    util_1.arrForEach(files, function (file) {
      var name = file.name;
      var size = file.size; // chrome 低版本 name === undefined

      if (!name || !size) {
        return;
      }

      if (/\.(jpg|jpeg|png|bmp|gif|webp)$/i.test(name) === false) {
        // 后缀名不合法，不是图片
        errInfos.push("\u3010" + name + "\u3011" + t('不是图片'));
        return;
      }

      if (maxSize < size) {
        // 上传图片过大
        errInfos.push("\u3010" + name + "\u3011" + t('大于') + " " + maxSizeM + "M");
        return;
      } // 验证通过的加入结果列表


      resultFiles.push(file);
    }); // 抛出验证信息

    if (errInfos.length) {
      this.alert(t('图片验证未通过') + ": \n" + errInfos.join('\n'));
      return;
    }

    if (resultFiles.length > maxLength) {
      this.alert(t('一次最多上传') + maxLength + t('张图片'));
      return;
    } // ------------------------------ 自定义上传 ------------------------------


    if (customUploadImg && typeof customUploadImg === 'function') {
      var _context;

      customUploadImg(resultFiles, (0, _bind["default"])(_context = this.insertImg).call(_context, this)); // 阻止以下代码执行，重要！！！

      return;
    } // ------------------------------ 上传图片 ------------------------------
    // 添加图片数据


    var formData = new FormData();
    (0, _forEach["default"])(resultFiles).call(resultFiles, function (file, index) {
      var name = uploadFileName || file.name;

      if (resultFiles.length > 1) {
        // 多个文件时，filename 不能重复
        name = name + (index + 1);
      }

      formData.append(name, file);
    });

    if (uploadImgServer) {
      // 添加自定义参数
      var uploadImgServerArr = uploadImgServer.split('#');
      uploadImgServer = uploadImgServerArr[0];
      var uploadImgServerHash = uploadImgServerArr[1] || '';
      (0, _forEach["default"])(util_1).call(util_1, uploadImgParams, function (key, val) {
        // 因使用者反应，自定义参数不能默认 encode ，由 v3.1.1 版本开始注释掉
        // val = encodeURIComponent(val)
        // 第一，将参数拼接到 url 中
        if (uploadImgParamsWithUrl) {
          if ((0, _indexOf["default"])(uploadImgServer).call(uploadImgServer, '?') > 0) {
            uploadImgServer += '&';
          } else {
            uploadImgServer += '?';
          }

          uploadImgServer = uploadImgServer + key + '=' + val;
        } // 第二，将参数添加到 formData 中


        formData.append(key, val);
      });

      if (uploadImgServerHash) {
        uploadImgServer += '#' + uploadImgServerHash;
      } // 开始上传


      var xhr = upload_core_1["default"](uploadImgServer, {
        timeout: timeout,
        formData: formData,
        headers: uploadImgHeaders,
        withCredentials: !!withCredentials,
        beforeSend: function beforeSend(xhr) {
          if (hooks.before) return hooks.before(xhr, editor, resultFiles);
        },
        onTimeout: function onTimeout(xhr) {
          _this_1.alert(t('上传图片超时'));

          if (hooks.timeout) hooks.timeout(xhr, editor);
        },
        onProgress: function onProgress(percent, e) {
          var progressBar = new progress_1["default"](editor);

          if (e.lengthComputable) {
            percent = e.loaded / e.total;
            progressBar.show(percent);
          }
        },
        onError: function onError(xhr) {
          _this_1.alert(t('上传图片错误'), t('上传图片错误') + "\uFF0C" + t('服务器返回状态') + ": " + xhr.status);

          if (hooks.error) hooks.error(xhr, editor);
        },
        onFail: function onFail(xhr, resultStr) {
          _this_1.alert(t('上传图片失败'), t('上传图片返回结果错误') + ("\uFF0C" + t('返回结果') + ": ") + resultStr);

          if (hooks.fail) hooks.fail(xhr, editor, resultStr);
        },
        onSuccess: function onSuccess(xhr, result) {
          if (hooks.customInsert) {
            var _context2;

            // 自定义插入图片
            hooks.customInsert((0, _bind["default"])(_context2 = _this_1.insertImg).call(_context2, _this_1), result, editor);
            return;
          }

          if (result.errno != '0') {
            // 返回格式不对，应该为 { errno: 0, data: [...] }
            _this_1.alert(t('上传图片失败'), t('上传图片返回结果错误') + "\uFF0C" + t('返回结果') + " errno=" + result.errno);

            if (hooks.fail) hooks.fail(xhr, editor, result);
            return;
          } // 成功，插入图片


          var data = result.data;
          (0, _forEach["default"])(data).call(data, function (link) {
            _this_1.insertImg(link);
          }); // 钩子函数

          if (hooks.success) hooks.success(xhr, editor, result);
        }
      });

      if (typeof xhr === 'string') {
        // 上传被阻止
        this.alert(xhr);
      } // 阻止以下代码执行，重要！！！


      return;
    } // ------------------------------ 显示 base64 格式 ------------------------------


    if (uploadImgShowBase64) {
      util_1.arrForEach(files, function (file) {
        var _this = _this_1;
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
          if (!this.result) return;

          _this.insertImg(this.result.toString());
        };
      });
    }
  };

  return UploadImg;
}();

exports["default"] = UploadImg;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 双栈实现撤销恢复
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var stack_1 = __webpack_require__(383);

var Cache =
/** @class */
function () {
  function Cache(maxSize) {
    this.maxSize = maxSize;
    /**
     * 上一步操作是否为 撤销/恢复
     */

    this.isRe = false;
    this.data = new stack_1.CeilStack(maxSize);
    this.revokeData = new stack_1.CeilStack(maxSize);
  }

  (0, _defineProperty["default"])(Cache.prototype, "size", {
    /**
     * 返回当前栈中的数据长度。格式为：[正常的数据的条数，被撤销的数据的条数]
     */
    get: function get() {
      return [this.data.size, this.revokeData.size];
    },
    enumerable: false,
    configurable: true
  });
  /**
   * 重设数据缓存器的缓存长度（第一次有效）
   */

  Cache.prototype.resetMaxSize = function (maxSize) {
    this.data.resetMax(maxSize);
    this.revokeData.resetMax(maxSize);
  };
  /**
   * 保存数据
   */


  Cache.prototype.save = function (data) {
    if (this.isRe) {
      this.revokeData.clear();
      this.isRe = false;
    }

    this.data.instack(data);
    return this;
  };
  /**
   * 撤销
   * @param fn 撤销时，如果有数据，执行的回调函数
   */


  Cache.prototype.revoke = function (fn) {
    !this.isRe && (this.isRe = true);
    var data = this.data.outstack();

    if (data) {
      this.revokeData.instack(data);
      fn(data);
      return true;
    }

    return false;
  };
  /**
   * 恢复
   * @param fn 恢复时，如果有数据，执行的回调函数
   */


  Cache.prototype.restore = function (fn) {
    !this.isRe && (this.isRe = true);
    var data = this.revokeData.outstack();

    if (data) {
      this.data.instack(data);
      fn(data);
      return true;
    }

    return false;
  };

  return Cache;
}();

exports["default"] = Cache;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var fails = __webpack_require__(12);
var createElement = __webpack_require__(68);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var toIndexedObject = __webpack_require__(25);
var indexOf = __webpack_require__(69).indexOf;
var hiddenKeys = __webpack_require__(47);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(29);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(76);

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);

module.exports = global.Promise;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(48);

module.exports = function (target, src, options) {
  for (var key in src) {
    if (options && options.unsafe && target[key]) target[key] = src[key];
    else redefine(target, key, src[key], options);
  } return target;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(29);
var definePropertyModule = __webpack_require__(17);
var wellKnownSymbol = __webpack_require__(9);
var DESCRIPTORS = __webpack_require__(14);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(73);

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var aFunction = __webpack_require__(28);
var wellKnownSymbol = __webpack_require__(9);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var fails = __webpack_require__(12);
var bind = __webpack_require__(45);
var html = __webpack_require__(98);
var createElement = __webpack_require__(68);
var IS_IOS = __webpack_require__(106);
var IS_NODE = __webpack_require__(80);

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(79);

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);
var isObject = __webpack_require__(13);
var newPromiseCapability = __webpack_require__(63);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(74);
var createNonEnumerableProperty = __webpack_require__(16);
var has = __webpack_require__(15);
var wellKnownSymbol = __webpack_require__(9);
var IS_PURE = __webpack_require__(34);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(12);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(180);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(201);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var global = __webpack_require__(8);
var InternalMetadataModule = __webpack_require__(113);
var fails = __webpack_require__(12);
var createNonEnumerableProperty = __webpack_require__(16);
var iterate = __webpack_require__(36);
var anInstance = __webpack_require__(78);
var isObject = __webpack_require__(13);
var setToStringTag = __webpack_require__(38);
var defineProperty = __webpack_require__(17).f;
var forEach = __webpack_require__(40).forEach;
var DESCRIPTORS = __webpack_require__(14);
var InternalStateModule = __webpack_require__(39);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var exported = {};
  var Constructor;

  if (!DESCRIPTORS || typeof NativeConstructor != 'function'
    || !(IS_WEAK || NativePrototype.forEach && !fails(function () { new NativeConstructor().entries().next(); }))
  ) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else {
    Constructor = wrapper(function (target, iterable) {
      setInternalState(anInstance(target, Constructor, CONSTRUCTOR_NAME), {
        type: CONSTRUCTOR_NAME,
        collection: new NativeConstructor()
      });
      if (iterable != undefined) iterate(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    forEach(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
        createNonEnumerableProperty(Constructor.prototype, KEY, function (a, b) {
          var collection = getInternalState(this).collection;
          if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
          var result = collection[KEY](a === 0 ? 0 : a, b);
          return IS_ADDER ? this : result;
        });
      }
    });

    IS_WEAK || defineProperty(Constructor.prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).collection.size;
      }
    });
  }

  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: true }, exported);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(47);
var isObject = __webpack_require__(13);
var has = __webpack_require__(15);
var defineProperty = __webpack_require__(17).f;
var uid = __webpack_require__(60);
var FREEZING = __webpack_require__(204);

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(17).f;
var create = __webpack_require__(46);
var redefineAll = __webpack_require__(101);
var bind = __webpack_require__(45);
var anInstance = __webpack_require__(78);
var iterate = __webpack_require__(36);
var defineIterator = __webpack_require__(83);
var setSpecies = __webpack_require__(102);
var DESCRIPTORS = __webpack_require__(14);
var fastKey = __webpack_require__(113).fastKey;
var InternalStateModule = __webpack_require__(39);

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(214);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(97);
var enumBugKeys = __webpack_require__(71);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 118 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(247);

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 样式配置
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports["default"] = {
  zIndex: 10000
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 处理粘贴逻辑
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.getPasteImgs = exports.getPasteHtml = exports.getPasteText = void 0;

var util_1 = __webpack_require__(7);

var parse_html_1 = __importDefault(__webpack_require__(285));
/**
 * 获取粘贴的纯文本
 * @param e Event 参数
 */


function getPasteText(e) {
  // const clipboardData = e.clipboardData || (e.originalEvent && e.originalEvent.clipboardData)
  var clipboardData = e.clipboardData; // 暂不考虑 originalEvent 的情况

  var pasteText = '';

  if (clipboardData == null) {
    pasteText = window.clipboardData && window.clipboardData.getData('text');
  } else {
    pasteText = clipboardData.getData('text/plain');
  }

  return util_1.replaceHtmlSymbol(pasteText);
}

exports.getPasteText = getPasteText;
/**
 * 获取粘贴的 html 字符串
 * @param e Event 参数
 * @param filterStyle 是否过滤 style 样式
 * @param ignoreImg 是否忽略 img 标签
 */

function getPasteHtml(e, filterStyle, ignoreImg) {
  if (filterStyle === void 0) {
    filterStyle = true;
  }

  if (ignoreImg === void 0) {
    ignoreImg = false;
  }

  var clipboardData = e.clipboardData; // 暂不考虑 originalEvent 的情况

  var pasteHtml = '';

  if (clipboardData) {
    pasteHtml = clipboardData.getData('text/html');
  } // 无法通过 'text/html' 格式获取 html，则尝试获取 text


  if (!pasteHtml) {
    var text = getPasteText(e);

    if (!text) {
      return ''; // 没有找到任何文字，则返回
    }

    pasteHtml = "<p>" + text + "</p>";
  } // 剔除多余的标签、属性


  pasteHtml = parse_html_1["default"](pasteHtml, filterStyle, ignoreImg);
  return pasteHtml;
}

exports.getPasteHtml = getPasteHtml;
/**
 * 获取粘贴的图片文件
 * @param e Event 参数
 */

function getPasteImgs(e) {
  var result = [];
  var txt = getPasteText(e);

  if (txt) {
    // 有文字，就忽略图片
    return result;
  }

  var clipboardData = e.clipboardData;
  var items = clipboardData.items;

  if (!items) {
    return result;
  }

  (0, _forEach["default"])(util_1).call(util_1, items, function (key, value) {
    var type = value.type;

    if (/image/i.test(type)) {
      result.push(value.getAsFile());
    }
  });
  return result;
}

exports.getPasteImgs = getPasteImgs;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(287);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(295);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 下拉列表 class
 */

var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var const_1 = __webpack_require__(30);

var DropList =
/** @class */
function () {
  function DropList(menu, conf) {
    var _this = this;

    this.hideTimeoutId = 0;
    this.showTimeoutId = 0;
    this.menu = menu;
    this.conf = conf; // 容器

    var $container = dom_core_1["default"]('<div class="w-e-droplist"></div>'); // 标题

    var $title = dom_core_1["default"]("<p>" + conf.title + "</p>");
    $title.addClass('w-e-dp-title');
    $container.append($title); // 列表和类型

    var list = conf.list || [];
    var type = conf.type || 'list'; // item 的点击事件

    var clickHandler = conf.clickHandler || const_1.EMPTY_FN; // 加入 DOM 并绑定事件

    var $list = dom_core_1["default"]('<ul class="' + (type === 'list' ? 'w-e-list' : 'w-e-block') + '"></ul>');
    (0, _forEach["default"])(list).call(list, function (item) {
      var $elem = item.$elem;
      var value = item.value;
      var $li = dom_core_1["default"]('<li class="w-e-item"></li>');

      if ($elem) {
        $li.append($elem);
        $list.append($li);
        $li.on('click', function () {
          clickHandler(value); // item 点击之后，隐藏 list

          _this.hideTimeoutId = window.setTimeout(function () {
            _this.hide();
          });
        });
      }
    });
    $container.append($list); // 绑定隐藏事件

    $container.on('mouseleave', function () {
      _this.hideTimeoutId = window.setTimeout(function () {
        _this.hide();
      });
    }); // 记录属性

    this.$container = $container;
    this.rendered = false;
    this._show = false;
  }
  /**
   * 显示 DropList
   */


  DropList.prototype.show = function () {
    if (this.hideTimeoutId) {
      // 清除之前的定时隐藏
      clearTimeout(this.hideTimeoutId);
    }

    var menu = this.menu;
    var $menuELem = menu.$elem;
    var $container = this.$container;

    if (this._show) {
      return;
    }

    if (this.rendered) {
      // 显示
      $container.show();
    } else {
      // 加入 DOM 之前先定位位置
      var menuHeight = $menuELem.getSizeData().height || 0;
      var width = this.conf.width || 100; // 默认为 100

      $container.css('margin-top', menuHeight + 'px').css('width', width + 'px'); // 加入到 DOM

      $menuELem.append($container);
      this.rendered = true;
    } // 修改属性


    this._show = true;
  };
  /**
   * 隐藏 DropList
   */


  DropList.prototype.hide = function () {
    if (this.showTimeoutId) {
      // 清除之前的定时显示
      clearTimeout(this.showTimeoutId);
    }

    var $container = this.$container;

    if (!this._show) {
      return;
    } // 隐藏并需改属性


    $container.hide();
    this._show = false;
  };

  (0, _defineProperty["default"])(DropList.prototype, "isShow", {
    get: function get() {
      return this._show;
    },
    enumerable: false,
    configurable: true
  });
  return DropList;
}();

exports["default"] = DropList;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 检查选区是否在链接中，即菜单是否应该 active
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

function isActive(editor) {
  var $selectionELem = editor.selection.getSelectionContainerElem();

  if (!$selectionELem) {
    return false;
  }

  if ($selectionELem.getNodeName() === 'A') {
    return true;
  } else {
    return false;
  }
}

exports["default"] = isActive;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 检查选区是否在代码中，即菜单是否应该 active
 * @author lkw
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

function isActive(editor) {
  var $selectionELem = editor.selection.getSelectionContainerElem();

  if (!$selectionELem) {
    return false;
  }

  if ($selectionELem.getNodeName() == 'CODE' || $selectionELem.getNodeName() == 'PRE' || $selectionELem.parent().getNodeName() == 'CODE' || $selectionELem.parent().getNodeName() == 'PRE' || /hljs/.test($selectionELem.parent().attr('class'))) {
    return true;
  } else {
    return false;
  }
}

exports["default"] = isActive;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 入口文件
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var __createBinding = void 0 && (void 0).__createBinding || (_create["default"] ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  (0, _defineProperty["default"])(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
  }
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

__webpack_require__(137);

__webpack_require__(139);

__webpack_require__(143);

__webpack_require__(145);

__webpack_require__(147);

__webpack_require__(149);

__webpack_require__(151);

var index_1 = __importDefault(__webpack_require__(174));

__exportStar(__webpack_require__(398), exports); // 检验是否浏览器环境


try {
  document;
} catch (ex) {
  throw new Error('请在浏览器环境下运行');
}

exports["default"] = index_1["default"];

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(129);

module.exports = parent;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130);
var path = __webpack_require__(11);

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(14);
var objectDefinePropertyModile = __webpack_require__(17);

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),
/* 131 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(133);

module.exports = parent;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
var path = __webpack_require__(11);

var Object = path.Object;

module.exports = function create(P, D) {
  return Object.create(P, D);
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(14);
var create = __webpack_require__(46);

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var definePropertyModule = __webpack_require__(17);
var anObject = __webpack_require__(23);
var objectKeys = __webpack_require__(57);

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var createNonEnumerableProperty = __webpack_require__(16);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(19);
            var content = __webpack_require__(138);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(20);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-toolbar,\n.w-e-text-container,\n.w-e-menu-panel {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  background-color: #fff;\n  /*表情菜单样式*/\n  /*分割线样式*/\n}\n.w-e-toolbar .eleImg,\n.w-e-text-container .eleImg,\n.w-e-menu-panel .eleImg {\n  cursor: pointer;\n  display: inline-block;\n  font-size: 18px;\n  padding: 0 3px;\n}\n.w-e-toolbar *,\n.w-e-text-container *,\n.w-e-menu-panel * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.w-e-toolbar hr,\n.w-e-text-container hr,\n.w-e-menu-panel hr {\n  cursor: pointer;\n  display: block;\n  height: 0px;\n  border: 0;\n  border-top: 3px solid #ccc;\n  margin: 20px 0;\n}\n.w-e-clear-fix:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.w-e-drop-list-item {\n  position: relative;\n  top: 1px;\n  padding-right: 7px;\n  color: #333 !important;\n}\n.w-e-drop-list-tl {\n  padding-left: 10px;\n  text-align: left;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(19);
            var content = __webpack_require__(140);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(20);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(141);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(142);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@font-face {\n  font-family: 'w-e-icon';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n[class^=\"w-e-icon-\"],\n[class*=\" w-e-icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'w-e-icon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.w-e-icon-close:before {\n  content: \"\\f00d\";\n}\n.w-e-icon-upload2:before {\n  content: \"\\e9c6\";\n}\n.w-e-icon-trash-o:before {\n  content: \"\\f014\";\n}\n.w-e-icon-header:before {\n  content: \"\\f1dc\";\n}\n.w-e-icon-pencil2:before {\n  content: \"\\e906\";\n}\n.w-e-icon-paint-brush:before {\n  content: \"\\f1fc\";\n}\n.w-e-icon-image:before {\n  content: \"\\e90d\";\n}\n.w-e-icon-play:before {\n  content: \"\\e912\";\n}\n.w-e-icon-location:before {\n  content: \"\\e947\";\n}\n.w-e-icon-undo:before {\n  content: \"\\e965\";\n}\n.w-e-icon-redo:before {\n  content: \"\\e966\";\n}\n.w-e-icon-quotes-left:before {\n  content: \"\\e977\";\n}\n.w-e-icon-list-numbered:before {\n  content: \"\\e9b9\";\n}\n.w-e-icon-list2:before {\n  content: \"\\e9bb\";\n}\n.w-e-icon-link:before {\n  content: \"\\e9cb\";\n}\n.w-e-icon-happy:before {\n  content: \"\\e9df\";\n}\n.w-e-icon-bold:before {\n  content: \"\\ea62\";\n}\n.w-e-icon-underline:before {\n  content: \"\\ea63\";\n}\n.w-e-icon-italic:before {\n  content: \"\\ea64\";\n}\n.w-e-icon-strikethrough:before {\n  content: \"\\ea65\";\n}\n.w-e-icon-table2:before {\n  content: \"\\ea71\";\n}\n.w-e-icon-paragraph-left:before {\n  content: \"\\ea77\";\n}\n.w-e-icon-paragraph-center:before {\n  content: \"\\ea78\";\n}\n.w-e-icon-paragraph-right:before {\n  content: \"\\ea79\";\n}\n.w-e-icon-paragraph-justify:before {\n  content: \"\\ea7a\";\n}\n.w-e-icon-terminal:before {\n  content: \"\\f120\";\n}\n.w-e-icon-page-break:before {\n  content: \"\\ea68\";\n}\n.w-e-icon-cancel-circle:before {\n  content: \"\\ea0d\";\n}\n.w-e-icon-font:before {\n  content: \"\\ea5c\";\n}\n.w-e-icon-text-heigh:before {\n  content: \"\\ea5f\";\n}\n.w-e-icon-paint-format:before {\n  content: \"\\e90c\";\n}\n.w-e-icon-indent-increase:before {\n  content: \"\\ea7b\";\n}\n.w-e-icon-indent-decrease:before {\n  content: \"\\ea7c\";\n}\n.w-e-icon-row-height:before {\n  content: \"\\e9be\";\n}\n.w-e-icon-fullscreen_exit:before {\n  content: \"\\e900\";\n}\n.w-e-icon-fullscreen:before {\n  content: \"\\e901\";\n}\n.w-e-icon-split-line:before {\n  content: \"\\ea0b\";\n}\n.w-e-icon-checkbox-checked:before {\n  content: \"\\ea52\";\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(19);
            var content = __webpack_require__(144);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(20);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-toolbar {\n  display: flex;\n  padding: 0 6px;\n  flex-wrap: wrap;\n  position: relative;\n  /* 单个菜单 */\n}\n.w-e-toolbar .w-e-menu {\n  position: relative;\n  display: flex;\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n}\n.w-e-toolbar .w-e-menu i {\n  color: #999;\n}\n.w-e-toolbar .w-e-menu:hover {\n  background-color: #F6F6F6;\n}\n.w-e-toolbar .w-e-menu:hover i {\n  color: #333;\n}\n.w-e-toolbar .w-e-active i {\n  color: #1e88e5;\n}\n.w-e-toolbar .w-e-active:hover i {\n  color: #1e88e5;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(19);
            var content = __webpack_require__(146);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(20);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-text-container {\n  position: relative;\n}\n.w-e-text-container .w-e-progress {\n  position: absolute;\n  background-color: #1e88e5;\n  top: 0;\n  left: 0;\n  height: 1px;\n}\n.w-e-text-container .placeholder {\n  color: #D4D4D4;\n  position: absolute;\n  font-size: 11pt;\n  line-height: 22px;\n  left: 10px;\n  top: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: -1;\n}\n.w-e-text {\n  padding: 0 10px;\n  overflow-y: auto;\n}\n.w-e-text p,\n.w-e-text h1,\n.w-e-text h2,\n.w-e-text h3,\n.w-e-text h4,\n.w-e-text h5,\n.w-e-text table,\n.w-e-text pre {\n  margin: 10px 0;\n  line-height: 1.5;\n}\n.w-e-text ul,\n.w-e-text ol {\n  margin: 10px 0 10px 20px;\n}\n.w-e-text blockquote {\n  display: block;\n  border-left: 8px solid #d0e5f2;\n  padding: 5px 10px;\n  margin: 10px 0;\n  line-height: 1.4;\n  font-size: 100%;\n  background-color: #f1f1f1;\n}\n.w-e-text code {\n  display: inline-block;\n  background-color: #f1f1f1;\n  border-radius: 3px;\n  padding: 3px 5px;\n  margin: 0 3px;\n}\n.w-e-text pre code {\n  display: block;\n}\n.w-e-text table {\n  border-top: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n}\n.w-e-text table td,\n.w-e-text table th {\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 3px 5px;\n  min-height: 30px;\n}\n.w-e-text table th {\n  border-bottom: 2px solid #ccc;\n  text-align: center;\n  background-color: #f1f1f1;\n}\n.w-e-text:focus {\n  outline: none;\n}\n.w-e-text img {\n  cursor: pointer;\n}\n.w-e-text img:hover {\n  box-shadow: 0 0 5px #333;\n}\n.w-e-tooltip {\n  display: flex;\n  color: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0.75);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  padding: 4px 5px 6px;\n  position: absolute;\n}\n.w-e-tooltip-up::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-top-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-tooltip-down::after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-tooltip-item-wrapper {\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0 5px;\n}\n.w-e-tooltip-item-wrapper:hover {\n  color: #ccc;\n  text-decoration: underline;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(19);
            var content = __webpack_require__(148);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(20);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-menu .w-e-panel-container {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border: 1px solid #ccc;\n  border-top: 0;\n  box-shadow: 1px 1px 2px #ccc;\n  color: #333;\n  background-color: #fff;\n  text-align: left;\n  /* 为 emotion panel 定制的样式 */\n  /* 上传图片的 panel 定制样式 */\n}\n.w-e-menu .w-e-panel-container .w-e-panel-close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px;\n  margin: 2px 5px 0 0;\n  cursor: pointer;\n  color: #999;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-close:hover {\n  color: #333;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title {\n  list-style: none;\n  display: flex;\n  font-size: 14px;\n  margin: 2px 10px 0 10px;\n  border-bottom: 1px solid #f1f1f1;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {\n  padding: 3px 5px;\n  color: #999;\n  cursor: pointer;\n  margin: 0 3px;\n  position: relative;\n  top: 1px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {\n  color: #333;\n  border-bottom: 1px solid #333;\n  cursor: default;\n  font-weight: 700;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content {\n  padding: 10px 15px 10px 15px;\n  font-size: 16px;\n  /* 输入框的样式 */\n  /* 按钮的样式 */\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {\n  outline: none;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n  margin-top: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {\n  border-color: #1e88e5;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {\n  border: none;\n  border-bottom: 1px solid #ccc;\n  font-size: 14px;\n  height: 20px;\n  color: #333;\n  text-align: left;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {\n  width: 30px;\n  text-align: center;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {\n  display: block;\n  width: 100%;\n  margin: 10px 0;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {\n  border-bottom: 2px solid #1e88e5;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {\n  font-size: 14px;\n  color: #1e88e5;\n  border: none;\n  padding: 5px 10px;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {\n  float: left;\n  margin-right: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {\n  float: right;\n  margin-left: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {\n  color: #999;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {\n  color: #c24f4a;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {\n  background-color: #f1f1f1;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {\n  cursor: pointer;\n  font-size: 18px;\n  padding: 0 3px;\n  display: inline-block;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container {\n  text-align: center;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn {\n  display: inline-block;\n  color: #999;\n  cursor: pointer;\n  font-size: 60px;\n  line-height: 1;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover {\n  color: #333;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(19);
            var content = __webpack_require__(150);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(20);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-toolbar .w-e-droplist {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #fff;\n  border: 1px solid #f1f1f1;\n  border-right-color: #ccc;\n  border-bottom-color: #ccc;\n}\n.w-e-toolbar .w-e-droplist .w-e-dp-title {\n  text-align: center;\n  color: #999;\n  line-height: 2;\n  border-bottom: 1px solid #f1f1f1;\n  font-size: 13px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list {\n  list-style: none;\n  line-height: 1;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {\n  color: #333;\n  padding: 5px 0;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {\n  background-color: #f1f1f1;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block {\n  list-style: none;\n  text-align: left;\n  padding: 5px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {\n  display: inline-block;\n  padding: 3px 5px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {\n  background-color: #f1f1f1;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description polyfill 【注意，js 语法的兼容，都通过 babel transform runtime 支持】
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _promise = _interopRequireDefault(__webpack_require__(152));

if (!Element.prototype.matches) {
  Element.prototype.matches = function (s) {
    var matches = this.ownerDocument.querySelectorAll(s);
    var i = matches.length;

    for (i; i >= 0; i--) {
      if (matches.item(i) === this) break;
    }

    return i > -1;
  };
} // 有的第三方库需要原生 Promise ，而 IE11 又没有原生 Promise ，就报错


window.Promise = _promise["default"];

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(153);

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(154);

module.exports = parent;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(155);
__webpack_require__(62);
__webpack_require__(161);
__webpack_require__(167);
__webpack_require__(168);
__webpack_require__(169);
__webpack_require__(64);
__webpack_require__(49);
var path = __webpack_require__(11);

module.exports = path.Promise;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var getPrototypeOf = __webpack_require__(74);
var setPrototypeOf = __webpack_require__(75);
var create = __webpack_require__(46);
var createNonEnumerableProperty = __webpack_require__(16);
var createPropertyDescriptor = __webpack_require__(32);
var iterate = __webpack_require__(36);

var $AggregateError = function AggregateError(errors, message) {
  var that = this;
  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
  if (setPrototypeOf) {
    that = setPrototypeOf(new Error(undefined), getPrototypeOf(that));
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
  var errorsArray = [];
  iterate(errors, errorsArray.push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

$AggregateError.prototype = create(Error.prototype, {
  constructor: createPropertyDescriptor(5, $AggregateError),
  message: createPropertyDescriptor(5, ''),
  name: createPropertyDescriptor(5, 'AggregateError')
});

$({ global: true }, {
  AggregateError: $AggregateError
});


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);
var Iterators = __webpack_require__(37);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(61);
var Iterators = __webpack_require__(37);
var wellKnownSymbol = __webpack_require__(9);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(23);

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var IS_PURE = __webpack_require__(34);
var global = __webpack_require__(8);
var getBuiltIn = __webpack_require__(29);
var NativePromise = __webpack_require__(100);
var redefine = __webpack_require__(48);
var redefineAll = __webpack_require__(101);
var setToStringTag = __webpack_require__(38);
var setSpecies = __webpack_require__(102);
var isObject = __webpack_require__(13);
var aFunction = __webpack_require__(28);
var anInstance = __webpack_require__(78);
var inspectSource = __webpack_require__(103);
var iterate = __webpack_require__(36);
var checkCorrectnessOfIteration = __webpack_require__(163);
var speciesConstructor = __webpack_require__(104);
var task = __webpack_require__(105).set;
var microtask = __webpack_require__(164);
var promiseResolve = __webpack_require__(107);
var hostReportErrors = __webpack_require__(165);
var newPromiseCapabilityModule = __webpack_require__(63);
var perform = __webpack_require__(81);
var InternalStateModule = __webpack_require__(39);
var isForced = __webpack_require__(96);
var wellKnownSymbol = __webpack_require__(9);
var IS_NODE = __webpack_require__(80);
var V8_VERSION = __webpack_require__(82);

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(77);
var classof = __webpack_require__(61);

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var getOwnPropertyDescriptor = __webpack_require__(66).f;
var macrotask = __webpack_require__(105).set;
var IS_IOS = __webpack_require__(106);
var IS_NODE = __webpack_require__(80);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  if (!IS_IOS && !IS_NODE && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var inspectSource = __webpack_require__(103);

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var aFunction = __webpack_require__(28);
var newPromiseCapabilityModule = __webpack_require__(63);
var perform = __webpack_require__(81);
var iterate = __webpack_require__(36);

// `Promise.allSettled` method
// https://github.com/tc39/proposal-promise-allSettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var aFunction = __webpack_require__(28);
var getBuiltIn = __webpack_require__(29);
var newPromiseCapabilityModule = __webpack_require__(63);
var perform = __webpack_require__(81);
var iterate = __webpack_require__(36);

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://github.com/tc39/proposal-promise-any
$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aFunction(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        errors.push(undefined);
        remaining++;
        promiseResolve.call(C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var IS_PURE = __webpack_require__(34);
var NativePromise = __webpack_require__(100);
var fails = __webpack_require__(12);
var getBuiltIn = __webpack_require__(29);
var speciesConstructor = __webpack_require__(104);
var promiseResolve = __webpack_require__(107);
var redefine = __webpack_require__(48);

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.github.io/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = typeof onFinally == 'function';
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// patch native Promise.prototype for native async functions
if (!IS_PURE && typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
  redefine(NativePromise.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
}


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(58);
var requireObjectCoercible = __webpack_require__(44);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(108).IteratorPrototype;
var create = __webpack_require__(46);
var createPropertyDescriptor = __webpack_require__(32);
var setToStringTag = __webpack_require__(38);
var Iterators = __webpack_require__(37);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(25);
var addToUnscopables = __webpack_require__(84);
var Iterators = __webpack_require__(37);
var InternalStateModule = __webpack_require__(39);
var defineIterator = __webpack_require__(83);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 173 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 编辑器 class
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var __createBinding = void 0 && (void 0).__createBinding || (_create["default"] ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  (0, _defineProperty["default"])(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (_create["default"] ? function (o, v) {
  (0, _defineProperty["default"])(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var util_1 = __webpack_require__(7);

var config_1 = __importDefault(__webpack_require__(258));

var selection_1 = __importDefault(__webpack_require__(272));

var command_1 = __importDefault(__webpack_require__(274));

var index_1 = __importDefault(__webpack_require__(275));

var index_2 = __importDefault(__webpack_require__(294));

var init_dom_1 = __importDefault(__webpack_require__(370));

var init_selection_1 = __importDefault(__webpack_require__(371));

var bind_event_1 = __importDefault(__webpack_require__(372));

var i18next_init_1 = __importDefault(__webpack_require__(373));

var set_full_screen_1 = __importStar(__webpack_require__(374));

var z_index_1 = __importDefault(__webpack_require__(377));

var index_3 = __importDefault(__webpack_require__(378));

var index_4 = __importDefault(__webpack_require__(380));

var disable_1 = __importDefault(__webpack_require__(395)); // 创建菜单的 class


var BtnMenu_1 = __importDefault(__webpack_require__(24));

var DropList_1 = __importDefault(__webpack_require__(124));

var DropListMenu_1 = __importDefault(__webpack_require__(22));

var Panel_1 = __importDefault(__webpack_require__(27));

var PanelMenu_1 = __importDefault(__webpack_require__(31));

var Tooltip_1 = __importDefault(__webpack_require__(42));

var EDITOR_ID = 1;

var Editor =
/** @class */
function () {
  /**
   * 构造函数
   * @param toolbarSelector 工具栏 DOM selector
   * @param textSelector 文本区域 DOM selector
   */
  function Editor(toolbarSelector, textSelector) {
    // 实例销毁前需要执行的钩子集合
    this.beforeDestroyHooks = []; // id，用以区分单个页面不同的编辑器对象

    this.id = "wangEditor-" + EDITOR_ID++;
    this.toolbarSelector = toolbarSelector;
    this.textSelector = textSelector;

    if (toolbarSelector == null) {
      throw new Error('错误：初始化编辑器时候未传入任何参数，请查阅文档');
    } // 属性的默认值，后面可能会再修改
    // 默认配置 - 当一个页面有多个编辑器的时候，因为 JS 的特性(引用类型)会导致多个编辑器的 config 引用是同一个，所以需要 深度克隆 断掉引用


    this.config = util_1.deepClone(config_1["default"]);
    this.$toolbarElem = dom_core_1["default"]('<div></div>');
    this.$textContainerElem = dom_core_1["default"]('<div></div>');
    this.$textElem = dom_core_1["default"]('<div></div>');
    this.toolbarElemId = '';
    this.textElemId = '';
    this.isFocus = false;
    this.isComposing = false;
    this.isCompatibleMode = false;
    this.selection = new selection_1["default"](this);
    this.cmd = new command_1["default"](this);
    this.txt = new index_1["default"](this);
    this.menus = new index_2["default"](this);
    this.zIndex = new z_index_1["default"]();
    this.change = new index_3["default"](this);
    this.history = new index_4["default"](this);

    var _a = disable_1["default"](this),
        disable = _a.disable,
        enable = _a.enable;

    this.disable = disable;
    this.enable = enable;
  }
  /**
   * 初始化选区
   * @param newLine 新建一行
   */


  Editor.prototype.initSelection = function (newLine) {
    init_selection_1["default"](this, newLine);
  };
  /**
   * 创建编辑器实例
   */


  Editor.prototype.create = function () {
    // 初始化 ZIndex
    this.zIndex.init(this); // 确定当前的历史记录模式

    this.isCompatibleMode = this.config.compatibleMode(); // 标准模式下，重置延迟时间

    if (!this.isCompatibleMode) {
      this.config.onchangeTimeout = 30;
    } // 国际化 因为要在创建菜单前使用 所以要最先 初始化


    i18next_init_1["default"](this); // 初始化 DOM

    init_dom_1["default"](this); // 初始化 text

    this.txt.init(); // 初始化菜单

    this.menus.init(); // 初始化全屏功能

    set_full_screen_1["default"](this); // 初始化选区，将光标定位到内容尾部

    this.initSelection(true); // 绑定事件

    bind_event_1["default"](this); // 绑定监听的目标节点

    this.change.observe();
    this.history.observe();
  };
  /**
   * 提供给用户添加销毁前的钩子函数
   * @param fn 钩子函数
   */


  Editor.prototype.beforeDestroy = function (fn) {
    this.beforeDestroyHooks.push(fn);
    return this;
  };
  /**
   * 销毁当前编辑器实例
   */


  Editor.prototype.destroy = function () {
    var _context;

    var _this = this; // 调用钩子函数


    (0, _forEach["default"])(_context = this.beforeDestroyHooks).call(_context, function (fn) {
      return fn.call(_this);
    }); // 销毁 DOM 节点

    this.$toolbarElem.remove();
    this.$textContainerElem.remove();
  };
  /**
   * 将编辑器设置为全屏
   */


  Editor.prototype.fullScreen = function () {
    set_full_screen_1.setFullScreen(this);
  };
  /**
   * 将编辑器退出全屏
   */


  Editor.prototype.unFullScreen = function () {
    set_full_screen_1.setUnFullScreen(this);
  }; // 暴露 $


  Editor.$ = dom_core_1["default"];
  Editor.BtnMenu = BtnMenu_1["default"];
  Editor.DropList = DropList_1["default"];
  Editor.DropListMenu = DropListMenu_1["default"];
  Editor.Panel = Panel_1["default"];
  Editor.PanelMenu = PanelMenu_1["default"];
  Editor.Tooltip = Tooltip_1["default"];
  return Editor;
}();

exports["default"] = Editor;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);
var forEach = __webpack_require__(176);
var classof = __webpack_require__(61);
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.forEach;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.forEach)
    // eslint-disable-next-line no-prototype-builtins
    || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(177);

module.exports = parent;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(178);
var entryVirtual = __webpack_require__(18);

module.exports = entryVirtual('Array').forEach;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var forEach = __webpack_require__(179);

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(40).forEach;
var arrayMethodIsStrict = __webpack_require__(109);
var arrayMethodUsesToLength = __webpack_require__(26);

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(181);

module.exports = parent;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var arrayIncludes = __webpack_require__(182);
var stringIncludes = __webpack_require__(184);

var ArrayPrototype = Array.prototype;
var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.includes)) return arrayIncludes;
  if (typeof it === 'string' || it === StringPrototype || (it instanceof String && own === StringPrototype.includes)) {
    return stringIncludes;
  } return own;
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(183);
var entryVirtual = __webpack_require__(18);

module.exports = entryVirtual('Array').includes;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $includes = __webpack_require__(69).includes;
var addToUnscopables = __webpack_require__(84);
var arrayMethodUsesToLength = __webpack_require__(26);

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(185);
var entryVirtual = __webpack_require__(18);

module.exports = entryVirtual('String').includes;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var notARegExp = __webpack_require__(186);
var requireObjectCoercible = __webpack_require__(44);
var correctIsRegExpLogic = __webpack_require__(188);

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(187);

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var classof = __webpack_require__(43);
var wellKnownSymbol = __webpack_require__(9);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(9);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(190);

module.exports = parent;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(191);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.filter) ? filter : own;
};


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(192);
var entryVirtual = __webpack_require__(18);

module.exports = entryVirtual('Array').filter;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $filter = __webpack_require__(40).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(51);
var arrayMethodUsesToLength = __webpack_require__(26);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(194);

module.exports = parent;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var splice = __webpack_require__(195);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.splice;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.splice) ? splice : own;
};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(196);
var entryVirtual = __webpack_require__(18);

module.exports = entryVirtual('Array').splice;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var toAbsoluteIndex = __webpack_require__(70);
var toInteger = __webpack_require__(58);
var toLength = __webpack_require__(33);
var toObject = __webpack_require__(35);
var arraySpeciesCreate = __webpack_require__(85);
var createProperty = __webpack_require__(88);
var arrayMethodHasSpeciesSupport = __webpack_require__(51);
var arrayMethodUsesToLength = __webpack_require__(26);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(198);

module.exports = parent;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var indexOf = __webpack_require__(199);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.indexOf) ? indexOf : own;
};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(200);
var entryVirtual = __webpack_require__(18);

module.exports = entryVirtual('Array').indexOf;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $indexOf = __webpack_require__(69).indexOf;
var arrayMethodIsStrict = __webpack_require__(109);
var arrayMethodUsesToLength = __webpack_require__(26);

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(202);

module.exports = parent;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(203);
__webpack_require__(62);
__webpack_require__(64);
__webpack_require__(49);
var path = __webpack_require__(11);

module.exports = path.Map;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(112);
var collectionStrong = __webpack_require__(114);

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(206);

module.exports = parent;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(207);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trim;
  return typeof it === 'string' || it === StringPrototype
    || (it instanceof String && own === StringPrototype.trim) ? trim : own;
};


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(208);
var entryVirtual = __webpack_require__(18);

module.exports = entryVirtual('String').trim;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $trim = __webpack_require__(89).trim;
var forcedStringTrimMethod = __webpack_require__(209);

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(12);
var whitespaces = __webpack_require__(65);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(211);

module.exports = parent;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(212);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;
};


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(213);
var entryVirtual = __webpack_require__(18);

module.exports = entryVirtual('Array').map;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $map = __webpack_require__(40).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(51);
var arrayMethodUsesToLength = __webpack_require__(26);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(215);

module.exports = parent;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(216);
var path = __webpack_require__(11);

module.exports = path.Array.isArray;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var isArray = __webpack_require__(50);

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(218);

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(219);

module.exports = parent;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116);
__webpack_require__(64);
__webpack_require__(49);
var WrappedWellKnownSymbolModule = __webpack_require__(91);

module.exports = WrappedWellKnownSymbolModule.f('iterator');


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(221);

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(222);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(244);
__webpack_require__(245);
// TODO: Remove from `core-js@4`
__webpack_require__(246);

module.exports = parent;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(223);
__webpack_require__(62);
__webpack_require__(224);
__webpack_require__(226);
__webpack_require__(227);
__webpack_require__(228);
__webpack_require__(229);
__webpack_require__(116);
__webpack_require__(230);
__webpack_require__(231);
__webpack_require__(232);
__webpack_require__(233);
__webpack_require__(234);
__webpack_require__(235);
__webpack_require__(236);
__webpack_require__(237);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(241);
var path = __webpack_require__(11);

module.exports = path.Symbol;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var fails = __webpack_require__(12);
var isArray = __webpack_require__(50);
var isObject = __webpack_require__(13);
var toObject = __webpack_require__(35);
var toLength = __webpack_require__(33);
var createProperty = __webpack_require__(88);
var arraySpeciesCreate = __webpack_require__(85);
var arrayMethodHasSpeciesSupport = __webpack_require__(51);
var wellKnownSymbol = __webpack_require__(9);
var V8_VERSION = __webpack_require__(82);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var global = __webpack_require__(8);
var getBuiltIn = __webpack_require__(29);
var IS_PURE = __webpack_require__(34);
var DESCRIPTORS = __webpack_require__(14);
var NATIVE_SYMBOL = __webpack_require__(76);
var USE_SYMBOL_AS_UID = __webpack_require__(99);
var fails = __webpack_require__(12);
var has = __webpack_require__(15);
var isArray = __webpack_require__(50);
var isObject = __webpack_require__(13);
var anObject = __webpack_require__(23);
var toObject = __webpack_require__(35);
var toIndexedObject = __webpack_require__(25);
var toPrimitive = __webpack_require__(56);
var createPropertyDescriptor = __webpack_require__(32);
var nativeObjectCreate = __webpack_require__(46);
var objectKeys = __webpack_require__(57);
var getOwnPropertyNamesModule = __webpack_require__(117);
var getOwnPropertyNamesExternal = __webpack_require__(225);
var getOwnPropertySymbolsModule = __webpack_require__(118);
var getOwnPropertyDescriptorModule = __webpack_require__(66);
var definePropertyModule = __webpack_require__(17);
var propertyIsEnumerableModule = __webpack_require__(55);
var createNonEnumerableProperty = __webpack_require__(16);
var redefine = __webpack_require__(48);
var shared = __webpack_require__(72);
var sharedKey = __webpack_require__(59);
var hiddenKeys = __webpack_require__(47);
var uid = __webpack_require__(60);
var wellKnownSymbol = __webpack_require__(9);
var wrappedWellKnownSymbolModule = __webpack_require__(91);
var defineWellKnownSymbol = __webpack_require__(10);
var setToStringTag = __webpack_require__(38);
var InternalStateModule = __webpack_require__(39);
var $forEach = __webpack_require__(40).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(25);
var nativeGetOwnPropertyNames = __webpack_require__(117).f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.asyncIterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),
/* 227 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.hasInstance` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.match` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.matchAll` well-known symbol
defineWellKnownSymbol('matchAll');


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.replace` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.search` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.species` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.split` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.toPrimitive` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.toStringTag` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.unscopables` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var setToStringTag = __webpack_require__(38);

// JSON[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 240 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 241 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('asyncDispose');


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('dispose');


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(10);

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(10);

defineWellKnownSymbol('replaceAll');


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(248);
var path = __webpack_require__(11);

module.exports = path.setTimeout;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var global = __webpack_require__(8);
var userAgent = __webpack_require__(79);

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(250);

module.exports = parent;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(251);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.slice;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.slice) ? slice : own;
};


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(252);
var entryVirtual = __webpack_require__(18);

module.exports = entryVirtual('Array').slice;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var isObject = __webpack_require__(13);
var isArray = __webpack_require__(50);
var toAbsoluteIndex = __webpack_require__(70);
var toLength = __webpack_require__(33);
var toIndexedObject = __webpack_require__(25);
var createProperty = __webpack_require__(88);
var wellKnownSymbol = __webpack_require__(9);
var arrayMethodHasSpeciesSupport = __webpack_require__(51);
var arrayMethodUsesToLength = __webpack_require__(26);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(254);

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(255);

module.exports = parent;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(256);
var path = __webpack_require__(11);

module.exports = path.parseInt;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var parseIntImplementation = __webpack_require__(257);

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var trim = __webpack_require__(89).trim;
var whitespaces = __webpack_require__(65);

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 编辑器配置
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _assign = _interopRequireDefault(__webpack_require__(259));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var menus_1 = __importDefault(__webpack_require__(264));

var events_1 = __importDefault(__webpack_require__(265));

var style_1 = __importDefault(__webpack_require__(120));

var paste_1 = __importDefault(__webpack_require__(266));

var cmd_1 = __importDefault(__webpack_require__(267));

var image_1 = __importDefault(__webpack_require__(268));

var text_1 = __importDefault(__webpack_require__(269));

var lang_1 = __importDefault(__webpack_require__(270));

var history_1 = __importDefault(__webpack_require__(271)); // 合并所有的配置信息


var defaultConfig = (0, _assign["default"])({}, menus_1["default"], events_1["default"], style_1["default"], cmd_1["default"], paste_1["default"], image_1["default"], text_1["default"], lang_1["default"], history_1["default"], //链接校验的配置函数
{
  linkCheck: function linkCheck(text, link) {
    return true;
  }
}, //网络图片校验的配置函数
{
  linkImgCheck: function linkImgCheck(src) {
    return true;
  }
});
exports["default"] = defaultConfig;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(260);

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(261);

module.exports = parent;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(262);
var path = __webpack_require__(11);

module.exports = path.Object.assign;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var assign = __webpack_require__(263);

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(14);
var fails = __webpack_require__(12);
var objectKeys = __webpack_require__(57);
var getOwnPropertySymbolsModule = __webpack_require__(118);
var propertyIsEnumerableModule = __webpack_require__(55);
var toObject = __webpack_require__(35);
var IndexedObject = __webpack_require__(67);

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 菜单配置
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
var SINA_PATH1 = 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal';
var SINA_PATH2 = 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal';
/*表情菜单数据结构类型END*/

exports["default"] = {
  menus: ['head', 'bold', 'fontSize', // 'customFontSize',
  'fontName', 'italic', 'underline', 'strikeThrough', 'indent', 'lineHeight', 'foreColor', 'backColor', 'link', 'list', 'justify', 'quote', 'emoticon', 'image', 'video', 'table', 'code', 'splitLine', 'undo', 'redo'],
  fontNames: ['黑体', '仿宋', '楷体', '标楷体', '华文仿宋', '华文楷体', '宋体', '微软雅黑', 'Arial', 'Tahoma', 'Verdana', 'Times New Roman', 'Courier New'],
  fontSizes: {
    'x-small': {
      name: '10px',
      value: '1'
    },
    small: {
      name: '13px',
      value: '2'
    },
    normal: {
      name: '16px',
      value: '3'
    },
    large: {
      name: '18px',
      value: '4'
    },
    'x-large': {
      name: '24px',
      value: '5'
    },
    'xx-large': {
      name: '32px',
      value: '6'
    },
    'xxx-large': {
      name: '48px',
      value: '7'
    }
  },
  // customFontSize: [ // 该菜单暂时不用 - 王福朋 20200924
  //     { value: '9px', text: '9' },
  //     { value: '10px', text: '10' },
  //     { value: '12px', text: '12' },
  //     { value: '14px', text: '14' },
  //     { value: '16px', text: '16' },
  //     { value: '20px', text: '20' },
  //     { value: '42px', text: '42' },
  //     { value: '72px', text: '72' },
  // ],
  colors: ['#000000', '#eeece0', '#1c487f', '#4d80bf', '#c24f4a', '#8baa4a', '#7b5ba1', '#46acc8', '#f9963b', '#ffffff'],
  //插入代码语言配置
  languageType: ['Bash', 'C', 'C#', 'C++', 'CSS', 'Java', 'JavaScript', 'JSON', 'TypeScript', 'Plain text', 'Html', 'XML', 'SQL', 'Go', 'Kotlin', 'Lua', 'Markdown', 'PHP', 'Python', 'Shell Session', 'Ruby'],
  languageTab: '　　　　',

  /**
   * 表情配置菜单
   * 如果为emoji表情直接作为元素插入
   * emoticon:Array<EmotionsType>
   */
  emotions: [{
    // tab 的标题
    title: '默认',
    // type -> 'emoji' / 'image'
    type: 'image',
    // content -> 数组
    content: [{
      alt: '[坏笑]',
      src: SINA_PATH1 + "/50/pcmoren_huaixiao_org.png"
    }, {
      alt: '[舔屏]',
      src: SINA_PATH1 + "/40/pcmoren_tian_org.png"
    }, {
      alt: '[污]',
      src: SINA_PATH1 + "/3c/pcmoren_wu_org.png"
    }]
  }, {
    // tab 的标题
    title: '新浪',
    // type -> 'emoji' / 'image'
    type: 'image',
    // content -> 数组
    content: [{
      src: SINA_PATH2 + "/7a/shenshou_thumb.gif",
      alt: '[草泥马]'
    }, {
      src: SINA_PATH2 + "/60/horse2_thumb.gif",
      alt: '[神马]'
    }, {
      src: SINA_PATH2 + "/bc/fuyun_thumb.gif",
      alt: '[浮云]'
    }]
  }, {
    // tab 的标题
    title: 'emoji',
    // type -> 'emoji' / 'image'
    type: 'emoji',
    // content -> 数组
    content: '😀 😃 😄 😁 😆 😅 😂 😊 😇 🙂 🙃 😉 😓 😪 😴 🙄 🤔 😬 🤐'.split(/\s/)
  }, {
    // tab 的标题
    title: '手势',
    // type -> 'emoji' / 'image'
    type: 'emoji',
    // content -> 数组
    content: ['🙌', '👏', '👋', '👍', '👎', '👊', '✊', '️👌', '✋', '👐', '💪', '🙏', '️👆', '👇', '👈', '👉', '🖕', '🖐', '🤘']
  }],
  lineHeights: ['1', '1.15', '1.6', '2', '2.5', '3'],
  undoLimit: 20,
  indentation: '2em'
};

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 事件配置
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var const_1 = __webpack_require__(30);

exports["default"] = {
  onchangeTimeout: 200,
  onchange: const_1.EMPTY_FN,
  onfocus: const_1.EMPTY_FN,
  onblur: const_1.EMPTY_FN
};

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 粘贴，配置文件
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports["default"] = {
  // 粘贴过滤样式，默认开启
  pasteFilterStyle: true,
  // 粘贴内容时，忽略图片。默认关闭
  pasteIgnoreImg: false,
  // 对粘贴的文字进行自定义处理，返回处理后的结果。编辑器会将处理后的结果粘贴到编辑区域中。
  // IE 暂时不支持
  pasteTextHandle: function pasteTextHandle(content) {
    // content 即粘贴过来的内容（html 或 纯文本），可进行自定义处理然后返回
    return content;
  }
};

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 命令配置项
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports["default"] = {
  styleWithCSS: false
};

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 图片相关的配置
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var const_1 = __webpack_require__(30);

exports["default"] = {
  // 显示“插入网络图片”
  showLinkImg: true,
  // 插入图片成功之后的回调函数
  linkImgCallback: const_1.EMPTY_FN,
  // 服务端地址
  uploadImgServer: '',
  // 使用 base64 存储图片
  uploadImgShowBase64: false,
  // 上传图片的最大体积，默认 5M
  uploadImgMaxSize: 5 * 1024 * 1024,
  // 一次最多上传多少个图片
  uploadImgMaxLength: 100,
  // 自定义上传图片的名称
  uploadFileName: '',
  // 上传图片自定义参数
  uploadImgParams: {},
  // 自定义参数拼接到 url 中
  uploadImgParamsWithUrl: false,
  // 上传图片自定义 header
  uploadImgHeaders: {},
  // 钩子函数
  uploadImgHooks: {},
  // 上传图片超时时间 ms
  uploadImgTimeout: 10 * 1000,
  // 跨域带 cookie
  withCredentials: false,
  // 自定义上传
  customUploadImg: null
};

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 默认常量配置
 * @author xiaokyo
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports["default"] = {
  focus: true,
  height: 300,
  placeholder: '请输入正文',
  zIndexFullScreen: 10000,
  showFullScreen: true
};

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports["default"] = {
  lang: 'zh-CN',
  languages: {
    'zh-CN': {
      wangEditor: {
        插入: '插入',
        默认: '默认',
        创建: '创建',
        修改: '修改',
        如: '如',
        请输入正文: '请输入正文',
        menus: {
          dropListMenu: {
            设置标题: '设置标题',
            背景颜色: '背景颜色',
            文字颜色: '文字颜色',
            设置字号: '设置字号',
            设置字体: '设置字体',
            设置缩进: '设置缩进',
            对齐方式: '对齐方式',
            设置行高: '设置行高',
            序列: '序列',
            head: {
              正文: '正文'
            },
            indent: {
              增加缩进: '增加缩进',
              减少缩进: '减少缩进'
            },
            justify: {
              靠左: '靠左',
              居中: '居中',
              靠右: '靠右',
              两端: '两端'
            },
            list: {
              无序列表: '无序列表',
              有序列表: '有序列表'
            }
          },
          panelMenus: {
            emoticon: {
              默认: '默认',
              新浪: '新浪',
              emoji: 'emoji',
              手势: '手势'
            },
            image: {
              图片链接: '图片链接',
              上传图片: '上传图片',
              网络图片: '网络图片'
            },
            link: {
              链接: '链接',
              链接文字: '链接文字',
              取消链接: '取消链接',
              查看链接: '查看链接'
            },
            video: {
              插入视频: '插入视频'
            },
            table: {
              行: '行',
              列: '列',
              的: '的',
              表格: '表格',
              添加行: '添加行',
              删除行: '删除行',
              添加列: '添加列',
              删除列: '删除列',
              设置表头: '设置表头',
              取消表头: '取消表头',
              插入表格: '插入表格',
              删除表格: '删除表格'
            },
            code: {
              删除代码: '删除代码',
              修改代码: '修改代码',
              插入代码: '插入代码'
            }
          }
        },
        validate: {
          张图片: '张图片',
          大于: '大于',
          图片链接: '图片链接',
          不是图片: '不是图片',
          返回结果: '返回结果',
          上传图片超时: '上传图片超时',
          上传图片错误: '上传图片错误',
          上传图片失败: '上传图片失败',
          插入图片错误: '插入图片错误',
          一次最多上传: '一次最多上传',
          下载链接失败: '下载链接失败',
          图片验证未通过: '图片验证未通过',
          服务器返回状态: '服务器返回状态',
          上传图片返回结果错误: '上传图片返回结果错误',
          请替换为支持的图片类型: '请替换为支持的图片类型',
          您插入的网络图片无法识别: '您插入的网络图片无法识别',
          您刚才插入的图片链接未通过编辑器校验: '您刚才插入的图片链接未通过编辑器校验'
        }
      }
    },
    en: {
      wangEditor: {
        插入: 'insert',
        默认: 'default',
        创建: 'create',
        修改: 'edit',
        如: 'like',
        请输入正文: 'please enter the text',
        menus: {
          dropListMenu: {
            设置标题: 'title',
            背景颜色: 'background',
            文字颜色: 'font color',
            设置字号: 'font size',
            设置字体: 'font family',
            设置缩进: 'indent',
            对齐方式: 'align',
            设置行高: 'line heihgt',
            序列: 'list',
            head: {
              正文: 'text'
            },
            indent: {
              增加缩进: 'indent',
              减少缩进: 'outdent'
            },
            justify: {
              靠左: 'left',
              居中: 'center',
              靠右: 'right',
              两端: 'justify'
            },
            list: {
              无序列表: 'unordered',
              有序列表: 'ordered'
            }
          },
          panelMenus: {
            emoticon: {
              默认: 'default',
              新浪: 'sina',
              emoji: 'emoji',
              手势: 'gesture'
            },
            image: {
              图片链接: 'image link',
              上传图片: 'upload image',
              网络图片: 'network image'
            },
            link: {
              链接: 'link',
              链接文字: 'link text',
              取消链接: 'unlink',
              查看链接: 'view links'
            },
            video: {
              插入视频: 'insert video'
            },
            table: {
              行: 'rows',
              列: 'columns',
              的: ' ',
              表格: 'table',
              添加行: 'insert row',
              删除行: 'delete row',
              添加列: 'insert column',
              删除列: 'delete column',
              设置表头: 'set header',
              取消表头: 'cancel header',
              插入表格: 'insert table',
              删除表格: 'delete table'
            },
            code: {
              删除代码: 'delete code',
              修改代码: 'edit code',
              插入代码: 'insert code'
            }
          }
        },
        validate: {
          张图片: 'images',
          大于: 'greater than',
          图片链接: 'image link',
          不是图片: 'is not image',
          返回结果: 'return results',
          上传图片超时: 'upload image timeout',
          上传图片错误: 'upload image error',
          上传图片失败: 'upload image failed',
          插入图片错误: 'insert image error',
          一次最多上传: 'once most at upload',
          下载链接失败: 'download link failed',
          图片验证未通过: 'image validate failed',
          服务器返回状态: 'server return status',
          上传图片返回结果错误: 'upload image return results error',
          请替换为支持的图片类型: 'please replace with a supported image type',
          您插入的网络图片无法识别: 'the network picture you inserted is not recognized',
          您刚才插入的图片链接未通过编辑器校验: 'the image link you just inserted did not pass the editor verification'
        }
      }
    }
  }
};

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 历史记录 - 数据缓存的模式
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(7);
/**
 * 是否为兼容模式。返回 true 表示当前使用兼容（内容备份）模式，否则使用标准（差异备份）模式
 */


function compatibleMode() {
  if (util_1.UA.isIE() || util_1.UA.isOldEdge) {
    return true;
  }

  return false;
}

exports["default"] = {
  compatibleMode: compatibleMode,
  historyMaxSize: 30
};

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * @description selection range API
 * @author wangfupeng
 */

var dom_core_1 = __importDefault(__webpack_require__(2));

var util_1 = __webpack_require__(7);

var index_1 = __importDefault(__webpack_require__(273));

var SelectionAndRange =
/** @class */
function () {
  function SelectionAndRange(editor) {
    this.editor = editor;
    this._currentRange = null;
  }
  /**
   * 获取当前 range
   */


  SelectionAndRange.prototype.getRange = function () {
    return this._currentRange;
  };
  /**
   * 保存选区范围
   * @param _range 选区范围
   */


  SelectionAndRange.prototype.saveRange = function (_range) {
    if (_range) {
      // 保存已有选区
      this._currentRange = _range;
      return;
    } // 获取当前的选区


    var selection = window.getSelection();

    if (selection.rangeCount === 0) {
      return;
    }

    var range = selection.getRangeAt(0); // 获取选区范围的 DOM 元素

    var $containerElem = this.getSelectionContainerElem(range);

    if (!$containerElem) {
      // 当 选区范围内没有 DOM元素 则抛出
      return;
    }

    if ($containerElem.attr('contenteditable') === 'false' || $containerElem.parentUntil('[contenteditable=false]')) {
      // 这里大体意义上就是个保险
      // 确保 编辑区域 的 contenteditable属性 的值为 true
      return;
    }

    var editor = this.editor;
    var $textElem = editor.$textElem;

    if ($textElem.isContain($containerElem)) {
      // 是编辑内容之内的
      this._currentRange = range;
    }
  };
  /**
   * 折叠选区范围
   * @param toStart true 开始位置，false 结束位置
   */


  SelectionAndRange.prototype.collapseRange = function (toStart) {
    if (toStart === void 0) {
      toStart = false;
    }

    var range = this._currentRange;

    if (range) {
      range.collapse(toStart);
    }
  };
  /**
   * 获取选区范围内的文字
   */


  SelectionAndRange.prototype.getSelectionText = function () {
    var range = this._currentRange;

    if (range) {
      return range.toString();
    } else {
      return '';
    }
  };
  /**
   * 获取选区范围的 DOM 元素
   * @param range 选区范围
   */


  SelectionAndRange.prototype.getSelectionContainerElem = function (range) {
    var r;
    r = range || this._currentRange;
    var elem;

    if (r) {
      elem = r.commonAncestorContainer;
      return dom_core_1["default"](elem.nodeType === 1 ? elem : elem.parentNode);
    }
  };
  /**
   * 选区范围开始的 DOM 元素
   * @param range 选区范围
   */


  SelectionAndRange.prototype.getSelectionStartElem = function (range) {
    var r;
    r = range || this._currentRange;
    var elem;

    if (r) {
      elem = r.startContainer;
      return dom_core_1["default"](elem.nodeType === 1 ? elem : elem.parentNode);
    }
  };
  /**
   * 选区范围结束的 DOM 元素
   * @param range 选区范围
   */


  SelectionAndRange.prototype.getSelectionEndElem = function (range) {
    var r;
    r = range || this._currentRange;
    var elem;

    if (r) {
      elem = r.endContainer;
      return dom_core_1["default"](elem.nodeType === 1 ? elem : elem.parentNode);
    }
  };
  /**
   * 选区是否为空（没有选择文字）
   */


  SelectionAndRange.prototype.isSelectionEmpty = function () {
    var range = this._currentRange;

    if (range && range.startContainer) {
      if (range.startContainer === range.endContainer) {
        if (range.startOffset === range.endOffset) {
          return true;
        }
      }
    }

    return false;
  };
  /**
   * 恢复选区范围
   */


  SelectionAndRange.prototype.restoreSelection = function () {
    var selection = window.getSelection();
    var r = this._currentRange;

    if (selection && r) {
      selection.removeAllRanges();
      selection.addRange(r);
    }
  };
  /**
   * 创建一个空白（即 &#8203 字符）选区
   */


  SelectionAndRange.prototype.createEmptyRange = function () {
    var editor = this.editor;
    var range = this.getRange();
    var $elem;

    if (!range) {
      // 当前无 range
      return;
    }

    if (!this.isSelectionEmpty()) {
      // 当前选区必须没有内容才可以，有内容就直接 return
      return;
    }

    try {
      // 目前只支持 webkit 内核
      if (util_1.UA.isWebkit()) {
        // 插入 &#8203
        editor.cmd["do"]('insertHTML', '&#8203;'); // 修改 offset 位置

        range.setEnd(range.endContainer, range.endOffset + 1); // 存储

        this.saveRange(range);
      } else {
        $elem = dom_core_1["default"]('<strong>&#8203;</strong>');
        editor.cmd["do"]('insertElem', $elem);
        this.createRangeByElem($elem, true);
      }
    } catch (ex) {// 部分情况下会报错，兼容一下
    }
  };
  /**
   * 根据 DOM 元素设置选区
   * @param $elem DOM 元素
   * @param toStart true 开始位置，false 结束位置
   * @param isContent 是否选中 $elem 的内容
   */


  SelectionAndRange.prototype.createRangeByElem = function ($elem, toStart, isContent) {
    if (!$elem.length) {
      return;
    }

    var elem = $elem.elems[0];
    var range = document.createRange();

    if (isContent) {
      range.selectNodeContents(elem);
    } else {
      // 如果用户没有传入 isContent 参数，那就默认为 false
      range.selectNode(elem);
    }

    if (toStart != null) {
      // 传入了 toStart 参数，折叠选区。如果没传入 toStart 参数，则忽略这一步
      range.collapse(toStart);
    } // 存储 range


    this.saveRange(range);
  };
  /**
   * 获取 当前 选取范围的 顶级(段落) 元素
   * @param $editor
   */


  SelectionAndRange.prototype.getSelectionRangeTopNodes = function (editor) {
    var item = new index_1["default"](editor);
    item.init();
    return item.getSelectionNodes();
  };
  /**
   * 移动光标位置
   * @param {Node} node 元素节点
   */


  SelectionAndRange.prototype.moveCursor = function (node) {
    var range = this.getRange();
    var pos = node.childNodes.length;

    if (!range) {
      return;
    }

    if (node) {
      range.setStart(node, pos);
      range.setEnd(node, pos);
      this.restoreSelection();
    }
  };

  return SelectionAndRange;
}();

exports["default"] = SelectionAndRange;

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 选取范围所有顶级(段落)节点
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2)); // 构造函数


var SelectionRangeTopNodes =
/** @class */
function () {
  /**
   * 构造函数
   * @param editor
   */
  function SelectionRangeTopNodes(editor) {
    // 初始化属性
    this.editor = editor;
    this.$nodeList = [];
    this.$startElem = dom_core_1["default"](editor.selection.getSelectionStartElem()).getNodeTop(this.editor);
    this.$endElem = dom_core_1["default"](editor.selection.getSelectionEndElem()).getNodeTop(this.editor);
  }
  /**
   * 初始化
   */


  SelectionRangeTopNodes.prototype.init = function () {
    this.recordSelectionNodes(dom_core_1["default"](this.$startElem));
  };
  /**
   * 添加 节点 到nodeList
   * @param $node 节点
   */


  SelectionRangeTopNodes.prototype.addNodeList = function ($node) {
    this.$nodeList.push(dom_core_1["default"]($node));
  };
  /**
   * 是否是 选区结束 节点
   * @param $node 节点
   */


  SelectionRangeTopNodes.prototype.isEndElem = function ($node) {
    var _a;

    return (_a = this.$endElem) === null || _a === void 0 ? void 0 : _a.equal($node);
  };
  /**
   * 获取当前节点的下一个兄弟节点
   * @param $node 节点
   */


  SelectionRangeTopNodes.prototype.getNextSibling = function ($node) {
    return dom_core_1["default"]($node.elems[0].nextSibling);
  };
  /**
   * 记录节点 - 从选区开始节点开始 一直到匹配到选区结束节点为止
   * @param $node 节点
   */


  SelectionRangeTopNodes.prototype.recordSelectionNodes = function ($node) {
    var $elem = $node.getNodeTop(this.editor);

    if ($elem.length > 0) {
      this.addNodeList($elem);

      if (!this.isEndElem($elem)) {
        this.recordSelectionNodes(this.getNextSibling($elem));
      }
    }
  };
  /**
   * 获取 选中节点列表
   */


  SelectionRangeTopNodes.prototype.getSelectionNodes = function () {
    return this.$nodeList;
  };

  return SelectionRangeTopNodes;
}();
/**
 * 导出
 */


exports["default"] = SelectionRangeTopNodes;

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 封装 document.execCommand
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var Command =
/** @class */
function () {
  function Command(editor) {
    this.editor = editor;
  }

  Command.prototype["do"] = function (name, value) {
    var editor = this.editor;

    if (editor.config.styleWithCSS) {
      document.execCommand('styleWithCSS', false, 'true');
    }

    var selection = editor.selection; // 如果无选区，忽略

    if (!selection.getRange()) {
      return;
    } // 恢复选取


    selection.restoreSelection(); // 执行

    switch (name) {
      case 'insertHTML':
        this.insertHTML(value);
        break;

      case 'insertElem':
        this.insertElem(value);
        break;

      default:
        // 默认 command
        this.execCommand(name, value);
        break;
    } // 修改菜单状态


    editor.menus.changeActive(); // 最后，恢复选取保证光标在原来的位置闪烁

    selection.saveRange();
    selection.restoreSelection();
  };
  /**
   * 插入 html
   * @param html html 字符串
   */


  Command.prototype.insertHTML = function (html) {
    var editor = this.editor;
    var range = editor.selection.getRange();
    if (range == null) return;

    if (this.queryCommandSupported('insertHTML')) {
      // W3C
      this.execCommand('insertHTML', html);
    } else if (range.insertNode) {
      // IE
      range.deleteContents();
      range.insertNode(dom_core_1["default"](html).elems[0]);
      editor.selection.collapseRange();
    } // else if (range.pasteHTML) {
    //     // IE <= 10
    //     range.pasteHTML(html)
    // }

  };
  /**
   * 插入 DOM 元素
   * @param $elem DOM 元素
   */


  Command.prototype.insertElem = function ($elem) {
    var editor = this.editor;
    var range = editor.selection.getRange();
    if (range == null) return;

    if (range.insertNode) {
      range.deleteContents();
      range.insertNode($elem.elems[0]);
    }
  };
  /**
   * 执行 document.execCommand
   * @param name name
   * @param value value
   */


  Command.prototype.execCommand = function (name, value) {
    document.execCommand(name, false, value);
  };
  /**
   * 执行 document.queryCommandValue
   * @param name name
   */


  Command.prototype.queryCommandValue = function (name) {
    return document.queryCommandValue(name);
  };
  /**
   * 执行 document.queryCommandState
   * @param name name
   */


  Command.prototype.queryCommandState = function (name) {
    return document.queryCommandState(name);
  };
  /**
   * 执行 document.queryCommandSupported
   * @param name name
   */


  Command.prototype.queryCommandSupported = function (name) {
    return document.queryCommandSupported(name);
  };

  return Command;
}();

exports["default"] = Command;

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 编辑区域，入口文件
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _indexOf = _interopRequireDefault(__webpack_require__(52));

var _trim = _interopRequireDefault(__webpack_require__(21));

var _find = _interopRequireDefault(__webpack_require__(54));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var index_1 = __importDefault(__webpack_require__(280));

var util_1 = __webpack_require__(7);

var getChildrenJSON_1 = __importDefault(__webpack_require__(292));

var getHtmlByNodeList_1 = __importDefault(__webpack_require__(293));

var Text =
/** @class */
function () {
  function Text(editor) {
    this.editor = editor;
    this.eventHooks = {
      changeEvents: [],
      dropEvents: [],
      clickEvents: [],
      keyupEvents: [],
      tabUpEvents: [],
      tabDownEvents: [],
      enterUpEvents: [],
      enterDownEvents: [],
      deleteUpEvents: [],
      deleteDownEvents: [],
      pasteEvents: [],
      linkClickEvents: [],
      codeClickEvents: [],
      textScrollEvents: [],
      toolbarClickEvents: [],
      imgClickEvents: [],
      imgDragBarMouseDownEvents: [],
      tableClickEvents: [],
      menuClickEvents: [],
      dropListMenuHoverEvents: [],
      splitLineEvents: []
    };
  }
  /**
   * 初始化
   */


  Text.prototype.init = function () {
    // 实时保存选取范围
    this._saveRange(); // 绑定事件


    this._bindEventHooks(); // 初始化 text 事件钩子函数


    index_1["default"](this);
  };
  /**
   * 切换placeholder
   */


  Text.prototype.togglePlaceholder = function () {
    var _context;

    var html = this.html();
    var $placeholder = (0, _find["default"])(_context = this.editor.$textContainerElem).call(_context, '.placeholder');
    $placeholder.hide();
    if (!html || html === '<p><br></p>' || html === ' ') $placeholder.show();
  };
  /**
   * 清空内容
   */


  Text.prototype.clear = function () {
    this.html('<p><br></p>');
  };
  /**
   * 设置/获取 html
   * @param val html 字符串
   */


  Text.prototype.html = function (val) {
    var editor = this.editor;
    var $textElem = editor.$textElem; // 没有 val ，则是获取 html

    if (val == null) {
      var html = $textElem.html(); // 未选中任何内容的时候点击“加粗”或者“斜体”等按钮，就得需要一个空的占位符 &#8203 ，这里替换掉

      html = html.replace(/\u200b/gm, '');
      html = html.replace(/<p><\/p>/gim, ''); // 去掉空行

      html = html.replace(/<p><br\/?><\/p>$/gim, ''); // 去掉最后的 <p><br><p>

      /**
       * 这里的代码为了处理火狐多余的空行标签,但是强制删除空行标签会带来其他问题
       * html()方法返回的的值,"<p><br></p>"中pr会被删除,只留下<p>,点不进去,从而产生垃圾数据
       * 目前在末位有多个空行的情况下执行撤销重做操作,会产生一种不记录末尾空行的错觉
       * 暂时注释, 等待进一步的兼容处理
       */
      // html = html.replace(/><br>(?!<)/gi, '>') // 过滤 <p><br>内容</p> 中的br
      // html = html.replace(/(?!>)<br></gi, '<') // 过滤 <p>内容<br></p> 中的br

      /**
       * pre标签格式化
       * html()方法理论上应当输出纯净的代码文本,但是对于是否解析html标签还没有良好的判断
       * 如果去除hljs的标签,在解析状态下回显,会造成显示错误并且无法再通过hljs方法渲染
       * 暂且其弃用
       */
      // html = formatCodeHtml(editor, html)

      return html;
    } // 有 val ，则是设置 html


    val = (0, _trim["default"])(val).call(val);

    if (val === '') {
      val = "<p><br></p>";
    }

    if ((0, _indexOf["default"])(val).call(val, '<') !== 0) {
      // 内容用 p 标签包裹
      val = "<p>" + val + "</p>";
    }

    $textElem.html(val); // 初始化选区，将光标定位到内容尾部

    editor.initSelection();
  };
  /**
   * 将json设置成html至编辑器
   * @param nodeList json格式
   */


  Text.prototype.setJSON = function (nodeList) {
    var html = getHtmlByNodeList_1["default"](nodeList).children();
    var editor = this.editor;
    var $textElem = editor.$textElem; // 没有获取到元素的情况

    if (!html) return; // 替换文本节点下全部子节点

    $textElem.replaceChildAll(html);
  };
  /**
   * 获取 json 格式的数据
   */


  Text.prototype.getJSON = function () {
    var editor = this.editor;
    var $textElem = editor.$textElem;
    return getChildrenJSON_1["default"]($textElem);
  };
  /**
   * 获取/设置 字符串内容
   * @param val text 字符串
   */


  Text.prototype.text = function (val) {
    var editor = this.editor;
    var $textElem = editor.$textElem;
    var $textContainerElem = editor.$textContainerElem; // 没有 val ，是获取 text

    if (val == null) {
      var text = $textElem.text(); // 未选中任何内容的时候点击“加粗”或者“斜体”等按钮，就得需要一个空的占位符 &#8203 ，这里替换掉

      text = text.replace(/\u200b/gm, '');
      return text;
    } // 有 val ，则是设置 text


    $textElem.text("<p>" + val + "</p>"); // 初始化选区，将光标定位到内容尾部

    editor.initSelection();
  };
  /**
   * 追加 html 内容
   * @param html html 字符串
   */


  Text.prototype.append = function (html) {
    var editor = this.editor;
    var $textElem = editor.$textElem;

    if ((0, _indexOf["default"])(html).call(html, '<') !== 0) {
      // 普通字符串，用 <p> 包裹
      html = "<p>" + html + "</p>";
    }

    $textElem.append(dom_core_1["default"](html)); // 初始化选区，将光标定位到内容尾部

    editor.initSelection();
  };
  /**
   * 每一步操作，都实时保存选区范围
   */


  Text.prototype._saveRange = function () {
    var editor = this.editor;
    var $textElem = editor.$textElem; // 保存当前的选区

    function saveRange() {
      // 随时保存选区
      editor.selection.saveRange(); // 更新按钮 active 状态

      editor.menus.changeActive();
    } // 按键后保存


    $textElem.on('keyup', saveRange);
    $textElem.on('mousedown', function () {
      // mousedown 状态下，鼠标滑动到编辑区域外面，也需要保存选区
      $textElem.on('mouseleave', saveRange);
    });
    $textElem.on('mouseup', function () {
      var selection = editor.selection;
      var range = selection.getRange();
      if (range == null) return;
      var startOffset = range.startOffset,
          endOffset = range.endOffset;
      var endContainer = range === null || range === void 0 ? void 0 : range.endContainer; // 修复当selection结束时，点击编辑器内部，保存选区异常的情况

      if (startOffset !== endOffset && endContainer != null) {
        range === null || range === void 0 ? void 0 : range.setStart(endContainer, endOffset);
      }

      saveRange(); // 在编辑器区域之内完成点击，取消鼠标滑动到编辑区外面的事件

      $textElem.off('mouseleave', saveRange);
    });
  };
  /**
   * 绑定事件，事件会触发钩子函数
   */


  Text.prototype._bindEventHooks = function () {
    var editor = this.editor;
    var $textElem = editor.$textElem;
    var eventHooks = this.eventHooks; // click hooks

    $textElem.on('click', function (e) {
      var clickEvents = eventHooks.clickEvents;
      (0, _forEach["default"])(clickEvents).call(clickEvents, function (fn) {
        return fn(e);
      });
    }); // enter 键 up 时的 hooks

    $textElem.on('keyup', function (e) {
      if (e.keyCode !== 13) return;
      var enterUpEvents = eventHooks.enterUpEvents;
      (0, _forEach["default"])(enterUpEvents).call(enterUpEvents, function (fn) {
        return fn(e);
      });
    }); // 键盘 up 时的 hooks

    $textElem.on('keyup', function (e) {
      var keyupEvents = eventHooks.keyupEvents;
      (0, _forEach["default"])(keyupEvents).call(keyupEvents, function (fn) {
        return fn(e);
      });
    }); // delete 键 up 时 hooks

    $textElem.on('keyup', function (e) {
      if (e.keyCode !== 8) return;
      var deleteUpEvents = eventHooks.deleteUpEvents;
      (0, _forEach["default"])(deleteUpEvents).call(deleteUpEvents, function (fn) {
        return fn(e);
      });
    }); // delete 键 down 时 hooks

    $textElem.on('keydown', function (e) {
      if (e.keyCode !== 8) return;
      var deleteDownEvents = eventHooks.deleteDownEvents;
      (0, _forEach["default"])(deleteDownEvents).call(deleteDownEvents, function (fn) {
        return fn(e);
      });
    }); // 粘贴

    $textElem.on('paste', function (e) {
      if (util_1.UA.isIE()) return; // IE 不支持
      // 阻止默认行为，使用 execCommand 的粘贴命令

      e.preventDefault();
      var pasteEvents = eventHooks.pasteEvents;
      (0, _forEach["default"])(pasteEvents).call(pasteEvents, function (fn) {
        return fn(e);
      });
    }); // 撤销/恢复 快捷键

    $textElem.on('keydown', function (e) {
      if ( // 编辑器处于聚焦状态下（多编辑器实例） || 当前处于兼容模式（兼容模式撤销/恢复后不聚焦，所以直接过，但会造成多编辑器同时撤销/恢复）
      (editor.isFocus || editor.isCompatibleMode) && (e.ctrlKey || e.metaKey) && e.keyCode === 90) {
        // 取消默认行为
        e.preventDefault(); // 执行事件

        if (e.shiftKey) {
          // 恢复
          editor.history.restore();
        } else {
          // 撤销
          editor.history.revoke();
        }
      }
    }); // tab up

    $textElem.on('keyup', function (e) {
      if (e.keyCode !== 9) return;
      e.preventDefault();
      var tabUpEvents = eventHooks.tabUpEvents;
      (0, _forEach["default"])(tabUpEvents).call(tabUpEvents, function (fn) {
        return fn(e);
      });
    }); // tab down

    $textElem.on('keydown', function (e) {
      if (e.keyCode !== 9) return;
      e.preventDefault();
      var tabDownEvents = eventHooks.tabDownEvents;
      (0, _forEach["default"])(tabDownEvents).call(tabDownEvents, function (fn) {
        return fn(e);
      });
    }); // 文本编辑区域 滚动时触发

    $textElem.on('scroll', // 使用节流
    util_1.throttle(function (e) {
      var textScrollEvents = eventHooks.textScrollEvents;
      (0, _forEach["default"])(textScrollEvents).call(textScrollEvents, function (fn) {
        return fn(e);
      });
    }, 100)); // 拖拽相关的事件

    function preventDefault(e) {
      // 禁用 document 拖拽事件
      e.preventDefault();
    }

    dom_core_1["default"](document).on('dragleave', preventDefault).on('drop', preventDefault).on('dragenter', preventDefault).on('dragover', preventDefault); // 全局事件在编辑器实例销毁的时候进行解绑

    editor.beforeDestroy(function () {
      dom_core_1["default"](document).off('dragleave', preventDefault).off('drop', preventDefault).off('dragenter', preventDefault).off('dragover', preventDefault);
    });
    $textElem.on('drop', function (e) {
      e.preventDefault();
      var events = eventHooks.dropEvents;
      (0, _forEach["default"])(events).call(events, function (fn) {
        return fn(e);
      });
    }); // link click

    $textElem.on('click', function (e) {
      // 存储链接元素
      var $link = null;
      var target = e.target;
      var $target = dom_core_1["default"](target);

      if ($target.getNodeName() === 'A') {
        // 当前点击的就是一个链接
        $link = $target;
      } else {
        // 否则，向父节点中寻找链接
        var $parent = $target.parentUntil('a');

        if ($parent != null) {
          // 找到了
          $link = $parent;
        }
      }

      if ($link == null) return; // 没有点击链接，则返回

      var linkClickEvents = eventHooks.linkClickEvents;
      (0, _forEach["default"])(linkClickEvents).call(linkClickEvents, function (fn) {
        return fn($link);
      });
    }); // img click

    $textElem.on('click', function (e) {
      // 存储图片元素
      var $img = null;
      var target = e.target;
      var $target = dom_core_1["default"](target); //处理图片点击 判断是否是表情 根据 不存在class或者className!==eleImg、没有alt属性

      if ($target.getNodeName() === 'IMG' && (!$target.elems[0].getAttribute('class') || $target.elems[0].getAttribute('class') !== 'eleImg') && !$target.elems[0].getAttribute('alt')) {
        // 当前点击的就是img
        e.stopPropagation();
        $img = $target;
      }

      if ($img == null) return; // 没有点击图片，则返回

      var imgClickEvents = eventHooks.imgClickEvents;
      (0, _forEach["default"])(imgClickEvents).call(imgClickEvents, function (fn) {
        return fn($img);
      });
    }); // code click

    $textElem.on('click', function (e) {
      // 存储代码元素
      var $code = null;
      var target = e.target;
      var $target = dom_core_1["default"](target);

      if ($target.getNodeName() === 'PRE') {
        // 当前点击的就是一个链接
        $code = $target;
      } else {
        // 否则，向父节点中寻找链接
        var $parent = $target.parentUntil('pre');

        if ($parent != null) {
          // 找到了
          $code = $parent;
        }
      }

      if ($code == null) return; // 没有点击链接，则返回

      var codeClickEvents = eventHooks.codeClickEvents;
      (0, _forEach["default"])(codeClickEvents).call(codeClickEvents, function (fn) {
        return fn($code);
      });
    }); // splitLine click

    $textElem.on('click', function (e) {
      // 存储分割线元素
      var $splitLine = null;
      var target = e.target;
      var $target = dom_core_1["default"](target); // 判断当前点击元素

      if ($target.getNodeName() === 'HR') {
        $splitLine = $target;
      } else {
        $target == null;
      }

      if ($splitLine == null) return; // 没有点击分割线，则返回
      // 设置、恢复选区

      editor.selection.createRangeByElem($splitLine);
      editor.selection.restoreSelection();
      var splitLineClickEvents = eventHooks.splitLineEvents;
      (0, _forEach["default"])(splitLineClickEvents).call(splitLineClickEvents, function (fn) {
        return fn($splitLine);
      });
    }); // 菜单栏被点击

    editor.$toolbarElem.on('click', function (e) {
      var toolbarClickEvents = eventHooks.toolbarClickEvents;
      (0, _forEach["default"])(toolbarClickEvents).call(toolbarClickEvents, function (fn) {
        return fn(e);
      });
    }); //mousedown事件

    editor.$textContainerElem.on('mousedown', function (e) {
      var target = e.target;
      var $target = dom_core_1["default"](target);

      if ($target.hasClass('w-e-img-drag-rb')) {
        // 点击的元素，是图片拖拽调整大小的 bar
        var imgDragBarMouseDownEvents = eventHooks.imgDragBarMouseDownEvents;
        (0, _forEach["default"])(imgDragBarMouseDownEvents).call(imgDragBarMouseDownEvents, function (fn) {
          return fn();
        });
      }
    }); //table click

    $textElem.on('click', function (e) {
      // 存储元素
      var $dom = null;
      var target = e.target; //获取最祖父元素

      $dom = dom_core_1["default"](target).parentUntil('TABLE', target);
      if ($dom == null) return; // 没有table范围内，则返回

      var tableClickEvents = eventHooks.tableClickEvents;
      (0, _forEach["default"])(tableClickEvents).call(tableClickEvents, function (fn) {
        return fn($dom);
      });
    }); // enter 键 down

    $textElem.on('keydown', function (e) {
      if (e.keyCode !== 13) return;
      var enterDownEvents = eventHooks.enterDownEvents;
      (0, _forEach["default"])(enterDownEvents).call(enterDownEvents, function (fn) {
        return fn(e);
      });
    });
  };

  return Text;
}();

exports["default"] = Text;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(277);

module.exports = parent;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var find = __webpack_require__(278);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.find;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.find) ? find : own;
};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(279);
var entryVirtual = __webpack_require__(18);

module.exports = entryVirtual('Array').find;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(4);
var $find = __webpack_require__(40).find;
var addToUnscopables = __webpack_require__(84);
var arrayMethodUsesToLength = __webpack_require__(26);

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description Text 事件钩子函数。Text 公共的，不是某个菜单独有的
 * @wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var enter_to_create_p_1 = __importDefault(__webpack_require__(281));

var del_to_keep_p_1 = __importDefault(__webpack_require__(282));

var tab_to_space_1 = __importDefault(__webpack_require__(283));

var paste_text_html_1 = __importDefault(__webpack_require__(284));

var img_click_active_1 = __importDefault(__webpack_require__(291));
/**
 * 初始化 text 事件钩子函数
 * @param text text 实例
 */


function initTextHooks(text) {
  var editor = text.editor;
  var eventHooks = text.eventHooks; // 回车时，保证生成的是 <p> 标签

  enter_to_create_p_1["default"](editor, eventHooks.enterUpEvents, eventHooks.enterDownEvents); // 删除时，保留 <p><br></p>

  del_to_keep_p_1["default"](editor, eventHooks.deleteUpEvents, eventHooks.deleteDownEvents); // tab 转换为空格

  tab_to_space_1["default"](editor, eventHooks.tabDownEvents); // 粘贴 text html

  paste_text_html_1["default"](editor, eventHooks.pasteEvents); // img click active

  img_click_active_1["default"](editor, eventHooks.imgClickEvents);
}

exports["default"] = initTextHooks;

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 回车时，保证生成的是 <p> 标签
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));
/**
 * 回车时，保证生成的是 <p> 标签
 * @param editor 编辑器实例
 * @param enterUpEvents enter 键 up 时的 hooks
 * @param enterDownEvents enter 键 down 时的 hooks
 */


function enterToCreateP(editor, enterUpEvents, enterDownEvents) {
  function insertEmptyP($selectionElem) {
    var $p = dom_core_1["default"]('<p><br></p>');
    $p.insertBefore($selectionElem);
    editor.selection.createRangeByElem($p, true);
    editor.selection.restoreSelection();
    $selectionElem.remove();
  } // enter up 时


  function fn() {
    var $textElem = editor.$textElem;
    var $selectionElem = editor.selection.getSelectionContainerElem();
    var $parentElem = $selectionElem.parent();

    if ($parentElem.html() === '<code><br></code>') {
      // 回车之前光标所在一个 <p><code>.....</code></p> ，忽然回车生成一个空的 <p><code><br></code></p>
      // 而且继续回车跳不出去，因此只能特殊处理
      insertEmptyP($selectionElem);
      return;
    }

    if (!$parentElem.equal($textElem)) {
      // 不是顶级标签
      return;
    }

    var nodeName = $selectionElem.getNodeName();

    if (nodeName === 'P') {
      // 当前的标签是 P ，不用做处理
      return;
    }

    if ($selectionElem.text()) {
      // 有内容，不做处理
      return;
    } // 插入 <p> ，并将选取定位到 <p>，删除当前标签


    insertEmptyP($selectionElem);
  }

  enterUpEvents.push(fn); // enter down 时

  function createPWhenEnterText(e) {
    var _a; // selection中的range缓存还有问题,更新不及时,此处手动更新range,处理enter的bug


    editor.selection.saveRange((_a = getSelection()) === null || _a === void 0 ? void 0 : _a.getRangeAt(0));
    var $selectElem = editor.selection.getSelectionContainerElem();

    if ($selectElem.id === editor.textElemId) {
      // 回车时，默认创建了 text 标签（没有 p 标签包裹），父元素直接就是 $textElem
      // 例如，光标放在 table 最后侧，回车时，默认就是这个情况
      e.preventDefault();
      editor.cmd["do"]('insertHTML', '<p><br></p>');
    }
  }

  enterDownEvents.push(createPWhenEnterText);
}

exports["default"] = enterToCreateP;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 删除时保留 <p><br></p>
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _trim = _interopRequireDefault(__webpack_require__(21));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));
/**
 * 删除时保留 <p><br></p>
 * @param editor 编辑器实例
 * @param deleteUpEvents delete 键 up 时的 hooks
 * @param deleteDownEvents delete 建 down 时的 hooks
 */


function deleteToKeepP(editor, deleteUpEvents, deleteDownEvents) {
  function upFn() {
    var _context;

    var $textElem = editor.$textElem;
    var txtHtml = (0, _trim["default"])(_context = $textElem.html().toLowerCase()).call(_context); // firefox 时用 txtHtml === '<br>' 判断，其他用 !txtHtml 判断

    if (!txtHtml || txtHtml === '<br>') {
      // 内容空了
      var $p = dom_core_1["default"]('<p><br/></p>');
      $textElem.html(' '); // 一定要先清空，否则在 firefox 下有问题

      $textElem.append($p);
      editor.selection.createRangeByElem($p, false, true);
      editor.selection.restoreSelection();
    }
  }

  deleteUpEvents.push(upFn);

  function downFn(e) {
    var _context2;

    var $textElem = editor.$textElem;
    var txtHtml = (0, _trim["default"])(_context2 = $textElem.html().toLowerCase()).call(_context2);

    if (txtHtml === '<p><br></p>') {
      // 最后剩下一个空行，就不再删除了
      e.preventDefault();
      return;
    }
  }

  deleteDownEvents.push(downFn);
}

exports["default"] = deleteToKeepP;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 编辑区域 tab 的特殊处理
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * 编辑区域 tab 的特殊处理，转换为空格
 * @param editor 编辑器实例
 * @param tabDownEvents tab down 事件钩子
 */

function tabHandler(editor, tabDownEvents) {
  // 定义函数
  function fn() {
    if (!editor.cmd.queryCommandSupported('insertHTML')) {
      // 必须原生支持 insertHTML 命令
      return;
    }

    var $selectionElem = editor.selection.getSelectionContainerElem();

    if (!$selectionElem) {
      return;
    }

    var $parentElem = $selectionElem.parent();
    var selectionNodeName = $selectionElem.getNodeName();
    var parentNodeName = $parentElem.getNodeName();

    if (selectionNodeName == 'CODE' || parentNodeName === 'CODE' || parentNodeName === 'PRE' || /hljs/.test(parentNodeName)) {
      // <pre><code> 里面
      editor.cmd["do"]('insertHTML', editor.config.languageTab);
    } else {
      // 普通文字
      editor.cmd["do"]('insertHTML', '&nbsp;&nbsp;&nbsp;&nbsp;');
    }
  } // 保留函数


  tabDownEvents.push(fn);
}

exports["default"] = tabHandler;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 粘贴 text html
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _trim = _interopRequireDefault(__webpack_require__(21));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var paste_event_1 = __webpack_require__(121);

var util_1 = __webpack_require__(7);

var const_1 = __webpack_require__(30);
/**
 * 格式化html
 * @param val 粘贴的html
 * @author liuwei
 */


function formatHtml(val) {
  var pasteText = val; // div 全部替换为 p 标签

  pasteText = pasteText.replace(/<div>/gim, '<p>').replace(/<\/div>/gim, '</p>'); // 不允许空行，放在最后

  pasteText = pasteText.replace(/<p><\/p>/gim, '<p><br></p>'); // 去除''

  return (0, _trim["default"])(pasteText).call(pasteText);
}
/**
 * 格式化html
 * @param val 粘贴的html
 * @author liuwei
 */


function formatCode(val) {
  var pasteText = val.replace(/<br>|<br\/>/gm, '\n').replace(/<[^>]+>/gm, '');
  return pasteText;
}
/**
 * 粘贴文本和 html
 * @param editor 编辑器对象
 * @param pasteEvents 粘贴事件列表
 */


function pasteTextHtml(editor, pasteEvents) {
  function fn(e) {
    // 获取配置
    var config = editor.config;
    var pasteFilterStyle = config.pasteFilterStyle;
    var pasteIgnoreImg = config.pasteIgnoreImg;
    var pasteTextHandle = config.pasteTextHandle; // 获取粘贴的文字

    var pasteHtml = paste_event_1.getPasteHtml(e, pasteFilterStyle, pasteIgnoreImg);
    var pasteText = paste_event_1.getPasteText(e);
    pasteText = pasteText.replace(/\n/gm, '<br>'); // 当前选区所在的 DOM 节点

    var $selectionElem = editor.selection.getSelectionContainerElem();

    if (!$selectionElem) {
      return;
    }

    var nodeName = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.getNodeName();
    var $topElem = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.getNodeTop(editor); // 当前节点顶级可能没有

    var topNodeName = '';

    if ($topElem.elems[0]) {
      topNodeName = $topElem === null || $topElem === void 0 ? void 0 : $topElem.getNodeName();
    } // code 中只能粘贴纯文本


    if (nodeName === 'CODE' || topNodeName === 'PRE') {
      if (pasteTextHandle && util_1.isFunction(pasteTextHandle)) {
        // 用户自定义过滤处理粘贴内容
        pasteText = '' + (pasteTextHandle(pasteText) || '');
      }

      editor.cmd["do"]('insertHTML', formatCode(pasteText));
      return;
    } // 如果复制进来的是url链接则插入时将它转为链接


    if (const_1.urlRegex.test(pasteText)) {
      return editor.cmd["do"]('insertHTML', "<a href=\"" + pasteText + "\" target=\"_blank\">" + pasteText + "</a>");
    } // table 中（td、th），待开发。。。


    if (!pasteHtml) {
      return;
    }

    try {
      // firefox 中，获取的 pasteHtml 可能是没有 <ul> 包裹的 <li>
      // 因此执行 insertHTML 会报错
      if (pasteTextHandle && util_1.isFunction(pasteTextHandle)) {
        // 用户自定义过滤处理粘贴内容
        pasteHtml = '' + (pasteTextHandle(pasteHtml) || ''); // html
      }

      editor.cmd["do"]('insertHTML', "" + formatHtml(pasteHtml));
    } catch (ex) {
      // 此时使用 pasteText 来兼容一下
      if (pasteTextHandle && util_1.isFunction(pasteTextHandle)) {
        // 用户自定义过滤处理粘贴内容
        pasteText = '' + (pasteTextHandle(pasteText) || '');
      }

      editor.cmd["do"]('insertHTML', "" + formatHtml(pasteText)); // text
    }
  }

  pasteEvents.push(fn);
}

exports["default"] = pasteTextHtml;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 将粘贴的 html 字符串，转换为正确、简洁的 html 代码。剔除不必要的标签和属性。
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _includes = _interopRequireDefault(__webpack_require__(110));

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _trim = _interopRequireDefault(__webpack_require__(21));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tags_1 = __webpack_require__(286);

var simplehtmlparser_js_1 = __importDefault(__webpack_require__(290));
/**
 * 过滤掉空 span
 * @param html html
 */


function filterEmptySpan(html) {
  var regForReplace = /<span>.*?<\/span>/gi;
  var regForMatch = /<span>(.*?)<\/span>/;
  return html.replace(regForReplace, function (s) {
    // s 是单个 span ，如 <span>文字</span>
    var result = s.match(regForMatch);
    if (result == null) return '';
    return result[1];
  });
}
/**
 * 是否忽略标签
 * @param tag tag
 * @param ignoreImg 是否忽略 img 标签
 */


function isIgnoreTag(tag, ignoreImg) {
  var _context;

  tag = (0, _trim["default"])(_context = tag.toLowerCase()).call(_context); // 忽略的标签

  if (tags_1.IGNORE_TAGS.has(tag)) {
    return true;
  } // 是否忽略图片


  if (ignoreImg) {
    if (tag === 'img') {
      return true;
    }
  }

  return false;
}
/**
 * 为 tag 生成 html 字符串，开始部分
 * @param tag tag
 * @param attrs 属性
 */


function genStartHtml(tag, attrs) {
  var result = ''; // tag < 符号

  result = "<" + tag; // 拼接属性

  var attrStrArr = [];
  (0, _forEach["default"])(attrs).call(attrs, function (attr) {
    attrStrArr.push(attr.name + "=\"" + attr.value + "\"");
  });

  if (attrStrArr.length > 0) {
    result = result + ' ' + attrStrArr.join(' ');
  } // tag > 符号


  var isEmpty = tags_1.EMPTY_TAGS.has(tag); // 没有子节点或文本的标签，如 img

  result = result + (isEmpty ? '/' : '') + '>';
  return result;
}
/**
 * 为 tag 生成 html 字符串，结尾部分
 * @param tag tag
 */


function genEndHtml(tag) {
  return "</" + tag + ">";
}
/**
 * 处理粘贴的 html
 * @param html html 字符串
 * @param filterStyle 是否过滤 style 样式
 * @param ignoreImg 是否忽略 img 标签
 */


function parseHtml(html, filterStyle, ignoreImg) {
  if (filterStyle === void 0) {
    filterStyle = true;
  }

  if (ignoreImg === void 0) {
    ignoreImg = false;
  }

  var resultArr = []; // 存储结果，数组形式，最后再 join
  // 当前正在处理的标签，以及记录和清除的方法

  var CUR_TAG = '';

  function markTagStart(tag) {
    tag = (0, _trim["default"])(tag).call(tag);
    if (!tag) return;
    if (tags_1.EMPTY_TAGS.has(tag)) return; // 内容为空的标签，如 img ，不用记录

    CUR_TAG = tag;
  }

  function markTagEnd() {
    CUR_TAG = '';
  } // 能通过 'text/html' 格式获取 html


  var htmlParser = new simplehtmlparser_js_1["default"]();
  htmlParser.parse(html, {
    startElement: function startElement(tag, attrs) {
      // 首先，标记开始
      markTagStart(tag); // 忽略的标签

      if (isIgnoreTag(tag, ignoreImg)) {
        return;
      } // 找出该标签必须的属性（其他的属性忽略）


      var necessaryAttrKeys = tags_1.NECESSARY_ATTRS.get(tag) || [];
      var attrsForTag = [];
      (0, _forEach["default"])(attrs).call(attrs, function (attr) {
        // 属性名
        var name = attr.name; // style 单独处理

        if (name === 'style') {
          // 保留 style 样式
          if (!filterStyle) {
            attrsForTag.push(attr);
          }

          return;
        } // 除了 style 之外的其他属性


        if ((0, _includes["default"])(necessaryAttrKeys).call(necessaryAttrKeys, name) === false) {
          // 不是必须的属性，忽略
          return;
        }

        attrsForTag.push(attr);
      }); // 拼接为 HTML 标签

      var html = genStartHtml(tag, attrsForTag);
      resultArr.push(html);
    },
    characters: function characters(str) {
      str = (0, _trim["default"])(str).call(str);
      if (!str) return; // 忽略的标签

      if (isIgnoreTag(CUR_TAG, ignoreImg)) {
        return;
      }

      resultArr.push(str);
    },
    endElement: function endElement(tag) {
      // 忽略的标签
      if (isIgnoreTag(tag, ignoreImg)) {
        return;
      } // 拼接为 HTML 标签


      var html = genEndHtml(tag);
      resultArr.push(html); // 最后，标记结束

      markTagEnd();
    },
    comment: function comment(str) {
      /* 注释，不做处理 */
    }
  });
  var result = resultArr.join(''); // 转换为字符串
  // 过滤掉空 span 标签

  result = filterEmptySpan(result);
  return result;
}

exports["default"] = parseHtml;

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 粘贴相关的 tags
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _map = _interopRequireDefault(__webpack_require__(111));

var _set = _interopRequireDefault(__webpack_require__(122));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.TOP_LEVEL_TAGS = exports.EMPTY_TAGS = exports.NECESSARY_ATTRS = exports.IGNORE_TAGS = void 0; // 忽略的标签

exports.IGNORE_TAGS = new _set["default"](['doctype', '!doctype', 'html', 'head', 'meta', 'body', 'script', 'style', 'link', 'frame', 'iframe', 'title', 'svg', 'center']); // 指定标签必要的属性

exports.NECESSARY_ATTRS = new _map["default"]([['img', ['src', 'alt']], ['a', ['href', 'target']], ['td', ['colspan', 'rowspan']], ['th', ['colspan', 'rowspan']]]); // 没有子节点或文本的标签

exports.EMPTY_TAGS = new _set["default"](['area', 'base', 'basefont', 'br', 'col', 'hr', 'img', 'input', 'isindex', 'embed']); // 编辑区域顶级节点

exports.TOP_LEVEL_TAGS = new _set["default"](['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'ul', 'ol', 'table', 'blockquote', 'pre', 'hr', 'form']);

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(288);

module.exports = parent;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(289);
__webpack_require__(62);
__webpack_require__(64);
__webpack_require__(49);
var path = __webpack_require__(11);

module.exports = path.Set;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(112);
var collectionStrong = __webpack_require__(114);

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),
/* 290 */
/***/ (function(module, exports) {

// Copyright 2004 Erik Arvidsson. All Rights Reserved.
//
// This code is triple licensed using Apache Software License 2.0,
// Mozilla Public License or GNU Public License
//
///////////////////////////////////////////////////////////////////////////////
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License.  You may obtain a copy
// of the License at http://www.apache.org/licenses/LICENSE-2.0
//
///////////////////////////////////////////////////////////////////////////////
//
// The contents of this file are subject to the Mozilla Public License
// Version 1.1 (the "License"); you may not use this file except in
// compliance with the License. You may obtain a copy of the License at
// http://www.mozilla.org/MPL/
//
// Software distributed under the License is distributed on an "AS IS"
// basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
// License for the specific language governing rights and limitations
// under the License.
//
// The Original Code is Simple HTML Parser.
//
// The Initial Developer of the Original Code is Erik Arvidsson.
// Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights
// Reserved.
//
///////////////////////////////////////////////////////////////////////////////
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
///////////////////////////////////////////////////////////////////////////////

/*
var handler ={
	startElement:   function (sTagName, oAttrs) {},
	endElement:     function (sTagName) {},
    characters:		function (s) {},
    comment:		function (s) {}
};
*/

function SimpleHtmlParser() {}

SimpleHtmlParser.prototype = {
    handler: null,

    // regexps

    startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
    endTagRe: /^<\/([^>\s]+)[^>]*>/m,
    attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,

    parse: function (s, oHandler) {
        if (oHandler) this.contentHandler = oHandler

        var i = 0
        var res, lc, lm, rc, index
        var treatAsChars = false
        var oThis = this
        while (s.length > 0) {
            // Comment
            if (s.substring(0, 4) == '<!--') {
                index = s.indexOf('-->')
                if (index != -1) {
                    this.contentHandler.comment(s.substring(4, index))
                    s = s.substring(index + 3)
                    treatAsChars = false
                } else {
                    treatAsChars = true
                }
            }

            // end tag
            else if (s.substring(0, 2) == '</') {
                if (this.endTagRe.test(s)) {
                    lc = RegExp.leftContext
                    lm = RegExp.lastMatch
                    rc = RegExp.rightContext

                    lm.replace(this.endTagRe, function () {
                        return oThis.parseEndTag.apply(oThis, arguments)
                    })

                    s = rc
                    treatAsChars = false
                } else {
                    treatAsChars = true
                }
            }
            // start tag
            else if (s.charAt(0) == '<') {
                if (this.startTagRe.test(s)) {
                    lc = RegExp.leftContext
                    lm = RegExp.lastMatch
                    rc = RegExp.rightContext

                    lm.replace(this.startTagRe, function () {
                        return oThis.parseStartTag.apply(oThis, arguments)
                    })

                    s = rc
                    treatAsChars = false
                } else {
                    treatAsChars = true
                }
            }

            if (treatAsChars) {
                index = s.indexOf('<')
                if (index == -1) {
                    this.contentHandler.characters(s)
                    s = ''
                } else {
                    this.contentHandler.characters(s.substring(0, index))
                    s = s.substring(index)
                }
            }

            treatAsChars = true
        }
    },

    parseStartTag: function (sTag, sTagName, sRest) {
        var attrs = this.parseAttributes(sTagName, sRest)
        this.contentHandler.startElement(sTagName, attrs)
    },

    parseEndTag: function (sTag, sTagName) {
        this.contentHandler.endElement(sTagName)
    },

    parseAttributes: function (sTagName, s) {
        var oThis = this
        var attrs = []
        s.replace(this.attrRe, function (a0, a1, a2, a3, a4, a5, a6) {
            attrs.push(oThis.parseAttribute(sTagName, a0, a1, a2, a3, a4, a5, a6))
        })
        return attrs
    },

    parseAttribute: function (sTagName, sAttribute, sName) {
        var value = ''
        if (arguments[7]) value = arguments[8]
        else if (arguments[5]) value = arguments[6]
        else if (arguments[3]) value = arguments[4]

        var empty = !value && !arguments[3]
        return { name: sName, value: empty ? null : value }
    },
}

// export default SimpleHtmlParser
module.exports = SimpleHtmlParser


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 图片点击后选区更新到img的位置
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * 图片点击后选区更新到img的位置
 * @param editor 编辑器实例
 * @param imgClickEvents delete 键 up 时的 hooks
 */

function imgClickActive(editor, imgClickEvents) {
  function clickFn($img) {
    editor.selection.createRangeByElem($img);
    editor.selection.restoreSelection();
  }

  imgClickEvents.push(clickFn);
}

exports["default"] = imgClickActive;

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 获取子元素的 JSON 格式数据
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(7);

var dom_core_1 = __importDefault(__webpack_require__(2));
/**
 * 获取子元素的 JSON 格式数据
 * @param $elem DOM 节点
 */


function getChildrenJSON($elem) {
  var result = []; // 存储结果

  var $children = $elem.childNodes() || []; // 注意 childNodes() 可以获取文本节点

  (0, _forEach["default"])($children).call($children, function (curElem) {
    var elemResult;
    var nodeType = curElem.nodeType; // 文本节点

    if (nodeType === 3) {
      elemResult = curElem.textContent || '';
      elemResult = util_1.replaceHtmlSymbol(elemResult);
    } // 普通 DOM 节点


    if (nodeType === 1) {
      elemResult = {};
      elemResult = elemResult; // tag

      elemResult.tag = curElem.nodeName.toLowerCase(); // attr

      var attrData = [];
      var attrList = curElem.attributes || [];
      var attrListLength = attrList.length || 0;

      for (var i = 0; i < attrListLength; i++) {
        var attr = attrList[i];
        attrData.push({
          name: attr.name,
          value: attr.value
        });
      }

      elemResult.attrs = attrData; // children（递归）

      elemResult.children = getChildrenJSON(dom_core_1["default"](curElem));
    }

    if (elemResult) {
      result.push(elemResult);
    }
  });
  return result;
}

exports["default"] = getChildrenJSON;

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 从nodeList json格式中遍历生成dom元素
 * @author zhengwenjian
 */

var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(90));

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

function getHtmlByNodeList(nodeList) {
  // 设置一个父节点存储所有子节点
  var $root = dom_core_1["default"]("<div></div>"); // 遍历节点JSON

  (0, _forEach["default"])(nodeList).call(nodeList, function (item) {
    var $elem = dom_core_1["default"](''); // 当为文本节点时

    if (typeof item === 'string') {
      $elem = dom_core_1["default"]("<span>" + item + "</span>");
    } // 当为普通节点时


    if ((0, _typeof2["default"])(item) === 'object') {
      var _context;

      $elem = dom_core_1["default"]("<" + item.tag + "></" + item.tag + ">");
      (0, _forEach["default"])(_context = item.attrs).call(_context, function (attr) {
        $elem.attr(attr.name, attr.value);
      }); // 有子节点时递归将子节点加入当前节点

      if (item.children && item.children.length > 0) {
        var $elemChilds = getHtmlByNodeList(item.children).children();
        $elemChilds && $elem.append($elemChilds);
      }
    }

    $root.append($elem);
  });
  return $root;
}

exports["default"] = getHtmlByNodeList;

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description Menus 菜单栏 入口文件
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _bind = _interopRequireDefault(__webpack_require__(123));

var _setTimeout2 = _interopRequireDefault(__webpack_require__(119));

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var menu_list_1 = __importDefault(__webpack_require__(300)); // import { MenuActive } from './menu-constructors/Menu'


var Menus =
/** @class */
function () {
  function Menus(editor) {
    this.editor = editor;
    this.menuList = [];
    this.constructorList = menu_list_1["default"]; // 所有菜单构造函数的列表
  }
  /**
   * 自定义添加菜单
   * @param key 菜单 key ，和 editor.config.menus 对应
   * @param Menu 菜单构造函数
   */


  Menus.prototype.extend = function (key, Menu) {
    if (!Menu || typeof Menu !== 'function') return;
    this.constructorList[key] = Menu;
  }; // 初始化菜单


  Menus.prototype.init = function () {
    var _context;

    var _this = this; // 从用户配置的 menus 入手，看需要初始化哪些菜单


    var config = this.editor.config;
    (0, _forEach["default"])(_context = config.menus).call(_context, function (menuKey) {
      var MenuConstructor = _this.constructorList[menuKey]; // 暂用 any ，后面再替换

      if (MenuConstructor == null || typeof MenuConstructor !== 'function') {
        // 必须是 class
        return;
      } // 创建 menu 实例，并放到 menuList 中


      var m = new MenuConstructor(_this.editor);
      m.key = menuKey;

      _this.menuList.push(m);
    }); // 渲染 DOM

    this._addToToolbar();
  }; // 添加到菜单栏


  Menus.prototype._addToToolbar = function () {
    var _context2;

    var editor = this.editor;
    var $toolbarElem = editor.$toolbarElem; // 遍历添加到 DOM

    (0, _forEach["default"])(_context2 = this.menuList).call(_context2, function (menu) {
      var $elem = menu.$elem;

      if ($elem) {
        $toolbarElem.append($elem);
      }
    });
  };
  /**
   * 获取菜单对象
   * @param 菜单名称 小写
   * @return Menus 菜单对象
   */


  Menus.prototype.menuFind = function (key) {
    var menuList = this.menuList;

    for (var i = 0, l = menuList.length; i < l; i++) {
      if (menuList[i].key === key) return menuList[i];
    }

    return menuList[0];
  };
  /**
   * @description 修改菜单激活状态
   */


  Menus.prototype.changeActive = function () {
    var _context3;

    (0, _forEach["default"])(_context3 = this.menuList).call(_context3, function (menu) {
      var _context4;

      (0, _setTimeout2["default"])((0, _bind["default"])(_context4 = menu.tryChangeActive).call(_context4, menu), 100); // 暂用 any ，后面再替换
    });
  };

  return Menus;
}();

exports["default"] = Menus;

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(296);

module.exports = parent;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(297);

var FunctionPrototype = Function.prototype;

module.exports = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || (it instanceof Function && own === FunctionPrototype.bind) ? bind : own;
};


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(298);
var entryVirtual = __webpack_require__(18);

module.exports = entryVirtual('Function').bind;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var bind = __webpack_require__(299);

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(28);
var isObject = __webpack_require__(13);

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 所有菜单的构造函数
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var index_1 = __importDefault(__webpack_require__(301));

var index_2 = __importDefault(__webpack_require__(305));

var index_3 = __importDefault(__webpack_require__(306));

var index_4 = __importDefault(__webpack_require__(310));

var index_5 = __importDefault(__webpack_require__(311));

var index_6 = __importDefault(__webpack_require__(312));

var index_7 = __importDefault(__webpack_require__(313));

var font_size_1 = __importDefault(__webpack_require__(315));

var index_8 = __importDefault(__webpack_require__(317));

var index_9 = __importDefault(__webpack_require__(318));

var index_10 = __importDefault(__webpack_require__(319));

var index_11 = __importDefault(__webpack_require__(320));

var index_12 = __importDefault(__webpack_require__(321));

var index_13 = __importDefault(__webpack_require__(323));

var index_14 = __importDefault(__webpack_require__(343));

var index_15 = __importDefault(__webpack_require__(347));

var index_16 = __importDefault(__webpack_require__(349));

var index_17 = __importDefault(__webpack_require__(350));

var index_18 = __importDefault(__webpack_require__(352));

var index_19 = __importDefault(__webpack_require__(353));

var index_20 = __importDefault(__webpack_require__(354));

var code_1 = __importDefault(__webpack_require__(363));

var index_21 = __importDefault(__webpack_require__(367));

exports["default"] = {
  bold: index_1["default"],
  head: index_2["default"],
  italic: index_4["default"],
  link: index_3["default"],
  underline: index_5["default"],
  strikeThrough: index_6["default"],
  fontName: index_7["default"],
  fontSize: font_size_1["default"],
  justify: index_8["default"],
  quote: index_9["default"],
  backColor: index_10["default"],
  foreColor: index_11["default"],
  video: index_12["default"],
  image: index_13["default"],
  indent: index_14["default"],
  emoticon: index_15["default"],
  list: index_16["default"],
  lineHeight: index_17["default"],
  undo: index_18["default"],
  redo: index_19["default"],
  table: index_20["default"],
  code: code_1["default"],
  splitLine: index_21["default"]
};

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 加粗
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var BtnMenu_1 = __importDefault(__webpack_require__(24));

var dom_core_1 = __importDefault(__webpack_require__(2));

var Bold =
/** @class */
function (_super) {
  __extends(Bold, _super);

  function Bold(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-bold\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * 点击事件
   */


  Bold.prototype.clickHandler = function () {
    var editor = this.editor;
    var isSelectEmpty = editor.selection.isSelectionEmpty();

    if (isSelectEmpty) {
      // 选区范围是空的，插入并选中一个“空白”
      editor.selection.createEmptyRange();
    } // 执行 bold 命令


    editor.cmd["do"]('bold');

    if (isSelectEmpty) {
      // 需要将选区范围折叠起来
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * 尝试修改菜单激活状态
   */


  Bold.prototype.tryChangeActive = function () {
    var editor = this.editor;

    if (editor.cmd.queryCommandState('bold')) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Bold;
}(BtnMenu_1["default"]);

exports["default"] = Bold;

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(303);

module.exports = parent;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(304);
var path = __webpack_require__(11);

module.exports = path.Object.setPrototypeOf;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(75);

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 标题
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var DropListMenu_1 = __importDefault(__webpack_require__(22));

var dom_core_1 = __importDefault(__webpack_require__(2));

var Head =
/** @class */
function (_super) {
  __extends(Head, _super);

  function Head(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu"><i class="w-e-icon-header"></i></div>');
    var dropListConf = {
      width: 100,
      title: '设置标题',
      type: 'list',
      list: [{
        $elem: dom_core_1["default"]('<h1>H1</h1>'),
        value: '<h1>'
      }, {
        $elem: dom_core_1["default"]('<h2>H2</h2>'),
        value: '<h2>'
      }, {
        $elem: dom_core_1["default"]('<h3>H3</h3>'),
        value: '<h3>'
      }, {
        $elem: dom_core_1["default"]('<h4>H4</h4>'),
        value: '<h4>'
      }, {
        $elem: dom_core_1["default"]('<h5>H5</h5>'),
        value: '<h5>'
      }, {
        $elem: dom_core_1["default"]("<p>" + editor.i18next.t('menus.dropListMenu.head.正文') + "</p>"),
        value: '<p>'
      }],
      clickHandler: function clickHandler(value) {
        // 注意 this 是指向当前的 Head 对象
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, dropListConf) || this;
    return _this;
  }
  /**
   * 执行命令
   * @param value value
   */


  Head.prototype.command = function (value) {
    var editor = this.editor;
    var $selectionElem = editor.selection.getSelectionContainerElem();

    if ($selectionElem && editor.$textElem.equal($selectionElem)) {
      // 不能选中多行来设置标题，否则会出现问题
      // 例如选中的是 <p>xxx</p><p>yyy</p> 来设置标题，设置之后会成为 <h1>xxx<br>yyy</h1> 不符合预期
      return;
    }

    editor.cmd["do"]('formatBlock', value);
  };
  /**
   * 尝试改变菜单激活（高亮）状态
   */


  Head.prototype.tryChangeActive = function () {
    var editor = this.editor;
    var reg = /^h/i;
    var cmdValue = editor.cmd.queryCommandValue('formatBlock');

    if (reg.test(cmdValue)) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Head;
}(DropListMenu_1["default"]);

exports["default"] = Head;

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 链接 菜单
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var PanelMenu_1 = __importDefault(__webpack_require__(31));

var dom_core_1 = __importDefault(__webpack_require__(2));

var create_panel_conf_1 = __importDefault(__webpack_require__(307));

var is_active_1 = __importDefault(__webpack_require__(125));

var Panel_1 = __importDefault(__webpack_require__(27));

var index_1 = __importDefault(__webpack_require__(308));

var Link =
/** @class */
function (_super) {
  __extends(Link, _super);

  function Link(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu"><i class="w-e-icon-link"></i></div>');
    _this = _super.call(this, $elem, editor) || this; // 绑定事件，如点击链接时，可以查看链接

    index_1["default"](editor);
    return _this;
  }
  /**
   * 菜单点击事件
   */


  Link.prototype.clickHandler = function () {
    var editor = this.editor;
    var $linkElem;

    if (this.isActive) {
      // 菜单被激活，说明选区在链接里
      $linkElem = editor.selection.getSelectionContainerElem();

      if (!$linkElem) {
        return;
      } // 弹出 panel


      this.createPanel($linkElem.text(), $linkElem.attr('href'));
    } else {
      // 菜单未被激活，说明选区不在链接里
      if (editor.selection.isSelectionEmpty()) {
        // 选区是空的，未选中内容
        this.createPanel('', '');
      } else {
        // 选中内容了
        this.createPanel(editor.selection.getSelectionText(), '');
      }
    }
  };
  /**
   * 创建 panel
   * @param text 文本
   * @param link 链接
   */


  Link.prototype.createPanel = function (text, link) {
    var conf = create_panel_conf_1["default"](this.editor, text, link);
    var panel = new Panel_1["default"](this, conf);
    panel.create();
  };
  /**
   * 尝试修改菜单 active 状态
   */


  Link.prototype.tryChangeActive = function () {
    var editor = this.editor;

    if (is_active_1["default"](editor)) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Link;
}(PanelMenu_1["default"]);

exports["default"] = Link;

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description link 菜单 panel tab 配置
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _trim = _interopRequireDefault(__webpack_require__(21));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(7);

var dom_core_1 = __importDefault(__webpack_require__(2));

var is_active_1 = __importDefault(__webpack_require__(125));

function default_1(editor, text, link) {
  // panel 中需要用到的id
  var inputLinkId = util_1.getRandom('input-link');
  var inputTextId = util_1.getRandom('input-text');
  var btnOkId = util_1.getRandom('btn-ok');
  var btnDelId = util_1.getRandom('btn-del'); // 是否显示“取消链接”

  var delBtnDisplay = is_active_1["default"](editor) ? 'inline-block' : 'none';
  var $selectedLink;
  /**
   * 选中整个链接元素
   */

  function selectLinkElem() {
    if (!is_active_1["default"](editor)) return;
    var $linkElem = editor.selection.getSelectionContainerElem();
    if (!$linkElem) return;
    editor.selection.createRangeByElem($linkElem);
    editor.selection.restoreSelection();
    $selectedLink = $linkElem; // 赋值给函数内全局变量
  }
  /**
   * 插入链接
   * @param text 文字
   * @param link 链接
   */


  function insertLink(text, link) {
    if (is_active_1["default"](editor)) {
      // 选区处于链接中，则选中整个菜单，再执行 insertHTML
      selectLinkElem();
      editor.cmd["do"]('insertHTML', "<a href=\"" + link + "\" target=\"_blank\">" + text + "</a>");
    } else {
      // 选区未处于链接中，直接插入即可
      editor.cmd["do"]('insertHTML', "<a href=\"" + link + "\" target=\"_blank\">" + text + "</a>");
    }
  }
  /**
   * 取消链接
   */


  function delLink() {
    if (!is_active_1["default"](editor)) {
      return;
    } // 选中整个链接


    selectLinkElem(); // 用文本替换链接

    var selectionText = $selectedLink.text();
    editor.cmd["do"]('insertHTML', '<span>' + selectionText + '</span>');
  }
  /**
   * 校验链接是否合法
   * @param link 链接
   */


  function checkLink(text, link) {
    //查看开发者自定义配置的返回值
    var check = editor.config.linkCheck(text, link);

    if (check === undefined) {//用户未能通过开发者的校验，且开发者不希望编辑器提示用户
    } else if (check === true) {
      //用户通过了开发者的校验
      return true;
    } else {
      //用户未能通过开发者的校验，开发者希望我们提示这一字符串
      alert(check);
    }

    return false;
  }

  var conf = {
    width: 300,
    height: 0,
    // panel 中可包含多个 tab
    tabs: [{
      // tab 的标题
      title: editor.i18next.t('menus.panelMenus.link.链接'),
      // 模板
      tpl: "<div>\n                        <input \n                            id=\"" + inputTextId + "\" \n                            type=\"text\" \n                            class=\"block\" \n                            value=\"" + text + "\" \n                            placeholder=\"" + editor.i18next.t('menus.panelMenus.link.链接文字') + "\"/>\n                        </td>\n                        <input \n                            id=\"" + inputLinkId + "\" \n                            type=\"text\" \n                            class=\"block\" \n                            value=\"" + link + "\" \n                            placeholder=\"" + editor.i18next.t('如') + " https://...\"/>\n                        </td>\n                        <div class=\"w-e-button-container\">\n                            <button id=\"" + btnOkId + "\" class=\"right\">\n                                " + editor.i18next.t('插入') + "\n                            </button>\n                            <button id=\"" + btnDelId + "\" class=\"gray right\" style=\"display:" + delBtnDisplay + "\">\n                                " + editor.i18next.t('menus.panelMenus.link.取消链接') + "\n                            </button>\n                        </div>\n                    </div>",
      // 事件绑定
      events: [// 插入链接
      {
        selector: '#' + btnOkId,
        type: 'click',
        fn: function fn() {
          var _context, _context2;

          // 执行插入链接
          var $link = dom_core_1["default"]('#' + inputLinkId);
          var $text = dom_core_1["default"]('#' + inputTextId);
          var link = (0, _trim["default"])(_context = $link.val()).call(_context);
          var text = (0, _trim["default"])(_context2 = $text.val()).call(_context2); // 链接为空，则不插入

          if (!link) return; // 文本为空，则用链接代替

          if (!text) text = link; // 校验链接是否满足用户的规则，若不满足则不插入

          if (!checkLink(text, link)) return;
          insertLink(text, link); // 返回 true，表示该事件执行完之后，panel 要关闭。否则 panel 不会关闭

          return true;
        }
      }, // 取消链接
      {
        selector: '#' + btnDelId,
        type: 'click',
        fn: function fn() {
          // 执行取消链接
          delLink(); // 返回 true，表示该事件执行完之后，panel 要关闭。否则 panel 不会关闭

          return true;
        }
      }]
    }]
  };
  return conf;
}

exports["default"] = default_1;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 绑定链接元素的事件，入口
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tooltip_event_1 = __importDefault(__webpack_require__(309));
/**
 * 绑定事件
 * @param editor 编辑器实例
 */


function bindEvent(editor) {
  // tooltip 事件
  tooltip_event_1["default"](editor);
}

exports["default"] = bindEvent;

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description tooltip 事件
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var Tooltip_1 = __importDefault(__webpack_require__(42));
/**
 * 生成 Tooltip 的显示隐藏函数
 */


function createShowHideFn(editor) {
  var tooltip;
  /**
   * 显示 tooltip
   * @param $link 链接元素
   */

  function showLinkTooltip($link) {
    var conf = [{
      $elem: dom_core_1["default"]("<span>" + editor.i18next.t('menus.panelMenus.link.查看链接') + "</span>"),
      onClick: function onClick(editor, $link) {
        var link = $link.attr('href');
        window.open(link, '_target'); // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。

        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + editor.i18next.t('menus.panelMenus.link.取消链接') + "</span>"),
      onClick: function onClick(editor, $link) {
        // 选中链接元素
        editor.selection.createRangeByElem($link);
        editor.selection.restoreSelection(); // 用文字，替换链接

        var selectionText = $link.text();
        editor.cmd["do"]('insertHTML', '<span>' + selectionText + '</span>'); // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。

        return true;
      }
    }]; // 创建 tooltip

    tooltip = new Tooltip_1["default"](editor, $link, conf);
    tooltip.create();
  }
  /**
   * 隐藏 tooltip
   */


  function hideLinkTooltip() {
    // 移除 tooltip
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  }

  return {
    showLinkTooltip: showLinkTooltip,
    hideLinkTooltip: hideLinkTooltip
  };
}
/**
 * 绑定 tooltip 事件
 * @param editor 编辑器实例
 */


function bindTooltipEvent(editor) {
  var _a = createShowHideFn(editor),
      showLinkTooltip = _a.showLinkTooltip,
      hideLinkTooltip = _a.hideLinkTooltip; // 点击链接元素是，显示 tooltip


  editor.txt.eventHooks.linkClickEvents.push(showLinkTooltip); // 点击其他地方，或者滚动时，隐藏 tooltip

  editor.txt.eventHooks.clickEvents.push(hideLinkTooltip);
  editor.txt.eventHooks.keyupEvents.push(hideLinkTooltip);
  editor.txt.eventHooks.toolbarClickEvents.push(hideLinkTooltip);
  editor.txt.eventHooks.menuClickEvents.push(hideLinkTooltip);
  editor.txt.eventHooks.textScrollEvents.push(hideLinkTooltip);
}

exports["default"] = bindTooltipEvent;

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 斜体
 * @author liuwei
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var BtnMenu_1 = __importDefault(__webpack_require__(24));

var dom_core_1 = __importDefault(__webpack_require__(2));

var Italic =
/** @class */
function (_super) {
  __extends(Italic, _super);

  function Italic(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-italic\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * 点击事件
   */


  Italic.prototype.clickHandler = function () {
    var editor = this.editor;
    var isSelectEmpty = editor.selection.isSelectionEmpty();

    if (isSelectEmpty) {
      // 选区范围是空的，插入并选中一个“空白”
      editor.selection.createEmptyRange();
    } // 执行 italic 命令


    editor.cmd["do"]('italic');

    if (isSelectEmpty) {
      // 需要将选区范围折叠起来
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * 尝试修改菜单激活状态
   */


  Italic.prototype.tryChangeActive = function () {
    var editor = this.editor;

    if (editor.cmd.queryCommandState('italic')) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Italic;
}(BtnMenu_1["default"]);

exports["default"] = Italic;

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 下划线 underline
 * @author dyl
 *
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var BtnMenu_1 = __importDefault(__webpack_require__(24));

var dom_core_1 = __importDefault(__webpack_require__(2));

var Underline =
/** @class */
function (_super) {
  __extends(Underline, _super);

  function Underline(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-underline\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * 点击事件
   */


  Underline.prototype.clickHandler = function () {
    var editor = this.editor;
    var isSelectEmpty = editor.selection.isSelectionEmpty();

    if (isSelectEmpty) {
      // 选区范围是空的，插入并选中一个“空白”
      editor.selection.createEmptyRange();
    } // 执行 Underline 命令


    editor.cmd["do"]('underline');

    if (isSelectEmpty) {
      // 需要将选区范围折叠起来
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * 尝试修改菜单激活状态
   */


  Underline.prototype.tryChangeActive = function () {
    var editor = this.editor;

    if (editor.cmd.queryCommandState('underline')) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Underline;
}(BtnMenu_1["default"]);

exports["default"] = Underline;

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 删除线
 * @author lkw
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var BtnMenu_1 = __importDefault(__webpack_require__(24));

var dom_core_1 = __importDefault(__webpack_require__(2));

var StrikeThrough =
/** @class */
function (_super) {
  __extends(StrikeThrough, _super);

  function StrikeThrough(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-strikethrough\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * 点击事件
   */


  StrikeThrough.prototype.clickHandler = function () {
    var editor = this.editor;
    var isSelectEmpty = editor.selection.isSelectionEmpty();

    if (isSelectEmpty) {
      // 选区范围是空的，插入并选中一个“空白”
      editor.selection.createEmptyRange();
    } // 执行 strikeThrough 命令


    editor.cmd["do"]('strikeThrough');

    if (isSelectEmpty) {
      // 需要将选区范围折叠起来
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * 尝试修改菜单激活状态
   */


  StrikeThrough.prototype.tryChangeActive = function () {
    var editor = this.editor;

    if (editor.cmd.queryCommandState('strikeThrough')) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return StrikeThrough;
}(BtnMenu_1["default"]);

exports["default"] = StrikeThrough;

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 字体样式 FontStyle
 * @author dyl
 *
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var DropListMenu_1 = __importDefault(__webpack_require__(22));

var dom_core_1 = __importDefault(__webpack_require__(2));

var FontStyleList_1 = __importDefault(__webpack_require__(314));

var FontStyle =
/** @class */
function (_super) {
  __extends(FontStyle, _super);

  function FontStyle(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-font\"></i>\n            </div>");
    var fontStyleList = new FontStyleList_1["default"](editor.config.fontNames);
    var fontListConf = {
      width: 100,
      title: '设置字体',
      type: 'list',
      list: fontStyleList.getItemList(),
      clickHandler: function clickHandler(value) {
        // this 是指向当前的 FontStyle 对象
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, fontListConf) || this;
    return _this;
  }
  /**
   * 执行命令
   * @param value value
   */


  FontStyle.prototype.command = function (value) {
    var editor = this.editor;
    editor.cmd["do"]('fontName', value);
  };
  /**
   * 尝试修改菜单激活状态
   * ?字体是否需要有激活状态这个操作?
   */


  FontStyle.prototype.tryChangeActive = function () {// const editor = this.editor
    // const cmdValue = editor.cmd.queryCommandValue('fontName')
    // if (menusConfig.fontNames.indexOf(cmdValue) >= 0) {
    //     this.active()
    // } else {
    //     this.unActive()
    // }
  };

  return FontStyle;
}(DropListMenu_1["default"]);

exports["default"] = FontStyle;

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * @description 字体 class
 * @author dyl
 */

var dom_core_1 = __importDefault(__webpack_require__(2));
/**
 * 封装的一个字体菜单列表数据的组装对象,
 * 原因是因为在constructor函数中,直接执行此流程,会让代码量看起来较多,
 * 如果要在constructor调用外部函数,个人目前发现会有错误提示,
 * 因此,想着顺便研究实践下ts,遍创建了这样一个类
 */


var FontStyleList =
/** @class */
function () {
  function FontStyleList(list) {
    var _this = this;

    this.itemList = [];
    (0, _forEach["default"])(list).call(list, function (fontValue) {
      _this.itemList.push({
        $elem: dom_core_1["default"]("<p style=\"font-family:'" + fontValue + "'\">" + fontValue + "</p>"),
        value: fontValue
      });
    });
  }

  FontStyleList.prototype.getItemList = function () {
    return this.itemList;
  };

  return FontStyleList;
}();

exports["default"] = FontStyleList;

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 字号 FontSize
 * @author lkw
 *
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var DropListMenu_1 = __importDefault(__webpack_require__(22));

var dom_core_1 = __importDefault(__webpack_require__(2));

var FontSizeList_1 = __importDefault(__webpack_require__(316));

var FontSize =
/** @class */
function (_super) {
  __extends(FontSize, _super);

  function FontSize(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-text-heigh\"></i>\n            </div>");
    var fontStyleList = new FontSizeList_1["default"](editor.config.fontSizes);
    var fontListConf = {
      width: 160,
      title: '设置字号',
      type: 'list',
      list: fontStyleList.getItemList(),
      clickHandler: function clickHandler(value) {
        // this 是指向当前的 FontSize 对象
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, fontListConf) || this;
    return _this;
  }
  /**
   * 执行命令
   * @param value value
   */


  FontSize.prototype.command = function (value) {
    var editor = this.editor;
    editor.cmd["do"]('fontSize', value);
  };
  /**
   * 尝试修改菜单激活状态
   * ?字号是否需要有激活状态这个操作?
   */


  FontSize.prototype.tryChangeActive = function () {};

  return FontSize;
}(DropListMenu_1["default"]);

exports["default"] = FontSize;

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * @description 字号 class
 * @author lkw
 */

var dom_core_1 = __importDefault(__webpack_require__(2));
/**
 * FontSizeList 字号配置列表
 */


var FontSizeList =
/** @class */
function () {
  function FontSizeList(list) {
    this.itemList = [];

    for (var key in list) {
      var item = list[key];
      this.itemList.push({
        $elem: dom_core_1["default"]("<p style=\"font-size:" + key + "\">" + item.name + "</p>"),
        value: item.value
      });
    }
  }

  FontSizeList.prototype.getItemList = function () {
    return this.itemList;
  };

  return FontSizeList;
}();

exports["default"] = FontSizeList;

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 对齐方式
 * @author liuwei
 */

var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var DropListMenu_1 = __importDefault(__webpack_require__(22));

var dom_core_1 = __importDefault(__webpack_require__(2));

var Justify =
/** @class */
function (_super) {
  __extends(Justify, _super);

  function Justify(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu"><i class="w-e-icon-paragraph-left"></i></div>');
    var dropListConf = {
      width: 100,
      title: '对齐方式',
      type: 'list',
      list: [{
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-paragraph-left w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.justify.靠左') + "\n                        </p>"),
        value: 'justifyLeft'
      }, {
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-paragraph-center w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.justify.居中') + "\n                        </p>"),
        value: 'justifyCenter'
      }, {
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-paragraph-right w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.justify.靠右') + "\n                        </p>"),
        value: 'justifyRight'
      }, {
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-paragraph-justify w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.justify.两端') + "\n                        </p>"),
        value: 'justifyFull'
      }],
      clickHandler: function clickHandler(value) {
        // 执行对应的value操作
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, dropListConf) || this;
    return _this;
  }
  /**
   * 执行命令
   * @param value value
   */


  Justify.prototype.command = function (value) {
    var editor = this.editor;
    var selection = editor.selection;
    var $selectionElem = selection.getSelectionContainerElem(); // 保存选区

    selection.saveRange(); // 数据项

    var justifyClass = {
      justifyLeft: 'left',
      justifyCenter: 'center',
      justifyRight: 'right',
      justifyFull: 'justify'
    }; // 获取顶级元素

    var $elems = editor.selection.getSelectionRangeTopNodes(editor); // 选区等于textElem时表示选择了多个段落

    if ($selectionElem && editor.$textElem.equal($selectionElem)) {
      // 获取在css中对应style的值
      var justifyValue_1 = justifyClass[value];
      (0, _forEach["default"])($elems).call($elems, function (el) {
        el.css('text-align', justifyValue_1);
      });
    } else {
      // 如果单行的使用execcommand实现
      editor.cmd["do"](value, value);
    } //恢复选区


    selection.restoreSelection();
  };
  /**
   * 尝试改变菜单激活（高亮）状态
   * 默认左对齐,若选择其他对其方式对active进行高亮否则unActive
   * ?考虑优化的话 是否可以对具体选中的进行高亮
   */


  Justify.prototype.tryChangeActive = function () {// const editor = this.editor
    // let isjustify = ['justifyCenter', 'justifyRight'].some(e => editor.cmd.queryCommandState(e))
    // if (isjustify) {
    //     this.active()
    // } else {
    //     this.unActive()
    // }
  };

  return Justify;
}(DropListMenu_1["default"]);

exports["default"] = Justify;

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 引用
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var util_1 = __webpack_require__(7);

var BtnMenu_1 = __importDefault(__webpack_require__(24));

var Quote =
/** @class */
function (_super) {
  __extends(Quote, _super);

  function Quote(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-quotes-left\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * 点击事件
   */


  Quote.prototype.clickHandler = function () {
    var editor = this.editor;
    var isSelectEmpty = editor.selection.isSelectionEmpty();
    var $topNodeElem = editor.selection.getSelectionRangeTopNodes(editor)[0];
    var nodeName = this.getTopNodeName();

    if (isSelectEmpty) {
      // 选区范围是空的，插入并选中一个“空白”
      editor.selection.createEmptyRange();
    }

    if (util_1.UA.isIE() || util_1.UA.isFirefox || util_1.UA.isOldEdge) {
      // IE 中不支持 formatBlock <BLOCKQUOTE> ，要用其他方式兼容
      // 兼容firefox无法取消blockquote的问题
      var nodeList = $topNodeElem.getNode().childNodes;

      if (nodeName === 'P') {
        // 将 P 转换为 quote
        var $targetELem = dom_core_1["default"]("<blockquote></blockquote>");
        var targetElem = $targetELem.getNode();
        this.insertNode(targetElem, nodeList);
        $targetELem.insertAfter($topNodeElem);
        $topNodeElem.remove();
        editor.selection.moveCursor($targetELem.getNode()); // 防止最后一行无法跳出

        dom_core_1["default"]("<p><br></p>").insertAfter($targetELem);
        return;
      }

      if (nodeName === 'BLOCKQUOTE') {
        // 撤销 quote
        var $targetELem = dom_core_1["default"]("<p></p>");
        var targetElem = $targetELem.getNode();
        this.insertNode(targetElem, nodeList);
        $targetELem.insertAfter($topNodeElem);
        $topNodeElem.remove();
        editor.selection.moveCursor($targetELem.elems[0]);
      }
    } else {
      // 执行 formatBlock 命令
      if (nodeName === 'BLOCKQUOTE') {
        editor.cmd["do"]('formatBlock', '<p>');
      } else {
        editor.cmd["do"]('formatBlock', '<blockquote>');
      }
    }

    if (isSelectEmpty) {
      // 需要将选区范围折叠起来
      editor.selection.collapseRange();
      editor.selection.restoreSelection();
    }
  };
  /**
   * 尝试修改菜单激活状态
   */


  Quote.prototype.tryChangeActive = function () {
    var editor = this.editor;
    var cmdValue = editor.cmd.queryCommandValue('formatBlock');

    if (cmdValue === 'blockquote') {
      this.active();
    } else {
      this.unActive();
    }
  };
  /**
   * 获取包裹在最外层的节点(防止内部嵌入多个样式)
   * @param selectionElem 选中的节点
   * @returns {string} 最终要处理的节点名称
   */


  Quote.prototype.getTopNodeName = function () {
    var editor = this.editor;
    var $topNodeElem = editor.selection.getSelectionRangeTopNodes(editor)[0];
    var nodeName = $topNodeElem.getNodeName();
    return nodeName;
  };
  /**
   * 将nodelist插入element中，并做一些特殊化处理
   * @param element 需要插入的父节点
   * @param nodeList 需要插入的nodelist
   */


  Quote.prototype.insertNode = function (element, nodeList) {
    (0, _forEach["default"])(nodeList).call(nodeList, function (node, i) {
      // 去除空节点
      if (node.nodeName && node.textContent !== null) {
        if (node.nodeName !== 'BR' || i !== nodeList.length - 1) {
          // 去除最后的br
          element.appendChild(node.cloneNode(true));
        }
      }
    });
  };

  return Quote;
}(BtnMenu_1["default"]);

exports["default"] = Quote;

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 背景颜色 BackColor
 * @author lkw
 *
 */

var _interopRequireDefault = __webpack_require__(0);

var _map = _interopRequireDefault(__webpack_require__(41));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var DropListMenu_1 = __importDefault(__webpack_require__(22));

var dom_core_1 = __importDefault(__webpack_require__(2));

var BackColor =
/** @class */
function (_super) {
  __extends(BackColor, _super);

  function BackColor(editor) {
    var _context;

    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-paint-brush\"></i>\n            </div>");
    var colorListConf = {
      width: 120,
      title: '背景颜色',
      // droplist 内容以 block 形式展示
      type: 'inline-block',
      list: (0, _map["default"])(_context = editor.config.colors).call(_context, function (color) {
        return {
          $elem: dom_core_1["default"]("<i style=\"color:" + color + ";\" class=\"w-e-icon-paint-brush\"></i>"),
          value: color
        };
      }),
      clickHandler: function clickHandler(value) {
        // this 是指向当前的 BackColor 对象
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, colorListConf) || this;
    return _this;
  }
  /**
   * 执行命令
   * @param value value
   */


  BackColor.prototype.command = function (value) {
    var editor = this.editor;
    editor.cmd["do"]('backColor', value);
  };
  /**
   * 尝试修改菜单激活状态
   */


  BackColor.prototype.tryChangeActive = function () {};

  return BackColor;
}(DropListMenu_1["default"]);

exports["default"] = BackColor;

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 文字颜色 FontColor
 * @author lkw
 *
 */

var _interopRequireDefault = __webpack_require__(0);

var _map = _interopRequireDefault(__webpack_require__(41));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var DropListMenu_1 = __importDefault(__webpack_require__(22));

var dom_core_1 = __importDefault(__webpack_require__(2));

var FontColor =
/** @class */
function (_super) {
  __extends(FontColor, _super);

  function FontColor(editor) {
    var _context;

    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-pencil2\"></i>\n            </div>");
    var colorListConf = {
      width: 120,
      title: '文字颜色',
      // droplist 内容以 block 形式展示
      type: 'inline-block',
      list: (0, _map["default"])(_context = editor.config.colors).call(_context, function (color) {
        return {
          $elem: dom_core_1["default"]("<i style=\"color:" + color + ";\" class=\"w-e-icon-pencil2\"></i>"),
          value: color
        };
      }),
      clickHandler: function clickHandler(value) {
        // this 是指向当前的 BackColor 对象
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, colorListConf) || this;
    return _this;
  }
  /**
   * 执行命令
   * @param value value
   */


  FontColor.prototype.command = function (value) {
    var editor = this.editor;
    editor.cmd["do"]('foreColor', value);
  };
  /**
   * 尝试修改菜单激活状态
   */


  FontColor.prototype.tryChangeActive = function () {};

  return FontColor;
}(DropListMenu_1["default"]);

exports["default"] = FontColor;

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 视频 菜单
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var Panel_1 = __importDefault(__webpack_require__(27));

var PanelMenu_1 = __importDefault(__webpack_require__(31));

var create_panel_conf_1 = __importDefault(__webpack_require__(322));

var Video =
/** @class */
function (_super) {
  __extends(Video, _super);

  function Video(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-play\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * 菜单点击事件
   */


  Video.prototype.clickHandler = function () {
    // 弹出 panel
    this.createPanel('');
  };
  /**
   * 创建 panel
   * @param link 链接
   */


  Video.prototype.createPanel = function (iframe) {
    var conf = create_panel_conf_1["default"](this.editor, iframe);
    var panel = new Panel_1["default"](this, conf);
    panel.create();
  };
  /**
   * 尝试修改菜单 active 状态
   */


  Video.prototype.tryChangeActive = function () {};

  return Video;
}(PanelMenu_1["default"]);

exports["default"] = Video;

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description video 菜单 panel tab 配置
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _trim = _interopRequireDefault(__webpack_require__(21));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(7);

var dom_core_1 = __importDefault(__webpack_require__(2));

function default_1(editor, video) {
  // panel 中需要用到的id
  var inputIFrameId = util_1.getRandom('input-iframe');
  var btnOkId = util_1.getRandom('btn-ok');
  /**
   * 插入链接
   * @param iframe html标签
   */

  function insertVideo(video) {
    editor.cmd["do"]('insertHTML', video + '<p><br></p>');
  }

  var conf = {
    width: 300,
    height: 0,
    // panel 中可包含多个 tab
    tabs: [{
      // tab 的标题
      title: editor.i18next.t('menus.panelMenus.video.插入视频'),
      // 模板
      tpl: "<div>\n                        <input \n                            id=\"" + inputIFrameId + "\" \n                            type=\"text\" \n                            class=\"block\" \n                            placeholder=\"" + editor.i18next.t('如') + "\uFF1A<iframe src=... ></iframe>\"/>\n                        </td>\n                        <div class=\"w-e-button-container\">\n                            <button id=\"" + btnOkId + "\" class=\"right\">\n                                " + editor.i18next.t('插入') + "\n                            </button>\n                        </div>\n                    </div>",
      // 事件绑定
      events: [// 插入视频
      {
        selector: '#' + btnOkId,
        type: 'click',
        fn: function fn() {
          var _context;

          // 执行插入视频
          var $video = dom_core_1["default"]('#' + inputIFrameId);
          var video = (0, _trim["default"])(_context = $video.val()).call(_context); // 视频为空，则不插入

          if (!video) return;
          insertVideo(video); // 返回 true，表示该事件执行完之后，panel 要关闭。否则 panel 不会关闭

          return true;
        }
      }]
    }]
  };
  return conf;
}

exports["default"] = default_1;

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 插入、上传图片
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var PanelMenu_1 = __importDefault(__webpack_require__(31));

var dom_core_1 = __importDefault(__webpack_require__(2));

var create_panel_conf_1 = __importDefault(__webpack_require__(324));

var Panel_1 = __importDefault(__webpack_require__(27));

var index_1 = __importDefault(__webpack_require__(331));

var Image =
/** @class */
function (_super) {
  __extends(Image, _super);

  function Image(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu"><i class="w-e-icon-image"></i></div>');
    _this = _super.call(this, $elem, editor) || this; // 绑定事件，如粘贴图片

    index_1["default"](editor);
    return _this;
  }
  /**
   * 菜单点击事件
   */


  Image.prototype.clickHandler = function () {
    this.createPanel();
  };
  /**
   * 创建 panel
   */


  Image.prototype.createPanel = function () {
    var conf = create_panel_conf_1["default"](this.editor);
    var panel = new Panel_1["default"](this, conf);
    panel.create();
  };
  /**
   * 尝试修改菜单 active 状态
   */


  Image.prototype.tryChangeActive = function () {};

  return Image;
}(PanelMenu_1["default"]);

exports["default"] = Image;

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description image 菜单 panel tab 配置
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _trim = _interopRequireDefault(__webpack_require__(21));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(7);

var dom_core_1 = __importDefault(__webpack_require__(2));

var upload_img_1 = __importDefault(__webpack_require__(93));

var const_1 = __webpack_require__(30);

function default_1(editor) {
  var config = editor.config;
  var uploadImg = new upload_img_1["default"](editor); // panel 中需要用到的id

  var upTriggerId = util_1.getRandom('up-trigger-id');
  var upFileId = util_1.getRandom('up-file-id');
  var linkUrlId = util_1.getRandom('input-link-url');
  var linkBtnId = util_1.getRandom('btn-link');
  var i18nPrefix = 'menus.panelMenus.image.';

  var t = function t(text, prefix) {
    if (prefix === void 0) {
      prefix = i18nPrefix;
    }

    return editor.i18next.t(prefix + text);
  };
  /**
   * 校验网络图片链接是否合法
   * @param linkImg 网络图片链接
   */


  function checkLinkImg(src) {
    //编辑器进行正常校验，图片合规则使指针为true，不合规为false
    var flag = true;

    if (!const_1.imgRegex.test(src)) {
      flag = false;
    } //查看开发者自定义配置的返回值


    var check = config.linkImgCheck(src);

    if (check === undefined) {
      //用户未能通过开发者的校验，且开发者不希望编辑器提示用户
      if (flag === false) console.log(t('您刚才插入的图片链接未通过编辑器校验', 'validate.'));
    } else if (check === true) {
      //用户通过了开发者的校验
      if (flag === false) {
        alert(t('您插入的网络图片无法识别', 'validate.') + "\uFF0C" + t('请替换为支持的图片类型', 'validate.') + "\uFF1Ajpg | png | gif ...");
      } else return true;
    } else {
      //用户未能通过开发者的校验，开发者希望我们提示这一字符串
      alert(check);
    }

    return false;
  } // tabs 配置 -----------------------------------------


  var fileMultipleAttr = config.uploadImgMaxLength === 1 ? '' : 'multiple="multiple"';
  var tabsConf = [// first tab
  {
    // 标题
    title: t('上传图片'),
    // 模板
    tpl: "<div class=\"w-e-up-img-container\">\n                    <div id=\"" + upTriggerId + "\" class=\"w-e-up-btn\">\n                        <i class=\"w-e-icon-upload2\"></i>\n                    </div>\n                    <div style=\"display:none;\">\n                        <input id=\"" + upFileId + "\" type=\"file\" " + fileMultipleAttr + " accept=\"image/jpg,image/jpeg,image/png,image/gif,image/bmp\"/>\n                    </div>\n                </div>",
    // 事件绑定
    events: [// 触发选择图片
    {
      selector: '#' + upTriggerId,
      type: 'click',
      fn: function fn() {
        var $file = dom_core_1["default"]('#' + upFileId);
        var fileElem = $file.elems[0];

        if (fileElem) {
          fileElem.click();
        } else {
          // 返回 true 可关闭 panel
          return true;
        }
      }
    }, // 选择图片完毕
    {
      selector: '#' + upFileId,
      type: 'change',
      fn: function fn() {
        var $file = dom_core_1["default"]('#' + upFileId);
        var fileElem = $file.elems[0];

        if (!fileElem) {
          // 返回 true 可关闭 panel
          return true;
        } // 获取选中的 file 对象列表


        var fileList = fileElem.files;

        if (fileList.length) {
          uploadImg.uploadImg(fileList);
        } // 返回 true 可关闭 panel


        return true;
      }
    }]
  }, // second tab
  {
    title: t('网络图片'),
    tpl: "<div>\n                    <input \n                        id=\"" + linkUrlId + "\" \n                        type=\"text\" \n                        class=\"block\"\n                        placeholder=\"" + t('图片链接') + "\"/>\n                    </td>\n                    <div class=\"w-e-button-container\">\n                        <button id=\"" + linkBtnId + "\" class=\"right\">" + t('插入', '') + "</button>\n                    </div>\n                </div>",
    events: [{
      selector: '#' + linkBtnId,
      type: 'click',
      fn: function fn() {
        var _context;

        var $linkUrl = dom_core_1["default"]('#' + linkUrlId);
        var url = (0, _trim["default"])(_context = $linkUrl.val()).call(_context); //如果url为空则直接返回

        if (!url) return; //如果不能通过校验也直接返回

        if (!checkLinkImg(url)) return; //插入图片url

        uploadImg.insertImg(url); // 返回 true 表示函数执行结束之后关闭 panel

        return true;
      }
    }]
  }]; // tabs end
  // 最终的配置 -----------------------------------------

  var conf = {
    width: 300,
    height: 0,
    tabs: []
  }; // 显示“上传图片”

  if (window.FileReader && (config.uploadImgShowBase64 || config.uploadImgServer || config.customUploadImg)) {
    conf.tabs.push(tabsConf[0]);
  } // 显示“插入网络图片”


  if (config.showLinkImg) {
    conf.tabs.push(tabsConf[1]);
  }

  return conf;
}

exports["default"] = default_1;

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 上传的核心方法
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _typeof2 = _interopRequireDefault(__webpack_require__(90));

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(7);
/**
 * 发送 post 请求（用于文件上传）
 * @param url url
 * @param option 配置项
 */


function post(url, option) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url); // 超时，默认 10s

  xhr.timeout = option.timeout || 10 * 1000;

  xhr.ontimeout = function () {
    console.error('wangEditor - 请求超时');
    option.onTimeout && option.onTimeout(xhr);
  }; // 进度


  if (xhr.upload) {
    xhr.upload.onprogress = function (e) {
      var percent = e.loaded / e.total;
      option.onProgress && option.onProgress(percent, e);
    };
  } // 自定义 header


  if (option.headers) {
    (0, _forEach["default"])(util_1).call(util_1, option.headers, function (key, val) {
      xhr.setRequestHeader(key, val);
    });
  } // 跨域传 cookie


  xhr.withCredentials = !!option.withCredentials; // 上传之前的钩子函数，在 xhr.send() 之前执行

  if (option.beforeSend) {
    var beforeResult = option.beforeSend(xhr);

    if (beforeResult && (0, _typeof2["default"])(beforeResult) === 'object') {
      if (beforeResult.prevent) {
        // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
        return beforeResult.msg;
      }
    }
  } // 服务端返回之后


  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    var status = xhr.status;
    if (status < 200) return; // 请求发送过程中，尚未返回

    if (status >= 300 && status < 400) return; // 重定向

    if (status >= 400) {
      // 40x 50x 报错
      console.error('wangEditor - XHR 报错，状态码 ' + status);
      if (option.onError) option.onError(xhr); // 有，则执行 onError 函数即可

      return;
    } // status = 200 ，得到结果


    var resultStr = xhr.responseText;
    var result;

    if ((0, _typeof2["default"])(resultStr) !== 'object') {
      try {
        result = JSON.parse(resultStr);
      } catch (ex) {
        console.error('wangEditor - 返回结果不是 JSON 格式', resultStr);
        if (option.onFail) option.onFail(xhr, resultStr);
        return;
      }
    } else {
      result = resultStr;
    }

    option.onSuccess(xhr, result);
  }; // 发送请求


  xhr.send(option.formData || null);
  return xhr;
}

exports["default"] = post;

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 上传进度条
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _now = _interopRequireDefault(__webpack_require__(327));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var Progress =
/** @class */
function () {
  function Progress(editor) {
    this.editor = editor;
    this.$textContainer = editor.$textContainerElem;
    this.$bar = dom_core_1["default"]('<div class="w-e-progress"></div>');
    this.isShow = false;
    this.time = 0;
    this.timeoutId = 0;
  }
  /**
   * 显示进度条
   * @param progress 进度百分比
   */


  Progress.prototype.show = function (progress) {
    var _this = this; // 不要重新显示


    if (this.isShow) {
      return;
    }

    this.isShow = true; // 渲染 $bar

    var $bar = this.$bar;
    var $textContainer = this.$textContainer;
    $textContainer.append($bar); // 改变进度条（防抖，100ms 渲染一次）

    if ((0, _now["default"])() - this.time > 100) {
      if (progress <= 1) {
        $bar.css('width', progress * 100 + '%');
        this.time = (0, _now["default"])();
      }
    } // 500ms 之后隐藏


    var timeoutId = this.timeoutId;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    this.timeoutId = window.setTimeout(function () {
      _this.hide();
    }, 500);
  };
  /**
   * 隐藏
   */


  Progress.prototype.hide = function () {
    var $bar = this.$bar;
    $bar.remove();
    this.isShow = false;
    this.time = 0;
    this.timeoutId = 0;
  };

  return Progress;
}();

exports["default"] = Progress;

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(328);

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(329);

module.exports = parent;


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(330);
var path = __webpack_require__(11);

module.exports = path.Date.now;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);

// `Date.now` method
// https://tc39.github.io/ecma262/#sec-date.now
$({ target: 'Date', stat: true }, {
  now: function now() {
    return new Date().getTime();
  }
});


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 绑定图片的事件
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var paste_img_1 = __importDefault(__webpack_require__(332));

var drop_img_1 = __importDefault(__webpack_require__(333));

var drag_size_1 = __importDefault(__webpack_require__(334));

var tooltip_event_1 = __importDefault(__webpack_require__(342));
/**
 * 绑定事件
 * @param editor 编辑器实例
 */


function bindEvent(editor) {
  // 粘贴图片
  paste_img_1["default"](editor); // 拖拽图片

  drop_img_1["default"](editor); // 可再扩展其他事件...如图片 tooltip 等
  // 拖拽图片尺寸

  drag_size_1["default"](editor); //Tooltip

  tooltip_event_1["default"](editor);
}

exports["default"] = bindEvent;

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 粘贴图片
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var paste_event_1 = __webpack_require__(121);

var upload_img_1 = __importDefault(__webpack_require__(93));
/**
 * 剪切板是否有 text 或者 html ？
 * @param editor 编辑器对象
 * @param e 粘贴事件参数
 */


function _haveTextOrHtml(editor, e) {
  var config = editor.config;
  var pasteFilterStyle = config.pasteFilterStyle;
  var pasteIgnoreImg = config.pasteIgnoreImg;
  var pasteHtml = paste_event_1.getPasteHtml(e, pasteFilterStyle, pasteIgnoreImg);
  var pasteText = paste_event_1.getPasteText(e);
  if (pasteHtml) return true;
  if (pasteText) return true;
  return false; // text html 都没有，则返回 false
}
/**
 * 粘贴图片事件方法
 * @param e 事件参数
 */


function pasteImgHandler(e, editor) {
  if (_haveTextOrHtml(editor, e)) {
    // 粘贴过来的有 text 或者 html ，则不执行粘贴图片逻辑
    return;
  } // 获取粘贴的图片列表


  var pastedFiles = paste_event_1.getPasteImgs(e);

  if (!pastedFiles.length) {
    return;
  } // code 中忽略（暂不管它）
  // 执行上传


  var uploadImg = new upload_img_1["default"](editor);
  uploadImg.uploadImg(pastedFiles);
}
/**
 * 粘贴图片
 * @param editor 编辑器对象
 * @param pasteEvents 粘贴事件列表
 */


function bindPasteImg(editor) {
  // 绑定 paste 事件
  editor.txt.eventHooks.pasteEvents.push(function (e) {
    pasteImgHandler(e, editor);
  });
}

exports["default"] = bindPasteImg;

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 拖拽上传图片
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var upload_img_1 = __importDefault(__webpack_require__(93));

function bindDropImg(editor) {
  /**
   * 拖拽图片的事件
   * @param e 事件参数
   */
  function dropImgHandler(e) {
    var files = e.dataTransfer && e.dataTransfer.files;

    if (!files || !files.length) {
      return;
    } // 上传图片


    var uploadImg = new upload_img_1["default"](editor);
    uploadImg.uploadImg(files);
  } // 绑定 drop 事件


  editor.txt.eventHooks.dropEvents.push(dropImgHandler);
}

exports["default"] = bindDropImg;

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 图片拖拽事件绑定
 * @author xiaokyo
 */

var _interopRequireDefault = __webpack_require__(0);

var _parseFloat2 = _interopRequireDefault(__webpack_require__(335));

var _find = _interopRequireDefault(__webpack_require__(54));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

__webpack_require__(340);

var util_1 = __webpack_require__(7);
/**
 * 设置拖拽框的rect
 * @param $drag drag Dom
 * @param width 要设置的宽度
 * @param height 要设置的高度
 * @param left 要设置的左边
 * @param top 要设置的顶部距离
 */


function setDragStyle($drag, width, height, left, top) {
  $drag.attr('style', "width:" + width + "px; height:" + height + "px; left:" + left + "px; top:" + top + "px;");
}
/**
 * 生成一个图片指定大小的拖拽框
 * @param editor 编辑器实例
 * @param $textContainerElem 编辑框对象
 */


function createDragBox(editor, $textContainerElem) {
  var $drag = dom_core_1["default"]("<div class=\"w-e-img-drag-mask\">\n            <div class=\"w-e-img-drag-show-size\"></div>\n            <div class=\"w-e-img-drag-rb\"></div>\n         </div>");
  $drag.hide();
  $textContainerElem.append($drag);
  return $drag;
}
/**
 * 显示拖拽框并设置宽度
 * @param $textContainerElem 编辑框实例
 * @param $drag 拖拽框对象
 */


function showDargBox($textContainerElem, $drag, $img) {
  var boxRect = $textContainerElem.getBoundingClientRect();
  var rect = $img.getBoundingClientRect();
  var rectW = rect.width.toFixed(2);
  var rectH = rect.height.toFixed(2);
  (0, _find["default"])($drag).call($drag, '.w-e-img-drag-show-size').text(rectW + "px * " + rectH + "px");
  setDragStyle($drag, (0, _parseFloat2["default"])(rectW), (0, _parseFloat2["default"])(rectH), rect.left - boxRect.left, rect.top - boxRect.top);
  $drag.show();
}
/**
 * 生成图片拖拽框的 显示/隐藏 函数
 */


function createShowHideFn(editor) {
  var $textContainerElem = editor.$textContainerElem;
  var $imgTarget; // 生成拖拽框

  var $drag = createDragBox(editor, $textContainerElem);
  /**
   * 设置拖拽事件
   * @param $drag 拖拽框的domElement
   * @param $textContainerElem 编辑器实例
   */

  function bindDragEvents($drag, $container) {
    $drag.on('click', function (e) {
      e.stopPropagation();
    });
    $drag.on('mousedown', '.w-e-img-drag-rb', function (e) {
      // e.stopPropagation()
      e.preventDefault();
      if (!$imgTarget) return;
      var firstX = e.clientX;
      var firstY = e.clientY;
      var boxRect = $container.getBoundingClientRect();
      var imgRect = $imgTarget.getBoundingClientRect();
      var width = imgRect.width;
      var height = imgRect.height;
      var left = imgRect.left - boxRect.left;
      var top = imgRect.top - boxRect.top;
      var ratio = width / height;
      var setW = width;
      var setH = height;
      var $document = dom_core_1["default"](document);

      function offEvents() {
        $document.off('mousemove', mouseMoveHandler);
        $document.off('mouseup', mouseUpHandler);
      }

      function mouseMoveHandler(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        setW = width + (ev.clientX - firstX);
        setH = height + (ev.clientY - firstY); // 等比计算

        if (setW / setH != ratio) {
          setH = setW / ratio;
        }

        setW = (0, _parseFloat2["default"])(setW.toFixed(2));
        setH = (0, _parseFloat2["default"])(setH.toFixed(2));
        (0, _find["default"])($drag).call($drag, '.w-e-img-drag-show-size').text(setW.toFixed(2).replace('.00', '') + "px * " + setH.toFixed(2).replace('.00', '') + "px");
        setDragStyle($drag, setW, setH, left, top);
      }

      $document.on('mousemove', mouseMoveHandler);

      function mouseUpHandler() {
        $imgTarget.attr('width', setW + '');
        $imgTarget.attr('height', setH + '');
        var newImgRect = $imgTarget.getBoundingClientRect();
        setDragStyle($drag, setW, setH, newImgRect.left - boxRect.left, newImgRect.top - boxRect.top); // 解绑事件

        offEvents();
      }

      $document.on('mouseup', mouseUpHandler); // 解绑事件

      $document.on('mouseleave', offEvents);
    });
  } // 显示拖拽框


  function showDrag($target) {
    if (util_1.UA.isIE()) return false;

    if ($target) {
      $imgTarget = $target;
      showDargBox($textContainerElem, $drag, $imgTarget);
    }
  } // 隐藏拖拽框


  function hideDrag() {
    (0, _find["default"])($textContainerElem).call($textContainerElem, '.w-e-img-drag-mask').hide();
  } // 事件绑定


  bindDragEvents($drag, $textContainerElem); // 后期改成 blur 触发

  dom_core_1["default"](document).on('click', hideDrag);
  editor.beforeDestroy(function () {
    dom_core_1["default"](document).off('click', hideDrag);
  });
  return {
    showDrag: showDrag,
    hideDrag: hideDrag
  };
}
/**
 * 点击事件委托
 * @param editor 编辑器实例
 */


function bindDragImgSize(editor) {
  var _a = createShowHideFn(editor),
      showDrag = _a.showDrag,
      hideDrag = _a.hideDrag; // 显示拖拽框


  editor.txt.eventHooks.imgClickEvents.push(showDrag); // 隐藏拖拽框

  editor.txt.eventHooks.textScrollEvents.push(hideDrag);
  editor.txt.eventHooks.keyupEvents.push(hideDrag);
  editor.txt.eventHooks.toolbarClickEvents.push(hideDrag);
  editor.txt.eventHooks.menuClickEvents.push(hideDrag);
  editor.txt.eventHooks.changeEvents.push(hideDrag);
}

exports["default"] = bindDragImgSize;

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(336);

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(337);

module.exports = parent;


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(338);
var path = __webpack_require__(11);

module.exports = path.parseFloat;


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var parseFloatImplementation = __webpack_require__(339);

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var trim = __webpack_require__(89).trim;
var whitespaces = __webpack_require__(65);

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(19);
            var content = __webpack_require__(341);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(20);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-text-container {\n  overflow: hidden;\n}\n.w-e-img-drag-mask {\n  position: absolute;\n  z-index: 1;\n  border: 1px dashed #ccc;\n  box-sizing: border-box;\n}\n.w-e-img-drag-mask .w-e-img-drag-rb {\n  position: absolute;\n  right: -5px;\n  bottom: -5px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #ccc;\n  cursor: se-resize;\n}\n.w-e-img-drag-mask .w-e-img-drag-show-size {\n  min-width: 110px;\n  height: 22px;\n  line-height: 22px;\n  font-size: 14px;\n  color: #999;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #999;\n  color: #fff;\n  border-radius: 2px;\n  padding: 0 5px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description tooltip 事件
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var Tooltip_1 = __importDefault(__webpack_require__(42));
/**
 * 生成 Tooltip 的显示隐藏函数
 */


function createShowHideFn(editor) {
  var tooltip;
  /**
   * 显示 tooltip
   * @param $node 链接元素
   */

  function showImgTooltip($node) {
    var conf = [{
      $elem: dom_core_1["default"]("<span class='w-e-icon-trash-o'></span>"),
      onClick: function onClick(editor, $node) {
        // 选中img元素
        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();
        editor.cmd["do"]('delete'); // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。

        return true;
      }
    }, {
      $elem: dom_core_1["default"]('<span>30%</span>'),
      onClick: function onClick(editor, $node) {
        $node.attr('width', '30%');
        $node.removeAttr('height'); // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。

        return true;
      }
    }, {
      $elem: dom_core_1["default"]('<span>50%</span>'),
      onClick: function onClick(editor, $node) {
        $node.attr('width', '50%');
        $node.removeAttr('height'); // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。

        return true;
      }
    }, {
      $elem: dom_core_1["default"]('<span>100%</span>'),
      onClick: function onClick(editor, $node) {
        $node.attr('width', '100%');
        $node.removeAttr('height'); // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。

        return true;
      }
    }];
    tooltip = new Tooltip_1["default"](editor, $node, conf);
    tooltip.create();
  }
  /**
   * 隐藏 tooltip
   */


  function hideImgTooltip() {
    // 移除 tooltip
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  }

  return {
    showImgTooltip: showImgTooltip,
    hideImgTooltip: hideImgTooltip
  };
}
/**
 * 绑定 tooltip 事件
 * @param editor 编辑器实例
 */


function bindTooltipEvent(editor) {
  var _a = createShowHideFn(editor),
      showImgTooltip = _a.showImgTooltip,
      hideImgTooltip = _a.hideImgTooltip; // 点击图片元素是，显示 tooltip


  editor.txt.eventHooks.imgClickEvents.push(showImgTooltip); // 点击其他地方，或者滚动时，隐藏 tooltip

  editor.txt.eventHooks.clickEvents.push(hideImgTooltip);
  editor.txt.eventHooks.keyupEvents.push(hideImgTooltip);
  editor.txt.eventHooks.toolbarClickEvents.push(hideImgTooltip);
  editor.txt.eventHooks.menuClickEvents.push(hideImgTooltip);
  editor.txt.eventHooks.textScrollEvents.push(hideImgTooltip);
  editor.txt.eventHooks.imgDragBarMouseDownEvents.push(hideImgTooltip); // change 时隐藏

  editor.txt.eventHooks.changeEvents.push(hideImgTooltip);
}

exports["default"] = bindTooltipEvent;

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 增加缩进/减少缩进
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var DropListMenu_1 = __importDefault(__webpack_require__(22));

var operate_element_1 = __importDefault(__webpack_require__(344));

var Indent =
/** @class */
function (_super) {
  __extends(Indent, _super);

  function Indent(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-indent-increase\"></i>\n            </div>");
    var dropListConf = {
      width: 130,
      title: '设置缩进',
      type: 'list',
      list: [{
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-indent-increase w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.indent.增加缩进') + "\n                        <p>"),
        value: 'increase'
      }, {
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-indent-decrease w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.indent.减少缩进') + "\n                        <p>"),
        value: 'decrease'
      }],
      clickHandler: function clickHandler(value) {
        // 注意 this 是指向当前的 Indent 对象
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, dropListConf) || this;
    return _this;
  }
  /**
   * 执行命令
   * @param value value
   */


  Indent.prototype.command = function (value) {
    var editor = this.editor;
    var $selectionElem = editor.selection.getSelectionContainerElem(); // 判断 当前选区为 textElem 时

    if ($selectionElem && editor.$textElem.equal($selectionElem)) {
      // 当 当前选区 等于 textElem 时
      // 代表 当前选区 可能是一个选择了一个完整的段落或者多个段落
      var $elems = editor.selection.getSelectionRangeTopNodes(editor);

      if ($elems.length > 0) {
        (0, _forEach["default"])($elems).call($elems, function (item) {
          operate_element_1["default"](dom_core_1["default"](item), value, editor);
        });
      }
    } else {
      // 当 当前选区 不等于 textElem 时
      // 代表 当前选区要么是一个段落，要么是段落中的一部分
      if ($selectionElem && $selectionElem.length > 0) {
        (0, _forEach["default"])($selectionElem).call($selectionElem, function (item) {
          operate_element_1["default"](dom_core_1["default"](item), value, editor);
        });
      }
    } // 恢复选区


    editor.selection.restoreSelection();
    this.tryChangeActive();
  };
  /**
   * 尝试改变菜单激活（高亮）状态
   */


  Indent.prototype.tryChangeActive = function () {
    var editor = this.editor;
    var $selectionElem = editor.selection.getSelectionStartElem();
    var $selectionStartElem = dom_core_1["default"]($selectionElem).getNodeTop(editor);
    if ($selectionStartElem.length <= 0) return;

    if ($selectionStartElem.elems[0].style['paddingLeft'] != '') {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Indent;
}(DropListMenu_1["default"]);

exports["default"] = Indent;

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 对节点 操作 进行封装
 *                  获取当前节点的段落
 *                  根据type判断是增加还是减少缩进
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _trim = _interopRequireDefault(__webpack_require__(21));

var _slice = _interopRequireDefault(__webpack_require__(53));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var increase_indent_style_1 = __importDefault(__webpack_require__(345));

var decrease_indent_style_1 = __importDefault(__webpack_require__(346));

var lengthRegex = /^(\d+)(\w+)$/;
var percentRegex = /^(\d+)%$/;

function parseIndentation(editor) {
  var indentation = editor.config.indentation;

  if (typeof indentation === 'string') {
    if (lengthRegex.test(indentation)) {
      var _context;

      var _a = (0, _slice["default"])(_context = (0, _trim["default"])(indentation).call(indentation).match(lengthRegex)).call(_context, 1, 3),
          value = _a[0],
          unit = _a[1];

      return {
        value: Number(value),
        unit: unit
      };
    } else if (percentRegex.test(indentation)) {
      return {
        value: Number((0, _trim["default"])(indentation).call(indentation).match(percentRegex)[1]),
        unit: '%'
      };
    }
  } else if (indentation.value !== void 0 && indentation.unit) {
    return indentation;
  }

  return {
    value: 2,
    unit: 'em'
  };
}

function operateElement($node, type, editor) {
  var $elem = $node.getNodeTop(editor);
  var reg = /^P$/i;

  if (reg.test($elem.getNodeName())) {
    if (type === 'increase') increase_indent_style_1["default"]($elem, parseIndentation(editor));else if (type === 'decrease') decrease_indent_style_1["default"]($elem, parseIndentation(editor));
  }
}

exports["default"] = operateElement;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 增加缩进
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _slice = _interopRequireDefault(__webpack_require__(53));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

function increaseIndentStyle($node, options) {
  var $elem = $node.elems[0];

  if ($elem.style['paddingLeft'] === '') {
    $node.css('padding-left', options.value + options.unit);
  } else {
    var oldPL = $elem.style['paddingLeft'];
    var oldVal = (0, _slice["default"])(oldPL).call(oldPL, 0, oldPL.length - options.unit.length);
    var newVal = Number(oldVal) + options.value;
    $node.css('padding-left', "" + newVal + options.unit);
  }
}

exports["default"] = increaseIndentStyle;

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 减少缩进
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _slice = _interopRequireDefault(__webpack_require__(53));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

function decreaseIndentStyle($node, options) {
  var $elem = $node.elems[0];

  if ($elem.style['paddingLeft'] !== '') {
    var oldPL = $elem.style['paddingLeft'];
    var oldVal = (0, _slice["default"])(oldPL).call(oldPL, 0, oldPL.length - options.unit.length);
    var newVal = Number(oldVal) - options.value;

    if (newVal > 0) {
      $node.css('padding-left', "" + newVal + options.unit);
    } else {
      $node.css('padding-left', '');
    }
  }
}

exports["default"] = decreaseIndentStyle;

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * @description 插入表情
 * @author liuwe
 */

var dom_core_1 = __importDefault(__webpack_require__(2));

var PanelMenu_1 = __importDefault(__webpack_require__(31));

var Panel_1 = __importDefault(__webpack_require__(27));

var create_panel_conf_1 = __importDefault(__webpack_require__(348));

var Emoticon =
/** @class */
function (_super) {
  __extends(Emoticon, _super);

  function Emoticon(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-happy\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * 创建 panel
   */


  Emoticon.prototype.createPanel = function () {
    var conf = create_panel_conf_1["default"](this.editor);
    var panel = new Panel_1["default"](this, conf);
    panel.create();
  };
  /**
   * 菜单表情点击事件
   */


  Emoticon.prototype.clickHandler = function () {
    this.createPanel();
  };

  Emoticon.prototype.tryChangeActive = function () {};

  return Emoticon;
}(PanelMenu_1["default"]);

exports["default"] = Emoticon;

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description  表情菜单 panel配置
 * @author liuwei
 */

var _interopRequireDefault = __webpack_require__(0);

var _trim = _interopRequireDefault(__webpack_require__(21));

var _filter = _interopRequireDefault(__webpack_require__(86));

var _map = _interopRequireDefault(__webpack_require__(41));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

function default_1(editor) {
  // 声明emotions数据结构
  var emotions = editor.config.emotions;
  /* tabs配置项 ==================================================================*/
  // 生成表情结构 TODO jele type类型待优化

  function GenerateExpressionStructure(ele) {
    // 返回为一个数组对象
    var res = []; // 如果type是image类型则生成一个img标签

    if (ele.type == 'image') {
      var _context;

      res = (0, _map["default"])(_context = ele.content).call(_context, function (con) {
        if (typeof con == 'string') return '';
        return "<span  title=\"" + con.alt + "\">\n                    <img class=\"eleImg\" style src=\"" + con.src + "\" alt=\"[" + con.alt + "]\">\n                </span>";
      });
      res = (0, _filter["default"])(res).call(res, function (s) {
        return s !== '';
      });
    } //否则直接当内容处理
    else {
        var _context2;

        res = (0, _map["default"])(_context2 = ele.content).call(_context2, function (con) {
          return "<span class=\"eleImg\" title=\"" + con + "\">" + con + "</span>";
        });
      }

    return res.join('').replace(/&nbsp;/g, '');
  }

  var tabsConf = (0, _map["default"])(emotions).call(emotions, function (ele) {
    return {
      title: editor.i18next.t("menus.panelMenus.emoticon." + ele.title),
      // 判断type类型如果是image则以img的形式插入否则以内容
      tpl: "<div>" + GenerateExpressionStructure(ele) + "</div>",
      events: [{
        selector: '.eleImg',
        type: 'click',
        fn: function fn(e) {
          // e为事件对象
          var $target = dom_core_1["default"](e.target);
          var nodeName = $target.getNodeName();
          var insertHtml;

          if (nodeName === 'IMG') {
            var _context3;

            // 插入图片
            insertHtml = (0, _trim["default"])(_context3 = $target.parent().html()).call(_context3);
          } else {
            // 插入 emoji
            insertHtml = '<span>' + $target.html() + '</span>';
          }

          editor.cmd["do"]('insertHTML', insertHtml); // 示函数执行结束之后关闭 panel

          return true;
        }
      }]
    };
  });
  /* tabs配置项 =================================================================end*/
  // 最终的配置 -----------------------------------------

  var conf = {
    width: 300,
    height: 230,
    tabs: tabsConf
  };
  return conf;
}

exports["default"] = default_1;

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 无序列表/有序列表
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var DropListMenu_1 = __importDefault(__webpack_require__(22));

var List =
/** @class */
function (_super) {
  __extends(List, _super);

  function List(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-list2\"></i>\n            </div>");
    var dropListConf = {
      width: 130,
      title: '序列',
      type: 'list',
      list: [{
        $elem: dom_core_1["default"]("\n                        <p>\n                            <i class=\"w-e-icon-list2 w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.list.无序列表') + "\n                        <p>"),
        value: 'insertUnorderedList'
      }, {
        $elem: dom_core_1["default"]("<p>\n                            <i class=\"w-e-icon-list-numbered w-e-drop-list-item\"></i>\n                            " + editor.i18next.t('menus.dropListMenu.list.有序列表') + "\n                        <p>"),
        value: 'insertOrderedList'
      }],
      clickHandler: function clickHandler(value) {
        // 注意 this 是指向当前的 List 对象
        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, dropListConf) || this;
    return _this;
  }

  List.prototype.command = function (value) {
    var editor = this.editor;
    var $textElem = editor.$textElem;
    editor.selection.restoreSelection(); // 判断是否已经执行了命令

    if (editor.cmd.queryCommandState(value)) {
      return;
    } //禁止在table中添加列表


    var $selectionElem = dom_core_1["default"](editor.selection.getSelectionContainerElem());
    var $dom = dom_core_1["default"]($selectionElem.elems[0]).parentUntil('TABLE', $selectionElem.elems[0]);

    if ($dom && dom_core_1["default"]($dom.elems[0]).getNodeName() === 'TABLE') {
      return;
    }

    editor.cmd["do"](value); // 验证列表是否被包裹在 <p> 之内

    if ($selectionElem.getNodeName() === 'LI') {
      $selectionElem = $selectionElem.parent();
    }

    if (/^ol|ul$/i.test($selectionElem.getNodeName()) === false) {
      return;
    }

    if ($selectionElem.equal($textElem)) {
      // 证明是顶级标签，没有被 <p> 包裹
      return;
    }

    var $parent = $selectionElem.parent();

    if ($parent.equal($textElem)) {
      // $parent 是顶级标签，不能删除
      return;
    }

    $selectionElem.insertAfter($parent);
    $parent.remove(); // 恢复选区

    editor.selection.restoreSelection();
    this.tryChangeActive();
  };

  List.prototype.tryChangeActive = function () {};

  return List;
}(DropListMenu_1["default"]);

exports["default"] = List;

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 段落行高 LineHeight
 * @author lichunlin
 *
 */

var _interopRequireDefault = __webpack_require__(0);

var _indexOf = _interopRequireDefault(__webpack_require__(52));

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var DropListMenu_1 = __importDefault(__webpack_require__(22));

var dom_core_1 = __importDefault(__webpack_require__(2));

var lineHeightList_1 = __importDefault(__webpack_require__(351));

var util_1 = __webpack_require__(7);

var LineHeight =
/** @class */
function (_super) {
  __extends(LineHeight, _super);

  function LineHeight(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                    <i class=\"w-e-icon-row-height\"></i>\n                </div>");
    var lineHeightMenu = new lineHeightList_1["default"](editor, editor.config.lineHeights);
    var DropListMenu = {
      width: 100,
      title: '设置行高',
      type: 'list',
      list: lineHeightMenu.getItemList(),
      clickHandler: function clickHandler(value) {
        //保存焦点
        editor.selection.saveRange();

        _this.command(value);
      }
    };
    _this = _super.call(this, $elem, editor, DropListMenu) || this;
    return _this;
  }
  /**
   * 执行命令
   * @param value value
   */


  LineHeight.prototype.command = function (value) {
    var _this = this;

    var _a;

    var selection = window.getSelection ? window.getSelection() : document.getSelection(); //允许设置dom

    var allowArray = ['P'];
    var editor = this.editor;
    var st = ''; //恢复焦点

    editor.selection.restoreSelection();
    var $selectionElem = dom_core_1["default"](editor.selection.getSelectionContainerElem());
    var $selectionAll = dom_core_1["default"](editor.selection.getSelectionContainerElem()); // let dom:HTMLElement= $selectionElem.elems[0]

    var dom = dom_core_1["default"](editor.selection.getSelectionStartElem()).elems[0]; //获取元素的style

    var style = '';
    var styleList = []; //点击默认的时候删除line-height属性 并重新设置 style

    var styleStr = ''; //选中多行操作

    if ($selectionElem && editor.$textElem.equal($selectionElem)) {
      var isIE = util_1.UA.isIE();

      if (isIE) {
        // ie下禁止多行操作 避免多行造成除第一行外的段落内容都被删除
        return;
      } //获取range 开头结束的dom在 祖父元素的下标


      var indexStore_1 = [];
      var arrayDom_a = [];
      var arrayDom_b = []; //获取range 开头结束的dom

      var StartElem_1 = dom_core_1["default"](editor.selection.getSelectionStartElem());
      var EndElem_1 = dom_core_1["default"](editor.selection.getSelectionEndElem());
      var childList = (_a = editor.selection.getRange()) === null || _a === void 0 ? void 0 : _a.commonAncestorContainer.childNodes;
      arrayDom_a.push(this.getDom(StartElem_1.elems[0]));
      childList === null || childList === void 0 ? void 0 : (0, _forEach["default"])(childList).call(childList, function (item, index) {
        if (item === _this.getDom(StartElem_1.elems[0])) {
          indexStore_1.push(index);
        }

        if (item === _this.getDom(EndElem_1.elems[0])) {
          indexStore_1.push(index);
        }
      }); //遍历 获取头尾之间的dom元素

      var i = 0;
      var d = void 0;
      arrayDom_b.push(this.getDom(StartElem_1.elems[0]));

      while (arrayDom_a[i] !== this.getDom(EndElem_1.elems[0])) {
        d = dom_core_1["default"](arrayDom_a[i].nextElementSibling).elems[0];

        if ((0, _indexOf["default"])(allowArray).call(allowArray, dom_core_1["default"](d).getNodeName()) !== -1) {
          arrayDom_b.push(d);
          arrayDom_a.push(d);
        } else {
          arrayDom_a.push(d);
        }

        i++;
      } //设置段落选取 全选


      if (dom_core_1["default"](arrayDom_a[0]).getNodeName() !== 'P') {
        i = 0; //遍历集合得到第一个p标签的下标

        for (var k = 0; k < arrayDom_a.length; k++) {
          if (dom_core_1["default"](arrayDom_a[k]).getNodeName() === 'P') {
            i = k;
            break;
          }
        } //i===0 说明选区中没有p段落


        if (i === 0) {
          return;
        }

        var _i = 0;

        while (_i !== i) {
          arrayDom_a.shift();
          _i++;
        }
      } //设置替换的选区


      this.setRange(arrayDom_a[0], arrayDom_a[arrayDom_a.length - 1]); //生成innerHtml html字符串

      (0, _forEach["default"])(arrayDom_a).call(arrayDom_a, function (item) {
        style = item.getAttribute('style');
        styleList = style ? style.split(';') : [];
        styleStr = '';

        if (dom_core_1["default"](item).getNodeName() === 'P') {
          //判断是否 点击默认
          value ? styleStr = _this.styleProcessing(styleList) + ("line-height:" + value + ";") : styleStr = _this.styleProcessing(styleList);
          st = st + ("<" + dom_core_1["default"](item).getNodeName().toLowerCase() + " style=\"" + styleStr + "\">" + item.innerHTML + "</" + dom_core_1["default"](item).getNodeName().toLowerCase() + ">");
        } else {
          styleStr = _this.styleProcessing(styleList);
          st = st + ("<" + dom_core_1["default"](item).getNodeName().toLowerCase() + " style=\"" + styleStr + "\">" + item.innerHTML + "</" + dom_core_1["default"](item).getNodeName().toLowerCase() + ">");
        }
      });
      this.action(st, editor); //恢复已选择的选区

      dom = $selectionAll.elems[0];
      this.setRange(dom.children[indexStore_1[0]], dom.children[indexStore_1[1]]);
      return;
    } //遍历dom 获取祖父元素 直到contenteditable属性的div标签


    dom = this.getDom(dom); //校验允许lineheight设置标签

    if ((0, _indexOf["default"])(allowArray).call(allowArray, dom_core_1["default"](dom).getNodeName()) === -1) {
      return;
    }

    style = dom.getAttribute('style');
    styleList = style ? style.split(';') : []; //全选 dom下所有的内容

    selection === null || selection === void 0 ? void 0 : selection.selectAllChildren(dom); //保存range

    editor.selection.saveRange(); //判断是否存在value 默认 移除line-height

    if (!value) {
      if (style) {
        styleStr = this.styleProcessing(styleList); //避免没有其它属性 只留下 ‘style’ 减少代码

        if (styleStr === '') {
          st = "<" + dom_core_1["default"](dom).getNodeName().toLowerCase() + ">" + dom.innerHTML + "</" + dom_core_1["default"](dom).getNodeName().toLowerCase() + ">";
        } else {
          st = "<" + dom_core_1["default"](dom).getNodeName().toLowerCase() + " style=\"" + styleStr + "\">" + dom.innerHTML + "</" + dom_core_1["default"](dom).getNodeName().toLowerCase() + ">";
        }

        this.action(st, editor);
      }

      return;
    }

    if (style) {
      //存在style 检索其它style属性
      styleStr = this.styleProcessing(styleList) + ("line-height:" + value + ";");
    } else {
      styleStr = "line-height:" + value + ";";
    }

    st = "<" + dom_core_1["default"](dom).getNodeName().toLowerCase() + " style=\"" + styleStr + "\">" + dom.innerHTML + "</" + dom_core_1["default"](dom).getNodeName().toLowerCase() + ">"; //防止BLOCKQUOTE叠加

    if (dom_core_1["default"](dom).getNodeName() === 'BLOCKQUOTE') {
      dom_core_1["default"](dom).css('line-height', value);
    } else {
      this.action(st, editor);
    }
  };
  /**
   * 遍历dom 获取祖父元素 直到contenteditable属性的div标签
   *
   */


  LineHeight.prototype.getDom = function (dom) {
    var DOM = dom_core_1["default"](dom).elems[0];

    if (!DOM.parentNode) {
      return DOM;
    }

    function getParentNode($node, editor) {
      var $parent = dom_core_1["default"]($node.parentNode);

      if (editor.$textElem.equal($parent)) {
        return $node;
      } else {
        return getParentNode($parent.elems[0], editor);
      }
    }

    DOM = getParentNode(DOM, this.editor);
    return DOM;
  };
  /**
   * 执行 document.execCommand
   *
   */


  LineHeight.prototype.action = function (html_str, editor) {
    editor.cmd["do"]('insertHTML', html_str);
  };
  /**
   * style 处理
   */


  LineHeight.prototype.styleProcessing = function (styleList) {
    var styleStr = '';
    (0, _forEach["default"])(styleList).call(styleList, function (item) {
      item !== '' && (0, _indexOf["default"])(item).call(item, 'line-height') === -1 ? styleStr = styleStr + item + ';' : '';
    });
    return styleStr;
  };
  /**
   * 段落全选 比如：避免11变成111
   */


  LineHeight.prototype.setRange = function (startDom, endDom) {
    var editor = this.editor;
    var selection = window.getSelection ? window.getSelection() : document.getSelection(); //清除所有的选区

    selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
    var range = document.createRange();
    var star = startDom;
    var end = endDom;
    range.setStart(star, 0);
    range.setEnd(end, 1);
    selection === null || selection === void 0 ? void 0 : selection.addRange(range); //保存设置好的选区

    editor.selection.saveRange(); //清除所有的选区

    selection === null || selection === void 0 ? void 0 : selection.removeAllRanges(); //恢复选区

    editor.selection.restoreSelection();
  };
  /**
   * 尝试修改菜单激活状态
   */


  LineHeight.prototype.tryChangeActive = function () {
    var editor = this.editor;
    var $selectionElem = editor.selection.getSelectionContainerElem();

    if ($selectionElem && editor.$textElem.equal($selectionElem)) {
      //避免选中多行设置
      return;
    }

    var dom = dom_core_1["default"](editor.selection.getSelectionStartElem());
    dom = this.getDom(dom.elems[0]);
    var style = dom.getAttribute('style') ? dom.getAttribute('style') : ''; //判断当前标签是否具有line-height属性

    if (style && (0, _indexOf["default"])(style).call(style, 'line-height') !== -1) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return LineHeight;
}(DropListMenu_1["default"]);

exports["default"] = LineHeight;

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * @description 行高 菜单
 * @author lichunlin
 */

var dom_core_1 = __importDefault(__webpack_require__(2));

var lineHeightList =
/** @class */
function () {
  function lineHeightList(editor, list) {
    var _this = this;

    this.itemList = [{
      $elem: dom_core_1["default"]("<span>" + editor.i18next.t('默认') + "</span>"),
      value: ''
    }];
    (0, _forEach["default"])(list).call(list, function (item) {
      _this.itemList.push({
        $elem: dom_core_1["default"]("<span>" + item + "</span>"),
        value: item
      });
    });
  }

  lineHeightList.prototype.getItemList = function () {
    return this.itemList;
  };

  return lineHeightList;
}();

exports["default"] = lineHeightList;

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 撤销
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var BtnMenu_1 = __importDefault(__webpack_require__(24));

var Undo =
/** @class */
function (_super) {
  __extends(Undo, _super);

  function Undo(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-undo\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * 点击事件
   */


  Undo.prototype.clickHandler = function () {
    this.editor.history.revoke();
  };
  /**
   * 尝试修改菜单激活状态
   */


  Undo.prototype.tryChangeActive = function () {
    // 标准模式下才进行操作
    if (!this.editor.isCompatibleMode) {
      if (this.editor.history.size[0]) {
        this.active();
      } else {
        this.unActive();
      }
    }
  };

  return Undo;
}(BtnMenu_1["default"]);

exports["default"] = Undo;

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 重做
 * @author tonghan
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var BtnMenu_1 = __importDefault(__webpack_require__(24));

var Redo =
/** @class */
function (_super) {
  __extends(Redo, _super);

  function Redo(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n                <i class=\"w-e-icon-redo\"></i>\n            </div>");
    _this = _super.call(this, $elem, editor) || this;
    return _this;
  }
  /**
   * 点击事件
   */


  Redo.prototype.clickHandler = function () {
    this.editor.history.restore();
  };
  /**
   * 尝试修改菜单激活状态
   */


  Redo.prototype.tryChangeActive = function () {
    // 标准模式下才进行操作
    if (!this.editor.isCompatibleMode) {
      if (this.editor.history.size[1]) {
        this.active();
      } else {
        this.unActive();
      }
    }
  };

  return Redo;
}(BtnMenu_1["default"]);

exports["default"] = Redo;

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 创建table
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var PanelMenu_1 = __importDefault(__webpack_require__(31));

var dom_core_1 = __importDefault(__webpack_require__(2));

var create_panel_conf_1 = __importDefault(__webpack_require__(355));

var Panel_1 = __importDefault(__webpack_require__(27));

var index_1 = __importDefault(__webpack_require__(359));

var Table =
/** @class */
function (_super) {
  __extends(Table, _super);

  function Table(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu"><i class="w-e-icon-table2"></i></div>');
    _this = _super.call(this, $elem, editor) || this; // 绑定事件

    index_1["default"](editor);
    return _this;
  }
  /**
   * 菜单点击事件
   */


  Table.prototype.clickHandler = function () {
    this.createPanel();
  };
  /**
   * 创建 panel
   */


  Table.prototype.createPanel = function () {
    var conf = create_panel_conf_1["default"](this.editor);
    var panel = new Panel_1["default"](this, conf);
    panel.create();
  };
  /**
   * 尝试修改菜单 active 状态
   */


  Table.prototype.tryChangeActive = function () {};

  return Table;
}(PanelMenu_1["default"]);

exports["default"] = Table;

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description table 菜单 panel tab 配置
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(7);

var dom_core_1 = __importDefault(__webpack_require__(2));

__webpack_require__(356);

var create_table_1 = __importDefault(__webpack_require__(358));

function default_1(editor) {
  var createTable = new create_table_1["default"](editor); // panel 中需要用到的id

  var colId = util_1.getRandom('w-col-id');
  var rowId = util_1.getRandom('w-row-id');
  var insertBtnId = util_1.getRandom('btn-link');
  var i18nPrefix = 'menus.panelMenus.table.';

  var t = function t(text) {
    return editor.i18next.t(text);
  }; // tabs 配置 -----------------------------------------


  var tabsConf = [{
    title: t(i18nPrefix + "\u63D2\u5165\u8868\u683C"),
    tpl: "<div>\n                    <div class=\"w-e-table\">\n                        <span>" + t('创建') + "</span>\n                        <input id=\"" + rowId + "\"  type=\"text\" class=\"w-e-table-input\" value=\"5\"/></td>\n                        <span>" + t(i18nPrefix + "\u884C") + "</span>\n                        <input id=\"" + colId + "\" type=\"text\" class=\"w-e-table-input\" value=\"5\"/></td>\n                        <span>" + (t(i18nPrefix + "\u5217") + t(i18nPrefix + "\u7684") + t(i18nPrefix + "\u8868\u683C")) + "</span>\n                    </div>\n                    <div class=\"w-e-button-container\">\n                        <button id=\"" + insertBtnId + "\" class=\"right\">" + t('插入') + "</button>\n                    </div>\n                </div>",
    events: [{
      selector: '#' + insertBtnId,
      type: 'click',
      fn: function fn() {
        var colValue = Number(dom_core_1["default"]('#' + colId).val());
        var rowValue = Number(dom_core_1["default"]('#' + rowId).val()); //校验是否传值

        if (colValue && rowValue) {
          createTable.createAction(rowValue, colValue);
        } // 返回 true 表示函数执行结束之后关闭 panel


        return true;
      }
    }]
  }]; // tabs end
  // 最终的配置 -----------------------------------------

  var conf = {
    width: 330,
    height: 0,
    tabs: []
  };
  conf.tabs.push(tabsConf[0]);
  return conf;
}

exports["default"] = default_1;

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(19);
            var content = __webpack_require__(357);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(20);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-table {\n  display: flex;\n}\n.w-e-table .w-e-table-input {\n  width: 40px;\n  text-align: center!important;\n  margin: 0 5px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 创建tabel
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var CreateTable =
/** @class */
function () {
  function CreateTable(editor) {
    this.editor = editor;
  }
  /**
   * 执行创建
   * @param rowValue 行数
   * @param colValue 列数
   */


  CreateTable.prototype.createAction = function (rowValue, colValue) {
    var editor = this.editor; //不允许在有序列表中添加table

    var $selectionElem = dom_core_1["default"](editor.selection.getSelectionContainerElem());
    var $ul = dom_core_1["default"]($selectionElem.elems[0]).parentUntil('UL', $selectionElem.elems[0]);
    var $ol = dom_core_1["default"]($selectionElem.elems[0]).parentUntil('OL', $selectionElem.elems[0]);

    if ($ul || $ol) {
      return;
    }

    var tableDom = this.createTableHtml(rowValue, colValue);
    editor.cmd["do"]('insertHTML', tableDom);
  };
  /**
   * 创建table、行、列
   * @param rowValue 行数
   * @param colValue 列数
   */


  CreateTable.prototype.createTableHtml = function (rowValue, colValue) {
    var rowStr = '';
    var colStr = '';

    for (var i = 0; i < rowValue; i++) {
      colStr = '';

      for (var j = 0; j < colValue; j++) {
        if (i === 0) {
          colStr = colStr + '<th></th>';
        } else {
          colStr = colStr + '<td></td>';
        }
      }

      rowStr = rowStr + '<tr>' + colStr + '</tr>';
    }

    var tableDom = "<table border=\"0\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\"><tbody>" + rowStr + '</tbody></table><p><br></p>';
    return tableDom;
  };

  return CreateTable;
}();

exports["default"] = CreateTable;

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 绑定点击事件
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tooltip_event_1 = __importDefault(__webpack_require__(360));
/**
 * 绑定事件
 * @param editor 编辑器实例
 */


function bindEvent(editor) {
  //Tooltip
  tooltip_event_1["default"](editor);
}

exports["default"] = bindEvent;

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description tooltip 事件
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var Tooltip_1 = __importDefault(__webpack_require__(42)); //操作事件


var operating_event_1 = __importDefault(__webpack_require__(361));

var getNode_1 = __importDefault(__webpack_require__(362));
/**
 * 生成 Tooltip 的显示隐藏函数
 */


function createShowHideFn(editor) {
  var tooltip;
  /**
   * 显示 tooltip
   * @param  table元素
   */

  function showTableTooltip($node) {
    var getnode = new getNode_1["default"](editor);
    var i18nPrefix = 'menus.panelMenus.table.';

    var t = function t(text, prefix) {
      if (prefix === void 0) {
        prefix = i18nPrefix;
      }

      return editor.i18next.t(prefix + text);
    };

    var conf = [{
      // $elem: $("<span class='w-e-icon-trash-o'></span>"),
      $elem: dom_core_1["default"]("<span>" + t('删除表格') + "</span>"),
      onClick: function onClick(editor, $node) {
        // 选中img元素
        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();
        editor.cmd["do"]('insertHTML', '<p><br></p>'); // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。

        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('添加行') + "</span>"),
      onClick: function onClick(editor, $node) {
        // 禁止多选操作
        var isMore = isMoreRowAction(editor);

        if (isMore) {
          return true;
        } //当前元素


        var selectDom = dom_core_1["default"](editor.selection.getSelectionStartElem()); //当前行

        var $currentRow = getnode.getRowNode(selectDom.elems[0]);

        if (!$currentRow) {
          return true;
        } //获取当前行的index


        var index = Number(getnode.getCurrentRowIndex($node.elems[0], $currentRow)); //生成要替换的html

        var htmlStr = getnode.getTableHtml($node.elems[0]); //生成新的table

        var newdom = getnode.getTableHtml(operating_event_1["default"].ProcessingRow(dom_core_1["default"](htmlStr), index).elems[0]); // 选中table

        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();
        editor.cmd["do"]('insertHTML', newdom);
        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('删除行') + "</span>"),
      onClick: function onClick(editor, $node) {
        // 禁止多选操作
        var isMore = isMoreRowAction(editor);

        if (isMore) {
          return true;
        } //当前元素


        var selectDom = dom_core_1["default"](editor.selection.getSelectionStartElem()); //当前行

        var $currentRow = getnode.getRowNode(selectDom.elems[0]);

        if (!$currentRow) {
          return true;
        } //获取当前行的index


        var index = Number(getnode.getCurrentRowIndex($node.elems[0], $currentRow)); //生成要替换的html

        var htmlStr = getnode.getTableHtml($node.elems[0]); //获取新生成的table 判断是否是最后一行被删除 是 删除整个table

        var trLength = operating_event_1["default"].DeleteRow(dom_core_1["default"](htmlStr), index).elems[0].childNodes[0].childNodes.length; //生成新的table

        var newdom = ''; // 选中table

        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();

        if (trLength === 0) {
          newdom = '<p><br></p>';
        } else {
          newdom = getnode.getTableHtml(operating_event_1["default"].DeleteRow(dom_core_1["default"](htmlStr), index).elems[0]);
        }

        editor.cmd["do"]('insertHTML', newdom);
        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('添加列') + "</span>"),
      onClick: function onClick(editor, $node) {
        // 禁止多选操作
        var isMore = isMoreRowAction(editor);

        if (isMore) {
          return true;
        } //当前元素


        var selectDom = dom_core_1["default"](editor.selection.getSelectionStartElem()); //当前列的index

        var index = getnode.getCurrentColIndex(selectDom.elems[0]); //生成要替换的html

        var htmlStr = getnode.getTableHtml($node.elems[0]); //生成新的table

        var newdom = getnode.getTableHtml(operating_event_1["default"].ProcessingCol(dom_core_1["default"](htmlStr), index).elems[0]); // 选中table

        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();
        editor.cmd["do"]('insertHTML', newdom);
        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('删除列') + "</span>"),
      onClick: function onClick(editor, $node) {
        // 禁止多选操作
        var isMore = isMoreRowAction(editor);

        if (isMore) {
          return true;
        } //当前元素


        var selectDom = dom_core_1["default"](editor.selection.getSelectionStartElem()); //当前列的index

        var index = getnode.getCurrentColIndex(selectDom.elems[0]); //生成要替换的html

        var htmlStr = getnode.getTableHtml($node.elems[0]); //获取新生成的table 判断是否是最后一列被删除 是 删除整个table

        var tdLength = operating_event_1["default"].DeleteCol(dom_core_1["default"](htmlStr), index).elems[0].childNodes[0].childNodes[0].childNodes.length; //生成新的table

        var newdom = ''; // 选中table

        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();

        if (tdLength === 1) {
          newdom = '<p><br></p>';
        } else {
          newdom = getnode.getTableHtml(operating_event_1["default"].DeleteCol(dom_core_1["default"](htmlStr), index).elems[0]);
        }

        editor.cmd["do"]('insertHTML', newdom);
        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('设置表头') + "</span>"),
      onClick: function onClick(editor, $node) {
        // 禁止多选操作
        var isMore = isMoreRowAction(editor);

        if (isMore) {
          return true;
        } //当前元素


        var selectDom = dom_core_1["default"](editor.selection.getSelectionStartElem()); //当前行

        var $currentRow = getnode.getRowNode(selectDom.elems[0]);

        if (!$currentRow) {
          return true;
        } //获取当前行的index


        var index = Number(getnode.getCurrentRowIndex($node.elems[0], $currentRow));

        if (index !== 0) {
          //控制在table的第一行
          index = 0;
        } //生成要替换的html


        var htmlStr = getnode.getTableHtml($node.elems[0]); //生成新的table

        var newdom = getnode.getTableHtml(operating_event_1["default"].setTheHeader(dom_core_1["default"](htmlStr), index, 'th').elems[0]); // 选中table

        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();
        editor.cmd["do"]('insertHTML', newdom);
        return true;
      }
    }, {
      $elem: dom_core_1["default"]("<span>" + t('取消表头') + "</span>"),
      onClick: function onClick(editor, $node) {
        //当前元素
        var selectDom = dom_core_1["default"](editor.selection.getSelectionStartElem()); //当前行

        var $currentRow = getnode.getRowNode(selectDom.elems[0]);

        if (!$currentRow) {
          return true;
        } //获取当前行的index


        var index = Number(getnode.getCurrentRowIndex($node.elems[0], $currentRow));

        if (index !== 0) {
          //控制在table的第一行
          index = 0;
        } //生成要替换的html


        var htmlStr = getnode.getTableHtml($node.elems[0]); //生成新的table

        var newdom = getnode.getTableHtml(operating_event_1["default"].setTheHeader(dom_core_1["default"](htmlStr), index, 'td').elems[0]); // 选中table

        editor.selection.createRangeByElem($node);
        editor.selection.restoreSelection();
        editor.cmd["do"]('insertHTML', newdom);
        return true;
      }
    }];
    tooltip = new Tooltip_1["default"](editor, $node, conf);
    tooltip.create();
  }
  /**
   * 隐藏 tooltip
   */


  function hideTableTooltip() {
    // 移除 tooltip
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  }

  return {
    showTableTooltip: showTableTooltip,
    hideTableTooltip: hideTableTooltip
  };
}
/**
 * 判断是否是多行
 */


function isMoreRowAction(editor) {
  var $startElem = editor.selection.getSelectionStartElem();
  var $endElem = editor.selection.getSelectionEndElem();

  if (($startElem === null || $startElem === void 0 ? void 0 : $startElem.elems[0]) !== ($endElem === null || $endElem === void 0 ? void 0 : $endElem.elems[0])) {
    return true;
  } else {
    return false;
  }
}
/**
 * 绑定 tooltip 事件
 * @param editor 编辑器实例
 */


function bindTooltipEvent(editor) {
  var _a = createShowHideFn(editor),
      showTableTooltip = _a.showTableTooltip,
      hideTableTooltip = _a.hideTableTooltip; // 点击table元素是，显示 tooltip


  editor.txt.eventHooks.tableClickEvents.push(showTableTooltip); // 点击其他地方，或者滚动时，隐藏 tooltip

  editor.txt.eventHooks.clickEvents.push(hideTableTooltip);
  editor.txt.eventHooks.keyupEvents.push(hideTableTooltip);
  editor.txt.eventHooks.toolbarClickEvents.push(hideTableTooltip);
  editor.txt.eventHooks.menuClickEvents.push(hideTableTooltip);
  editor.txt.eventHooks.textScrollEvents.push(hideTableTooltip);
}

exports["default"] = bindTooltipEvent;

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _splice = _interopRequireDefault(__webpack_require__(87));

var _slice = _interopRequireDefault(__webpack_require__(53));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));
/**
 * 处理新添加行
 * @param $node 整个table
 * @param _index 行的inde
 */


function ProcessingRow($node, _index) {
  //执行获取tbody节点
  var $dom = generateDomAction($node); //取出所有的行

  var domArray = (0, _slice["default"])(Array.prototype).apply($dom.childNodes); //列的数量

  var childNodesLenght = domArray[0].childNodes.length; //创建新tr

  var tr = document.createElement('tr');

  for (var i = 0; i < childNodesLenght; i++) {
    var td = document.createElement('td');
    tr.appendChild(td);
  } //插入集合中


  (0, _splice["default"])(domArray).call(domArray, _index + 1, 0, tr); //移除、新增节点事件

  removeAndInsertAction($dom, domArray);
  return dom_core_1["default"]($dom.parentNode);
}
/**
 * 处理新添加列
 * @param $node 整个table
 * @param _index 列的inde
 */


function ProcessingCol($node, _index) {
  //执行获取tbody节点
  var $dom = generateDomAction($node); //取出所有的行

  var domArray = (0, _slice["default"])(Array.prototype).apply($dom.childNodes);

  var _loop_1 = function _loop_1(i) {
    var _context;

    var cArray = []; //取出所有的列

    (0, _forEach["default"])(_context = domArray[i].childNodes).call(_context, function (item) {
      cArray.push(item);
    }); //移除行的旧的子节点

    while (domArray[i].childNodes.length !== 0) {
      domArray[i].removeChild(domArray[i].childNodes[0]);
    } //列分th td


    var td = dom_core_1["default"](cArray[0]).getNodeName() !== 'TH' ? document.createElement('td') : document.createElement('th'); // let td = document.createElement('td')

    (0, _splice["default"])(cArray).call(cArray, _index + 1, 0, td); //插入新的子节点

    for (var j = 0; j < cArray.length; j++) {
      domArray[i].appendChild(cArray[j]);
    }
  }; //创建td


  for (var i = 0; i < domArray.length; i++) {
    _loop_1(i);
  } //移除、新增节点事件


  removeAndInsertAction($dom, domArray);
  return dom_core_1["default"]($dom.parentNode);
}
/**
 * 处理删除行
 * @param $node  整个table
 * @param _index  行的inde
 */


function DeleteRow($node, _index) {
  //执行获取tbody节点
  var $dom = generateDomAction($node); //取出所有的行

  var domArray = (0, _slice["default"])(Array.prototype).apply($dom.childNodes); //删除行

  (0, _splice["default"])(domArray).call(domArray, _index, 1); //移除、新增节点事件

  removeAndInsertAction($dom, domArray);
  return dom_core_1["default"]($dom.parentNode);
}
/**
 * 处理删除列
 * @param $node
 * @param _index
 */


function DeleteCol($node, _index) {
  //执行获取tbody节点
  var $dom = generateDomAction($node); //取出所有的行

  var domArray = (0, _slice["default"])(Array.prototype).apply($dom.childNodes);

  var _loop_2 = function _loop_2(i) {
    var _context2;

    var cArray = []; //取出所有的列

    (0, _forEach["default"])(_context2 = domArray[i].childNodes).call(_context2, function (item) {
      cArray.push(item);
    }); //移除行的旧的子节点

    while (domArray[i].childNodes.length !== 0) {
      domArray[i].removeChild(domArray[i].childNodes[0]);
    }

    (0, _splice["default"])(cArray).call(cArray, _index, 1); //插入新的子节点

    for (var j = 0; j < cArray.length; j++) {
      domArray[i].appendChild(cArray[j]);
    }
  }; //创建td


  for (var i = 0; i < domArray.length; i++) {
    _loop_2(i);
  } //移除、新增节点事件


  removeAndInsertAction($dom, domArray);
  return dom_core_1["default"]($dom.parentNode);
}
/**
 * 处理设置/取消表头
 * @param $node
 * @param _index
 * @type 替换的列 th 还是td
 */


function setTheHeader($node, _index, type) {
  //执行获取tbody节点
  var $dom = generateDomAction($node); //取出所有的行

  var domArray = (0, _slice["default"])(Array.prototype).apply($dom.childNodes); //列的数量

  var childNodesLenght = domArray[_index].childNodes; //创建新tr

  var tr = document.createElement('tr');

  var _loop_3 = function _loop_3(i) {
    var _context3;

    //替换td为th
    var th = document.createElement(type);
    (0, _forEach["default"])(_context3 = childNodesLenght[i].childNodes).call(_context3, function (item) {
      th.appendChild(item);
    });
    tr.appendChild(th);
  };

  for (var i = 0; i < childNodesLenght.length; i++) {
    _loop_3(i);
  } //插入集合中


  (0, _splice["default"])(domArray).call(domArray, _index, 1, tr); //移除、新增节点事件

  removeAndInsertAction($dom, domArray);
  return dom_core_1["default"]($dom.parentNode);
}
/**
 * 封装移除、新增节点事件
 * @param $dom tbody节点
 * @param domArray  所有的行
 */


function removeAndInsertAction($dom, domArray) {
  //移除所有的旧的子节点
  while ($dom.childNodes.length !== 0) {
    $dom.removeChild($dom.childNodes[0]);
  } //插入新的子节点


  for (var i = 0; i < domArray.length; i++) {
    $dom.appendChild(domArray[i]);
  }
}
/**
 * 封装判断是否tbody节点
 * 粘贴的table 第一个节点是<colgroup> 最后的节点<tbody>
 * @param dom
 */


function generateDomAction($node) {
  var $dom = $node.elems[0].childNodes[0];

  if ($dom.nodeName === 'COLGROUP') {
    $dom = $node.elems[0].childNodes[$node.elems[0].childNodes.length - 1];
  }

  return $dom;
}

exports["default"] = {
  ProcessingRow: ProcessingRow,
  ProcessingCol: ProcessingCol,
  DeleteRow: DeleteRow,
  DeleteCol: DeleteCol,
  setTheHeader: setTheHeader
};

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 获取dom节点
 * @author lichunlin
 */

var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var getNode =
/** @class */
function () {
  function getNode(editor) {
    this.editor = editor;
  }
  /**
   * 获取焦点所在行
   * @param $node 当前table
   */


  getNode.prototype.getRowNode = function ($node) {
    var _a;

    var DOM = dom_core_1["default"]($node).elems[0];

    if (!DOM.parentNode) {
      return DOM;
    }

    DOM = (_a = dom_core_1["default"](DOM).parentUntil('TR', DOM)) === null || _a === void 0 ? void 0 : _a.elems[0];
    return DOM;
  };
  /**
   * 获取当前行的下标
   * @param $node 当前table
   * @param $dmo 当前行节点
   */


  getNode.prototype.getCurrentRowIndex = function ($node, $dom) {
    var _context;

    var _index = 0;
    var $nodeChild = $node.childNodes[0]; //粘贴的table 最后一个节点才是tbody

    if ($nodeChild.nodeName === 'COLGROUP') {
      $nodeChild = $node.childNodes[$node.childNodes.length - 1];
    }

    (0, _forEach["default"])(_context = $nodeChild.childNodes).call(_context, function (item, index) {
      item === $dom ? _index = index : '';
    });
    return _index;
  };
  /**
   * 获取当前列的下标
   * @param $node 当前点击元素
   */


  getNode.prototype.getCurrentColIndex = function ($node) {
    var _context2;

    var _a; //当前行


    var _index = 0; //获取当前列 td或th

    var rowDom = dom_core_1["default"]($node).getNodeName() === 'TD' || dom_core_1["default"]($node).getNodeName() === 'TH' ? $node : (_a = dom_core_1["default"]($node).parentUntil('TD', $node)) === null || _a === void 0 ? void 0 : _a.elems[0];
    var colDom = dom_core_1["default"](rowDom).parent();
    (0, _forEach["default"])(_context2 = colDom.elems[0].childNodes).call(_context2, function (item, index) {
      item === rowDom ? _index = index : '';
    });
    return _index;
  };
  /**
   * 返回元素html字符串
   * @param $node
   */


  getNode.prototype.getTableHtml = function ($node) {
    var htmlStr = "<table border=\"0\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">" + dom_core_1["default"]($node).html() + "</table>";
    return htmlStr;
  };

  return getNode;
}();

exports["default"] = getNode;

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 代码 菜单
 * @author lkw
 */

var _interopRequireDefault = __webpack_require__(0);

var _map = _interopRequireDefault(__webpack_require__(41));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.formatCodeHtml = void 0;

var PanelMenu_1 = __importDefault(__webpack_require__(31));

var dom_core_1 = __importDefault(__webpack_require__(2));

var util_1 = __webpack_require__(7);

var create_panel_conf_1 = __importDefault(__webpack_require__(364));

var is_active_1 = __importDefault(__webpack_require__(126));

var Panel_1 = __importDefault(__webpack_require__(27));

var index_1 = __importDefault(__webpack_require__(365));

function formatCodeHtml(editor, html) {
  if (!html) return html;
  html = deleteHighlightCode(html);
  html = formatEnterCode(html);
  html = util_1.replaceSpecialSymbol(html);
  return html; // 格式化换换所产生的code标签

  function formatEnterCode(html) {
    var preArr = html.match(/<pre[\s|\S]+?\/pre>/g);
    if (preArr === null) return html;
    (0, _map["default"])(preArr).call(preArr, function (item) {
      //将连续的code标签换为\n换行
      html = html.replace(item, item.replace(/<\/code><code>/g, '\n').replace(/<br>/g, ''));
    });
    return html;
  } // highlight格式化方法


  function deleteHighlightCode(html) {
    var _context;

    // 获取所有hljs文本
    var m = html.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm); // 没有代码渲染文本则退出
    // @ts-ignore

    if (!m || !m.length) return html; // 获取替换文本

    var r = (0, _map["default"])(_context = util_1.deepClone(m)).call(_context, function (i) {
      i = i.replace(/<span\sclass="hljs[^>]+>/, '');
      return i.replace(/<\/span>/, '');
    }); // @ts-ignore

    for (var i = 0; i < m.length; i++) {
      html = html.replace(m[i], r[i]);
    }

    return deleteHighlightCode(html);
  }
}

exports.formatCodeHtml = formatCodeHtml;

var Code =
/** @class */
function (_super) {
  __extends(Code, _super);

  function Code(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu"><i class="w-e-icon-terminal"></i></div>');
    _this = _super.call(this, $elem, editor) || this; // 绑定事件，如点击链接时，可以查看链接

    index_1["default"](editor);
    return _this;
  }
  /**
   * 插入行内代码
   * @param text
   * @return null
   */


  Code.prototype.insertLineCode = function (text) {
    var editor = this.editor; // 行内代码处理

    var $code = dom_core_1["default"]("<code>" + text + "</code>");
    editor.cmd["do"]('insertElem', $code);
    editor.selection.createRangeByElem($code, false);
    editor.selection.restoreSelection();
  };
  /**
   * 菜单点击事件
   */


  Code.prototype.clickHandler = function () {
    var editor = this.editor;
    var $codeElem;
    var selectionText = editor.selection.getSelectionText();

    if (this.isActive) {
      return;
    } else {
      // 菜单未被激活，说明选区不在链接里
      if (editor.selection.isSelectionEmpty()) {
        // 选区是空的，未选中内容
        this.createPanel('', '');
      } else {
        // 行内代码处理 选中了非代码内容
        this.insertLineCode(selectionText);
      }
    }
  };
  /**
   * 创建 panel
   * @param text 代码文本
   * @param languageType 代码类型
   */


  Code.prototype.createPanel = function (text, languageType) {
    var conf = create_panel_conf_1["default"](this.editor, text, languageType);
    var panel = new Panel_1["default"](this, conf);
    panel.create();
  };
  /**
   * 尝试修改菜单 active 状态
   */


  Code.prototype.tryChangeActive = function () {
    var editor = this.editor;

    if (is_active_1["default"](editor)) {
      this.active();
    } else {
      this.unActive();
    }
  };

  return Code;
}(PanelMenu_1["default"]);

exports["default"] = Code;

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description code 菜单 panel tab 配置
 * @author lkw
 */

var _interopRequireDefault = __webpack_require__(0);

var _map = _interopRequireDefault(__webpack_require__(41));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(7);

var dom_core_1 = __importDefault(__webpack_require__(2));

var is_active_1 = __importDefault(__webpack_require__(126));

function default_1(editor, text, languageType) {
  var _context;

  // panel 中需要用到的id
  var codeId = util_1.getRandom('code');
  var inputIFrameId = util_1.getRandom('input-iframe');
  var languageId = util_1.getRandom('select');
  var inputCodeId = util_1.getRandom('input-code');
  var inputTextId = util_1.getRandom('input-text');
  var btnOkId = util_1.getRandom('btn-ok');
  /**
   * 插入链接
   * @param text 文字
   * @param code 链接
   */

  function insertCode(text) {
    // 选区处于链接中，则选中整个菜单，再执行 insertHTML
    var active = is_active_1["default"](editor);

    if (active) {
      selectCodeElem();
    }

    editor.cmd["do"]('insertHTML', text);
    var $code = editor.selection.getSelectionStartElem();
    var $codeElem = $code === null || $code === void 0 ? void 0 : $code.getNodeTop(editor); // 通过dom操作添加换行标签
    // @ts-ignore

    dom_core_1["default"]('<p><br></p>').insertAfter($codeElem);
  }
  /**
   * 选中整个链接元素
   */


  function selectCodeElem() {
    if (!is_active_1["default"](editor)) return;
    var $selectedCode;
    var $code = editor.selection.getSelectionStartElem();
    var $codeElem = $code === null || $code === void 0 ? void 0 : $code.getNodeTop(editor);
    if (!$codeElem) return;
    editor.selection.createRangeByElem($codeElem);
    editor.selection.restoreSelection();
    $selectedCode = $codeElem; // 赋值给函数内全局变量
  }

  var t = function t(text) {
    return editor.i18next.t(text);
  }; // @ts-ignore


  var conf = {
    width: 500,
    height: 0,
    // panel 中可包含多个 tab
    tabs: [{
      // tab 的标题
      title: t('menus.panelMenus.code.插入代码'),
      // 模板
      tpl: "<div>\n                        <select name=\"\" id=\"" + languageId + "\">\n                            " + (0, _map["default"])(_context = editor.config.languageType).call(_context, function (language) {
        return '<option ' + (languageType == language ? 'selected' : '') + ' value ="' + language + '">' + language + '</option>';
      }) + "\n                        </select>\n                        <textarea id=\"" + inputIFrameId + "\" type=\"text\" class=\"wang-code-textarea\" placeholder=\"\" style=\"height: 160px\">" + text.replace(/&quot;/g, '"') + "</textarea>\n                        <div class=\"w-e-button-container\">\n                            <button id=\"" + btnOkId + "\" class=\"right\">" + (is_active_1["default"](editor) ? t('修改') : t('插入')) + "</button>\n                        </div>\n                    </div>",
      // 事件绑定
      events: [// 插入链接
      {
        selector: '#' + btnOkId,
        type: 'click',
        fn: function fn() {
          var formatCode, codeDom;
          var $code = document.getElementById(inputIFrameId);
          var $select = dom_core_1["default"]('#' + languageId);
          var languageType = $select.val(); // @ts-ignore

          var code = $code.value; // 高亮渲染

          if (editor.highlight) {
            formatCode = editor.highlight.highlightAuto(code).value;
          } else {
            formatCode = "<xmp>" + code + "</xmp>";
          } // 代码为空，则不插入


          if (!code) return; //增加标签

          if (is_active_1["default"](editor)) {
            return false;
          } else {
            //增加pre标签
            codeDom = "<pre type=\"" + languageType + "\"><code>" + formatCode + "</code></pre>"; // @ts-ignore

            insertCode(codeDom);
          } // 返回 true，表示该事件执行完之后，panel 要关闭。否则 panel 不会关闭


          return true;
        }
      }]
    }]
  };
  return conf;
}

exports["default"] = default_1;

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 绑定链接元素的事件，入口
 * @author lkw
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tooltip_event_1 = __importDefault(__webpack_require__(366));
/**
 * 绑定事件
 * @param editor 编辑器实例
 */


function bindEvent(editor) {
  // tooltip 事件
  tooltip_event_1["default"](editor);
}

exports["default"] = bindEvent;

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description tooltip 事件
 * @author lkw
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var Tooltip_1 = __importDefault(__webpack_require__(42));
/**
 * 生成 Tooltip 的显示隐藏函数
 */


function createShowHideFn(editor) {
  var tooltip;
  /**
   * 显示 tooltip
   * @param $code 链接元素
   */

  function showCodeTooltip($code) {
    var i18nPrefix = 'menus.panelMenus.code.';

    var t = function t(text, prefix) {
      if (prefix === void 0) {
        prefix = i18nPrefix;
      }

      return editor.i18next.t(prefix + text);
    };

    var conf = [{
      $elem: dom_core_1["default"]("<span>" + t('删除代码') + "</span>"),
      onClick: function onClick(editor, $code) {
        //dom操作删除
        $code.remove(); // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。

        return true;
      }
    }]; // 创建 tooltip

    tooltip = new Tooltip_1["default"](editor, $code, conf);
    tooltip.create();
  }
  /**
   * 隐藏 tooltip
   */


  function hideCodeTooltip() {
    // 移除 tooltip
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  }

  return {
    showCodeTooltip: showCodeTooltip,
    hideCodeTooltip: hideCodeTooltip
  };
}
/**
 * preEnterListener是为了统一浏览器 在pre标签内的enter行为而进行的监听
 * 目前并没有使用, 但是在未来处理与Firefox和ie的兼容性时需要用到 暂且放置
 * pre标签内的回车监听
 * @param e
 * @param editor
 */


function preEnterListener(e, editor) {
  // 获取当前标签元素
  var $selectionElem = editor.selection.getSelectionContainerElem(); // 获取当前节点最顶级标签元素

  var $topElem = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.getNodeTop(editor); // 获取顶级节点节点名

  var topNodeName = $topElem === null || $topElem === void 0 ? void 0 : $topElem.getNodeName(); // 非pre标签退出

  if (topNodeName !== 'PRE') return; // 取消默认行为

  e.preventDefault(); // 执行换行

  editor.cmd["do"]('insertHTML', '\n\r');
}
/**
 * 绑定 tooltip 事件
 * @param editor 编辑器实例
 */


function bindTooltipEvent(editor) {
  var _a = createShowHideFn(editor),
      showCodeTooltip = _a.showCodeTooltip,
      hideCodeTooltip = _a.hideCodeTooltip; // 点击代码元素时，显示 tooltip


  editor.txt.eventHooks.codeClickEvents.push(showCodeTooltip); // 点击其他地方，或者滚动时，隐藏 tooltip

  editor.txt.eventHooks.clickEvents.push(hideCodeTooltip);
  editor.txt.eventHooks.toolbarClickEvents.push(hideCodeTooltip);
  editor.txt.eventHooks.menuClickEvents.push(hideCodeTooltip);
  editor.txt.eventHooks.textScrollEvents.push(hideCodeTooltip);
}

exports["default"] = bindTooltipEvent;

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * @description 分割线
 * @author wangqiaoling
 */

var BtnMenu_1 = __importDefault(__webpack_require__(24));

var dom_core_1 = __importDefault(__webpack_require__(2));

var index_1 = __importDefault(__webpack_require__(368));

var splitLine =
/** @class */
function (_super) {
  __extends(splitLine, _super);

  function splitLine(editor) {
    var _this = this;

    var $elem = dom_core_1["default"]('<div class="w-e-menu"><i class="w-e-icon-split-line"></i></div>');
    _this = _super.call(this, $elem, editor) || this; // 绑定事件

    index_1["default"](editor);
    return _this;
  }
  /**
   * 菜单点击事件
   */


  splitLine.prototype.clickHandler = function () {
    var editor = this.editor;
    var range = editor.selection.getRange();
    var $selectionElem = editor.selection.getSelectionContainerElem();
    if (!$selectionElem) return;
    var $DomElement = dom_core_1["default"]($selectionElem.elems[0]);
    var $tableDOM = $DomElement.parentUntil('TABLE', $selectionElem.elems[0]);
    var $imgDOM = $DomElement.children(); // 禁止在代码块中添加分割线

    if ($DomElement.getNodeName() === 'CODE') return; // 禁止在表格中添加分割线

    if ($tableDOM && dom_core_1["default"]($tableDOM.elems[0]).getNodeName() === 'TABLE') return; // 禁止在图片处添加分割线

    if ($imgDOM && $imgDOM.length !== 0 && dom_core_1["default"]($imgDOM.elems[0]).getNodeName() === 'IMG' && !(range === null || range === void 0 ? void 0 : range.collapsed) // 处理光标在 img 后面的情况
    ) {
        return;
      }

    this.createSplitLine();
  };
  /**
   * 创建 splitLine
   */


  splitLine.prototype.createSplitLine = function () {
    var splitLineDOM = '<hr/>';
    this.editor.cmd["do"]('insertHTML', splitLineDOM);
  };
  /**
   * 尝试修改菜单激活状态
   */


  splitLine.prototype.tryChangeActive = function () {};

  return splitLine;
}(BtnMenu_1["default"]);

exports["default"] = splitLine;

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var tooltip_event_1 = __importDefault(__webpack_require__(369));
/**
 * 绑定事件
 * @param editor 编辑器实例
 */


function bindEvent(editor) {
  // 分割线的 tooltip 事件
  tooltip_event_1["default"](editor);
}

exports["default"] = bindEvent;

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * @description tooltip 事件
 * @author wangqiaoling
 */

var dom_core_1 = __importDefault(__webpack_require__(2));

var Tooltip_1 = __importDefault(__webpack_require__(42));
/**
 * 生成 Tooltip 的显示隐藏函数
 */


function createShowHideFn(editor) {
  var tooltip;
  /**
   * 显示分割线的 tooltip
   * @param $splitLine 分割线元素
   */

  function showSplitLineTooltip($splitLine) {
    // 定义 splitLine tooltip 配置
    var conf = [{
      $elem: dom_core_1["default"]("<span>" + editor.i18next.t('menus.panelMenus.删除') + "</span>"),
      onClick: function onClick(editor, $splitLine) {
        // 选中 分割线 元素
        editor.selection.createRangeByElem($splitLine);
        editor.selection.restoreSelection();
        editor.cmd["do"]('delete'); // 返回 true，表示执行完之后，隐藏 tooltip。否则不隐藏。

        return true;
      }
    }]; // 实例化 tooltip

    tooltip = new Tooltip_1["default"](editor, $splitLine, conf); // 创建 tooltip

    tooltip.create();
  }
  /**
   * 隐藏分割线的 tooltip
   */


  function hideSplitLineTooltip() {
    if (tooltip) {
      tooltip.remove();
      tooltip = null;
    }
  }

  return {
    showSplitLineTooltip: showSplitLineTooltip,
    hideSplitLineTooltip: hideSplitLineTooltip
  };
}

function bindTooltipEvent(editor) {
  var _a = createShowHideFn(editor),
      showSplitLineTooltip = _a.showSplitLineTooltip,
      hideSplitLineTooltip = _a.hideSplitLineTooltip; // 点击分割线时，显示 tooltip


  editor.txt.eventHooks.splitLineEvents.push(showSplitLineTooltip); // 点击其他地方（工具栏、滚动、keyup）时，隐藏 tooltip

  editor.txt.eventHooks.clickEvents.push(hideSplitLineTooltip);
  editor.txt.eventHooks.keyupEvents.push(hideSplitLineTooltip);
  editor.txt.eventHooks.toolbarClickEvents.push(hideSplitLineTooltip);
  editor.txt.eventHooks.menuClickEvents.push(hideSplitLineTooltip);
  editor.txt.eventHooks.textScrollEvents.push(hideSplitLineTooltip);
}

exports["default"] = bindTooltipEvent;

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 初始化编辑器 DOM 结构
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

var util_1 = __webpack_require__(7);

var styleSettings = {
  border: '1px solid #c9d8db',
  toolbarBgColor: '#FFF',
  toolbarBottomBorder: '1px solid #EEE'
};

function default_1(editor) {
  var toolbarSelector = editor.toolbarSelector;
  var $toolbarSelector = dom_core_1["default"](toolbarSelector);
  var textSelector = editor.textSelector;
  var config = editor.config;
  var height = config.height;
  var i18next = editor.i18next;
  var $toolbarElem;
  var $textContainerElem;
  var $textElem;
  var $children;

  if (textSelector == null) {
    // 只有 toolbarSelector ，即是容器的选择器或元素，toolbar 和 text 的元素自行创建
    $toolbarElem = dom_core_1["default"]('<div></div>');
    $textContainerElem = dom_core_1["default"]('<div></div>'); // 将编辑器区域原有的内容，暂存起来

    $children = $toolbarSelector.children(); // 添加到 DOM 结构中

    $toolbarSelector.append($toolbarElem).append($textContainerElem); // 自行创建的，需要配置默认的样式

    $toolbarElem.css('background-color', styleSettings.toolbarBgColor).css('border', styleSettings.border).css('border-bottom', styleSettings.toolbarBottomBorder);
    $textContainerElem.css('border', styleSettings.border).css('border-top', 'none').css('height', height + "px");
  } else {
    // toolbarSelector 和 textSelector 都有
    $toolbarElem = $toolbarSelector;
    $textContainerElem = dom_core_1["default"](textSelector); // 将编辑器区域原有的内容，暂存起来

    $children = $textContainerElem.children();
  } // 编辑区域


  $textElem = dom_core_1["default"]('<div></div>');
  $textElem.attr('contenteditable', 'true').css('width', '100%').css('height', '100%'); // 添加 placeholder

  var $placeholder = dom_core_1["default"]("<div>" + i18next.t(editor.config.placeholder) + "</div>");
  $placeholder.addClass('placeholder'); // 初始化编辑区域内容

  if ($children && $children.length) {
    $textElem.append($children); // 编辑器有默认值的时候隐藏placeholder

    $placeholder.hide();
  } else {
    $textElem.append(dom_core_1["default"]('<p><br></p>')); // 新增一行，方便继续编辑
  } // 编辑区域加入DOM


  $textContainerElem.append($textElem); // 添加placeholder

  $textContainerElem.append($placeholder); // 设置通用的 class

  $toolbarElem.addClass('w-e-toolbar').css('z-index', editor.zIndex.get('toolbar'));
  $textContainerElem.addClass('w-e-text-container');
  $textContainerElem.css('z-index', editor.zIndex.get());
  $textElem.addClass('w-e-text'); // 添加 ID

  var toolbarElemId = util_1.getRandom('toolbar-elem');
  $toolbarElem.attr('id', toolbarElemId);
  var textElemId = util_1.getRandom('text-elem');
  $textElem.attr('id', textElemId); // 判断编辑区与容器高度是否一致

  var textContainerCliheight = $textContainerElem.getClientHeight();
  var textElemClientHeight = $textElem.getClientHeight();

  if (textContainerCliheight !== textElemClientHeight) {
    $textElem.css('min-height', textContainerCliheight + 'px');
  } // 记录属性


  editor.$toolbarElem = $toolbarElem;
  editor.$textContainerElem = $textContainerElem;
  editor.$textElem = $textElem;
  editor.toolbarElemId = toolbarElemId;
  editor.textElemId = textElemId;
}

exports["default"] = default_1;

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 初始化编辑器选区，将光标定位到文档末尾
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));
/**
 * 初始化编辑器选区，将光标定位到文档末尾
 * @param editor 编辑器实例
 * @param newLine 是否新增一行
 */


function initSelection(editor, newLine) {
  var $textElem = editor.$textElem;
  var $children = $textElem.children();

  if (!$children || !$children.length) {
    // 如果编辑器区域无内容，添加一个空行，重新设置选区
    $textElem.append(dom_core_1["default"]('<p><br></p>'));
    initSelection(editor);
    return;
  }

  var $last = $children.last();

  if (newLine) {
    // 新增一个空行
    var html = $last.html().toLowerCase();
    var nodeName = $last.getNodeName();

    if (html !== '<br>' && html !== '<br/>' || nodeName !== 'P') {
      // 最后一个元素不是 <p><br></p>，添加一个空行，重新设置选区
      $textElem.append(dom_core_1["default"]('<p><br></p>'));
      initSelection(editor);
      return;
    }
  }

  if (editor.config.focus) {
    editor.selection.createRangeByElem($last, false, true);
    editor.selection.restoreSelection();
  }
}

exports["default"] = initSelection;

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 绑定编辑器事件 change blur focus
 * @author wangfupeng
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

function bindEvent(editor) {
  // 绑定 change 事件
  _bindChange(editor); // 绑定 focus blur 事件


  _bindFocusAndBlur(editor); // 绑定 input 输入


  _bindInput(editor);
}
/**
 * 绑定 change 事件
 * @param editor 编辑器实例
 */


function _bindChange(editor) {
  var onchange = editor.config.onchange;
  editor.txt.eventHooks.changeEvents.push(function () {
    var html = editor.txt.html() || '';
    onchange(html);
    editor.txt.togglePlaceholder();
  });
}
/**
 * 绑定 focus blur 事件
 * @param editor 编辑器实例
 */


function _bindFocusAndBlur(editor) {
  // 当前编辑器是否是焦点状态
  editor.isFocus = false;

  function listener(e) {
    var target = e.target;
    var $target = dom_core_1["default"](target);
    var $textElem = editor.$textElem;
    var $toolbarElem = editor.$toolbarElem; //判断当前点击元素是否在编辑器内

    var isChild = $textElem.isContain($target); //判断当前点击元素是否为工具栏

    var isToolbar = $toolbarElem.isContain($target);
    var isMenu = $toolbarElem.elems[0] == e.target ? true : false;

    if (!isChild) {
      // 若为选择工具栏中的功能，则不视为成 blur 操作
      if (isToolbar && !isMenu) {
        return;
      }

      if (editor.isFocus) {
        _blurHandler(editor);
      }

      editor.isFocus = false;
    } else {
      if (!editor.isFocus) {
        _focusHandler(editor);
      }

      editor.isFocus = true;
    }
  }

  dom_core_1["default"](document).on('click', listener); // 全局事件在编辑器实例销毁的时候进行解绑

  editor.beforeDestroy(function () {
    dom_core_1["default"](document).off('click', listener);
  });
}
/**
 * 绑定 input 事件
 * @param editor 编辑器实例
 */


function _bindInput(editor) {
  // 绑定中文输入
  editor.$textElem.on('compositionstart', function () {
    editor.isComposing = true;
  }).on('compositionend', function () {
    editor.isComposing = false;
  });
}
/**
 * blur 事件
 * @param editor 编辑器实例
 */


function _blurHandler(editor) {
  var config = editor.config;
  var onblur = config.onblur;
  var currentHtml = editor.txt.html() || '';
  onblur(currentHtml);
}
/**
 * focus 事件
 * @param editor 编辑器实例
 */


function _focusHandler(editor) {
  var config = editor.config;
  var onfocus = config.onfocus;
  var currentHtml = editor.txt.html() || '';
  onfocus(currentHtml);
}

exports["default"] = bindEvent;

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 国际化 初始化
 * @author tonghan
 * i18next 是使用 JavaScript 编写的国际化框架
 * i18next 提供了标准的i18n功能，例如（复数，上下文，插值，格式）等
 * i18next 文档地址： https://www.i18next.com/overview/getting-started
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

function i18nextInit(editor) {
  var _a = editor.config,
      lang = _a.lang,
      languages = _a.languages;

  if (editor.i18next != null) {
    try {
      editor.i18next.init({
        ns: 'wangEditor',
        lng: lang,
        defaultNS: 'wangEditor',
        resources: languages
      });
    } catch (error) {
      throw new Error('i18next:' + error);
    }

    return;
  } // 没有引入 i18next 的替代品


  editor.i18next = {
    t: function t(str) {
      var strArr = str.split('.');
      return strArr[strArr.length - 1];
    }
  };
}

exports["default"] = i18nextInit;

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 全屏功能
 * @author xiaokyo
 */

var _interopRequireDefault = __webpack_require__(0);

var _find = _interopRequireDefault(__webpack_require__(54));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.setUnFullScreen = exports.setFullScreen = void 0;

var dom_core_1 = __importDefault(__webpack_require__(2));

__webpack_require__(375);

var iconFullScreenText = 'w-e-icon-fullscreen'; // 全屏icon class

var iconExitFullScreenText = 'w-e-icon-fullscreen_exit'; // 退出全屏icon class

var classfullScreenEditor = 'w-e-full-screen-editor'; // 全屏添加至编辑器的class

/**
 * 设置全屏
 * @param editor 编辑器实例
 */

exports.setFullScreen = function (editor) {
  var $editorParent = dom_core_1["default"](editor.toolbarSelector);
  var $textContainerElem = editor.$textContainerElem;
  var $toolbarElem = editor.$toolbarElem;
  var $iconElem = (0, _find["default"])($toolbarElem).call($toolbarElem, "i." + iconFullScreenText);
  var config = editor.config;
  $iconElem.removeClass(iconFullScreenText);
  $iconElem.addClass(iconExitFullScreenText);
  $editorParent.addClass(classfullScreenEditor);
  $editorParent.css('z-index', config.zIndexFullScreen);
  $textContainerElem.css('height', '100%');
};
/**
 * 取消全屏
 * @param editor 编辑器实例
 */


exports.setUnFullScreen = function (editor) {
  var $editorParent = dom_core_1["default"](editor.toolbarSelector);
  var $textContainerElem = editor.$textContainerElem;
  var $toolbarElem = editor.$toolbarElem;
  var $iconElem = (0, _find["default"])($toolbarElem).call($toolbarElem, "i." + iconExitFullScreenText);
  var config = editor.config;
  $iconElem.removeClass(iconExitFullScreenText);
  $iconElem.addClass(iconFullScreenText);
  $editorParent.removeClass(classfullScreenEditor);
  $editorParent.css('z-index', 'auto');
  $textContainerElem.css('height', config.height + 'px');
};
/**
 * 初始化全屏功能
 * @param editor 编辑器实例
 */


var initFullScreen = function initFullScreen(editor) {
  // 当textSelector有值的时候，也就是编辑器是工具栏和编辑区域分离的情况， 则不生成全屏功能按钮
  if (editor.textSelector) return;
  if (!editor.config.showFullScreen) return;
  var $toolbarElem = editor.$toolbarElem;
  var $elem = dom_core_1["default"]("<div class=\"w-e-menu\">\n            <i class=\"" + iconFullScreenText + "\"></i>\n        </div>");
  $elem.on('click', function (e) {
    var _context;

    var $elemIcon = (0, _find["default"])(_context = dom_core_1["default"](e.currentTarget)).call(_context, 'i');

    if ($elemIcon.hasClass(iconFullScreenText)) {
      exports.setFullScreen(editor);
    } else {
      exports.setUnFullScreen(editor);
    }
  });
  $toolbarElem.append($elem);
};

exports["default"] = initFullScreen;

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(19);
            var content = __webpack_require__(376);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(20);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-full-screen-editor {\n  position: fixed;\n  width: 100%!important;\n  height: 100%!important;\n  left: 0;\n  top: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var style_1 = __importDefault(__webpack_require__(120));

var ZIndex =
/** @class */
function () {
  function ZIndex() {
    // 层级参数
    this.tier = {
      menu: 2,
      panel: 2,
      toolbar: 1,
      tooltip: 1,
      textContainer: 1
    }; // 默认值

    this.baseZIndex = style_1["default"].zIndex;
  } // 获取 tierName 对应的 z-index 的值。如果 tierName 未定义则返回默认的 z-index 值


  ZIndex.prototype.get = function (tierName) {
    if (tierName && this.tier[tierName]) {
      return this.baseZIndex + this.tier[tierName];
    }

    return this.baseZIndex;
  }; // 初始化


  ZIndex.prototype.init = function (editor) {
    if (this.baseZIndex == style_1["default"].zIndex) {
      this.baseZIndex = editor.config.zIndex;
    }
  };

  return ZIndex;
}();

exports["default"] = ZIndex;

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 编辑器 change 事件
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _filter = _interopRequireDefault(__webpack_require__(86));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var mutation_1 = __importDefault(__webpack_require__(379));

var util_1 = __webpack_require__(7);

var const_1 = __webpack_require__(30);
/**
 * 剔除编辑区容器的 attribute 变化中的非 contenteditable 变化
 * @param mutations MutationRecord[]
 * @param tar 编辑区容器的 DOM 节点
 */


function mutationsFilter(mutations, tar) {
  // 剔除编辑区容器的 attribute 变化中的非 contenteditable 变化
  return (0, _filter["default"])(mutations).call(mutations, function (_a) {
    var type = _a.type,
        target = _a.target,
        attributeName = _a.attributeName;
    return type != 'attributes' || type == 'attributes' && (attributeName == 'contenteditable' || target != tar);
  });
}
/**
 * Change 实现
 */


var Change =
/** @class */
function (_super) {
  __extends(Change, _super);

  function Change(editor) {
    var _this = _super.call(this, function (mutations, observer) {
      var _a; // 数据过滤


      mutations = mutationsFilter(mutations, observer.target); // 存储数据

      (_a = _this.data).push.apply(_a, mutations); // 标准模式下


      if (!editor.isCompatibleMode) {
        // 在非中文输入状态下时才保存数据
        if (!editor.isComposing) {
          return _this.asyncSave();
        }
      } // 兼容模式下
      else {
          _this.asyncSave();
        }
    }) || this;

    _this.editor = editor;
    /**
     * 变化的数据集合
     */

    _this.data = [];
    /**
     * 异步保存数据
     */

    _this.asyncSave = const_1.EMPTY_FN;
    return _this;
  }
  /**
   * 保存变化的数据并发布 change event
   */


  Change.prototype.save = function () {
    // 有数据
    if (this.data.length) {
      // 保存变化数据
      this.editor.history.save(this.data); // 清除缓存

      this.data.length = 0;
      this.emit();
    }
  };
  /**
   * 发布 change event
   */


  Change.prototype.emit = function () {
    var _context;

    // 执行 onchange 回调
    (0, _forEach["default"])(_context = this.editor.txt.eventHooks.changeEvents).call(_context, function (fn) {
      return fn();
    });
  }; // 重写 observe


  Change.prototype.observe = function () {
    var _this = this;

    _super.prototype.observe.call(this, this.editor.$textElem.elems[0]);

    var timeout = this.editor.config.onchangeTimeout;
    this.asyncSave = util_1.debounce(function () {
      _this.save();
    }, timeout);

    if (!this.editor.isCompatibleMode) {
      this.editor.$textElem.on('compositionend', function () {
        _this.asyncSave();
      });
    }
  };

  return Change;
}(mutation_1["default"]);

exports["default"] = Change;

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 封装 MutationObserver
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
/**
 * 封装 MutationObserver，抽离成公共类
 */

var Mutation =
/** @class */
function () {
  /**
   * 构造器
   * @param fn 发生变化时执行的回调函数
   * @param options 自定义配置项
   */
  function Mutation(fn, options) {
    var _this = this;
    /**
     * 默认的 MutationObserverInit 配置
     */


    this.options = {
      subtree: true,
      childList: true,
      attributes: true,
      attributeOldValue: true,
      characterData: true,
      characterDataOldValue: true
    };

    this.callback = function (mutations) {
      fn(mutations, _this);
    };

    this.observer = new MutationObserver(this.callback);
    options && (this.options = options);
  }

  (0, _defineProperty["default"])(Mutation.prototype, "target", {
    get: function get() {
      return this.node;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * 绑定监听节点（初次绑定有效）
   * @param node 需要被监听的节点
   */

  Mutation.prototype.observe = function (node) {
    if (!(this.node instanceof Node)) {
      this.node = node;
      this.connect();
    }
  };
  /**
   * 连接监听器（开始观察）
   */


  Mutation.prototype.connect = function () {
    if (this.node) {
      this.observer.observe(this.node, this.options);
      return this;
    }

    throw new Error('还未初始化绑定，请您先绑定有效的 Node 节点');
  };
  /**
   * 断开监听器（停止观察）
   */


  Mutation.prototype.disconnect = function () {
    var list = this.observer.takeRecords();
    list.length && this.callback(list);
    this.observer.disconnect();
  };

  return Mutation;
}();

exports["default"] = Mutation;

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 历史记录
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var content_1 = __importDefault(__webpack_require__(381));

var scroll_1 = __importDefault(__webpack_require__(393));

var range_1 = __importDefault(__webpack_require__(394));
/**
 * 历史记录（撤销、恢复）
 */


var History =
/** @class */
function () {
  function History(editor) {
    this.editor = editor;
    this.content = new content_1["default"](editor);
    this.scroll = new scroll_1["default"](editor);
    this.range = new range_1["default"](editor);
  }

  (0, _defineProperty["default"])(History.prototype, "size", {
    /**
     *  获取缓存中的数据长度。格式为：[正常的数据的条数，被撤销的数据的条数]
     */
    get: function get() {
      return this.scroll.size;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * 初始化绑定。在 editor.create() 结尾时调用
   */

  History.prototype.observe = function () {
    this.content.observe();
    this.scroll.observe(); // 标准模式下才进行初始化绑定

    !this.editor.isCompatibleMode && this.range.observe();
  };
  /**
   * 保存数据
   */


  History.prototype.save = function (mutations) {
    if (mutations.length) {
      this.content.save(mutations);
      this.scroll.save(); // 标准模式下才进行缓存

      !this.editor.isCompatibleMode && this.range.save();
    }
  };
  /**
   * 撤销
   */


  History.prototype.revoke = function () {
    this.editor.change.disconnect();
    var res = this.content.revoke();

    if (res) {
      this.scroll.revoke(); // 标准模式下才执行

      if (!this.editor.isCompatibleMode) {
        this.range.revoke();
        this.editor.$textElem.focus();
      }
    }

    this.editor.change.connect(); // 如果用户在 onchange 中修改了内容（DOM），那么缓存中的节点数据可能不连贯了，不连贯的数据必将导致恢复失败，所以必须将用户的 onchange 处于监控状态中

    res && this.editor.change.emit();
  };
  /**
   * 恢复
   */


  History.prototype.restore = function () {
    this.editor.change.disconnect();
    var res = this.content.restore();

    if (res) {
      this.scroll.restore(); // 标准模式下才执行

      if (!this.editor.isCompatibleMode) {
        this.range.restore();
        this.editor.$textElem.focus();
      }
    }

    this.editor.change.connect(); // 与 revoke 同理

    res && this.editor.change.emit();
  };

  return History;
}();

exports["default"] = History;

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 整合差异备份和内容备份，进行统一管理
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var node_1 = __importDefault(__webpack_require__(382));

var html_1 = __importDefault(__webpack_require__(391));

var ContentCache =
/** @class */
function () {
  function ContentCache(editor) {
    this.editor = editor;
  }
  /**
   * 初始化绑定
   */


  ContentCache.prototype.observe = function () {
    if (this.editor.isCompatibleMode) {
      // 兼容模式（内容备份）
      this.cache = new html_1["default"](this.editor);
    } else {
      // 标准模式（差异备份/节点备份）
      this.cache = new node_1["default"](this.editor);
    }

    this.cache.observe();
  };
  /**
   * 保存
   */


  ContentCache.prototype.save = function (mutations) {
    if (this.editor.isCompatibleMode) {
      ;
      this.cache.save();
    } else {
      ;
      this.cache.compile(mutations);
    }
  };
  /**
   * 撤销
   */


  ContentCache.prototype.revoke = function () {
    var _a;

    return (_a = this.cache) === null || _a === void 0 ? void 0 : _a.revoke();
  };
  /**
   * 恢复
   */


  ContentCache.prototype.restore = function () {
    var _a;

    return (_a = this.cache) === null || _a === void 0 ? void 0 : _a.restore();
  };

  return ContentCache;
}();

exports["default"] = ContentCache;

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 差异备份
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var cache_1 = __importDefault(__webpack_require__(94));

var compile_1 = __importDefault(__webpack_require__(384));

var decompilation_1 = __webpack_require__(385);

var NodeCache =
/** @class */
function (_super) {
  __extends(NodeCache, _super);

  function NodeCache(editor) {
    var _this = _super.call(this, editor.config.historyMaxSize) || this;

    _this.editor = editor;
    return _this;
  }

  NodeCache.prototype.observe = function () {
    this.resetMaxSize(this.editor.config.historyMaxSize);
  };
  /**
   * 编译并保存数据
   */


  NodeCache.prototype.compile = function (data) {
    this.save(compile_1["default"](data));
    return this;
  };
  /**
   * 撤销
   */


  NodeCache.prototype.revoke = function () {
    return _super.prototype.revoke.call(this, function (data) {
      decompilation_1.revoke(data);
    });
  };
  /**
   * 恢复
   */


  NodeCache.prototype.restore = function () {
    return _super.prototype.restore.call(this, function (data) {
      decompilation_1.restore(data);
    });
  };

  return NodeCache;
}(cache_1["default"]);

exports["default"] = NodeCache;

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 数据结构 - 栈
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.CeilStack = void 0;
/**
 * 栈（限制最大数据条数，栈满后可以继续入栈，而先入栈的数据将失效）
 */
// 取名灵感来自 Math.ceil，向上取有效值

var CeilStack =
/** @class */
function () {
  function CeilStack(max) {
    if (max === void 0) {
      max = 0;
    }
    /**
     * 数据缓存
     */


    this.data = [];
    /**
     * 栈的最大长度。为零则长度不限
     */

    this.max = 0;
    /**
     * 标识是否重设过 max 值
     */

    this.reset = false;
    max = Math.abs(max);
    max && (this.max = max);
  }
  /**
   * 允许用户重设一次 max 值
   */


  CeilStack.prototype.resetMax = function (maxSize) {
    maxSize = Math.abs(maxSize);

    if (!this.reset && !isNaN(maxSize)) {
      this.max = maxSize;
      this.reset = true;
    }
  };

  (0, _defineProperty["default"])(CeilStack.prototype, "size", {
    /**
     * 当前栈中的数据条数
     */
    get: function get() {
      return this.data.length;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * 入栈
   * @param data 入栈的数据
   */

  CeilStack.prototype.instack = function (data) {
    this.data.unshift(data);

    if (this.max && this.size > this.max) {
      this.data.length = this.max;
    }

    return this;
  };
  /**
   * 出栈
   */


  CeilStack.prototype.outstack = function () {
    return this.data.shift();
  };
  /**
   * 清空栈
   */


  CeilStack.prototype.clear = function () {
    this.data.length = 0;
    return this;
  };

  return CeilStack;
}();

exports.CeilStack = CeilStack;

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 数据整理
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _indexOf = _interopRequireDefault(__webpack_require__(52));

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(7);
/**
 * 数据类型
 */


function compileType(data) {
  switch (data) {
    case 'childList':
      return 'node';

    case 'attributes':
      return 'attr';

    default:
      return 'text';
  }
}
/**
 * 获取当前的文本内容
 */


function compileValue(data) {
  switch (data.type) {
    case 'attributes':
      return data.target.getAttribute(data.attributeName) || '';

    case 'characterData':
      return data.target.textContent;

    default:
      return '';
  }
}
/**
 * addedNodes/removedNodes
 */


function complieNodes(data) {
  var temp = {};

  if (data.addedNodes.length) {
    temp.add = util_1.toArray(data.addedNodes);
  }

  if (data.removedNodes.length) {
    temp.remove = util_1.toArray(data.removedNodes);
  }

  return temp;
}
/**
 * addedNodes/removedNodes 的相对位置
 */


function compliePosition(data) {
  var temp;

  if (data.previousSibling) {
    temp = {
      type: 'before',
      target: data.previousSibling
    };
  } else if (data.nextSibling) {
    temp = {
      type: 'after',
      target: data.nextSibling
    };
  } else {
    temp = {
      type: 'parent',
      target: data.target
    };
  }

  return temp;
}
/**
 * 补全 Firefox 数据的特殊标签
 */


var tag = ['UL', 'OL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
/**
 * 将 MutationRecord 转换成自定义格式的数据
 */

function compile(data) {
  var temp = []; // 以下两个变量是兼容 Firefox 时使用到的
  // 前一次操作为删除元素节点

  var removeNode = false; // 连续的节点删除记录

  var removeCache = [];
  (0, _forEach["default"])(data).call(data, function (record, index) {
    var item = {
      type: compileType(record.type),
      target: record.target,
      attr: record.attributeName || '',
      value: compileValue(record) || '',
      oldValue: record.oldValue || '',
      nodes: complieNodes(record),
      position: compliePosition(record)
    };
    temp.push(item); // 兼容 Firefox，补全数据（这几十行代码写得吐血，跟 IE 有得一拼）

    if (!util_1.UA.isFirefox) {
      return;
    } // 正常的数据：缩进、行高、超链接、对齐方式、引用、插入表情、插入图片、分割线、表格、插入代码
    // 普通的数据补全：标题（纯文本内容）、加粗、斜体、删除线、下划线、颜色、背景色、字体、字号、列表（纯文本内容）
    // 特殊的数据补全：标题（包含 HTMLElement）、列表（包含 HTMLElement 或 ul -> ol 或 ol -> ul 或 Enter）


    if (removeNode && record.addedNodes.length && record.addedNodes[0].nodeType == 1) {
      // 需要被全数据的目标节点
      var replenishNode = record.addedNodes[0];
      var replenishData = {
        type: 'node',
        target: replenishNode,
        attr: '',
        value: '',
        oldValue: '',
        nodes: {
          add: [removeNode]
        },
        position: {
          type: 'parent',
          target: replenishNode
        }
      }; // 特殊的标签：['UL', 'OL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6']

      if ((0, _indexOf["default"])(tag).call(tag, replenishNode.nodeName) != -1) {
        replenishData.nodes.add = util_1.toArray(replenishNode.childNodes);
        temp.push(replenishData);
      } // 上一个删除元素是文本节点
      else if (removeNode.nodeType == 3) {
          if (contains(replenishNode, removeCache)) {
            replenishData.nodes.add = util_1.toArray(replenishNode.childNodes);
          }

          temp.push(replenishData);
        } // 上一个删除元素是 Element && 由近到远的删除元素至少有一个是需要补全数据节点的子节点
        else if ((0, _indexOf["default"])(tag).call(tag, record.target.nodeName) == -1 && contains(replenishNode, removeCache)) {
            replenishData.nodes.add = util_1.toArray(replenishNode.childNodes);
            temp.push(replenishData);
          }
    } // 记录本次的节点信息


    if (item.type == 'node' && record.removedNodes.length == 1) {
      removeNode = record.removedNodes[0];
      removeCache.push(removeNode);
    } else {
      removeNode = false;
      removeCache.length = 0;
    }
  });
  return temp;
}

exports["default"] = compile; // 删除元素的历史记录中包含有多少个目标节点的子元素

function contains(tar, childs) {
  var count = 0;

  for (var i = childs.length - 1; i > 0; i--) {
    if (tar.contains(childs[i])) {
      count++;
    } else {
      break;
    }
  }

  return count;
}

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _entries = _interopRequireDefault(__webpack_require__(386));

var _forEach = _interopRequireDefault(__webpack_require__(6));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.restore = exports.revoke = void 0;
/**
 * 将节点添加到 DOM 树中
 * @param data 数据项
 * @param list 节点集合（addedNodes 或 removedNodes）
 */

function insertNode(data, list) {
  var reference = data.position.target;

  switch (data.position.type) {
    // reference 在这些节点的前面
    case 'before':
      if (reference.nextSibling) {
        reference = reference.nextSibling;
        (0, _forEach["default"])(list).call(list, function (item) {
          data.target.insertBefore(item, reference);
        });
      } else {
        (0, _forEach["default"])(list).call(list, function (item) {
          data.target.appendChild(item);
        });
      }

      break;
    // reference 在这些节点的后面

    case 'after':
      (0, _forEach["default"])(list).call(list, function (item) {
        data.target.insertBefore(item, reference);
      });
      break;
    // parent
    // reference 是这些节点的父节点

    default:
      (0, _forEach["default"])(list).call(list, function (item) {
        reference.appendChild(item);
      });
      break;
  }
}
/* ------------------------------------------------------------------ 撤销逻辑 ------------------------------------------------------------------ */


function revokeNode(data) {
  for (var _i = 0, _a = (0, _entries["default"])(data.nodes); _i < _a.length; _i++) {
    var _b = _a[_i],
        relative = _b[0],
        list = _b[1];

    switch (relative) {
      // 反向操作，将这些节点从 DOM 中移除
      case 'add':
        (0, _forEach["default"])(list).call(list, function (item) {
          data.target.removeChild(item);
        });
        break;
      // remove（反向操作，将这些节点添加到 DOM 中）

      default:
        {
          insertNode(data, list);
          break;
        }
    }
  }
}
/**
 * 撤销 attribute
 */


function revokeAttr(data) {
  var target = data.target;

  if (data.oldValue == null) {
    target.removeAttribute(data.attr);
  } else {
    target.setAttribute(data.attr, data.oldValue);
  }
}
/**
 * 撤销文本内容
 */


function revokeText(data) {
  data.target.textContent = data.oldValue;
}

var revokeFns = {
  node: revokeNode,
  text: revokeText,
  attr: revokeAttr
}; // 撤销 - 对外暴露的接口

function revoke(data) {
  for (var i = data.length - 1; i > -1; i--) {
    var item = data[i];
    revokeFns[item.type](item);
  }
}

exports.revoke = revoke;
/* ------------------------------------------------------------------ 恢复逻辑 ------------------------------------------------------------------ */

function restoreNode(data) {
  for (var _i = 0, _a = (0, _entries["default"])(data.nodes); _i < _a.length; _i++) {
    var _b = _a[_i],
        relative = _b[0],
        list = _b[1];

    switch (relative) {
      case 'add':
        {
          insertNode(data, list);
          break;
        }
      // remove

      default:
        {
          (0, _forEach["default"])(list).call(list, function (item) {
            ;
            item.parentNode.removeChild(item);
          });
          break;
        }
    }
  }
}

function restoreText(data) {
  data.target.textContent = data.value;
}

function restoreAttr(data) {
  ;
  data.target.setAttribute(data.attr, data.value);
}

var restoreFns = {
  node: restoreNode,
  text: restoreText,
  attr: restoreAttr
}; // 恢复 - 对外暴露的接口

function restore(data) {
  for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var item = data_1[_i];
    restoreFns[item.type](item);
  }
}

exports.restore = restore;

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(388);

module.exports = parent;


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(389);
var path = __webpack_require__(11);

module.exports = path.Object.entries;


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(4);
var $entries = __webpack_require__(390).entries;

// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var objectKeys = __webpack_require__(57);
var toIndexedObject = __webpack_require__(25);
var propertyIsEnumerable = __webpack_require__(55).f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var chain_1 = __webpack_require__(392);

var HtmlCache =
/** @class */
function () {
  function HtmlCache(editor) {
    this.editor = editor;
    this.data = new chain_1.TailChain();
  }
  /**
   * 初始化绑定
   */


  HtmlCache.prototype.observe = function () {
    this.data.resetMax(this.editor.config.historyMaxSize); // 保存初始化值

    this.data.insertLast(this.editor.$textElem.html());
  };
  /**
   * 保存
   */


  HtmlCache.prototype.save = function () {
    this.data.insertLast(this.editor.$textElem.html());
    return this;
  };
  /**
   * 撤销
   */


  HtmlCache.prototype.revoke = function () {
    var data = this.data.prev();

    if (data) {
      this.editor.$textElem.html(data);
      return true;
    }

    return false;
  };
  /**
   * 恢复
   */


  HtmlCache.prototype.restore = function () {
    var data = this.data.next();

    if (data) {
      this.editor.$textElem.html(data);
      return true;
    }

    return false;
  };

  return HtmlCache;
}();

exports["default"] = HtmlCache;

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 数据结构 - 链表
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _splice = _interopRequireDefault(__webpack_require__(87));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});
exports.TailChain = void 0;
/**
 * 特殊链表（数据尾插入、插入前自动清理指针后边的数据、插入后指针永远定位于最后一位元素、可限制链表长度、指针双向移动）
 */

var TailChain =
/** @class */
function () {
  function TailChain() {
    /**
     * 链表数据
     */
    this.data = [];
    /**
     * 链表最大长度，零表示长度不限
     */

    this.max = 0;
    /**
     * 指针
     */

    this.point = 0; // 当前指针是否人为操作过

    this.isRe = false;
  }
  /**
   * 允许用户重设一次 max 值
   */


  TailChain.prototype.resetMax = function (maxSize) {
    maxSize = Math.abs(maxSize);
    maxSize && (this.max = maxSize);
  };

  (0, _defineProperty["default"])(TailChain.prototype, "size", {
    /**
     * 当前链表的长度
     */
    get: function get() {
      return this.data.length;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * 尾插入
   * @param data 插入的数据
   */

  TailChain.prototype.insertLast = function (data) {
    // 人为操作过指针，清除指针后面的元素
    if (this.isRe) {
      var _context;

      (0, _splice["default"])(_context = this.data).call(_context, this.point + 1);
      this.isRe = false;
    }

    this.data.push(data); // 超出链表最大长度

    while (this.max && this.size > this.max) {
      this.data.shift();
    } // 从新定位指针到最后一个元素


    this.point = this.size - 1;
    return this;
  };
  /**
   * 获取当前指针元素
   */


  TailChain.prototype.current = function () {
    return this.data[this.point];
  };
  /**
   * 获取上一指针元素
   */


  TailChain.prototype.prev = function () {
    !this.isRe && (this.isRe = true);
    this.point--;

    if (this.point < 0) {
      this.point = 0;
      return undefined;
    }

    return this.current();
  };
  /**
   * 下一指针元素
   */


  TailChain.prototype.next = function () {
    !this.isRe && (this.isRe = true);
    this.point++;

    if (this.point >= this.size) {
      this.point = this.size - 1;
      return undefined;
    }

    return this.current();
  };

  return TailChain;
}();

exports.TailChain = TailChain;

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 记录 scrollTop
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var cache_1 = __importDefault(__webpack_require__(94));

var ScrollCache =
/** @class */
function (_super) {
  __extends(ScrollCache, _super);

  function ScrollCache(editor) {
    var _this = _super.call(this, editor.config.historyMaxSize) || this;

    _this.editor = editor;
    /**
     * 上一次的 scrollTop
     */

    _this.last = 0;
    _this.target = editor.$textElem.elems[0];
    return _this;
  }
  /**
   * 给编辑区容器绑定 scroll 事件
   */


  ScrollCache.prototype.observe = function () {
    var _this = this;

    this.target = this.editor.$textElem.elems[0];
    this.editor.$textElem.on('scroll', function () {
      _this.last = _this.target.scrollTop;
    });
    this.resetMaxSize(this.editor.config.historyMaxSize);
  };
  /**
   * 保存 scrollTop 值
   */


  ScrollCache.prototype.save = function () {
    _super.prototype.save.call(this, [this.last, this.target.scrollTop]);

    return this;
  };
  /**
   * 撤销
   */


  ScrollCache.prototype.revoke = function () {
    var _this = this;

    return _super.prototype.revoke.call(this, function (data) {
      _this.target.scrollTop = data[0];
    });
  };
  /**
   * 恢复
   */


  ScrollCache.prototype.restore = function () {
    var _this = this;

    return _super.prototype.restore.call(this, function (data) {
      _this.target.scrollTop = data[1];
    });
  };

  return ScrollCache;
}(cache_1["default"]);

exports["default"] = ScrollCache;

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @description 记录 range 变化
 * @author fangzhicong
 */

var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _create = _interopRequireDefault(__webpack_require__(3));

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(5));

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = _setPrototypeOf["default"] || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? (0, _create["default"])(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var cache_1 = __importDefault(__webpack_require__(94));

var dom_core_1 = __importDefault(__webpack_require__(2));

var util_1 = __webpack_require__(7);
/**
 * 把 Range 对象转换成缓存对象
 * @param range Range 对象
 */


function rangeToObject(range) {
  return {
    start: [range.startContainer, range.startOffset],
    end: [range.endContainer, range.endOffset],
    root: range.commonAncestorContainer,
    collapsed: range.collapsed
  };
}
/**
 * 编辑区 range 缓存管理器
 */


var RangeCache =
/** @class */
function (_super) {
  __extends(RangeCache, _super);

  function RangeCache(editor) {
    var _this = _super.call(this, editor.config.historyMaxSize) || this;

    _this.editor = editor;
    _this.lastRange = rangeToObject(document.createRange());
    _this.root = editor.$textElem.elems[0];
    _this.updateLastRange = util_1.debounce(function () {
      _this.lastRange = rangeToObject(_this.rangeHandle);
    }, editor.config.onchangeTimeout);
    return _this;
  }

  (0, _defineProperty["default"])(RangeCache.prototype, "rangeHandle", {
    /**
     * 获取 Range 对象
     */
    get: function get() {
      var selection = document.getSelection();
      return selection && selection.rangeCount ? selection.getRangeAt(0) : document.createRange();
    },
    enumerable: false,
    configurable: true
  });
  /**
   * 初始化绑定
   */

  RangeCache.prototype.observe = function () {
    var self = this; // 同步节点数据

    this.root = this.editor.$textElem.elems[0];
    this.resetMaxSize(this.editor.config.historyMaxSize); // selection change 回调函数

    function selectionchange() {
      var handle = self.rangeHandle;

      if (self.root === handle.commonAncestorContainer || self.root.contains(handle.commonAncestorContainer)) {
        // 非中文输入状态下才进行记录
        if (!self.editor.isComposing) {
          self.updateLastRange();
        }
      }
    } // backspace 和 delete 手动更新 Range 缓存


    function deletecallback(e) {
      if (e.key == 'Backspace' || e.key == 'Delete') {
        // self.lastRange = rangeToObject(self.rangeHandle)
        self.updateLastRange();
      }
    } // 绑定事件（必须绑定在 document 上，不能绑定在 window 上）


    dom_core_1["default"](document).on('selectionchange', selectionchange); // 解除事件绑定

    this.editor.beforeDestroy(function () {
      dom_core_1["default"](document).off('selectionchange', selectionchange);
    }); // 删除文本时手动更新 range

    self.editor.$textElem.on('keydown', deletecallback);
  };
  /**
   * 保存 Range
   */


  RangeCache.prototype.save = function () {
    var current = rangeToObject(this.rangeHandle);

    _super.prototype.save.call(this, [this.lastRange, current]);

    this.lastRange = current;
    return this;
  };
  /**
   * 设置 Range，在 撤销/恢复 中调用
   * @param range 缓存的 Range 数据
   */


  RangeCache.prototype.set = function (range) {
    if (range) {
      var handle = this.rangeHandle;
      handle.setStart.apply(handle, range.start);
      handle.setEnd.apply(handle, range.end);
      this.editor.menus.changeActive();
      return true;
    }

    return false;
  };
  /**
   * 撤销
   */


  RangeCache.prototype.revoke = function () {
    var _this = this;

    return _super.prototype.revoke.call(this, function (data) {
      _this.set(data[0]);
    });
  };
  /**
   * 恢复
   */


  RangeCache.prototype.restore = function () {
    var _this = this;

    return _super.prototype.restore.call(this, function (data) {
      _this.set(data[1]);
    });
  };

  return RangeCache;
}(cache_1["default"]);

exports["default"] = RangeCache;

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _find = _interopRequireDefault(__webpack_require__(54));

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

var dom_core_1 = __importDefault(__webpack_require__(2));

__webpack_require__(396);

function disableInit(editor) {
  var isCurtain = false; // 避免重复生成幕布

  var $contentDom;
  var $menuDom; // 禁用期间，通过 js 修改内容后，刷新内容

  editor.txt.eventHooks.changeEvents.push(function () {
    if (isCurtain) {
      (0, _find["default"])($contentDom).call($contentDom, '.w-e-content-preview').html(editor.$textElem.html());
    }
  }); // 创建幕布

  function disable() {
    if (isCurtain) return; // 隐藏编辑区域

    editor.$textElem.hide(); // 生成div 渲染编辑内容

    var textContainerZindexValue = editor.zIndex.get('textContainer');
    var content = editor.txt.html();
    $contentDom = dom_core_1["default"]("<div class=\"w-e-content-mantle\" style=\"z-index:" + textContainerZindexValue + "\">\n                <div class=\"w-e-content-preview w-e-text\">" + content + "</div>\n            </div>");
    editor.$textContainerElem.append($contentDom); // 生成div 菜单膜布

    var menuZindexValue = editor.zIndex.get('menu');
    $menuDom = dom_core_1["default"]("<div class=\"w-e-menue-mantle\" style=\"z-index:" + menuZindexValue + "\"></div>");
    editor.$toolbarElem.append($menuDom);
    isCurtain = true;
  } // 销毁幕布并显示可编辑区域


  function enable() {
    if (!isCurtain) return;
    $contentDom.remove();
    $menuDom.remove();
    editor.$textElem.show();
    isCurtain = false;
  }

  return {
    disable: disable,
    enable: enable
  };
}

exports["default"] = disableInit;

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(19);
            var content = __webpack_require__(397);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(20);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".w-e-content-mantle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.w-e-content-mantle .w-e-content-preview {\n  width: 100%;\n  min-height: 100%;\n  padding: 0 10px;\n  line-height: 1.5;\n}\n.w-e-content-mantle .w-e-content-preview img {\n  cursor: default;\n}\n.w-e-content-mantle .w-e-content-preview img:hover {\n  box-shadow: none;\n}\n.w-e-menue-mantle {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

(0, _defineProperty["default"])(exports, "__esModule", {
  value: true
});

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=wangEditor.js.map

/***/ })

}]);
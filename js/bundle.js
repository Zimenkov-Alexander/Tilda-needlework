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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal-form */ "./src/js/modules/modal-form.js");
/* harmony import */ var _modules_modal_thank_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal-thank-window */ "./src/js/modules/modal-thank-window.js");





window.addEventListener('DOMContentLoaded', () => {
	Object(_modules_modal_form__WEBPACK_IMPORTED_MODULE_0__["default"])('.modal--form','.close__modal', '.btn');
	Object(_modules_modal_thank_window__WEBPACK_IMPORTED_MODULE_1__["default"])('.modal--thank-window', '.btn--form-modal');
});

/***/ }),

/***/ "./src/js/modules/modal-form.js":
/*!**************************************!*\
  !*** ./src/js/modules/modal-form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function modalForm (modalWindow, modalClose, ...btnsOpenSelectors) {

	btnsOpenSelectors.forEach(item => {
		document.querySelectorAll(item).forEach(btn => {
			btn.addEventListener('click', (evt) => {
				if (btn.classList.contains('btn--form-modal')){
					evt.preventDefault();
				} else{
					evt.preventDefault();
					showModal();
				}
			});
		});
	});

	const modal = document.querySelector(modalWindow),
				closeBtn = document.querySelector(modalClose);

	closeBtn.addEventListener('click', hideModal);

	function showModal(){
		modal.classList.remove('hide');
		modal.classList.add('show');
	}
	function hideModal(){
		modal.classList.add('hide');
		modal.classList.remove('show');
	}

	document.addEventListener('keydown', (evt) =>{
		if (evt.code === 'Escape' && modal.classList.contains('show')){
			hideModal();
		}
	});
}
/* harmony default export */ __webpack_exports__["default"] = (modalForm);

/***/ }),

/***/ "./src/js/modules/modal-thank-window.js":
/*!**********************************************!*\
  !*** ./src/js/modules/modal-thank-window.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function modalThankWindow (modalWindow, modalOpenBtn) {

	const modal = document.querySelector(modalWindow),
				OpenBtn = document.querySelector(modalOpenBtn);

	OpenBtn.addEventListener('click', showModal);

	function showModal(){
		modal.classList.remove('hide');
		modal.classList.add('show');
		document.querySelector('.modal--form').classList.remove('show');
		document.querySelector('.modal--form').classList.add('hide');
		setTimeout(hideModal, 2000);
	}
	function hideModal(){
		modal.classList.remove('show');
		modal.classList.add('hide');
	}

	document.addEventListener('keydown', (evt) =>{
		if (evt.code === 'Escape' && modal.classList.contains('show')){
			hideModal();
		}
	});
}

/* harmony default export */ __webpack_exports__["default"] = (modalThankWindow);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map